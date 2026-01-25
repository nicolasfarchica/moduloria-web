import { NextRequest, NextResponse } from 'next/server';
import { createNotionLead, AuditoriaFormData } from '@/lib/notion';
import { sendConfirmacionAuditoria, sendNotificacionNuevoLead } from '@/lib/email';

// Note: Using Node.js runtime for Notion SDK compatibility
export const runtime = 'nodejs';

// Rate limiting map (in production, use Redis or similar)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const limit = rateLimitMap.get(ip);

  if (!limit || now > limit.resetTime) {
    rateLimitMap.set(ip, {
      count: 1,
      resetTime: now + 60 * 60 * 1000, // 1 hour
    });
    return true;
  }

  if (limit.count >= 20) {
    return false;
  }

  limit.count += 1;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Demasiadas solicitudes. Por favor, intenta de nuevo más tarde.' },
        { status: 429 }
      );
    }

    // Parse request body
    const body: AuditoriaFormData = await request.json();

    // Validate required fields
    const requiredFields: (keyof AuditoriaFormData)[] = [
      'nombre',
      'empresa',
      'email',
      'telefono',
      'empleados',
    ];

    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `El campo ${field} es requerido` },
          { status: 400 }
        );
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Formato de email inválido' },
        { status: 400 }
      );
    }

    // Create lead in Notion
    const result = await createNotionLead(body);

    // Send emails (non-blocking - don't fail if email fails)
    try {
      // Email de confirmación al cliente
      await sendConfirmacionAuditoria(body);

      // Notificación al equipo
      await sendNotificacionNuevoLead(body);
    } catch (emailError) {
      // Log pero no fallar - el lead ya está guardado en Notion
      if (process.env.NODE_ENV === 'development') {
        console.error('Error enviando emails:', emailError);
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Solicitud recibida correctamente',
      pageId: result.pageId,
    });
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('Error processing auditoria request:', error);
      console.error('Error details:', {
        message: error instanceof Error ? error.message : 'Unknown error',
        stack: error instanceof Error ? error.stack : undefined,
      });
    }

    return NextResponse.json(
      {
        error: 'Error al procesar la solicitud. Por favor, contacta directamente por WhatsApp.',
        whatsapp: 'https://wa.me/4552801394',
        debug: process.env.NODE_ENV === 'development' ? {
          message: error instanceof Error ? error.message : 'Unknown error',
        } : undefined,
      },
      { status: 500 }
    );
  }
}

// Handle OPTIONS for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
