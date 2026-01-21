import { NextRequest, NextResponse } from 'next/server';
import { createNewsletterSubscription } from '@/lib/notion';
import { sendNewsletterWelcome } from '@/lib/email';

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

  if (limit.count >= 10) {
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
        { error: 'Demasiadas solicitudes. Por favor, intenta de nuevo mas tarde.' },
        { status: 429 }
      );
    }

    // Parse request body
    const body = await request.json();
    const { email, nombre } = body;

    // Validate email
    if (!email) {
      return NextResponse.json(
        { error: 'El email es requerido' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Formato de email invalido' },
        { status: 400 }
      );
    }

    // Create subscription in Notion
    const result = await createNewsletterSubscription({
      email,
      nombre: nombre || undefined,
      source: 'Web - Newsletter',
    });

    // Send welcome email (non-blocking - don't fail if email fails)
    try {
      await sendNewsletterWelcome(email, nombre);
      console.log('Email de bienvenida enviado a:', email);
    } catch (emailError) {
      // Log but don't fail - the subscription is already saved in Notion
      console.error('Error enviando email de bienvenida:', emailError);
    }

    return NextResponse.json({
      success: true,
      message: 'Suscripcion completada correctamente',
      pageId: result.pageId,
    });
  } catch (error) {
    console.error('Error processing newsletter subscription:', error);

    return NextResponse.json(
      {
        error: 'Error al procesar la suscripcion. Por favor, intenta de nuevo.',
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
