import { setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import NosotrosSection from '@/components/NosotrosSection';

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
      ? 'Sobre ModulorIA - Especialistas en IA para Construcción Modular'
      : 'About ModulorIA - AI Specialists for Modular Construction',
    description: isSpanish
      ? 'Somos especialistas en implementar IA práctica para empresas de construcción modular. No somos una consultora genérica. 100% enfocados en el sector construcción. ROI garantizado.'
      : 'We are specialists in implementing practical AI for modular construction companies. We are not a generic consultancy. 100% focused on the construction sector. Guaranteed ROI.',
    keywords: isSpanish
      ? 'sobre ModulorIA, quiénes somos, especialistas IA construcción modular, consultoría IA construcción, automatización construcción especializada'
      : 'about ModulorIA, who we are, AI specialists modular construction, AI construction consulting, specialized construction automation',
    alternates: {
      canonical: `${baseUrl}/${locale}/${isSpanish ? 'sobre-moduloria' : 'about'}`,
      languages: {
        es: `${baseUrl}/es/sobre-moduloria`,
        en: `${baseUrl}/en/about`,
      },
    },
    openGraph: {
      title: isSpanish
        ? 'Sobre ModulorIA - Especialistas en IA para Construcción'
        : 'About ModulorIA - AI Specialists for Construction',
      description: isSpanish
        ? 'Consultoría 100% enfocada en implementar IA práctica en empresas de construcción modular e industrializada.'
        : '100% focused consulting on implementing practical AI in modular and industrialized construction companies.',
      url: `${baseUrl}/${locale}/${isSpanish ? 'sobre-moduloria' : 'about'}`,
      siteName: 'ModulorIA',
      locale: isSpanish ? 'es_ES' : 'en_US',
      type: 'website',
    },
  };
}

export default async function SobreModuloriaPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="min-h-screen bg-background-start overflow-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-copper/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-primary/5 rounded-full blur-[100px]" />
      </div>
      <div className="relative z-10">
        <NosotrosSection />
      </div>
    </main>
  );
}
