'use client';

import { Link } from '@/i18n/routing';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';

const TIER_IDS = ['diagnostico', 'quickWin', 'highImpact'] as const;

export default function PreciosSection() {
  const t = useTranslations('pricing');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const tierLinks: Record<string, string> = {
    diagnostico: '/auditoria',
    quickWin: '/auditoria?plan=quick-win',
    highImpact: '/auditoria?plan=high-impact',
  };

  return (
    <section id="precios" className="section-padding bg-background-start relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary-dark/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent-copper/10 rounded-full blur-[100px] -z-10" />

      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6"
            dangerouslySetInnerHTML={{
              __html: t('section.title').replace('<highlight>', '<span class="text-accent-copper">').replace('</highlight>', '</span>')
            }}
          />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4"
            dangerouslySetInnerHTML={{
              __html: t('section.subtitle').replace('<strong>', '<strong class="text-white">').replace('</strong>', '</strong>')
            }}
          />
          <p className="text-gray-300 max-w-3xl mx-auto mb-4">
            {t('section.subtitleLine2')}
          </p>
          <p className="text-lg text-accent-copper font-semibold">
            💡 {t('section.flow')}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {TIER_IDS.map((tierId, index) => {
            const isHighlighted = tierId === 'highImpact';
            const htmlId = tierId === 'diagnostico' ? 'diagnostico' : tierId === 'quickWin' ? 'quick-win' : 'high-impact';

            return (
              <div
                key={tierId}
                id={htmlId}
                className={`relative rounded-2xl p-8 transition-all duration-300 scroll-mt-24 flex flex-col ${isHighlighted
                  ? 'bg-gradient-to-br from-white/10 to-white/5 border border-accent-copper shadow-copper-glow transform md:-translate-y-4'
                  : 'bg-white/5 border border-white/10 hover:border-accent-copper/50 hover:bg-white/10'
                  }`}
              >
                {/* Highlighted Badge */}
                {isHighlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-full text-center">
                    <span className="bg-accent-copper text-white text-sm font-bold px-4 py-1 rounded-full shadow-lg">
                      ⭐ {t(`tiers.${tierId}.popular`)}
                    </span>
                  </div>
                )}

                {/* Header */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold font-heading text-white mb-2">{t(`tiers.${tierId}.name`)}</h3>
                  <p className="text-gray-400 mb-4">{t(`tiers.${tierId}.tagline`)}</p>

                  <div className="mb-4">
                    <div className={`text-4xl font-bold font-heading ${isHighlighted ? 'text-accent-copper' : 'text-white'}`}>
                      {t(`tiers.${tierId}.price`)}
                    </div>
                    <div className="text-sm text-gray-400 mt-1">{t(`tiers.${tierId}.duration`)}</div>
                  </div>

                  <div className="bg-accent-copper/20 border border-accent-copper/30 rounded-lg px-4 py-2 inline-block">
                    <span className="text-sm font-semibold text-accent-copper">
                      ⏱️ {t('labels.roiLabel')} {t(`tiers.${tierId}.roi`)}
                    </span>
                  </div>
                </div>

                {/* Best For */}
                <div className="mb-6">
                  <p className="text-sm font-semibold text-white mb-2">✅ {t('labels.idealFor')}</p>
                  <p className="text-gray-300 text-sm">{t(`tiers.${tierId}.bestFor`)}</p>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <p className="text-sm font-semibold text-white mb-3">📦 {t('labels.includes')}</p>
                  <ul className="space-y-2">
                    {[0, 1, 2, 3, 4, 5].map((idx) => {
                      try {
                        const feature = t(`tiers.${tierId}.features.${idx}`);
                        if (feature && !feature.includes('tiers.')) {
                          return (
                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                              <svg className="w-5 h-5 text-accent-copper flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              <span>{feature}</span>
                            </li>
                          );
                        }
                        return null;
                      } catch {
                        return null;
                      }
                    })}
                  </ul>
                </div>

                {/* Examples */}
                <div className="mb-6">
                  <p className="text-sm font-semibold text-white mb-2">💡 {t('labels.examples')}</p>
                  <div className="space-y-1">
                    {[0, 1, 2].map((idx) => {
                      try {
                        const example = t(`tiers.${tierId}.examples.${idx}`);
                        if (example && !example.includes('tiers.')) {
                          return (
                            <p key={idx} className="text-sm text-gray-400">• {example}</p>
                          );
                        }
                        return null;
                      } catch {
                        return null;
                      }
                    })}
                  </div>
                </div>

                {/* CTA */}
                <Link
                  href={tierLinks[tierId] as '/auditoria'}
                  className={`mt-auto block text-center py-4 rounded-lg font-semibold transition-all duration-300 ${isHighlighted
                    ? 'bg-accent-copper text-white hover:shadow-copper-glow hover:scale-[1.02]'
                    : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                >
                  {tierId === 'diagnostico' ? '📞' : tierId === 'quickWin' ? '🚀' : '💎'} {t(`tiers.${tierId}.cta`)}
                </Link>
              </div>
            );
          })}
        </div>

        {/* Pricing FAQ (Accordion) */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold font-heading text-white text-center mb-8">
            💬 {t('faqTitle')}
          </h3>

          <div className="space-y-4">
            {[0, 1, 2, 3, 4, 5].map((index) => {
              const isOpen = openFaqIndex === index;
              let question: string, answer: string;
              try {
                question = t(`faqs.${index}.q`);
                answer = t(`faqs.${index}.a`);
                if (question.includes('faqs.')) return null;
              } catch {
                return null;
              }

              return (
                <motion.div
                  key={index}
                  className={`border rounded-xl overflow-hidden transition-all duration-300 ${isOpen
                    ? 'border-accent-copper/50 bg-white/5 shadow-lg'
                    : 'border-white/10 bg-white/5 hover:bg-white/10'
                    }`}
                  initial={false}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-6 text-left transition-colors focus:outline-none"
                  >
                    <span className={`text-lg font-semibold pr-4 transition-colors ${isOpen ? 'text-accent-copper' : 'text-white'}`}>
                      {question}
                    </span>
                    <svg
                      className={`w-6 h-6 text-accent-copper flex-shrink-0 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 pt-0 bg-transparent">
                          <p className="text-gray-300 leading-relaxed border-t border-white/10 pt-4 text-sm">
                            {answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Trust Bar */}
        <div className="mt-12 text-center bg-gradient-to-r from-primary-medium/20 to-primary-dark/40 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold font-heading mb-4"
            dangerouslySetInnerHTML={{
              __html: '💰 ' + t('trustBar.title').replace('<highlight>', '<span class="text-accent-copper">').replace('</highlight>', '</span>')
            }}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div>
              <div className="text-4xl font-bold text-accent-copper mb-2">{t('trustBar.stat1Value')}</div>
              <div className="text-secondary-beige text-sm">{t('trustBar.stat1Label')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent-copper mb-2">{t('trustBar.stat2Value')}</div>
              <div className="text-secondary-beige text-sm">{t('trustBar.stat2Label')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent-copper mb-2">{t('trustBar.stat3Value')}</div>
              <div className="text-secondary-beige text-sm">{t('trustBar.stat3Label')}</div>
            </div>
          </div>
          <p className="text-secondary-beige mt-6 text-sm">
            {t('trustBar.disclaimer')}
          </p>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-12">
          <Link
            href="/auditoria"
            className="btn-primary text-xl px-12 py-6 inline-flex items-center shadow-copper-glow hover:scale-105 transition-transform"
          >
            📞 {t('finalCta.button')}
          </Link>
          <p className="text-gray-400 text-sm mt-4">
            {t('finalCta.subtitle')}
          </p>
        </div>
      </div>
    </section>
  );
}
