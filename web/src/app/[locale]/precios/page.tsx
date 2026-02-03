import { setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import PreciosSection from '@/components/PreciosSection';

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
      ? 'Planes y Opciones de IA en Construcción Modular | ModulorIA'
      : 'AI Plans and Options for Modular Construction | ModulorIA',
    description: isSpanish
      ? 'Opciones flexibles de automatización en construcción modular con IA. Desde diagnóstico estratégico hasta implementación completa. ROI en 2-8 semanas. Sin contratos eternos.'
      : 'Flexible AI automation options for modular construction. From strategic assessment to full implementation. ROI in 2-8 weeks. No eternal contracts.',
    keywords: isSpanish
      ? 'planes IA construcción modular, automatización construcción opciones, soluciones IA construcción, inversión automatización construcción modular'
      : 'AI plans modular construction, construction automation options, AI construction solutions, modular construction automation investment',
    alternates: {
      canonical: `${baseUrl}/${locale}/${isSpanish ? 'precios' : 'pricing'}`,
      languages: {
        es: `${baseUrl}/es/precios`,
        en: `${baseUrl}/en/pricing`,
      },
    },
    openGraph: {
      title: isSpanish
        ? 'Planes y Opciones de IA en Construcción Modular | ModulorIA'
        : 'AI Plans and Options for Modular Construction | ModulorIA',
      description: isSpanish
        ? 'Implementa automatización en construcción modular con planes flexibles. Precios transparentes adaptados a tu empresa, sin letra pequeña, ROI garantizado.'
        : 'Implement modular construction automation with flexible plans. Transparent pricing adapted to your company, no fine print, guaranteed ROI.',
      url: `${baseUrl}/${locale}/${isSpanish ? 'precios' : 'pricing'}`,
      siteName: 'ModulorIA',
      images: [
        {
          url: `${baseUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: isSpanish
            ? 'ModulorIA - Planes de IA para Construcción Modular'
            : 'ModulorIA - AI Plans for Modular Construction',
        },
      ],
      locale: isSpanish ? 'es_ES' : 'en_US',
      type: 'website',
    },
  };
}

export default async function PreciosPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="min-h-screen bg-background-start overflow-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-copper/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-primary/5 rounded-full blur-[100px]" />
      </div>
      <div className="relative z-10">
        <PreciosSection />
      </div>
    </main>
  );
}
