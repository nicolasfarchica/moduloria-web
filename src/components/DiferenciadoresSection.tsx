'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface ComparisonRow {
  feature: string;
  generic: string;
  moduloria: string;
  impact: 'high' | 'medium';
}

const COMPARISONS: ComparisonRow[] = [
  {
    feature: '🎯 Especialización',
    generic: 'Soluciones genéricas para "todas las industrias"',
    moduloria: '100% enfocado en el sector construcción. Conocemos tus procesos.',
    impact: 'high',
  },
  {
    feature: '⏱️ Tiempo de implementación',
    generic: '6-12 meses de integración. Proyectos eternos.',
    moduloria: '3 días - 4 semanas según solución. ROI inmediato.',
    impact: 'high',
  },
  {
    feature: '💰 Modelo de precios',
    generic: 'Contratos anuales costosos. Vendor lock-in.',
    moduloria: 'Sin contratos eternos. Pagas por resultados.',
    impact: 'high',
  },
  {
    feature: '🔧 Flexibilidad',
    generic: 'Plataformas rígidas. "Se hace como nosotros decimos".',
    moduloria: 'Automatizaciones personalizadas a tu flujo actual.',
    impact: 'medium',
  },
  {
    feature: '📊 Transparencia ROI',
    generic: 'Promesas vagas. "Mejora de eficiencia del 30%".',
    moduloria: 'ROI calculado en euros. Dashboard con ahorro real vs. proyectado.',
    impact: 'high',
  },
  {
    feature: '🤝 Soporte',
    generic: 'Tickets por portal. Respuesta en 48-72h.',
    moduloria: 'WhatsApp directo con nuestro equipo. Respuesta en < 2h hábiles.',
    impact: 'medium',
  },
  {
    feature: '🔒 Propiedad de datos',
    generic: 'Tus datos quedan en su nube. Difícil migrar.',
    moduloria: 'Tus datos, tu infraestructura. 100% exportables.',
    impact: 'medium',
  },
  {
    feature: '🧪 Metodología',
    generic: 'Big Bang. Todo o nada. Alto riesgo.',
    moduloria: 'Quick Wins primero. Validación continua. Escala gradual.',
    impact: 'high',
  },
];

export default function DiferenciadoresSection() {
  return (
    <section id="diferenciadores" className="section-padding bg-background-start relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent-copper/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ¿Por qué <span className="text-accent-copper">ModulorIA</span> vs. agencias genéricas?
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto font-light">
            No somos una consultora IA generalista. Somos especialistas en la industria de la construcción.
          </p>
        </motion.div>

        {/* Comparison Table - Desktop */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="hidden lg:block max-w-6xl mx-auto overflow-hidden rounded-2xl shadow-xl border border-white/10"
        >
          <table className="w-full">
            <thead>
              <tr className="bg-slate-900 border-b border-white/10">
                <th className="py-6 px-8 text-left text-xl font-bold text-white">Criterio</th>
                <th className="py-6 px-8 text-center text-xl font-bold text-slate-400">
                  Agencias IA genéricas
                </th>
                <th className="py-6 px-8 text-center text-xl font-bold bg-accent-copper/20 text-white border-l border-white/10 relative">
                  <div className="flex items-center justify-center gap-2">
                    <span>ModulorIA</span>
                    <svg className="w-6 h-6 text-accent-copper" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="absolute top-0 left-0 w-full h-1 bg-accent-copper" />
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARISONS.map((row, index) => {
                const isEven = index % 2 === 0;
                const bgClass = isEven ? 'bg-slate-900/40' : 'bg-transparent';

                return (
                  <tr key={index} className={`${bgClass} border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors`}>
                    <td className="py-6 px-8 font-semibold text-white border-r border-white/5">
                      {row.feature}
                    </td>
                    <td className="py-6 px-8 text-center text-slate-400 border-r border-white/5">
                      <div className="flex items-center justify-center gap-2 opacity-60">
                        <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                        <span>{row.generic}</span>
                      </div>
                    </td>
                    <td className="py-6 px-8 text-center font-semibold text-white bg-accent-copper/5">
                      <div className="flex items-center justify-center gap-2">
                        <svg className="w-5 h-5 text-accent-copper flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{row.moduloria}</span>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </motion.div>

        {/* Comparison Cards - Mobile */}
        <div className="lg:hidden space-y-6">
          {COMPARISONS.map((row, index) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              key={index}
              className="glass-card"
            >
              <h3 className="text-xl font-bold text-white mb-4">{row.feature}</h3>

              <div className="space-y-4">
                {/* Generic */}
                <div className="bg-red-500/10 border-l-4 border-red-500 p-4 rounded">
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="text-xs font-semibold text-red-300 mb-1">Agencias genéricas</p>
                      <p className="text-sm text-slate-400">{row.generic}</p>
                    </div>
                  </div>
                </div>

                {/* ModulorIA */}
                <div className={`border-l-4 border-accent-copper p-4 rounded bg-accent-copper/10`}>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent-copper flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="text-xs font-semibold text-accent-copper mb-1">
                        ModulorIA {row.impact === 'high' && '⭐'}
                      </p>
                      <p className="text-sm font-semibold text-white">{row.moduloria}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Trust Bar */}
        <div className="mt-12 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-white/10 rounded-2xl p-8 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-accent-copper/5 pointer-events-none" />

          <h3 className="text-2xl md:text-3xl font-bold mb-4 relative z-10">
            La diferencia: <span className="text-accent-copper">Especialización + Agilidad + Transparencia</span>
          </h3>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto mb-6 relative z-10">
            No vendemos software estándar. Co-creamos automatizaciones específicas para empresas de construcción.
            Si no funciona, lo refinamos hasta que funcione. Sin letra pequeña.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10 mb-8">
            {["100% Sector Construcción", "ROI en 2-3 semanas", "Sin contratos eternos"].map((tag, idx) => (
              <div key={idx} className="flex items-center gap-2 text-slate-300 bg-black/20 px-4 py-2 rounded-full border border-white/5">
                <svg className="w-5 h-5 text-accent-copper" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>{tag}</span>
              </div>
            ))}
          </div>
          <Link
            href="/auditoria"
            className="btn-primary px-8 py-4 text-lg inline-block relative z-10 shadow-copper-glow hover:scale-105 transition-transform"
          >
            📞 Ver cómo funciona en tu empresa
          </Link>
        </div>
      </div>
    </section>
  );
}
