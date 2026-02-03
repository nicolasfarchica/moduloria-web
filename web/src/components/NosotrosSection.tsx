'use client';

import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function NosotrosSection() {
  const t = useTranslations('home.nosotros');

  return (
    <section id="nosotros" className="section-padding bg-gradient-to-b from-background-end to-background-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary-medium/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-accent-copper/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
            {t('title')} <span className="text-accent-copper">{t('titleHighlight')}</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto font-light">
            {t('subtitle')} <span className="text-accent-copper font-medium">{t('subtitleHighlight')}</span>.
            <br />
            {t('subtitleEnd')}
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Main Story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 mb-12"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 font-heading">
              {t('storyTitle')} <span className="text-accent-copper">{t('storyTitleHighlight')}</span>
            </h3>

            <div className="space-y-4 text-lg text-slate-300 leading-relaxed">
              <p>
                {t('storyP1')}
                <strong className="text-white"> {t('storyP1Bold')}</strong> {t('storyP1End')}
              </p>

              <p>
                {t('storyP2Start')} <span className="text-accent-copper">{t('storyP2Highlight')}</span>
              </p>

              <p>
                {t('storyP3Start')} <strong className="text-white">{t('storyP3Bold')}</strong>{t('storyP3End')}
                <strong className="text-accent-copper"> {t('storyP3Highlight')}</strong>.
              </p>

              <p className="text-primary-light font-medium">
                {t('storyP4')}
                <strong> {t('storyP4Bold')}</strong>.
              </p>
            </div>
          </motion.div>

          {/* Values Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6 mb-12"
          >
            {/* Value 1 */}
            <div className="glass-card p-6 hover:border-accent-copper/50 transition-all duration-300">
              <div className="text-4xl mb-4">🎯</div>
              <h4 className="text-xl font-bold text-white mb-3 font-heading">
                {t('value1Title')}
              </h4>
              <p className="text-slate-300">
                {t('value1Desc')} <strong className="text-white">{t('value1DescBold')}</strong>.
                {t('value1DescEnd')}
              </p>
            </div>

            {/* Value 2 */}
            <div className="glass-card p-6 hover:border-accent-copper/50 transition-all duration-300">
              <div className="text-4xl mb-4">⚡</div>
              <h4 className="text-xl font-bold text-white mb-3 font-heading">
                {t('value2Title')}
              </h4>
              <p className="text-slate-300">
                {t('value2Desc')}
                <strong className="text-white"> {t('value2DescBold')}</strong>{t('value2DescEnd')}
              </p>
            </div>

            {/* Value 3 */}
            <div className="glass-card p-6 hover:border-accent-copper/50 transition-all duration-300">
              <div className="text-4xl mb-4">🚀</div>
              <h4 className="text-xl font-bold text-white mb-3 font-heading">
                {t('value3Title')}
              </h4>
              <p className="text-slate-300">
                <strong className="text-white">{t('value3DescBold')}</strong> {t('value3Desc')}
              </p>
            </div>

            {/* Value 4 */}
            <div className="glass-card p-6 hover:border-accent-copper/50 transition-all duration-300">
              <div className="text-4xl mb-4">🤝</div>
              <h4 className="text-xl font-bold text-white mb-3 font-heading">
                {t('value4Title')}
              </h4>
              <p className="text-slate-300">
                {t('value4Desc')}
                <strong className="text-white"> {t('value4DescBold')}</strong>.
                {t('value4DescEnd')}
              </p>
            </div>
          </motion.div>

          {/* Founder/Team Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Profile Image */}
              <div className="flex-shrink-0 relative group">
                <div className="absolute inset-0 bg-accent-copper rounded-full blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                <Image
                  src="/images/nicolas-farchica-ceo.jpg"
                  alt="Nicolás Farchica - CEO ModulorIA"
                  width={160}
                  height={160}
                  className="rounded-full object-cover border-4 border-accent-copper/20 shadow-xl relative z-10 group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Bio */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2 font-heading">{t('founderName')}</h3>
                <p className="text-accent-copper font-medium mb-4">{t('founderRole')}</p>

                <p className="text-slate-300 leading-relaxed mb-4">
                  {t('founderQuote')}
                  <strong className="text-white"> {t('founderQuoteBold')}</strong>."
                </p>

                <div className="flex flex-wrap gap-3 text-sm">
                  <span className="bg-primary-medium/20 text-primary-light px-3 py-1 rounded-full border border-primary-medium/30">
                    {t('founderTag1')}
                  </span>
                  <span className="bg-primary-medium/20 text-primary-light px-3 py-1 rounded-full border border-primary-medium/30">
                    {t('founderTag2')}
                  </span>
                  <span className="bg-primary-medium/20 text-primary-light px-3 py-1 rounded-full border border-primary-medium/30">
                    {t('founderTag3')}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/auditoria"
              className="btn-primary text-lg px-8 py-4 inline-block shadow-glow hover:shadow-copper-lg"
            >
              📞 {t('cta')}
            </Link>
            <p className="text-slate-400 text-sm mt-4">
              {t('ctaSubtext')}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
