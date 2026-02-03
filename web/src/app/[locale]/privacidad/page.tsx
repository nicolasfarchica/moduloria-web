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
      ? 'Política de Privacidad | ModulorIA'
      : 'Privacy Policy | ModulorIA',
    description: isSpanish
      ? 'Política de privacidad y protección de datos de ModulorIA. Cumplimiento GDPR y transparencia total en el manejo de información.'
      : "ModulorIA's privacy and data protection policy. GDPR compliance and full transparency in information handling.",
    alternates: {
      canonical: `${baseUrl}/${locale}/${isSpanish ? 'privacidad' : 'privacy'}`,
      languages: {
        es: `${baseUrl}/es/privacidad`,
        en: `${baseUrl}/en/privacy`,
      },
    },
  };
}

export default async function PrivacidadPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const isSpanish = locale === 'es';

  const content = isSpanish ? {
    title: 'Política de Privacidad',
    sections: [
      {
        title: '1. Información que Recopilamos',
        text: 'En ModulorIA recopilamos información que nos proporcionas directamente cuando:',
        items: [
          'Solicitas un diagnóstico estratégico',
          'Te pones en contacto con nosotros',
          'Te suscribes a nuestro boletín',
          'Utilizas nuestros servicios'
        ]
      },
      {
        title: '2. Uso de la Información',
        text: 'Utilizamos la información recopilada para:',
        items: [
          'Proporcionar y mejorar nuestros servicios',
          'Responder a tus consultas y solicitudes',
          'Enviarte información relevante sobre nuestros servicios',
          'Cumplir con obligaciones legales'
        ]
      },
      {
        title: '3. Protección de Datos',
        text: 'Implementamos medidas de seguridad apropiadas para proteger tu información personal contra acceso no autorizado, alteración, divulgación o destrucción. Cumplimos con el Reglamento General de Protección de Datos (GDPR) de la Unión Europea.'
      },
      {
        title: '4. Tus Derechos',
        text: 'Tienes derecho a:',
        items: [
          'Acceder a tus datos personales',
          'Rectificar datos inexactos',
          'Solicitar la eliminación de tus datos',
          'Oponerte al procesamiento de tus datos',
          'Solicitar la portabilidad de tus datos'
        ]
      },
      {
        title: '5. Cookies',
        text: 'Utilizamos cookies para mejorar tu experiencia en nuestro sitio web. Puedes configurar tu navegador para rechazar cookies, aunque esto puede afectar la funcionalidad del sitio.'
      },
      {
        title: '6. Contacto',
        text: 'Si tienes preguntas sobre esta política de privacidad, contáctanos en:'
      }
    ],
    lastUpdated: 'Última actualización: Diciembre 2024'
  } : {
    title: 'Privacy Policy',
    sections: [
      {
        title: '1. Information We Collect',
        text: 'At ModulorIA, we collect information you provide directly when you:',
        items: [
          'Request a strategic assessment',
          'Contact us',
          'Subscribe to our newsletter',
          'Use our services'
        ]
      },
      {
        title: '2. Use of Information',
        text: 'We use the collected information to:',
        items: [
          'Provide and improve our services',
          'Respond to your inquiries and requests',
          'Send you relevant information about our services',
          'Comply with legal obligations'
        ]
      },
      {
        title: '3. Data Protection',
        text: 'We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. We comply with the European Union\'s General Data Protection Regulation (GDPR).'
      },
      {
        title: '4. Your Rights',
        text: 'You have the right to:',
        items: [
          'Access your personal data',
          'Rectify inaccurate data',
          'Request deletion of your data',
          'Object to the processing of your data',
          'Request data portability'
        ]
      },
      {
        title: '5. Cookies',
        text: 'We use cookies to improve your experience on our website. You can configure your browser to reject cookies, although this may affect site functionality.'
      },
      {
        title: '6. Contact',
        text: 'If you have questions about this privacy policy, contact us at:'
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
