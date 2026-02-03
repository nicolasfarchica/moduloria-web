'use client';

import { useState } from 'react';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';

type ProblemTier = 'quick-wins' | 'high-impact';

interface ProblemData {
  id: string;
  tier: ProblemTier;
  key: string;
  icon: string;
  image: string;
}

const PROBLEMS_DATA: ProblemData[] = [
  // QUICK WINS
  { id: '1', tier: 'quick-wins', key: 'ocr', icon: '📄', image: '/images/ocr-pain.png' },
  { id: '2', tier: 'quick-wins', key: 'emails', icon: '📧', image: '/images/email-pain.png' },
  { id: '3', tier: 'quick-wins', key: 'alertas', icon: '⚠️', image: '/images/delay-pain.png' },
  // HIGH IMPACT
  { id: '4', tier: 'high-impact', key: 'dashboard', icon: '📊', image: '/images/dashboard-pain.png' },
  { id: '5', tier: 'high-impact', key: 'reportes', icon: '📑', image: '/images/report-pain.png' },
  { id: '6', tier: 'high-impact', key: 'proveedores', icon: '🤝', image: '/images/vendor-pain.png' },
];

const TIER_CONFIG = {
  'quick-wins': {
    color: 'text-accent-copper',
    bgColor: 'bg-accent-copper/10',
    borderColor: 'border-accent-copper',
    dotColor: 'bg-accent-copper',
  },
  'high-impact': {
    color: 'text-primary-light',
    bgColor: 'bg-primary-light/10',
    borderColor: 'border-primary-light',
    dotColor: 'bg-primary-light',
  },
};

export default function ProblemasSection() {
  const t = useTranslations('services.problems');
  const [activeTier, setActiveTier] = useState<ProblemTier>('quick-wins');

  const filteredProblems = PROBLEMS_DATA.filter((problem) => problem.tier === activeTier);

  const tiers: { key: ProblemTier; label: string; description: string }[] = [
    { key: 'quick-wins', label: t('tiers.quickWins.label'), description: t('tiers.quickWins.description') },
    { key: 'high-impact', label: t('tiers.highImpact.label'), description: t('tiers.highImpact.description') },
  ];

  return (
    <section id="problemas" className="section-padding bg-background-dark relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 pointer-events-none" />
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
            <span className="text-secondary-beige text-xs font-medium uppercase tracking-widest font-heading">🏗️ {t('badge')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading tracking-tight">
            {t('title')} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-copper to-primary-light">{t('titleHighlight')}</span>
          </h2>
          <p className="text-xl text-primary-steel max-w-3xl mx-auto font-light leading-relaxed">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Tier Tabs */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          {tiers.map((tier) => {
            const config = TIER_CONFIG[tier.key];
            const isActive = activeTier === tier.key;

            return (
              <button
                key={tier.key}
                onClick={() => setActiveTier(tier.key)}
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
                    {tier.label}
                  </div>
                  <div className={`text-xs ${isActive ? 'text-white/80' : 'opacity-60'} font-sans font-normal`}>{tier.description}</div>
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
              const tierLabel = problem.tier === 'quick-wins' ? t('tiers.quickWins.label') : t('tiers.highImpact.label');

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
                    <Image
                      src={problem.image}
                      alt={t(`items.${problem.key}.title`)}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-4 z-20">
                      <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${config.bgColor} ${config.color} border border-white/5 backdrop-blur-md`}>
                        {tierLabel}
                      </span>
                    </div>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`text-2xl ${config.color} bg-background-dark/50 p-2 rounded-lg border border-white/5 flex-shrink-0`}>
                      {problem.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-accent-copper transition-colors font-heading leading-tight">
                      {t(`items.${problem.key}.title`)}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 mb-8 leading-relaxed text-sm h-12">
                    {t(`items.${problem.key}.description`)}
                  </p>

                  {/* Metrics */}
                  <div className="space-y-4 mb-8 bg-background-dark/30 p-5 rounded-xl border border-white/5 group-hover:border-white/10 transition-colors">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-primary-steel font-medium">⏱️ {t('roiLabel')}</span>
                      <span className="font-semibold text-white">{t(`items.${problem.key}.roi`)}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* View All CTA */}
        <div className="text-center">
          <p className="text-primary-steel mb-8 font-light text-lg">
            {t('cta.text')} <span className="text-white font-medium">{t('cta.highlight')}</span>
          </p>
          <Link
            href="/auditoria"
            className="btn-primary px-8 py-4 text-lg inline-flex items-center shadow-copper-glow hover:scale-105 transition-transform"
          >
            🔍 {t('cta.button')}
          </Link>
        </div>
      </div>
    </section>
  );
}
