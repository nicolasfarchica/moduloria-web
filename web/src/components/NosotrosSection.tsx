'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function NosotrosSection() {
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
            Sobre <span className="text-accent-copper">ModulorIA</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto font-light">
            Especialistas en <span className="text-accent-copper font-medium">IA para la construcción modular</span>.
            <br />
            No somos otra agencia genérica de automatización.
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
              Por qué nos especializamos en <span className="text-accent-copper">construcción modular</span>
            </h3>

            <div className="space-y-4 text-lg text-slate-300 leading-relaxed">
              <p>
                Después de analizar decenas de empresas constructoras, descubrimos algo:
                <strong className="text-white"> Las soluciones "genéricas" de automatización no funcionan</strong> en este sector.
              </p>

              <p>
                La construcción modular tiene procesos únicos, tiempos críticos y márgenes ajustados que
                las agencias de IA tradicionales no entienden. <span className="text-accent-copper">No puedes permitirte
                  perder 6 meses en un proyecto que "tal vez funcione".</span>
              </p>

              <p>
                Por eso creamos <strong className="text-white">ModulorIA</strong>: una consultoría 100% enfocada en
                <strong className="text-accent-copper"> implementar IA práctica en empresas de construcción modular e industrializada</strong>.
              </p>

              <p className="text-primary-light font-medium">
                Conocemos tus procesos. Hablamos tu idioma. Y lo más importante:
                <strong> entregamos resultados medibles en semanas</strong>.
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
                Especialización Total
              </h4>
              <p className="text-slate-300">
                No hacemos "de todo para todos". Solo <strong className="text-white">automatización en construcción modular</strong>.
                Eso nos hace mejores en lo que hacemos.
              </p>
            </div>

            {/* Value 2 */}
            <div className="glass-card p-6 hover:border-accent-copper/50 transition-all duration-300">
              <div className="text-4xl mb-4">⚡</div>
              <h4 className="text-xl font-bold text-white mb-3 font-heading">
                ROI Real, No Promesas
              </h4>
              <p className="text-slate-300">
                Calculamos el ahorro exacto en euros antes de empezar.
                <strong className="text-white"> Si no ahorras mínimo el doble de la inversión en 3 meses</strong>,
                refinamos hasta que funcione.
              </p>
            </div>

            {/* Value 3 */}
            <div className="glass-card p-6 hover:border-accent-copper/50 transition-all duration-300">
              <div className="text-4xl mb-4">🚀</div>
              <h4 className="text-xl font-bold text-white mb-3 font-heading">
                Implementación Rápida
              </h4>
              <p className="text-slate-300">
                <strong className="text-white">De 3 días a 4 semanas</strong> según la solución.
                Sin proyectos eternos. Sin esperas innecesarias. Resultados tangibles desde la semana 1.
              </p>
            </div>

            {/* Value 4 */}
            <div className="glass-card p-6 hover:border-accent-copper/50 transition-all duration-300">
              <div className="text-4xl mb-4">🤝</div>
              <h4 className="text-xl font-bold text-white mb-3 font-heading">
                Sin Contratos Eternos
              </h4>
              <p className="text-slate-300">
                Pagas por proyecto o retainer mensual.
                <strong className="text-white"> Si no estás satisfecho, cancelas cuando quieras</strong>.
                Sin permanencias obligatorias.
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
                <h3 className="text-2xl font-bold text-white mb-2 font-heading">Nicolás Farchica</h3>
                <p className="text-accent-copper font-medium mb-4">Fundador & Consultor IA</p>

                <p className="text-slate-300 leading-relaxed mb-4">
                  "Después de ver cómo empresas constructoras perdían tiempo y dinero en tareas repetitivas,
                  decidí crear una solución real. No más consultoras que prometen todo y no entregan nada.
                  <strong className="text-white"> ModulorIA existe para implementar IA que funciona</strong>."
                </p>

                <div className="flex flex-wrap gap-3 text-sm">
                  <span className="bg-primary-medium/20 text-primary-light px-3 py-1 rounded-full border border-primary-medium/30">
                    Especialista IA
                  </span>
                  <span className="bg-primary-medium/20 text-primary-light px-3 py-1 rounded-full border border-primary-medium/30">
                    Automatización
                  </span>
                  <span className="bg-primary-medium/20 text-primary-light px-3 py-1 rounded-full border border-primary-medium/30">
                    Construcción Modular
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
              📞 Agendar Diagnóstico Estratégico
            </Link>
            <p className="text-slate-400 text-sm mt-4">
              Hablemos de cómo automatizar tu empresa constructora
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
