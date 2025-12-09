
import HeroSection from '@/components/HeroSection';
import CalculadoraROI from '@/components/CalculadoraROI';
import ProblemasSection from '@/components/ProblemasSection';
import ComoFuncionaSection from '@/components/ComoFuncionaSection';
import DiferenciadoresSection from '@/components/DiferenciadoresSection';
import PreciosSection from '@/components/PreciosSection';
import FAQSection from '@/components/FAQSection';
import CTAFinalSection from '@/components/CTAFinalSection';

export const metadata = {
  title: 'ModulorIA | IA y Automatización para la Industria de la Construcción',
  description: 'Transformamos empresas de construcción con Inteligencia Artificial. Ahorra €67K-€156K/año automatizando procesos operativos. ROI en 2-3 semanas.',
  keywords: 'industria de la construcción, inteligencia artificial construcción, automatización obras, software construcción, construcción modular ia, gestión de proyectos construcción',
  openGraph: {
    title: 'ModulorIA | IA y Automatización para la Industria de la Construcción',
    description: 'Soluciones de IA para constructoras. Ahorra €67K-€156K/año automatizando procesos. ROI en 2-3 semanas.',
    url: 'https://moduloria.com',
    siteName: 'ModulorIA',
    images: [
      {
        url: 'https://moduloria.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ModulorIA - IA para la Industria de la Construcción',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ModulorIA | IA para Empresas de Construcción',
    description: 'Automatización inteligente para el sector construcción. Ahorra costes y tiempos.',
    images: ['https://moduloria.com/og-image.jpg'],
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background-start overflow-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-copper/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-primary/5 rounded-full blur-[100px]" />
      </div>
      <div className="relative z-10">
        <HeroSection />
        <CalculadoraROI />
        <ProblemasSection />
        <ComoFuncionaSection />
        <DiferenciadoresSection />
        <PreciosSection />
        <FAQSection />
        <CTAFinalSection />
      </div>
    </main>
  );
}
