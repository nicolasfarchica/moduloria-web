import dynamic from 'next/dynamic';
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

export const metadata = {
    title: 'ModulorIA | IA en Construcción Modular - Automatización Inteligente',
    description: 'IA para la construcción modular. Automatización en construcción que ahorra tiempo y reduce errores. Implementamos IA práctica en empresas constructoras. ROI medible en semanas.',
    keywords: 'IA en construcción modular, IA para la construcción modular, automatización en construcción modular, cómo implementar IA en construcción modular, inteligencia artificial construcción, automatización construcción, software construcción modular, construcción industrializada',
    openGraph: {
        title: 'ModulorIA | IA en Construcción Modular - Automatización Inteligente',
        description: 'Implementamos IA práctica en empresas de construcción modular. Ahorra tiempo y reduce errores con automatización inteligente. ROI medible en semanas.',
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
        description: 'Automatización en construcción modular con IA. Ahorra tiempo y reduce errores. ROI medible en semanas.',
        images: ['https://moduloria.com/og-image.jpg'],
    },
};

export default function HomePage() {
    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'ModulorIA',
        description: 'IA y automatización para la industria de la construcción modular. Ahorra tiempo y reduce errores automatizando procesos operativos.',
        url: 'https://moduloria.com',
        logo: 'https://moduloria.com/images/moduloria-logo-v2.png',
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+45-5280-1394',
            contactType: 'customer service',
            email: 'contacto@moduloria.com',
            areaServed: 'ES',
            availableLanguage: 'Spanish'
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

    const faqStructuredData = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
            {
                '@type': 'Question',
                name: '¿Qué es exactamente la automatización con IA en construcción modular?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Es usar Inteligencia Artificial para eliminar tareas manuales repetitivas en tu empresa constructora. Por ejemplo: clasificar emails automáticamente, extraer datos de facturas con OCR, generar reportes de obra por voz, controlar stock de materiales, etc. No son robots físicos ni drones, sino automatizaciones de software que ahorran 15-20 horas/semana de trabajo administrativo.'
                }
            },
            {
                '@type': 'Question',
                name: '¿Necesito tener conocimientos técnicos o de programación?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'No. Nosotros implementamos todo y capacitamos a tu equipo. Las automatizaciones funcionan con herramientas visuales (sin código) que cualquier persona puede usar. Si sabes usar WhatsApp o email, sabes usar nuestras soluciones.'
                }
            },
            {
                '@type': 'Question',
                name: '¿Cuánto tiempo toma implementar una automatización?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Depende de la complejidad: Quick Wins (OCR facturas, clasificación emails) se implementan en 3-7 días. Soluciones más complejas (dashboards integrados, múltiples automatizaciones) toman 2-4 semanas. Nunca más de 1 mes.'
                }
            },
            {
                '@type': 'Question',
                name: '¿Cómo sé que realmente voy a ahorrar dinero?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'En el Diagnóstico Estratégico inicial, calculamos el ahorro exacto en euros basado en tus procesos actuales. Te entregamos un informe con ROI proyectado. Además, incluimos un dashboard que muestra el ahorro real vs. proyectado en tiempo real.'
                }
            },
            {
                '@type': 'Question',
                name: '¿Qué diferencia a ModulorIA de otras agencias de automatización?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Tres cosas: 1) Nos especializamos 100% en construcción modular (conocemos tus procesos específicos). 2) Implementamos en semanas, no meses (sin proyectos eternos). 3) Sin contratos de permanencia obligatoria (pagas por proyecto o mes a mes).'
                }
            },
            {
                '@type': 'Question',
                name: '¿Funciona con mi ERP/software actual o tengo que cambiar todo?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Se integra con tus sistemas actuales. No tienes que cambiar nada. Conectamos con tu ERP, Google Sheets, Excel, WhatsApp, email, etc. La idea es automatizar encima de lo que ya tienes, no reemplazarlo todo.'
                }
            },
            {
                '@type': 'Question',
                name: '¿Hay costes ocultos o recurrentes después de la implementación?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'No hay costes ocultos. El precio inicial incluye todo (implementación + capacitación + soporte). Las herramientas que usamos tienen planes gratuitos o de bajo coste. Después del soporte incluido, puedes contratar mantenimiento opcional o gestionar tú mismo.'
                }
            },
            {
                '@type': 'Question',
                name: '¿Qué pasa si mi equipo se resiste al cambio?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Es normal. Por eso hacemos onboarding gradual: empezamos con 1-2 personas clave, demostramos resultados reales y luego escalamos. Nuestras automatizaciones eliminan tareas aburridas, así que la adopción es rápida. Incluimos capacitación continua hasta que todos estén cómodos.'
                }
            },
            {
                '@type': 'Question',
                name: '¿Puedo empezar con algo pequeño y escalar después?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Absolutamente. Es el camino recomendado. Empieza con un Quick Win como OCR de facturas o clasificación de emails. Ves resultados reales en 1-3 semanas. Si funciona, escalas a soluciones más grandes.'
                }
            },
            {
                '@type': 'Question',
                name: '¿Ofrecen garantía de resultados?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Sí. Garantía de ROI: Si después de 3 meses no ahorras mínimo el doble de la inversión, hacemos 2 sesiones de optimización gratis hasta que funcione. Si el problema es técnico nuestro, lo arreglamos sin costo adicional.'
                }
            },
            {
                '@type': 'Question',
                name: '¿Cómo implementar IA en construcción modular sin interrumpir operaciones?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Trabajamos en paralelo a tus operaciones. No paramos nada. Configuramos las automatizaciones en un entorno de prueba, las validamos con tu equipo, y luego las activamos gradualmente. La transición es invisible para tus clientes y subcontratistas.'
                }
            }
        ]
    };

    const serviceStructuredData = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: 'Automatización con IA para Construcción Modular',
        provider: {
            '@type': 'Organization',
            name: 'ModulorIA',
            url: 'https://moduloria.com'
        },
        areaServed: {
            '@type': 'Country',
            name: 'España'
        },
        offers: {
            '@type': 'Offer',
            availability: 'https://schema.org/InStock',
            url: 'https://moduloria.com/auditoria'
        },
        description: 'Implementamos soluciones de IA práctica en empresas de construcción modular. Ahorra tiempo y reduce errores con automatización inteligente. ROI medible en semanas.'
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
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
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
