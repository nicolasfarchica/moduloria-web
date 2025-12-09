'use client';

import Link from 'next/link';
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
  category: 'general' | 'tecnico' | 'comercial';
}

const FAQ_ITEMS: FAQItem[] = [
  // GENERAL
  {
    category: 'general',
    question: '¿Por qué ModulorIA solo trabaja con construcción modular?',
    answer: 'La especialización es nuestra ventaja. Conocemos los procesos únicos de construcción modular (fabricación off-site, logística de módulos, coordinación multitrade, gestión de suppliers específicos). Una agencia IA generalista tendría que aprender tu industria desde cero. Nosotros ya sabemos qué automatizar y cómo.',
  },
  {
    category: 'general',
    question: '¿Cómo sé que el ROI prometido es real?',
    answer: 'Calculamos el ROI con datos de TU empresa (volumen de facturas, proyectos activos, horas dedicadas). No usamos promedios genéricos. Además, el dashboard incluye métricas de ahorro real vs. proyectado. Si después de 3 meses no ahorras mínimo el doble de la inversión, refinamos gratis hasta que funcione.',
  },
  {
    category: 'general',
    question: '¿Qué pasa si mi equipo no es técnico?',
    answer: 'Exactamente para eso existe ModulorIA. No necesitas saber programar ni tener un equipo técnico. Implementamos, capacitamos, y documentamos todo para que cualquier persona de tu equipo pueda usarlo. El soporte vía WhatsApp resuelve dudas en < 2h hábiles.',
  },

  // TÉCNICO
  {
    category: 'tecnico',
    question: '¿Se integra con nuestro software actual (ERP, CRM, etc.)?',
    answer: 'Sí. Trabajamos con APIs estándar y conectores nativos de las herramientas más comunes (Procore, Buildertrend, QuickBooks, Excel, Google Sheets, etc.). Si usas software menos común, evaluamos en el diagnóstico inicial si es integrable (90% de los casos sí lo es).',
  },
  {
    category: 'tecnico',
    question: '¿Dónde se alojan nuestros datos? ¿Es seguro?',
    answer: 'Tienes 2 opciones: (1) Cloud seguro con encriptación EU-compliant (GDPR), o (2) On-premise en tu infraestructura si tienes requisitos de seguridad estrictos. Nunca vendemos ni compartimos tus datos. Firmamos NDAs si es necesario. Tus datos son 100% exportables.',
  },
  {
    category: 'tecnico',
    question: '¿Qué tecnología usan? ¿Puedo quedarme vendor lock-in?',
    answer: 'Usamos n8n (open-source), Make, Zapier, y custom scripts según el caso. Evitamos vendor lock-in a propósito: te entregamos documentación completa, accesos admin, y código fuente de scripts custom. Si decides no renovar soporte, las automatizaciones siguen funcionando y puedes gestionarlas tú mismo.',
  },

  // COMERCIAL
  {
    category: 'comercial',
    question: '¿Cuál es el compromiso mínimo? ¿Hay contratos anuales?',
    answer: 'NO hay contratos anuales. Quick Win es proyecto único (pago único). High Impact incluye 3 meses de soporte, luego renuevas mensualmente si quieres (€500-€1.5K/mes según solución). Puedes cancelar cuando quieras. Sin letra pequeña.',
  },
  {
    category: 'comercial',
    question: '¿Ofrecen garantía de resultados?',
    answer: 'Sí. Garantía de ROI: si después de 3 meses no ahorras mínimo el doble de la inversión, hacemos 2 sesiones de optimización gratis. Si el problema es técnico nuestro (bug, error de implementación), lo arreglamos sin costo adicional. Si simplemente no funciona para tu caso, lo discutimos honestamente.',
  },
  {
    category: 'comercial',
    question: '¿Aceptan financiamiento o pagos en cuotas?',
    answer: 'Sí. Para High Impact (€12K-€25K) ofrecemos pago en 3 cuotas sin interés (33% al inicio, 33% a mitad de implementación, 33% al final). También aceptamos financiamiento bancario si tu empresa lo prefiere.',
  },
  {
    category: 'comercial',
    question: 'Ya probamos automatización y no funcionó. ¿Por qué sería diferente?',
    answer: 'La mayoría de implementaciones fallan por: (1) Soluciones genéricas (no adaptadas a construcción modular), (2) Big Bang (todo o nada, alto riesgo), (3) Falta de soporte post-implementación. Nosotros hacemos lo opuesto: (1) 100% especializado en tu industria, (2) Quick Wins iterativos, (3) Acompañamiento continuo. Aprende de tu experiencia pasada, no la repitas.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<'general' | 'tecnico' | 'comercial'>('general');

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFAQs = FAQ_ITEMS.filter((item) => item.category === activeCategory);

  const CATEGORY_LABELS = {
    general: '🎯 General',
    tecnico: '⚙️ Técnico',
    comercial: '💼 Comercial',
  };

  return (
    <section id="faq" className="section-padding bg-background-end relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-primary-medium/5 round-full blur-[100px] pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6">
            Preguntas <span className="text-accent-copper">frecuentes</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Respuestas directas a las dudas más comunes. Si no está aquí, pregúntanos en el diagnóstico.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {(Object.keys(CATEGORY_LABELS) as Array<'general' | 'tecnico' | 'comercial'>).map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setOpenIndex(null); // Reset open state when switching categories
              }}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${activeCategory === category
                ? 'bg-accent-copper text-white shadow-copper-glow'
                : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5'
                }`}
            >
              {CATEGORY_LABELS[category]}
            </button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredFAQs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`border rounded-xl overflow-hidden transition-all duration-300 ${isOpen
                  ? 'border-accent-copper/50 bg-white/5 shadow-lg'
                  : 'border-white/10 bg-white/5 hover:bg-white/10'
                  }`}
              >
                {/* Question Button */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left transition-colors focus:outline-none"
                >
                  <span className={`text-lg font-semibold pr-4 transition-colors ${isOpen ? 'text-accent-copper' : 'text-white'}`}>
                    {item.question}
                  </span>
                  <svg
                    className={`w-6 h-6 text-accent-copper flex-shrink-0 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''
                      }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Answer Panel */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                  <div className="p-6 pt-0 bg-transparent">
                    <p className="text-gray-300 leading-relaxed border-t border-white/10 pt-4">{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-white max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold font-heading mb-4">
            ¿Tienes una pregunta que no está aquí?
          </h3>
          <p className="text-secondary-beige mb-6">
            Hablemos. En la sesión de diagnóstico respondemos todas tus dudas específicas sobre tu caso.
          </p>
          <div className="flex justify-center">
            <Link
              href="/auditoria"
              className="btn-primary text-lg px-8 py-4 inline-flex items-center shadow-lg hover:shadow-xl transition-all"
            >
              📞 Agendar Diagnóstico
            </Link>
          </div>
          <a
            href="mailto:nicolas@moduloria.com"
            className="px-8 py-4 inline-flex items-center rounded-lg font-bold transition-all duration-300 bg-white/10 text-white hover:bg-white/20 border border-white/10 mt-4" // Added mt-4 for spacing
          >
            📧 Escribir a nicolas@moduloria.com
          </a>
          <p className="text-gray-400 text-sm mt-4">
            📱 También puedes escribir a WhatsApp: +45 5280 1394
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8 text-center">
          <div className="flex items-center gap-2 text-gray-400">
            <svg className="w-6 h-6 text-accent-copper" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">Respuestas honestas, sin ventas agresivas</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <svg className="w-6 h-6 text-accent-copper" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">Si tu caso no es para automatización, te lo diremos</span>
          </div>
        </div>
      </div>
    </section>
  );
}
