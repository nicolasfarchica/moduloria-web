import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export interface AuditoriaEmailData {
  nombre: string;
  empresa: string;
  email: string;
  telefono: string;
  empleados: string;
  proyectosActivos: string;
  mayorProblema: string;
  presupuesto?: string;
}

/**
 * Envía email de confirmación al cliente cuando solicita auditoría
 */
export async function sendConfirmacionAuditoria(data: AuditoriaEmailData) {
  const { nombre, empresa, email } = data;
  const primerNombre = nombre.split(' ')[0];

  const htmlContent = `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #0a0a0a;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #0a0a0a; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); border-radius: 16px; overflow: hidden; box-shadow: 0 20px 60px rgba(0,0,0,0.5);">

          <!-- Header -->
          <tr>
            <td style="padding: 40px 40px 20px; text-align: center; border-bottom: 1px solid rgba(255,255,255,0.1);">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700;">
                Modulor<span style="color: #c9a56c;">IA</span>
              </h1>
              <p style="margin: 8px 0 0; color: #8892b0; font-size: 14px;">
                Automatización Inteligente para Construcción
              </p>
            </td>
          </tr>

          <!-- Main Content -->
          <tr>
            <td style="padding: 40px;">

              <!-- Greeting -->
              <h2 style="margin: 0 0 20px; color: #ffffff; font-size: 24px; font-weight: 600;">
                Hola ${primerNombre},
              </h2>

              <p style="margin: 0 0 24px; color: #ccd6f6; font-size: 16px; line-height: 1.7;">
                Gracias por confiar en <strong style="color: #c9a56c;">ModulorIA</strong> para optimizar los procesos de <strong style="color: #ffffff;">${empresa}</strong>.
              </p>

              <p style="margin: 0 0 24px; color: #ccd6f6; font-size: 16px; line-height: 1.7;">
                Hemos recibido tu solicitud de auditoría y <strong style="color: #ffffff;">nos pondremos en contacto contigo en las próximas 24 horas</strong> para agendar nuestra sesión de diagnóstico.
              </p>

              <!-- Highlight Box -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin: 32px 0;">
                <tr>
                  <td style="background: rgba(201, 165, 108, 0.1); border-left: 4px solid #c9a56c; padding: 24px; border-radius: 0 12px 12px 0;">
                    <p style="margin: 0 0 12px; color: #c9a56c; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">
                      Qué esperar en tu auditoría
                    </p>
                    <ul style="margin: 0; padding-left: 20px; color: #ccd6f6; font-size: 15px; line-height: 1.8;">
                      <li>Análisis de 3-5 oportunidades de automatización específicas para tu empresa</li>
                      <li>Cálculo de ROI con tus números reales</li>
                      <li>Propuesta de Quick Win implementable en menos de 1 semana</li>
                      <li>Sin compromiso, sin ventas agresivas</li>
                    </ul>
                  </td>
                </tr>
              </table>

              <p style="margin: 0 0 24px; color: #ccd6f6; font-size: 16px; line-height: 1.7;">
                Mientras tanto, si tienes alguna pregunta urgente, puedes responder directamente a este email o escribirnos por WhatsApp.
              </p>

              <!-- CTA Button -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin: 32px 0;">
                <tr>
                  <td align="center">
                    <a href="https://wa.me/4552801394?text=Hola%20Nicolás,%20acabo%20de%20solicitar%20una%20auditoría%20para%20${encodeURIComponent(empresa)}"
                       style="display: inline-block; background: linear-gradient(135deg, #25D366 0%, #128C7E 100%); color: #ffffff; text-decoration: none; padding: 16px 32px; border-radius: 8px; font-weight: 600; font-size: 16px;">
                      Enviar WhatsApp
                    </a>
                  </td>
                </tr>
              </table>

              <!-- Signature -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-top: 40px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 24px;">
                <tr>
                  <td>
                    <p style="margin: 0 0 8px; color: #ffffff; font-size: 16px; font-weight: 600;">
                      Nicolás Farchica
                    </p>
                    <p style="margin: 0; color: #8892b0; font-size: 14px;">
                      Fundador, ModulorIA
                    </p>
                    <p style="margin: 8px 0 0; color: #8892b0; font-size: 13px;">
                      Especialista en Automatización para Construcción Modular
                    </p>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 24px 40px; background: rgba(0,0,0,0.3); text-align: center;">
              <p style="margin: 0 0 8px; color: #8892b0; font-size: 13px;">
                ModulorIA - Automatización Inteligente para PYMES de Construcción
              </p>
              <p style="margin: 0; color: #5a6380; font-size: 12px;">
                <a href="https://moduloria.com" style="color: #c9a56c; text-decoration: none;">moduloria.com</a>
                &nbsp;|&nbsp;
                <a href="mailto:hola@moduloria.com" style="color: #c9a56c; text-decoration: none;">hola@moduloria.com</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;

  const result = await resend.emails.send({
    from: 'ModulorIA <hola@moduloria.com>',
    to: [email],
    subject: `${primerNombre}, recibimos tu solicitud de auditoría`,
    html: htmlContent,
    replyTo: 'hola@moduloria.com',
  });

  return result;
}

/**
 * Envía notificación al equipo cuando llega un nuevo lead
 */
export async function sendNotificacionNuevoLead(data: AuditoriaEmailData) {
  const { nombre, empresa, email, telefono, empleados, proyectosActivos, mayorProblema, presupuesto } = data;

  const htmlContent = `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
</head>
<body style="margin: 0; padding: 20px; font-family: Arial, sans-serif; background-color: #f5f5f5;">
  <table width="600" cellpadding="0" cellspacing="0" style="background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">

    <!-- Header -->
    <tr>
      <td style="padding: 20px; background: linear-gradient(135deg, #c9a56c 0%, #a08050 100%); text-align: center;">
        <h1 style="margin: 0; color: #ffffff; font-size: 20px;">
          Nuevo Lead de Auditoría
        </h1>
      </td>
    </tr>

    <!-- Content -->
    <tr>
      <td style="padding: 24px;">

        <table width="100%" cellpadding="8" cellspacing="0" style="font-size: 14px;">
          <tr>
            <td style="color: #666; width: 140px; vertical-align: top;"><strong>Nombre:</strong></td>
            <td style="color: #333;">${nombre}</td>
          </tr>
          <tr style="background: #f9f9f9;">
            <td style="color: #666; vertical-align: top;"><strong>Empresa:</strong></td>
            <td style="color: #333; font-weight: bold;">${empresa}</td>
          </tr>
          <tr>
            <td style="color: #666; vertical-align: top;"><strong>Email:</strong></td>
            <td><a href="mailto:${email}" style="color: #c9a56c;">${email}</a></td>
          </tr>
          <tr style="background: #f9f9f9;">
            <td style="color: #666; vertical-align: top;"><strong>Teléfono:</strong></td>
            <td><a href="tel:${telefono}" style="color: #c9a56c;">${telefono}</a></td>
          </tr>
          <tr>
            <td style="color: #666; vertical-align: top;"><strong>Empleados:</strong></td>
            <td style="color: #333;">${empleados}</td>
          </tr>
          <tr style="background: #f9f9f9;">
            <td style="color: #666; vertical-align: top;"><strong>Proyectos activos:</strong></td>
            <td style="color: #333;">${proyectosActivos}</td>
          </tr>
          <tr>
            <td style="color: #666; vertical-align: top;"><strong>Presupuesto:</strong></td>
            <td style="color: #333;">${presupuesto || 'No especificado'}</td>
          </tr>
          <tr style="background: #fff3cd;">
            <td style="color: #666; vertical-align: top;"><strong>Mayor problema:</strong></td>
            <td style="color: #333;">${mayorProblema}</td>
          </tr>
        </table>

        <!-- Action Buttons -->
        <table width="100%" cellpadding="0" cellspacing="0" style="margin-top: 24px;">
          <tr>
            <td align="center">
              <a href="https://wa.me/${telefono.replace(/[^0-9]/g, '')}?text=Hola%20${encodeURIComponent(nombre)},%20soy%20Nicolás%20de%20ModulorIA.%20Recibimos%20tu%20solicitud%20de%20auditoría%20para%20${encodeURIComponent(empresa)}."
                 style="display: inline-block; background: #25D366; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 6px; font-weight: bold; margin-right: 8px;">
                WhatsApp
              </a>
              <a href="mailto:${email}?subject=Auditoría%20ModulorIA%20-%20${encodeURIComponent(empresa)}"
                 style="display: inline-block; background: #c9a56c; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 6px; font-weight: bold;">
                Responder Email
              </a>
            </td>
          </tr>
        </table>

      </td>
    </tr>

    <!-- Footer -->
    <tr>
      <td style="padding: 16px; background: #f5f5f5; text-align: center; font-size: 12px; color: #999;">
        Notificación automática de ModulorIA
      </td>
    </tr>

  </table>
</body>
</html>
  `;

  const result = await resend.emails.send({
    from: 'Sistema ModulorIA <notificaciones@moduloria.com>',
    to: ['nicolasfarchica@gmail.com'],
    subject: `🔔 Nuevo Lead: ${empresa} - ${empleados} empleados`,
    html: htmlContent,
  });

  return result;
}
