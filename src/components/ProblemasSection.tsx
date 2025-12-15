'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

type ProblemTier = 'quick-wins' | 'high-impact' | 'transformacional';

interface Problem {
  id: string;
  tier: ProblemTier;
  title: string;
  description: string;
  roi: string;
  timeToValue: string;
  savings: string;
  slug: string;
  icon: string;
  image: string;
}

const PROBLEMS: Problem[] = [
  // QUICK WINS
  {
    id: '1',
    tier: 'quick-wins',
    title: 'OCR Facturas Automatizado',
    description: 'Elimina la entrada manual de facturas PDF. De 15 minutos a 30 segundos por factura.',
    roi: '2 semanas',
    timeToValue: '3-5 días',
    savings: '€8K-€18K/año',
    slug: 'ocr-facturas',
    icon: '📄',
    image: '/images/ocr-pain.png',
  },
  {
    id: '2',
    tier: 'quick-wins',
    title: 'Clasificación Emails Inteligente',
    description: 'Organiza automáticamente emails urgentes vs. informativos. Priorización sin esfuerzo.',
    roi: '1 semana',
    timeToValue: '2-3 días',
    savings: '€6K-€12K/año',
    slug: 'clasificacion-emails',
    icon: '📧',
    image: '/images/email-pain.png',
  },
  {
    id: '3',
    tier: 'quick-wins',
    title: 'Alertas Proactivas de Retrasos',
    description: 'Detecta desviaciones antes de que sean críticas. Notificaciones automáticas a stakeholders.',
    roi: '3 semanas',
    timeToValue: '1 semana',
    savings: '€12K-€25K/año',
    slug: 'alertas-retrasos',
    icon: '⚠️',
    image: '/images/delay-pain.png',
  },

  // HIGH IMPACT
  {
    id: '4',
    tier: 'high-impact',
    title: 'Dashboard Multimódulo Tiempo Real',
    description: 'Visibilidad 360° de todos los proyectos activos. KPIs actualizados sin reuniones.',
    roi: '4-6 semanas',
    timeToValue: '2-3 semanas',
    savings: '€35K-€67K/año',
    slug: 'dashboard-multimodulo',
    icon: '📊',
    image: '/images/dashboard-pain.png',
  },
  {
    id: '5',
    tier: 'high-impact',
    title: 'Reportes Automáticos de Proyecto',
    description: 'Generación automática de reportes de avance. De 2 horas a 15 minutos.',
    roi: '3-4 semanas',
    timeToValue: '1-2 semanas',
    savings: '€28K-€52K/año',
    slug: 'reportes-automaticos',
    icon: '📑',
    image: '/images/report-pain.png',
  },
  {
    id: '6',
    tier: 'high-impact',
    title: 'Gestión Inteligente de Proveedores',
    description: 'Evaluación automática de proveedores. Negociación basada en datos históricos.',
    roi: '6-8 semanas',
    timeToValue: '3-4 semanas',
    savings: '€45K-€89K/año',
    slug: 'gestion-proveedores',
    icon: '🤝',
    image: '/images/vendor-pain.png',
  },
];

const TIER_CONFIG = {
  'quick-wins': {
    label: 'Quick Wins',
    description: 'ROI en 1-3 semanas | Implementación < 1 semana',
    color: 'text-accent-copper',
    bgColor: 'bg-accent-copper/10',
    borderColor: 'border-accent-copper',
    dotColor: 'bg-accent-copper',
  },
  'high-impact': {
    label: 'High Impact',
    description: 'ROI en 4-8 semanas | Implementación 2-4 semanas',
    color: 'text-primary-light',
    bgColor: 'bg-primary-light/10',
    borderColor: 'border-primary-light',
    dotColor: 'bg-primary-light',
  },
  'transformacional': {
    label: 'Transformacional',
    description: 'ROI en 8-12 semanas | Implementación 4-8 semanas',
    color: 'text-primary-steel',
    bgColor: 'bg-primary-steel/10',
    borderColor: 'border-primary-steel',
    dotColor: 'bg-primary-steel',
  },
};

