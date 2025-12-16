'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CTAFinalSection() {
  return (
    <section className="section-padding bg-gradient-to-b from-background-dark to-background-end relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-copper/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          {/* Main CTA Card */}
          <div className="glass-card p-12 md:p-16 text-center relative overflow-hidden">
            {/* Accent Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-copper/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-medium/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 bg-accent-copper/10 border border-accent-copper/30 rounded-full px-6 py-2 mb-6"
              >
                <span className="text-accent-copper font-medium text-sm">
                  ⚡ Comienza a ahorrar en 2-3 semanas
                </span>
              </motion.div>

              {/* Headline */}
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading leading-tight">
                ¿Listo para implementar{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-copper to-primary-light">
                  IA en tu empresa constructora
                </span>
                ?
              </h2>

              {/* Subheadline */}
              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Empieza con un <strong className="text-white">Diagnóstico Estratégico de 45 minutos</strong>.
                <br />
                Te mostramos exactamente cuánto puedes ahorrar y cómo implementar <span className="text-accent-copper">automatización en construcción modular</span>.
              </p>

              {/* Benefits Grid */}
              <div className="grid md:grid-cols-3 gap-6 mb-10 text-left">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-copper/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-accent-copper" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium mb-1">ROI Calculado</p>
                    <p className="text-sm text-slate-400">Números reales, no promesas vagas</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-copper/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-accent-copper" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium mb-1">Plan Personalizado</p>
                    <p className="text-sm text-slate-400">Adaptado a tus procesos específicos</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-copper/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-accent-copper" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium mb-1">100% Reembolsable</p>
                    <p className="text-sm text-slate-400">Al contratar cualquier paquete</p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <Link
                  href="/auditoria"
                  className="btn-primary text-lg px-10 py-5 shadow-glow hover:shadow-copper-lg w-full sm:w-auto transform hover:scale-105 transition-all duration-300"
                >
                  📞 Agendar Diagnóstico Estratégico
                </Link>
                <Link
                  href="/#calculadora"
                  className="btn-secondary text-lg px-10 py-5 w-full sm:w-auto"
                >
                  🧮 Calcular Mi Ahorro Gratis
                </Link>
              </div>

              {/* Trust Signals */}
              <div className="flex flex-col items-center gap-3 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-primary-light" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Sin compromiso de permanencia</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-primary-light" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <span>Respuesta en menos de 24h</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-primary-light" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                    <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                  </svg>
                  <span>Especialistas en construcción modular</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center text-slate-400 text-sm mt-8"
          >
            ¿Prefieres hablar primero?{' '}
            <a href="mailto:contacto@moduloria.com" className="text-accent-copper hover:underline">
              Envíanos un email
            </a>
            {' '}o{' '}
            <a href="https://wa.me/34XXXXXXXXX" className="text-accent-copper hover:underline">
              WhatsApp
            </a>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
