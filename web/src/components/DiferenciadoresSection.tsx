'use client';

import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

const COMPARISON_ICONS = ['🎯', '⏱️', '💰', '🔧', '📊', '🤝', '🔒', '🧪'];

export default function DiferenciadoresSection() {
  const t = useTranslations('home.differentiators');

  const comparisons = Array.from({ length: 8 }, (_, i) => ({
    feature: t(`comparisons.${i}.feature`),
    generic: t(`comparisons.${i}.generic`),
    moduloria: t(`comparisons.${i}.moduloria`),
    icon: COMPARISON_ICONS[i],
  }));

  const tags = [t('trustBar.tags.0'), t('trustBar.tags.1'), t('trustBar.tags.2')];

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
            {t('title')} <span className="text-accent-copper">{t('titleHighlight')}</span> {t('titleEnd')}
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto font-light">
            {t('subtitle')}
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
                <th className="py-6 px-8 text-left text-xl font-bold text-white">{t('tableHeaders.criteria')}</th>
                <th className="py-6 px-8 text-center text-xl font-bold text-slate-400">
                  {t('tableHeaders.generic')}
                </th>
                <th className="py-6 px-8 text-center text-xl font-bold bg-accent-copper/20 text-white border-l border-white/10 relative">
                  <div className="flex items-center justify-center gap-2">
                    <span>{t('tableHeaders.moduloria')}</span>
                    <svg className="w-6 h-6 text-accent-copper" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="absolute top-0 left-0 w-full h-1 bg-accent-copper" />
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((row, index) => {
                const isEven = index % 2 === 0;
                const bgClass = isEven ? 'bg-slate-900/40' : 'bg-transparent';

                return (
                  <tr key={index} className={`${bgClass} border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors`}>
                    <td className="py-6 px-8 font-semibold text-white border-r border-white/5">
                      {row.icon} {row.feature}
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
          {comparisons.map((row, index) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              key={index}
              className="glass-card"
            >
              <h3 className="text-xl font-bold text-white mb-4">{row.icon} {row.feature}</h3>

              <div className="space-y-4">
                {/* Generic */}
                <div className="bg-red-500/10 border-l-4 border-red-500 p-4 rounded">
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="text-xs font-semibold text-red-300 mb-1">{t('mobileLabels.generic')}</p>
                      <p className="text-sm text-slate-400">{row.generic}</p>
                    </div>
                  </div>
                </div>

                {/* ModulorIA */}
                <div className="border-l-4 border-accent-copper p-4 rounded bg-accent-copper/10">
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent-copper flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="text-xs font-semibold text-accent-copper mb-1">{t('mobileLabels.moduloria')}</p>
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
            {t('trustBar.title')} <span className="text-accent-copper">{t('trustBar.titleHighlight')}</span>
          </h3>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto mb-6 relative z-10">
            {t('trustBar.description')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10 mb-8">
            {tags.map((tag, idx) => (
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
            📞 {t('cta')}
          </Link>
        </div>
      </div>
    </section>
  );
}