export default function ProblemasSection() {
  const [activeTier, setActiveTier] = useState<ProblemTier>('quick-wins');

  const filteredProblems = PROBLEMS.filter((problem) => problem.tier === activeTier);

  return (
    <section id="problemas" className="section-padding bg-background-dark relative overflow-hidden">
      {/* Background Image */}
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-overlay"
          style={{ backgroundImage: "url('/images/problemas-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background-dark/90 via-background-dark/80 to-background-dark" />
      </div>

      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent-copper/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 z-0" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary-medium/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-accent-copper animate-pulse" />
            <span className="text-secondary-beige text-xs font-medium uppercase tracking-widest font-heading">Catálogo de Soluciones</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading tracking-tight">
            Problemas que resolvemos en <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-copper to-primary-light">la industria de construcción modular</span>
          </h2>
          <p className="text-xl text-primary-steel max-w-3xl mx-auto font-light leading-relaxed">
            Desde quick wins de 3 días hasta transformación digital completa. Elige tu punto de entrada.
          </p>
        </motion.div>

        {/* Tier Tabs */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          {(Object.keys(TIER_CONFIG) as ProblemTier[]).map((tier) => {
            const config = TIER_CONFIG[tier];
            const isActive = activeTier === tier;

            return (
              <button
                key={tier}
                onClick={() => setActiveTier(tier)}
                className={`px-8 py-4 rounded-xl font-heading font-semibold text-lg transition-all duration-300 relative overflow-hidden group ${isActive
                  ? `text-white border border-${config.borderColor.split('-')[1]} shadow-lg ring-1 ring-${config.borderColor.split('-')[1]} bg-white/5 backdrop-blur-sm`
                  : 'bg-transparent text-primary-steel border border-white/5 hover:border-white/10 hover:bg-white/5'
                  }`}
              >
                {isActive && (
                  <div className={`absolute inset-0 ${config.bgColor} opacity-20`} />
                )}

                <div className="text-center relative z-10">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    {isActive && <span className={`w-2 h-2 rounded-full ${config.dotColor}`} />}
                    {config.label}
                  </div>
                  <div className={`text-xs ${isActive ? 'text-white/80' : 'opacity-60'} font-sans font-normal`}>{config.description.split('|')[0].trim()}</div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Problems Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          <AnimatePresence mode="popLayout">
            {filteredProblems.map((problem) => {
              const config = TIER_CONFIG[problem.tier];

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={problem.id}
                  className="glass-card group"
                >
                  {/* Image */}
                  <div className="relative h-48 w-full mb-6 rounded-xl overflow-hidden group-hover:shadow-lg transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark to-transparent z-10 opacity-60" />
                    <img
                      src={problem.image}
                      alt={problem.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-4 z-20">
                      <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${config.bgColor} ${config.color} border border-white/5 backdrop-blur-md`}>
                        {config.label}
                      </span>
                    </div>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`text-2xl ${config.color} bg-background-dark/50 p-2 rounded-lg border border-white/5 flex-shrink-0`}>
                      {problem.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-accent-copper transition-colors font-heading leading-tight">
                      {problem.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 mb-8 leading-relaxed text-sm h-12">
                    {problem.description}
                  </p>

                  {/* Metrics */}
                  <div className="space-y-4 mb-8 bg-background-dark/30 p-5 rounded-xl border border-white/5 group-hover:border-white/10 transition-colors">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-primary-steel font-medium">💰 Ahorro anual</span>
                      <span className={`font-bold ${config.color} font-heading`}>{problem.savings}</span>
                    </div>
                    <div className="w-full h-[1px] bg-white/5" />
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-primary-steel font-medium">⏱️ ROI estimado</span>
                      <span className="font-semibold text-white">{problem.roi}</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    href={`/problemas/${problem.slug}`}
                    className={`inline-flex items-center font-bold text-sm transition-all group-hover:translate-x-1 ${config.color}`}
                  >
                    Análisis Detallado
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* View All CTA */}
        <div className="text-center">
          <p className="text-primary-steel mb-8 font-light text-lg">
            Estos son solo <span className="text-white font-medium">algunos de los problemas</span> que documentamos con ROI calculado.
          </p>
          <Link
            href="/problemas"
            className="btn-outline border-white/20 text-white hover:border-accent-copper hover:text-accent-copper inline-flex items-center text-lg px-8 py-4 bg-white/5 backdrop-blur-sm"
          >
            Explorar Catálogo Completo
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
