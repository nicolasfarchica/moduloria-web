import { setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const isSpanish = locale === 'es';
  const baseUrl = 'https://moduloria.com';

  return {
    title: isSpanish
      ? 'Términos de Uso | ModulorIA'
      : 'Terms of Use | ModulorIA',
    description: isSpanish
      ? 'Términos y condiciones de uso de los servicios de ModulorIA. Garantía de ROI y condiciones transparentes.'
      : 'Terms and conditions for using ModulorIA services. ROI guarantee and transparent conditions.',
    alternates: {
      canonical: `${baseUrl}/${locale}/${isSpanish ? 'terminos' : 'terms'}`,
      languages: {
        es: `${baseUrl}/es/terminos`,
        en: `${baseUrl}/en/terms`,
      },
    },
  };
}

export default async function TerminosPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const isSpanish = locale === 'es';

  const content = isSpanish ? {
    title: 'Términos de Uso',
    sections: [
      {
        title: '1. Aceptación de Términos',
        text: 'Al acceder y utilizar los servicios de ModulorIA, aceptas estar sujeto a estos términos de uso. Si no estás de acuerdo con alguno de estos términos, no debes utilizar nuestros servicios.'
      },
      {
        title: '2. Servicios Ofrecidos',
        text: 'ModulorIA proporciona servicios de automatización con inteligencia artificial para la industria de la construcción modular, incluyendo:',
        items: [
          'Diagnóstico estratégico de procesos',
          'Implementación de automatizaciones con IA',
          'Capacitación y soporte técnico',
          'Consultoría en transformación digital'
        ]
      },
      {
        title: '3. Uso Apropiado',
        text: 'Te comprometes a:',
        items: [
          'Utilizar nuestros servicios de manera legal y apropiada',
          'No interferir con el funcionamiento de nuestros servicios',
          'Proporcionar información veraz y actualizada',
          'Mantener la confidencialidad de tus credenciales de acceso'
        ]
      },
      {
        title: '4. Propiedad Intelectual',
        text: 'Todo el contenido, software, y materiales proporcionados por ModulorIA son propiedad de ModulorIA o sus licenciantes. Las automatizaciones desarrolladas específicamente para tu empresa son de tu propiedad una vez completado el pago.'
      },
      {
        title: '5. Limitación de Responsabilidad',
        text: 'ModulorIA no será responsable de daños indirectos, incidentales o consecuentes que surjan del uso de nuestros servicios. Nuestra responsabilidad máxima se limita al monto pagado por los servicios.'
      },
      {
        title: '6. Garantía de ROI',
        text: 'Ofrecemos una garantía de ROI como se describe en nuestros paquetes de servicio. Si no alcanzas el ROI proyectado en 3 meses, realizaremos sesiones de optimización adicionales sin costo, sujeto a los términos específicos del servicio contratado.'
      },
      {
        title: '7. Modificaciones',
        text: 'Nos reservamos el derecho de modificar estos términos en cualquier momento. Las modificaciones entrarán en vigor inmediatamente después de su publicación en nuestro sitio web.'
      },
      {
        title: '8. Contacto',
        text: 'Para preguntas sobre estos términos, contáctanos en:'
      }
    ],
    lastUpdated: 'Última actualización: Diciembre 2024'
  } : {
    title: 'Terms of Use',
    sections: [
      {
        title: '1. Acceptance of Terms',
        text: 'By accessing and using ModulorIA services, you agree to be bound by these terms of use. If you do not agree with any of these terms, you should not use our services.'
      },
      {
        title: '2. Services Offered',
        text: 'ModulorIA provides artificial intelligence automation services for the modular construction industry, including:',
        items: [
          'Strategic process assessment',
          'Implementation of AI automations',
          'Training and technical support',
          'Digital transformation consulting'
        ]
      },
      {
        title: '3. Appropriate Use',
        text: 'You agree to:',
        items: [
          'Use our services legally and appropriately',
          'Not interfere with the operation of our services',
          'Provide truthful and updated information',
          'Maintain the confidentiality of your access credentials'
        ]
      },
      {
        title: '4. Intellectual Property',
        text: 'All content, software, and materials provided by ModulorIA are the property of ModulorIA or its licensors. Automations developed specifically for your company become your property once payment is completed.'
      },
      {
        title: '5. Limitation of Liability',
        text: 'ModulorIA shall not be liable for indirect, incidental, or consequential damages arising from the use of our services. Our maximum liability is limited to the amount paid for the services.'
      },
      {
        title: '6. ROI Guarantee',
        text: 'We offer an ROI guarantee as described in our service packages. If you do not achieve the projected ROI within 3 months, we will provide additional optimization sessions at no cost, subject to the specific terms of the contracted service.'
      },
      {
        title: '7. Modifications',
        text: 'We reserve the right to modify these terms at any time. Modifications will take effect immediately upon publication on our website.'
      },
      {
        title: '8. Contact',
        text: 'For questions about these terms, contact us at:'
      }
    ],
    lastUpdated: 'Last updated: December 2024'
  };

  return (
    <main className="min-h-screen bg-background-start">
      <div className="container-custom section-padding">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 font-heading">
            {content.title}
          </h1>

          <div className="prose prose-invert max-w-none">
            {content.sections.map((section, index) => (
              <div key={index} className="glass-card mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">{section.title}</h2>
                <p className="text-slate-300 leading-relaxed mb-4">
                  {section.text}
                </p>
                {section.items && (
                  <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                    {section.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
                {index === content.sections.length - 1 && (
                  <p className="text-accent-copper mt-2">
                    contacto@moduloria.com
                  </p>
                )}
              </div>
            ))}

            <div className="mt-8 text-center text-slate-500 text-sm">
              <p>{content.lastUpdated}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
