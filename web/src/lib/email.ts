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
 * Escapa caracteres HTML para prevenir XSS en emails
 */
function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

/**
 * Envía email de confirmación al cliente cuando solicita auditoría
 */
export async function sendConfirmacionAuditoria(data: AuditoriaEmailData) {
  const { nombre, empresa, email } = data;
  const primerNombre = escapeHtml(nombre.split(' ')[0]);
  const empresaSafe = escapeHtml(empresa);

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

          <!-- Header with Logo -->
          <tr>
            <td style="padding: 40px 40px 30px; text-align: center;">
              <img src="https://moduloria.com/images/moduloria-logo-v2.png" alt="ModulorIA" width="50" height="50" style="display: inline-block; vertical-align: middle;" />
              <span style="display: inline-block; vertical-align: middle; margin-left: 12px; color: #ffffff; font-size: 28px; font-weight: 700;">
                Modulor<span style="color: #c9a56c;">IA</span>
              </span>
            </td>
          </tr>

          <!-- Main Content -->
          <tr>
            <td style="padding: 0 40px 40px;">

              <!-- Greeting -->
              <h2 style="margin: 0 0 24px; color: #ffffff; font-size: 26px; font-weight: 700;">
                Hola ${primerNombre},
              </h2>

              <p style="margin: 0 0 20px; color: #ccd6f6; font-size: 16px; line-height: 1.7;">
                Soy <strong style="color: #ffffff;">Nicolás</strong>. Gracias por confiar en <strong style="color: #c9a56c;">ModulorIA</strong> para optimizar <strong style="color: #ffffff;">${empresaSafe}</strong>.
              </p>

              <p style="margin: 0 0 28px; color: #ccd6f6; font-size: 16px; line-height: 1.7;">
                Hemos recibido tu solicitud y nos pondremos en contacto contigo en las próximas <strong style="color: #ffffff;">24 horas</strong> para agendar nuestra sesión de diagnóstico.
              </p>

              <!-- Highlight Box -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin: 0 0 28px;">
                <tr>
                  <td style="background: rgba(30, 35, 50, 0.8); border: 1px solid rgba(255,255,255,0.1); padding: 24px; border-radius: 12px;">
                    <p style="margin: 0 0 16px; color: #c9a56c; font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">
                      Qué lograremos en tu auditoría:
                    </p>
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding: 8px 0; color: #ccd6f6; font-size: 15px; line-height: 1.6;">
                          <span style="color: #22c55e; margin-right: 8px;">✓</span>
                          <strong style="color: #ffffff;">Claridad total:</strong> 3-5 cuellos de botella identificados.
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; color: #ccd6f6; font-size: 15px; line-height: 1.6;">
                          <span style="margin-right: 8px;">💰</span>
                          <strong style="color: #ffffff;">ROI Real:</strong> Cálculo de ahorro con tus números.
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; color: #ccd6f6; font-size: 15px; line-height: 1.6;">
                          <span style="margin-right: 8px;">🚀</span>
                          <strong style="color: #ffffff;">Quick Win:</strong> Propuesta implementable en 1 semana.
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; color: #ccd6f6; font-size: 15px; line-height: 1.6;">
                          <span style="margin-right: 8px;">🎯</span>
                          <strong style="color: #ffffff;">Cero presión:</strong> Consultoría honesta, sin ventas.
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <p style="margin: 0 0 20px; color: #ccd6f6; font-size: 16px; line-height: 1.7;">
                Mientras analizamos tus datos, si tienes alguna duda urgente, estamos a un clic:
              </p>

              <!-- CTA Button -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin: 0 0 32px;">
                <tr>
                  <td align="center">
                    <a href="https://wa.me/4552801394?text=Hola,%20acabo%20de%20solicitar%20una%20auditoría%20para%20${encodeURIComponent(empresaSafe)}"
                       style="display: inline-block; background: #1a1a2e; border: 2px solid #c9a56c; color: #ffffff; text-decoration: none; padding: 16px 32px; border-radius: 8px; font-weight: 600; font-size: 16px;">
                      Hablar por WhatsApp con el equipo
                    </a>
                  </td>
                </tr>
              </table>

              <!-- Signature with Photo -->
              <table width="100%" cellpadding="0" cellspacing="0" style="border-top: 1px solid rgba(255,255,255,0.1); padding-top: 24px;">
                <tr>
                  <td width="70" style="vertical-align: top; padding-right: 16px;">
                    <img src="https://moduloria.com/images/nicolas-farchica-ceo.jpg" alt="Nicolás Farchica" width="60" height="60" style="border-radius: 50%; border: 2px solid #c9a56c;" />
                  </td>
                  <td style="vertical-align: middle;">
                    <p style="margin: 0 0 4px; color: #ffffff; font-size: 16px; font-weight: 600;">
                      Nicolás Farchica
                    </p>
                    <p style="margin: 0 0 2px; color: #8892b0; font-size: 14px;">
                      Fundador, ModulorIA
                    </p>
                    <p style="margin: 0; color: #8892b0; font-size: 13px;">
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
                <a href="mailto:consulta@moduloria.com" style="color: #c9a56c; text-decoration: none;">consulta@moduloria.com</a>
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

  // Sanitizar todos los datos del usuario
  const safe = {
    nombre: escapeHtml(nombre),
    empresa: escapeHtml(empresa),
    email: escapeHtml(email),
    telefono: escapeHtml(telefono),
    empleados: escapeHtml(empleados),
    proyectosActivos: escapeHtml(proyectosActivos),
    mayorProblema: escapeHtml(mayorProblema),
    presupuesto: escapeHtml(presupuesto || 'No especificado'),
  };

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
            <td style="color: #333;">${safe.nombre}</td>
          </tr>
          <tr style="background: #f9f9f9;">
            <td style="color: #666; vertical-align: top;"><strong>Empresa:</strong></td>
            <td style="color: #333; font-weight: bold;">${safe.empresa}</td>
          </tr>
          <tr>
            <td style="color: #666; vertical-align: top;"><strong>Email:</strong></td>
            <td><a href="mailto:${safe.email}" style="color: #c9a56c;">${safe.email}</a></td>
          </tr>
          <tr style="background: #f9f9f9;">
            <td style="color: #666; vertical-align: top;"><strong>Teléfono:</strong></td>
            <td><a href="tel:${safe.telefono}" style="color: #c9a56c;">${safe.telefono}</a></td>
          </tr>
          <tr>
            <td style="color: #666; vertical-align: top;"><strong>Empleados:</strong></td>
            <td style="color: #333;">${safe.empleados}</td>
          </tr>
          <tr style="background: #f9f9f9;">
            <td style="color: #666; vertical-align: top;"><strong>Proyectos activos:</strong></td>
            <td style="color: #333;">${safe.proyectosActivos}</td>
          </tr>
          <tr>
            <td style="color: #666; vertical-align: top;"><strong>Presupuesto:</strong></td>
            <td style="color: #333;">${safe.presupuesto}</td>
          </tr>
          <tr style="background: #fff3cd;">
            <td style="color: #666; vertical-align: top;"><strong>Mayor problema:</strong></td>
            <td style="color: #333;">${safe.mayorProblema}</td>
          </tr>
        </table>

        <!-- Action Buttons -->
        <table width="100%" cellpadding="0" cellspacing="0" style="margin-top: 24px;">
          <tr>
            <td align="center">
              <a href="https://wa.me/${telefono.replace(/[^0-9]/g, '')}?text=Hola%20${encodeURIComponent(safe.nombre)},%20soy%20Nicolás%20de%20ModulorIA.%20Recibimos%20tu%20solicitud%20de%20auditoría%20para%20${encodeURIComponent(safe.empresa)}."
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
    subject: `🔔 Nuevo Lead: ${safe.empresa} - ${safe.empleados} empleados`,
    html: htmlContent,
  });

  return result;
}

