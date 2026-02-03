import dynamic from 'next/dynamic';
import { setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import HeroSection from '@/components/HeroSection';

// Lazy load components below the fold for better performance
const CalculadoraROI = dynamic(() => import('@/components/CalculadoraROI'), {
    loading: () => <div className="section-padding bg-background-end" />,
});
const NosotrosSection = dynamic(() => import('@/components/NosotrosSection'), {
    loading: () => <div className="section-padding" />,
});
const ProblemasSection = dynamic(() => import('@/components/ProblemasSection'), {
    loading: () => <div className="section-padding" />,
});
const ServiciosSection = dynamic(() => import('@/components/ServiciosSection'), {
    loading: () => <div className="section-padding" />,
});
const ComoFuncionaSection = dynamic(() => import('@/components/ComoFuncionaSection'), {
    loading: () => <div className="section-padding" />,
});
const PreciosSection = dynamic(() => import('@/components/PreciosSection'), {
    loading: () => <div className="section-padding" />,
});
const DiferenciadoresSection = dynamic(() => import('@/components/DiferenciadoresSection'), {
    loading: () => <div className="section-padding" />,
});
const RecursosSection = dynamic(() => import('@/components/RecursosSection'), {
    loading: () => <div className="section-padding" />,
});
const FAQSection = dynamic(() => import('@/components/FAQSection'), {
    loading: () => <div className="section-padding" />,
});
const CTAFinalSection = dynamic(() => import('@/components/CTAFinalSection'), {
    loading: () => <div className="section-padding" />,
});

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
            ? 'ModulorIA | IA en Construcción Modular - Automatización Inteligente'
            : 'ModulorIA | AI in Modular Construction - Intelligent Automation',
        description: isSpanish
            ? 'IA para la construcción modular. Automatización en construcción que ahorra tiempo y reduce errores. Implementamos IA práctica en empresas constructoras. ROI medible en semanas.'
            : 'AI for modular construction. Construction automation that saves time and reduces errors. We implement practical AI in construction companies. Measurable ROI in weeks.',
        keywords: isSpanish
            ? 'IA en construcción modular, IA para la construcción modular, automatización en construcción modular, cómo implementar IA en construcción modular, inteligencia artificial construcción, automatización construcción, software construcción modular, construcción industrializada'
            : 'AI in modular construction, AI for modular construction, automation in modular construction, how to implement AI in modular construction, artificial intelligence construction, construction automation, modular construction software, industrialized construction',
        alternates: {
            canonical: `${baseUrl}/${locale}`,
            languages: {
                es: `${baseUrl}/es`,
                en: `${baseUrl}/en`,
            },
        },
        openGraph: {
            title: isSpanish
                ? 'ModulorIA | IA en Construcción Modular - Automatización Inteligente'
                : 'ModulorIA | AI in Modular Construction - Intelligent Automation',
            description: isSpanish
                ? 'Implementamos IA práctica en empresas de construcción modular. Ahorra tiempo y reduce errores con automatización inteligente. ROI medible en semanas.'
                : 'We implement practical AI in modular construction companies. Save time and reduce errors with intelligent automation. Measurable ROI in weeks.',
            url: `${baseUrl}/${locale}`,
            siteName: 'ModulorIA',
            images: [
                {
                    url: `${baseUrl}/og-image.jpg`,
                    width: 1200,
                    height: 630,
                    alt: isSpanish
                        ? 'ModulorIA - IA en Construcción Modular y Automatización'
                        : 'ModulorIA - AI in Modular Construction and Automation',
                },
            ],
            locale: isSpanish ? 'es_ES' : 'en_US',
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: isSpanish
                ? 'ModulorIA | IA en Construcción Modular'
                : 'ModulorIA | AI in Modular Construction',
            description: isSpanish
                ? 'Automatización en construcción modular con IA. Ahorra tiempo y reduce errores. ROI medible en semanas.'
                : 'AI-powered modular construction automation. Save time and reduce errors. Measurable ROI in weeks.',
            images: [`${baseUrl}/og-image.jpg`],
        },
    };
}

export default async function HomePage({ params }: Props) {
    const { locale } = await params;

    // Enable static rendering
    setRequestLocale(locale);

    const isSpanish = locale === 'es';

    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'ModulorIA',
        description: isSpanish
            ? 'IA y automatización para la industria de la construcción modular. Ahorra tiempo y reduce errores automatizando procesos operativos.'
            : 'AI and automation for the modular construction industry. Save time and reduce errors by automating operational processes.',
        url: 'https://moduloria.com',
        logo: 'https://moduloria.com/images/moduloria-logo-v2.png',
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+45-5280-1394',
            contactType: 'customer service',
            email: 'contacto@moduloria.com',
            areaServed: ['ES', 'EU'],
            availableLanguage: ['Spanish', 'English']
        },
        sameAs: [
            'https://linkedin.com/company/moduloria',
            'https://twitter.com/moduloria',
            'https://instagram.com/moduloria',
            'https://facebook.com/moduloria'
        ],
        address: {
            '@type': 'PostalAddress',
            addressCountry: 'ES'
        }
    };

    const serviceStructuredData = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: isSpanish
            ? 'Automatización con IA para Construcción Modular'
            : 'AI Automation for Modular Construction',
        provider: {
            '@type': 'Organization',
            name: 'ModulorIA',
            url: 'https://moduloria.com'
        },
        areaServed: {
            '@type': 'Place',
            name: 'Europe'
        },
        offers: {
            '@type': 'Offer',
            availability: 'https://schema.org/InStock',
            url: `https://moduloria.com/${locale}/auditoria`
        },
        description: isSpanish
            ? 'Implementamos soluciones de IA práctica en empresas de construcción modular. Ahorra tiempo y reduce errores con automatización inteligente. ROI medible en semanas.'
            : 'We implement practical AI solutions in modular construction companies. Save time and reduce errors with intelligent automation. Measurable ROI in weeks.'
    };

    return (
        <>
            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceStructuredData) }}
            />

            <main className="min-h-screen bg-background-start overflow-hidden">
                <div className="fixed inset-0 pointer-events-none z-0">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-copper/5 rounded-full blur-[100px]" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-primary/5 rounded-full blur-[100px]" />
                </div>
                <div className="relative z-10">
                    <HeroSection />
                    <NosotrosSection />
                    <ProblemasSection />
                    <ServiciosSection />
                    <ComoFuncionaSection />
                    <PreciosSection />
                    <DiferenciadoresSection />
                    <RecursosSection />
                    <CalculadoraROI />
                    <FAQSection />
                    <CTAFinalSection />
                </div>
            </main>
        </>
    );
}
