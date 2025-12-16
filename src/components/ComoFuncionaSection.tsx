'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface Step {
  number: number;
  title: string;
  duration: string;
  description: string;
  deliverables: string[];
  icon: React.ReactNode;
}

const STEPS: Step[] = [
  {
    number: 1,
    title: 'Diagnóstico Estratégico',
    duration: 'Sesión estratégica inicial',
    description: 'Analizamos tus procesos actuales y cuantificamos el potencial de ahorro. Te entregamos un plan.',
    deliverables: [
      'Diagnóstico de oportunidades concretas',
      'ROI estimado con números reales',
      'Propuesta de hoja de ruta',
    ],
    icon: (
      <svg className="w-16 h-16 text-accent-copper" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="11" cy="11" r="8" strokeWidth="2"/>
        <path d="m21 21-4.35-4.35" strokeWidth="2" strokeLinecap="round"/>
        <path d="M11 8v3l2 2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    number: 2,
    title: 'Implementación Ágil',
    duration: '3 días - 4 semanas (según solución)',
    description: 'Implementamos sin interrumpir tus operaciones. Metodología iterativa con validación continua.',
    deliverables: [
      'Setup técnico + integración con tus sistemas actuales',
      'Automatización configurada y probada en entorno real',
      'Documentación técnica + videos de capacitación',
    ],
    icon: (
      <svg className="w-16 h-16 text-accent-copper" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="3" strokeWidth="2"/>
        <path d="M12 1v6m0 6v6M5 12h6m6 0h6" strokeWidth="2" strokeLinecap="round"/>
        <path d="m16.2 7.8 1.4-1.4m-11.2 0 1.4 1.4m11.2 11.2-1.4-1.4m-11.2 0 1.4 1.4" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    number: 3,
    title: 'Acompañamiento Continuo',
    duration: 'Soporte 3 meses | Sin contratos eternos',
    description: 'No te dejamos solo. Refinamos, optimizamos y escalamos. Pagas solo por resultados.',
    deliverables: [
      'Soporte técnico vía WhatsApp/email',
      '2 sesiones de optimización mensuales',
      'Dashboard de métricas (ahorro real vs. proyectado)',
    ],
    icon: (
      <svg className="w-16 h-16 text-accent-copper" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M12 2v20M2 12l10-10 10 10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17 17v-6l-5-5-5 5v6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function ComoFuncionaSection() {
  return (
    <section id="como-funciona" className="section-padding bg-background-end relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent-copper/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ¿Cómo funciona <span className="text-accent-copper">ModulorIA</span>?
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto font-light">
            Proceso transparente y sin riesgos. Del diagnóstico al ahorro real en 3 pasos.
          </p>
        </motion.div>

        {/* Steps Timeline */}
        <div className="max-w-6xl mx-auto">
          {STEPS.map((step, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                key={step.number}
                className="relative mb-12 last:mb-0"
              >
                {/* Connector Line (except last) */}
                {index < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute left-1/2 top-32 w-0.5 h-24 bg-gradient-to-b from-accent-copper/50 to-transparent transform -translate-x-1/2" />
                )}

                <div className={`flex flex-col lg:flex-row items-center gap-8 ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                  {/* Step Number Badge */}
                  <div className="flex-shrink-0 relative">
                    <div className="w-32 h-32 rounded-full bg-slate-900 border-2 border-accent-copper/30 flex items-center justify-center text-white text-6xl font-bold shadow-lg shadow-accent-copper/10 relative z-10">
                      {step.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-accent-copper text-white flex items-center justify-center text-xl font-bold border-4 border-slate-900 z-20">
                      {step.number}
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className={`flex-1 ${isEven ? 'lg:text-left' : 'lg:text-right'}`}>
                    <div className={`glass-card max-w-2xl mx-auto lg:mx-0 border-l-4 ${isEven ? 'lg:mr-auto' : 'lg:ml-auto'} border-accent-copper/20 hover:border-accent-copper transition-colors`}>
                      <div className="mb-4">
                        <h3 className="text-3xl font-bold text-white mb-2">
                          {step.title}
                        </h3>
                        <p className="text-accent-copper font-semibold text-lg">
                          {step.duration}
                        </p>
                      </div>

                      <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                        {step.description}
                      </p>

                      {/* Deliverables */}
                      <div className={`space-y-3 ${isEven ? '' : 'lg:flex lg:flex-col lg:items-end'}`}>
                        <h4 className="font-semibold text-white mb-2 text-sm uppercase tracking-wider">✅ Qué recibes:</h4>
                        <ul className={`space-y-2 ${isEven ? '' : 'lg:text-right'}`}>
                          {step.deliverables.map((deliverable, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              {isEven ? (
                                <>
                                  <svg className="w-5 h-5 text-accent-copper flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                  </svg>
                                  <span className="text-slate-400">{deliverable}</span>
                                </>
                              ) : (
                                <>
                                  <span className="text-slate-400 flex-1">{deliverable}</span>
                                  <svg className="w-5 h-5 text-accent-copper flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                  </svg>
                                </>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { icon: "✅", title: "Sin contratos eternos", desc: "Compromisos de 3 meses renovables. Puedes cancelar cuando quieras." },
            { icon: "🔒", title: "Propiedad de tus datos", desc: "Tus procesos, tus datos. 100% exportables. No hay vendor lock-in." },
            { icon: "💰", title: "Garantía de ROI", desc: "ROI garantizado o ajustamos la solución sin coste adicional." }
          ].map((item, idx) => (
            <div key={idx} className="text-center p-6 bg-slate-800/50 rounded-lg border border-white/5 hover:bg-slate-800 transition-colors">
              <div className="text-4xl mb-3">{item.icon}</div>
              <h4 className="font-semibold text-white mb-2">{item.title}</h4>
              <p className="text-slate-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/auditoria"
            className="btn-primary px-8 py-4 rounded-lg text-lg font-bold shadow-copper-glow hover:scale-105 transition-transform"
          >
            📞 Agenda tu Diagnóstico Estratégico
          </Link>
          <p className="text-slate-500 text-sm mt-4">
            🎯 Sin compromiso | 🚀 Implementación en días, no meses | ✅ Casos piloto con resultados reales
          </p>
        </div>
      </div>
    </section>
  );
}