/**
 * Envia email de bienvenida al suscriptor del newsletter
 */
export async function sendNewsletterWelcome(email: string, nombre?: string) {
  const primerNombre = nombre ? escapeHtml(nombre.split(' ')[0]) : null;
  const saludo = primerNombre ? `Hola ${primerNombre}` : 'Hola';

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

          <!-- Header with Logo -->
          <tr>
            <td style="padding: 40px 40px 30px; text-align: center;">
              <img src="https://moduloria.com/images/moduloria-logo-v2.png" alt="ModulorIA" width="50" height="50" style="display: inline-block; vertical-align: middle;" />
              <span style="display: inline-block; vertical-align: middle; margin-left: 12px; color: #ffffff; font-size: 28px; font-weight: 700;">
                Modulor<span style="color: #c9a56c;">IA</span>
              </span>
            </td>
          </tr>

          <!-- Main Content -->
          <tr>
            <td style="padding: 0 40px 40px;">

              <!-- Greeting -->
              <h2 style="margin: 0 0 24px; color: #ffffff; font-size: 26px; font-weight: 700;">
                ${saludo}, bienvenido al Newsletter!
              </h2>

              <p style="margin: 0 0 20px; color: #ccd6f6; font-size: 16px; line-height: 1.7;">
                Gracias por suscribirte al newsletter de <strong style="color: #c9a56c;">ModulorIA</strong>. Ahora formas parte de una comunidad de profesionales de la construccion que quieren aprovechar la IA para trabajar mejor.
              </p>

              <p style="margin: 0 0 28px; color: #ccd6f6; font-size: 16px; line-height: 1.7;">
                Cada <strong style="color: #ffffff;">miercoles</strong> recibiras contenido exclusivo sobre IA y construccion modular directamente en tu bandeja de entrada.
              </p>

              <!-- Highlight Box -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin: 0 0 28px;">
                <tr>
                  <td style="background: rgba(30, 35, 50, 0.8); border: 1px solid rgba(255,255,255,0.1); padding: 24px; border-radius: 12px;">
                    <p style="margin: 0 0 16px; color: #c9a56c; font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">
                      Que puedes esperar:
                    </p>
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding: 8px 0; color: #ccd6f6; font-size: 15px; line-height: 1.6;">
                          <span style="margin-right: 8px;">🤖</span>
                          <strong style="color: #ffffff;">Novedades de IA:</strong> Herramientas y tecnicas aplicables hoy.
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; color: #ccd6f6; font-size: 15px; line-height: 1.6;">
                          <span style="margin-right: 8px;">🏗️</span>
                          <strong style="color: #ffffff;">Casos reales:</strong> Ejemplos de automatizacion en construccion.
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; color: #ccd6f6; font-size: 15px; line-height: 1.6;">
                          <span style="margin-right: 8px;">💡</span>
                          <strong style="color: #ffffff;">Tips practicos:</strong> Consejos que puedes implementar sin ser experto.
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; color: #ccd6f6; font-size: 15px; line-height: 1.6;">
                          <span style="margin-right: 8px;">📊</span>
                          <strong style="color: #ffffff;">Tendencias:</strong> Hacia donde va la industria y como prepararte.
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <p style="margin: 0 0 20px; color: #ccd6f6; font-size: 16px; line-height: 1.7;">
                Mientras tanto, si quieres saber exactamente cuanto puedes ahorrar automatizando tu empresa, puedes agendar una auditoria gratuita:
              </p>

              <!-- CTA Button -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin: 0 0 32px;">
                <tr>
                  <td align="center">
                    <a href="https://moduloria.com/auditoria"
                       style="display: inline-block; background: linear-gradient(135deg, #c9a56c 0%, #a08050 100%); color: #ffffff; text-decoration: none; padding: 16px 32px; border-radius: 8px; font-weight: 600; font-size: 16px;">
                      Solicitar Auditoria Gratis
                    </a>
                  </td>
                </tr>
              </table>

              <!-- Signature with Photo -->
              <table width="100%" cellpadding="0" cellspacing="0" style="border-top: 1px solid rgba(255,255,255,0.1); padding-top: 24px;">
                <tr>
                  <td width="70" style="vertical-align: top; padding-right: 16px;">
                    <img src="https://moduloria.com/images/nicolas-farchica-ceo.jpg" alt="Nicolas Farchica" width="60" height="60" style="border-radius: 50%; border: 2px solid #c9a56c;" />
                  </td>
                  <td style="vertical-align: middle;">
                    <p style="margin: 0 0 4px; color: #ffffff; font-size: 16px; font-weight: 600;">
                      Nicolas Farchica
                    </p>
                    <p style="margin: 0 0 2px; color: #8892b0; font-size: 14px;">
                      Fundador, ModulorIA
                    </p>
                    <p style="margin: 0; color: #8892b0; font-size: 13px;">
                      Especialista en Automatizacion para Construccion Modular
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
                ModulorIA - Automatizacion Inteligente para PYMES de Construccion
              </p>
              <p style="margin: 0; color: #5a6380; font-size: 12px;">
                <a href="https://moduloria.com" style="color: #c9a56c; text-decoration: none;">moduloria.com</a>
                &nbsp;|&nbsp;
                <a href="mailto:hola@moduloria.com" style="color: #c9a56c; text-decoration: none;">hola@moduloria.com</a>
              </p>
              <p style="margin: 12px 0 0; color: #5a6380; font-size: 11px;">
                Puedes darte de baja en cualquier momento respondiendo a este email.
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
    subject: 'Bienvenido al Newsletter de ModulorIA',
    html: htmlContent,
    replyTo: 'hola@moduloria.com',
  });

  return result;
}
