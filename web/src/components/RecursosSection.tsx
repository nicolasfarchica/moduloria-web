'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export default function RecursosSection() {
  const t = useTranslations('home.recursos');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error al suscribirse');
      }

      setIsSuccess(true);
      setEmail('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al suscribirse');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="recursos" className="section-padding bg-gradient-to-b from-background-end to-background-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary-medium/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-accent-copper/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
            {t('title')}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-copper to-primary-light">
              {t('titleHighlight')}
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
            {t('subtitle')}{' '}
            <span className="text-white font-medium">{t('subtitleHighlight')}</span>.
            <br />
            <span className="text-primary-light text-lg">{t('subtitleEnd')}</span>
          </p>
        </motion.div>

        {/* Value Propositions */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0 }}
            className="text-center p-6"
          >
            <div className="text-4xl mb-3">📊</div>
            <h3 className="text-lg font-bold text-white mb-2">{t('card1Title')}</h3>
            <p className="text-slate-400 text-sm">{t('card1Desc')}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center p-6"
          >
            <div className="text-4xl mb-3">🔧</div>
            <h3 className="text-lg font-bold text-white mb-2">{t('card2Title')}</h3>
            <p className="text-slate-400 text-sm">{t('card2Desc')}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center p-6"
          >
            <div className="text-4xl mb-3">💰</div>
            <h3 className="text-lg font-bold text-white mb-2">{t('card3Title')}</h3>
            <p className="text-slate-400 text-sm">{t('card3Desc')}</p>
          </motion.div>
        </div>

        {/* Newsletter + Diagnostico Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 max-w-5xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Newsletter */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 font-heading flex items-center gap-3">
                <span>📬</span>
                <span>{t('newsletterTitle')}</span>
              </h3>
              <p className="text-slate-300 mb-4 leading-relaxed">
                {t('newsletterDesc')} <strong className="text-white">{t('newsletterDescBold')}</strong> {t('newsletterDescEnd')}
              </p>

              {isSuccess ? (
                <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-4 text-center">
                  <p className="text-green-400 font-medium">{t('newsletterSuccess')}</p>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit}>
                  <div className="flex gap-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t('newsletterPlaceholder')}
                      required
                      disabled={isSubmitting}
                      className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-accent-copper transition-colors disabled:opacity-50"
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-2 bg-accent-copper text-white rounded-lg font-medium hover:shadow-copper-glow transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? '...' : t('newsletterButton')}
                    </button>
                  </div>
                  {error && (
                    <p className="text-red-400 text-sm mt-2">{error}</p>
                  )}
                </form>
              )}

              <p className="text-xs text-slate-400 mt-2">
                {t('newsletterDisclaimer')}
              </p>
            </div>

            {/* Diagnostico */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 font-heading flex items-center gap-3">
                <span>📞</span>
                <span>{t('diagnosticoTitle')}</span>
              </h3>
              <p className="text-slate-300 mb-4 leading-relaxed">
                {t('diagnosticoDesc')} <strong className="text-white">{t('diagnosticoDescBold')}</strong>{t('diagnosticoDescEnd')}
              </p>
              <Link
                href="/auditoria"
                className="inline-block px-6 py-3 bg-accent-copper text-white rounded-lg font-medium hover:shadow-copper-glow hover:scale-105 transition-all duration-300"
              >
                {t('diagnosticoButton')}
              </Link>
              <p className="text-xs text-slate-400 mt-2">
                {t('diagnosticoDisclaimer')}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
