
import HeroSection from '@/components/HeroSection';
import CalculadoraROI from '@/components/CalculadoraROI';
import NosotrosSection from '@/components/NosotrosSection';
import ProblemasSection from '@/components/ProblemasSection';
import ServiciosSection from '@/components/ServiciosSection';
import ComoFuncionaSection from '@/components/ComoFuncionaSection';
import DiferenciadoresSection from '@/components/DiferenciadoresSection';
import PreciosSection from '@/components/PreciosSection';
import RecursosSection from '@/components/RecursosSection';
import FAQSection from '@/components/FAQSection';
import CTAFinalSection from '@/components/CTAFinalSection';

export const metadata = {
    title: 'ModulorIA | IA en Construcción Modular - Automatización Inteligente',
    description: 'IA para la construcción modular. Automatización en construcción que ahorra €67K-€156K/año. Implementamos IA práctica en empresas constructoras. ROI en 2-3 semanas.',
    keywords: 'IA en construcción modular, IA para la construcción modular, automatización en construcción modular, cómo implementar IA en construcción modular, inteligencia artificial construcción, automatización construcción, software construcción modular, construcción industrializada',
    openGraph: {
        title: 'ModulorIA | IA en Construcción Modular - Automatización Inteligente',
        description: 'Implementamos IA práctica en empresas de construcción modular. Ahorra €67K-€156K/año con automatización inteligente. ROI en 2-3 semanas.',
        url: 'https://moduloria.com',
        siteName: 'ModulorIA',
        images: [
            {
                url: 'https://moduloria.com/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'ModulorIA - IA en Construcción Modular y Automatización',
            },
        ],
        locale: 'es_ES',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'ModulorIA | IA en Construcción Modular',
        description: 'Automatización en construcción modular con IA. Ahorra costes y tiempo. ROI en 2-3 semanas.',
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
                <NosotrosSection />
                <ProblemasSection />
                <ServiciosSection />
                <ComoFuncionaSection />
                <DiferenciadoresSection />
                <PreciosSection />
                <RecursosSection />
                <FAQSection />
                <CTAFinalSection />
            </div>
        </main>
    );
}
