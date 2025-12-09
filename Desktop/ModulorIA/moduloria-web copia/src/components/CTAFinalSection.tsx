'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function CTAFinalSection() {
  return (
    <section className="section-padding bg-gradient-to-br from-background-dark via-primary-dark to-background-end relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-grid-pattern" />

      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-copper/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-medium/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main CTA Content */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight font-heading">
              ¿Listo para automatizar <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-copper to-primary-light">tu construcción modular?</span>
            </h2>
            <p className="text-xl md:text-2xl text-secondary-beige max-w-3xl mx-auto mb-4 font-light leading-relaxed">
              Empieza con un Diagnóstico Estratégico.
              <br />
              <span className="text-white font-medium">Recibe tu plan de acción y ROI calculado</span> con números reales.
            </p>
          </div>

          {/* Value Props Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="glass-card text-center p-8 hover:bg-white/5 transition-colors">
              <div className="text-5xl mb-6 filter drop-shadow-lg">🎯</div>
              <h3 className="text-xl font-bold text-white mb-3 font-heading">Reembolsable</h3>
              <p className="text-primary-steel text-sm leading-relaxed">
                Si decides implementar con nosotros, te descontamos el 100% del costo del diagnóstico.
              </p>
            </div>

            <div className="glass-card text-center p-8 hover:bg-white/5 transition-colors">
              <div className="text-5xl mb-6 filter drop-shadow-lg">⚡</div>
              <h3 className="text-xl font-bold text-white mb-3 font-heading">Roadmap Claro</h3>
              <p className="text-primary-steel text-sm leading-relaxed">
                No es una llamada de ventas. Es una sesión de trabajo para diseñar tu ruta de automatización.
              </p>
            </div>

            <div className="glass-card text-center p-8 hover:bg-white/5 transition-colors">
              <div className="text-5xl mb-6 filter drop-shadow-lg">💰</div>
              <h3 className="text-xl font-bold text-white mb-3 font-heading">ROI Real</h3>
              <p className="text-primary-steel text-sm leading-relaxed">
                Calculamos ahorro específico para tu empresa, no usamos promedios genéricos.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <Link
              href="/auditoria"
              className="btn-primary text-lg px-8 py-5 shadow-glow hover:shadow-copper-lg w-full sm:w-auto inline-flex items-center justify-center gap-3"
            >
              📞 Agendar Diagnóstico
            </Link>

            <a
              href="https://wa.me/4552801394?text=Hola%20Nicolás,%20quiero%20saber%20más%20sobre%20ModulorIA"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-lg px-8 py-5 w-full sm:w-auto inline-flex items-center justify-center gap-3"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Directo
            </a>
          </div>

          {/* Alternative Contact Options */}
          <div className="text-center mb-16">
            <p className="text-secondary-beige mb-6 font-medium tracking-wide">O contáctanos directamente:</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <a
                href="mailto:nicolas@moduloria.com"
                className="group flex items-center gap-3 text-white hover:text-accent-copper transition-colors"
              >
                <div className="p-2 bg-white/5 rounded-full group-hover:bg-accent-copper/20 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <span className="font-medium text-lg">nicolas@moduloria.com</span>
              </a>

              <a
                href="tel:+4552801394"
                className="group flex items-center gap-3 text-white hover:text-accent-copper transition-colors"
              >
                <div className="p-2 bg-white/5 rounded-full group-hover:bg-accent-copper/20 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <span className="font-medium text-lg">+45 5280 1394</span>
              </a>
            </div>
          </div>

          {/* Social Proof / Trust Bar */}
          <div className="border-t border-white/10 pt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
              <div className="pt-8 md:pt-0">
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-accent-copper to-white mb-2 font-heading">€67K-156K</div>
                <div className="text-secondary-beige font-medium">Ahorro anual promedio</div>
              </div>
              <div className="pt-8 md:pt-0">
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-accent-copper to-white mb-2 font-heading">2-3 semanas</div>
                <div className="text-secondary-beige font-medium">ROI típico certificado</div>
              </div>
              <div className="pt-8 md:pt-0">
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-accent-copper to-white mb-2 font-heading">15-20h</div>
                <div className="text-secondary-beige font-medium">Horas/semana ahorradas</div>
              </div>
            </div>
          </div>

          {/* Final Trust Statement */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center justify-center gap-8 flex-wrap opacity-70 hover:opacity-100 transition-opacity">
              <div className="flex items-center gap-2 text-primary-steel">
                <svg className="w-5 h-5 text-accent-copper" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm tracking-wide">Sin contratos eternos</span>
              </div>
              <div className="flex items-center gap-2 text-primary-steel">
                <svg className="w-5 h-5 text-accent-copper" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm tracking-wide">Garantía de ROI</span>
              </div>
              <div className="flex items-center gap-2 text-primary-steel">
                <svg className="w-5 h-5 text-accent-copper" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm tracking-wide">100% especializado</span>
              </div>
            </div>
          </div>

          {/* Nicolás Personal Touch */}
          <div className="mt-16 glass-card p-10 max-w-4xl mx-auto border-t border-accent-copper/30">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0 relative">
                <div className="absolute inset-0 bg-accent-copper blur-2xl opacity-20 rounded-full" />
                <div className="relative w-28 h-28 rounded-full bg-gradient-to-br from-accent-copper to-primary-dark flex items-center justify-center text-white text-4xl font-bold shadow-2xl border-4 border-background-dark overflow-hidden">
                  <Image
                    src="/images/nicolas-farchica.jpg"
                    alt="Nicolás Farchica"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-1 font-heading">Nicolás Farchica</h3>
                <p className="text-accent-copper text-sm mb-4 font-medium uppercase tracking-widest">
                  Fundador de ModulorIA
                </p>
                <p className="text-primary-steel text-lg italic leading-relaxed font-light">
                  "Pasé años viendo equipos ahogarse en tareas manuales repetitivas. ModulorIA existe para resolver exactamente eso.
                  <span className="text-white not-italic font-medium"> Hablemos y te muestro cómo automatizar lo que más te duele.</span>"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
