import { routing } from '@/i18n/routing';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const isSpanish = locale === 'es';
  const baseUrl = 'https://moduloria.com';

  return {
    title: isSpanish
      ? 'Diagnóstico Estratégico Gratuito | ModulorIA'
      : 'Free Strategic Assessment | ModulorIA',
    description: isSpanish
      ? 'Solicita tu diagnóstico estratégico gratuito de 30 minutos. Descubre exactamente cuánto puedes ahorrar automatizando tu empresa de construcción modular con IA.'
      : 'Request your free 30-minute strategic assessment. Discover exactly how much you can save by automating your modular construction company with AI.',
    keywords: isSpanish
      ? 'auditoría gratis IA construcción, diagnóstico automatización construcción, consultoría IA constructoras, evaluación procesos construcción modular'
      : 'free AI construction audit, construction automation assessment, AI consulting for builders, modular construction process evaluation',
    alternates: {
      canonical: `${baseUrl}/${locale}/${isSpanish ? 'auditoria' : 'audit'}`,
      languages: {
        es: `${baseUrl}/es/auditoria`,
        en: `${baseUrl}/en/audit`,
      },
    },
    openGraph: {
      title: isSpanish
        ? 'Diagnóstico Estratégico Gratuito | ModulorIA'
        : 'Free Strategic Assessment | ModulorIA',
      description: isSpanish
        ? '30 minutos de valor puro. Identificamos oportunidades de automatización con ROI calculado para tu constructora.'
        : '30 minutes of pure value. We identify automation opportunities with calculated ROI for your construction company.',
      url: `${baseUrl}/${locale}/${isSpanish ? 'auditoria' : 'audit'}`,
      siteName: 'ModulorIA',
      images: [
        {
          url: `${baseUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: isSpanish
            ? 'ModulorIA - Diagnóstico Estratégico Gratuito'
            : 'ModulorIA - Free Strategic Assessment',
        },
      ],
      locale: isSpanish ? 'es_ES' : 'en_US',
      type: 'website',
    },
  };
}

export default function AuditoriaLayout({ children }: Props) {
  return <>{children}</>;
}
