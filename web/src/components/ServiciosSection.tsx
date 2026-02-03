'use client';

import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const SERVICE_IDS = ['presupuestos', 'planificacion', 'documentacion', 'chatbot', 'calidad', 'comercial'] as const;

const SERVICE_IMAGES: Record<string, string> = {
  presupuestos: '/images/budget-problem.png',
  planificacion: '/images/production-problem.png',
  documentacion: '/images/docs-problem.png',
  chatbot: '/images/team-problem.png',
  calidad: '/images/quality-problem.png',
  comercial: '/images/sales-problem.png',
};

export default function ServiciosSection() {
  const t = useTranslations('services');

  return (
    <section id="servicios" className="section-padding bg-background-start relative overflow-hidden">
      {/* Background Pattern - Blueprint Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="blueprint-grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#C67A52" strokeWidth="0.5" />
              <circle cx="0" cy="0" r="1" fill="#C67A52" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#blueprint-grid)" />
        </svg>
      </div>

      {/* Glow Effects */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-primary-steel/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-accent-copper/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-accent-copper/10 border border-accent-copper/30 rounded-full text-accent-copper text-sm font-semibold mb-6">
            🔧 {t('section.tagline')}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('section.title')} <span className="text-accent-copper">{t('section.titleHighlight')}</span> {t('section.titleEnd')}
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto font-light">
            {t('section.subtitle')}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {SERVICE_IDS.map((serviceId, index) => (
            <motion.div
              key={serviceId}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="glass-card h-full border border-white/5 hover:border-accent-copper/30 transition-all duration-300 hover:shadow-copper-glow flex flex-col p-0 overflow-hidden">
                {/* Image Header */}
                <div className="h-48 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10" />
                  <Image
                    src={SERVICE_IMAGES[serviceId]}
                    alt={t(`services.${serviceId}.title`)}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 z-20 w-10 h-10 rounded-lg bg-accent-copper/90 backdrop-blur-sm border border-white/20 flex items-center justify-center text-xl shadow-lg">
                    {t(`services.${serviceId}.icon`)}
                  </div>
                </div>

                <div className="p-8 flex-1 flex flex-col">
                  {/* Title */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-accent-copper transition-colors mb-2">
                      {t(`services.${serviceId}.title`)}
                    </h3>
                    <p className="text-accent-copper text-sm font-medium">{t(`services.${serviceId}.subtitle`)}</p>
                  </div>

                  {/* Description */}
                  <p className="text-slate-400 mb-6 leading-relaxed text-sm flex-1">
                    {t(`services.${serviceId}.description`)}
                  </p>

                  {/* Benefits */}
                  <ul className="space-y-2 mb-6">
                    {[0, 1, 2].map((idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs">
                        <svg className="w-4 h-4 text-accent-copper flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-slate-300">{t(`services.${serviceId}.benefits.${idx}`)}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Stats Row */}
                  <div className="flex items-center justify-center pt-4 border-t border-white/5 mt-auto">
                    <div className="text-center">
                      <p className="text-[10px] text-slate-500 uppercase tracking-wider">{t('labels.implementation')}</p>
                      <p className="text-white font-semibold text-sm">{t(`services.${serviceId}.timeline`)}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section - How it works summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-slate-900/80 via-primary-dark/50 to-slate-900/80 border border-white/10 rounded-2xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {t('custom.title')} <span className="text-accent-copper">{t('custom.titleHighlight')}</span>
              </h3>
              <p className="text-slate-300 mb-6">
                {t('custom.description')}
              </p>
              <ul className="space-y-3 mb-6">
                {[0, 1, 2].map((idx) => (
                  <li key={idx} className="flex items-center gap-2 text-slate-300">
                    <svg className="w-5 h-5 text-accent-copper" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {t(`custom.features.${idx}`)}
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center md:text-right">
              <div className="inline-block bg-slate-800/50 border border-white/10 rounded-xl p-6 mb-6">
                <p className="text-slate-400 text-sm mb-2">{t('custom.results')}</p>
                <p className="text-4xl md:text-5xl font-bold text-accent-copper">{t('custom.roi')}</p>
                <p className="text-slate-500 text-sm mt-2">{t('custom.roiSubtitle')}</p>
              </div>
              <div>
                <Link
                  href="/auditoria"
                  className="btn-primary px-8 py-4 text-lg inline-block shadow-copper-glow hover:scale-105 transition-transform"
                >
                  📞 {t('custom.cta')}
                </Link>
                <p className="text-slate-500 text-sm mt-3">
                  {t('custom.ctaSubtitle')}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
