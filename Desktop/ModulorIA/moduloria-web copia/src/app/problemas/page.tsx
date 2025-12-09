'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

// NOTE: Metadata is server-side only in Next.js 13+. Since we are using 'use client',
// we should ideally move metadata to layout or a wrapper. However, for this refactor,
// we will focus on the UI component. If metadata is needed, it should be in a separate layout file
// or this file should be server component importing a client component.
// For now, I will remove the export const metadata since it won't work in a 'use client' file.

type ProblemTier = 'quick-wins' | 'high-impact' | 'transformacional';

interface Problem {
  slug: string;
  tier: ProblemTier;
  title: string;
  subtitle: string;
  roi: string;
  implementation: string;
  savings: string;
  icon: string;
}

const ALL_PROBLEMS: Problem[] = [
  // QUICK WINS (1-3 semanas ROI, < 1 semana implementación)
  {
    slug: 'ocr-facturas',
    tier: 'quick-wins',
    title: 'OCR Facturas Automatizado',
    subtitle: 'Extracción automática de datos de facturas PDF',
    roi: '2 semanas',
    implementation: '3-5 días',
    savings: '€8K-€18K/año',
    icon: '📄',
  },
  {
    slug: 'clasificacion-emails',
    tier: 'quick-wins',
    title: 'Clasificación Inteligente de Emails',
    subtitle: 'Organización automática urgente vs. informativo',
    roi: '1 semana',
    implementation: '2-3 días',
    savings: '€6K-€12K/año',
    icon: '📧',
  },
  {
    slug: 'alertas-retrasos',
    tier: 'quick-wins',
    title: 'Alertas Proactivas de Retrasos',
    subtitle: 'Detección temprana de desviaciones críticas',
    roi: '3 semanas',
    implementation: '1 semana',
    savings: '€12K-€25K/año',
    icon: '⚠️',
  },
  {
    slug: 'busqueda-documentos',
    tier: 'quick-wins',
    title: 'Búsqueda Inteligente de Documentos',
    subtitle: 'Encuentra planos, contratos y specs en segundos',
    roi: '2 semanas',
    implementation: '3-4 días',
    savings: '€5K-€10K/año',
    icon: '🔍',
  },
  {
    slug: 'validacion-presupuestos',
    tier: 'quick-wins',
    title: 'Validación Automática de Presupuestos',
    subtitle: 'Detecta errores y desviaciones vs. histórico',
    roi: '2-3 semanas',
    implementation: '5-7 días',
    savings: '€10K-€20K/año',
    icon: '💰',
  },
  {
    slug: 'tracking-materiales',
    tier: 'quick-wins',
    title: 'Tracking de Materiales en Obra',
    subtitle: 'Visibilidad de stock en tiempo real',
    roi: '3 semanas',
    implementation: '1 semana',
    savings: '€8K-€15K/año',
    icon: '📦',
  },
  {
    slug: 'registro-asistencia',
    tier: 'quick-wins',
    title: 'Registro Automático de Asistencia',
    subtitle: 'Control horario sin hojas de cálculo',
    roi: '1-2 semanas',
    implementation: '3 días',
    savings: '€4K-€8K/año',
    icon: '⏰',
  },
  {
    slug: 'notificaciones-hitos',
    tier: 'quick-wins',
    title: 'Notificaciones de Hitos Automáticas',
    subtitle: 'Avisos a stakeholders sin intervención manual',
    roi: '2 semanas',
    implementation: '4 días',
    savings: '€6K-€12K/año',
    icon: '🔔',
  },

  // HIGH IMPACT (4-8 semanas ROI, 2-4 semanas implementación)
  {
    slug: 'dashboard-multimodulo',
    tier: 'high-impact',
    title: 'Dashboard Multimódulo Tiempo Real',
    subtitle: 'Visibilidad 360° de todos los proyectos activos',
    roi: '4-6 semanas',
    implementation: '2-3 semanas',
    savings: '€35K-€67K/año',
    icon: '📊',
  },
  {
    slug: 'reportes-automaticos',
    tier: 'high-impact',
    title: 'Reportes de Proyecto Automáticos',
    subtitle: 'Generación automática con datos actualizados',
    roi: '3-4 semanas',
    implementation: '1-2 semanas',
    savings: '€28K-€52K/año',
    icon: '📑',
  },
  {
    slug: 'gestion-proveedores',
    tier: 'high-impact',
    title: 'Gestión Inteligente de Proveedores',
    subtitle: 'Evaluación automática y negociación basada en datos',
    roi: '6-8 semanas',
    implementation: '3-4 semanas',
    savings: '€45K-€89K/año',
    icon: '🤝',
  },
  {
    slug: 'control-calidad',
    tier: 'high-impact',
    title: 'Control de Calidad Automatizado',
    subtitle: 'Checklists digitales con evidencia fotográfica',
    roi: '5-7 semanas',
    implementation: '2-3 semanas',
    savings: '€30K-€60K/año',
    icon: '✅',
  },
  {
    slug: 'planificacion-logistica',
    tier: 'high-impact',
    title: 'Planificación Logística Optimizada',
    subtitle: 'Ruteo óptimo de módulos y materiales',
    roi: '6-8 semanas',
    implementation: '3 semanas',
    savings: '€40K-€75K/año',
    icon: '🚚',
  },
  {
    slug: 'gestion-cambios',
    tier: 'high-impact',
    title: 'Gestión de Change Orders Automática',
    subtitle: 'Trazabilidad completa de cambios y aprobaciones',
    roi: '4-6 semanas',
    implementation: '2 semanas',
    savings: '€32K-€58K/año',
    icon: '🔄',
  },
  {
    slug: 'prediccion-costos',
    tier: 'high-impact',
    title: 'Predicción de Costos con IA',
    subtitle: 'Forecasting preciso basado en históricos',
    roi: '6-8 semanas',
    implementation: '3-4 semanas',
    savings: '€50K-€95K/año',
    icon: '📈',
  },
  {
    slug: 'coordinacion-trades',
    tier: 'high-impact',
    title: 'Coordinación Multitrade Automática',
    subtitle: 'Sincronización de subcontratistas en tiempo real',
    roi: '5-7 semanas',
    implementation: '2-3 semanas',
    savings: '€38K-€70K/año',
    icon: '👷',
  },

  // TRANSFORMACIONAL (8-12 semanas ROI, 4-8 semanas implementación)
  {
    slug: 'gemelo-digital',
    tier: 'transformacional',
    title: 'Gemelo Digital del Proyecto',
    subtitle: 'Réplica virtual sincronizada con realidad',
    roi: '8-10 semanas',
    implementation: '5-6 semanas',
    savings: '€80K-€150K/año',
    icon: '🏗️',
  },
  {
    slug: 'optimizacion-diseno',
    tier: 'transformacional',
    title: 'Optimización de Diseño con IA',
    subtitle: 'Sugerencias automáticas para eficiencia',
    roi: '10-12 semanas',
    implementation: '6-8 semanas',
    savings: '€100K-€200K/año',
    icon: '🎨',
  },
  {
    slug: 'mantenimiento-predictivo',
    tier: 'transformacional',
    title: 'Mantenimiento Predictivo',
    subtitle: 'Prevención de fallos antes de que ocurran',
    roi: '8-10 semanas',
    implementation: '5-7 semanas',
    savings: '€70K-€130K/año',
    icon: '🔧',
  },
  {
    slug: 'integracion-erp-completa',
    tier: 'transformacional',
    title: 'Integración ERP Completa',
    subtitle: 'Un solo sistema conectado para todo',
    roi: '10-12 semanas',
    implementation: '6-8 semanas',
    savings: '€90K-€180K/año',
    icon: '🔗',
  },
  {
    slug: 'analisis-riesgos-ia',
    tier: 'transformacional',
    title: 'Análisis de Riesgos con IA',
    subtitle: 'Identificación temprana de riesgos críticos',
    roi: '8-10 semanas',
    implementation: '5-6 semanas',
    savings: '€75K-€140K/año',
    icon: '⚡',
  },
  {
    slug: 'optimizacion-produccion',
    tier: 'transformacional',
    title: 'Optimización de Producción Off-Site',
    subtitle: 'Maximización de throughput en fábrica',
    roi: '10-12 semanas',
    implementation: '7-8 semanas',
    savings: '€120K-€250K/año',
    icon: '🏭',
  },
  {
    slug: 'asistente-ia-gerentes',
    tier: 'transformacional',
    title: 'Asistente IA para Gerentes',
    subtitle: 'Copiloto inteligente para decisiones diarias',
    roi: '8-10 semanas',
    implementation: '5-7 semanas',
    savings: '€85K-€160K/año',
    icon: '🤖',
  },
  {
    slug: 'plataforma-colaboracion',
    tier: 'transformacional',
    title: 'Plataforma de Colaboración Unificada',
    subtitle: 'Un hub para todos los stakeholders',
    roi: '10-12 semanas',
    implementation: '6-8 semanas',
    savings: '€95K-€190K/año',
    icon: '💼',
  },
  {
    slug: 'sostenibilidad-tracking',
    tier: 'transformacional',
    title: 'Tracking de Sostenibilidad Automático',
    subtitle: 'Medición continua de huella de carbono',
    roi: '8-10 semanas',
    implementation: '5-6 semanas',
    savings: '€60K-€120K/año',
    icon: '🌱',
  },
];

const TIER_CONFIG = {
  'quick-wins': {
    label: 'Quick Wins',
    description: 'ROI en 1-3 semanas | Implementación < 1 semana',
    color: 'text-accent-copper',
    bgColor: 'bg-accent-copper/10',
    borderColor: 'border-accent-copper/20',
  },
  'high-impact': {
    label: 'High Impact',
    description: 'ROI en 4-8 semanas | Implementación 2-4 semanas',
    color: 'text-white',
    bgColor: 'bg-white/5',
    borderColor: 'border-white/10',
  },
  'transformacional': {
    label: 'Transformacional',
    description: 'ROI en 8-12 semanas | Implementación 4-8 semanas',
    color: 'text-blue-200',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/20',
  },
};

export default function ProblemasPage() {
  const quickWins = ALL_PROBLEMS.filter(p => p.tier === 'quick-wins');
  const highImpact = ALL_PROBLEMS.filter(p => p.tier === 'high-impact');
  const transformacional = ALL_PROBLEMS.filter(p => p.tier === 'transformacional');

  return (
    <main className="min-h-screen bg-background-start text-white overflow-hidden">
      {/* Background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-copper/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-primary/20 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
      </div>

      {/* Hero Section */}
      <section className="relative py-24 z-10">
        <div className="container-custom mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              25 Problemas que <span className="text-accent-copper">Automatizamos</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 font-light">
              Catálogo completo de soluciones de automatización IA para construcción modular.
              <br className="hidden md:block" /> Cada problema documentado con ROI calculado y tiempo de implementación.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/auditoria" className="btn-primary px-10 py-4 text-lg shadow-lg shadow-accent-copper/20">
                📞 Auditoría gratis 30 min
              </Link>
              <Link href="/#calculadora" className="btn-outline px-10 py-4 text-lg border-white/20 hover:bg-white/5">
                🧮 Calcular mi ahorro
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Wins Section */}
      <section id="quick-wins" className="section-padding relative z-10">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={`inline-block border ${TIER_CONFIG['quick-wins'].borderColor} ${TIER_CONFIG['quick-wins'].bgColor} rounded-full px-6 py-2 mb-6 backdrop-blur-sm`}
            >
              <span className={`font-bold ${TIER_CONFIG['quick-wins'].color} tracking-wider uppercase text-sm`}>
                {TIER_CONFIG['quick-wins'].label}
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-white mb-4"
            >
              Ganancias Rápidas
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-400 max-w-3xl mx-auto"
            >
              {TIER_CONFIG['quick-wins'].description}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickWins.map((problem, idx) => (
              <motion.div
                key={problem.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <Link
                  href={`/problemas/${problem.slug}`}
                  className="glass-card hover:bg-white/5 transition-all duration-300 group block h-full flex flex-col border border-white/5 hover:border-accent-copper/30"
                >
                  <div className="text-4xl mb-4 p-3 bg-white/5 inline-block rounded-lg w-fit">{problem.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent-copper transition-colors">
                    {problem.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-6 flex-grow">{problem.subtitle}</p>

                  <div className="space-y-3 text-xs bg-black/20 p-4 rounded-lg border border-white/5">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-500 font-medium uppercase tracking-wide">💰 Ahorro</span>
                      <span className="font-bold text-accent-copper">{problem.savings}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-500 font-medium uppercase tracking-wide">⏱️ ROI</span>
                      <span className="font-semibold text-white">{problem.roi}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-500 font-medium uppercase tracking-wide">🚀 Implementación</span>
                      <span className="font-semibold text-white">{problem.implementation}</span>
                    </div>
                  </div>

                  <div className="mt-6 text-accent-copper font-semibold text-sm flex items-center justify-end opacity-80 group-hover:opacity-100 transition-opacity">
                    Ver solución
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* High Impact Section */}
      <section id="high-impact" className="section-padding bg-background-end/50 relative z-10 border-y border-white/5">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={`inline-block border ${TIER_CONFIG['high-impact'].borderColor} ${TIER_CONFIG['high-impact'].bgColor} rounded-full px-6 py-2 mb-6 backdrop-blur-sm`}
            >
              <span className={`font-bold ${TIER_CONFIG['high-impact'].color} tracking-wider uppercase text-sm`}>
                {TIER_CONFIG['high-impact'].label}
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-white mb-4"
            >
              Alto Impacto
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-400 max-w-3xl mx-auto"
            >
              {TIER_CONFIG['high-impact'].description}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highImpact.map((problem, idx) => (
              <motion.div
                key={problem.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <Link
                  href={`/problemas/${problem.slug}`}
                  className="glass-card hover:bg-white/5 transition-all duration-300 group block h-full flex flex-col border border-white/5 hover:border-white/20"
                >
                  <div className="text-4xl mb-4 p-3 bg-white/5 inline-block rounded-lg w-fit">{problem.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent-copper transition-colors">
                    {problem.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-6 flex-grow">{problem.subtitle}</p>

                  <div className="space-y-3 text-xs bg-black/20 p-4 rounded-lg border border-white/5">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-500 font-medium uppercase tracking-wide">💰 Ahorro</span>
                      <span className="font-bold text-accent-copper">{problem.savings}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-500 font-medium uppercase tracking-wide">⏱️ ROI</span>
                      <span className="font-semibold text-white">{problem.roi}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-500 font-medium uppercase tracking-wide">🚀 Implementación</span>
                      <span className="font-semibold text-white">{problem.implementation}</span>
                    </div>
                  </div>

                  <div className="mt-6 text-white/50 font-semibold text-sm flex items-center justify-end group-hover:text-white transition-colors">
                    Ver solución
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformacional Section */}
      <section id="transformacional" className="section-padding relative z-10">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={`inline-block border ${TIER_CONFIG['transformacional'].borderColor} ${TIER_CONFIG['transformacional'].bgColor} rounded-full px-6 py-2 mb-6 backdrop-blur-sm`}
            >
              <span className={`font-bold ${TIER_CONFIG['transformacional'].color} tracking-wider uppercase text-sm`}>
                {TIER_CONFIG['transformacional'].label}
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-white mb-4"
            >
              Transformación Digital
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-400 max-w-3xl mx-auto"
            >
              {TIER_CONFIG['transformacional'].description}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {transformacional.map((problem, idx) => (
              <motion.div
                key={problem.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <Link
                  href={`/problemas/${problem.slug}`}
                  className="glass-card hover:bg-white/5 transition-all duration-300 group block h-full flex flex-col border border-white/5 hover:border-blue-400/30"
                >
                  <div className="text-4xl mb-4 p-3 bg-white/5 inline-block rounded-lg w-fit">{problem.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {problem.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-6 flex-grow">{problem.subtitle}</p>

                  <div className="space-y-3 text-xs bg-black/20 p-4 rounded-lg border border-white/5">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-500 font-medium uppercase tracking-wide">💰 Ahorro</span>
                      <span className="font-bold text-accent-copper">{problem.savings}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-500 font-medium uppercase tracking-wide">⏱️ ROI</span>
                      <span className="font-semibold text-white">{problem.roi}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-500 font-medium uppercase tracking-wide">🚀 Implementación</span>
                      <span className="font-semibold text-white">{problem.implementation}</span>
                    </div>
                  </div>

                  <div className="mt-6 text-white/50 font-semibold text-sm flex items-center justify-end group-hover:text-white transition-colors">
                    Ver solución
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark to-transparent opacity-80" />
        <div className="container-custom max-w-4xl mx-auto text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-6 text-white"
          >
            ¿No encuentras tu problema específico?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-300 mb-12"
          >
            Estos son los 25 casos más comunes, pero cada empresa es única.
            <br />Hablemos de tu situación específica en una auditoría gratis de 30 minutos.
          </motion.p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/auditoria" className="btn-primary px-10 py-5 shadow-lg shadow-accent-copper/20">
              📞 Agendar auditoría gratis
            </Link>
            <a href="mailto:nicolas@moduloria.com" className="btn-outline px-10 py-5 border-white/20 hover:bg-white/10">
              📧 Escribir al equipo
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
