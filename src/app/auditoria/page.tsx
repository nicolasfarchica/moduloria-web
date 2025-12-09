'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function AuditoriaPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    empleados: '',
    proyectosActivos: '',
    mayorProblema: '',
    presupuesto: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Integrar con backend (n8n webhook, Resend, etc.)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setSubmitted(true);
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (submitted) {
    return (
      <main className="min-h-screen bg-background-start flex items-center justify-center p-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="max-w-2xl mx-auto text-center text-white relative z-10 glass-panel p-12 border border-accent-copper/20 shadow-copper-glow">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="text-8xl mb-8 inline-block animate-pulse-slow"
          >
            ✅
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6 font-heading"
          >
            ¡Solicitud Recibida!
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-primary-steel mb-8 font-light"
          >
            Gracias {formData.nombre}. Te contactaremos en las próximas 24 horas para agendar tu auditoría gratis.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card p-6 rounded-xl mb-8 border border-white/10 bg-white/5"
          >
            <p className="text-lg text-gray-300 mb-4">
              📧 Revisa tu email: <strong className="text-white">{formData.email}</strong>
            </p>
            <p className="text-sm text-gray-400">
              Te enviamos un email de confirmación con los próximos pasos.
              <br />
              Si no lo ves, revisa tu carpeta de spam.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/" className="btn-secondary px-8 py-4 w-full sm:w-auto text-center">
              🏠 Volver al inicio
            </Link>
            <a
              href="https://wa.me/4552801394?text=Hola%20Nicolás,%20acabo%20de%20solicitar%20una%20auditoría"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl font-semibold bg-[#25D366] text-white hover:bg-[#128C7E] transition-all duration-300 w-full sm:w-auto text-center flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat ahora
            </a>
          </motion.div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background-start text-white overflow-hidden relative">
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-copper/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-medium/20 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      </div>

      {/* Hero Section */}
      <section className="relative py-24 z-10">
        <div className="container-custom max-w-4xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6 font-heading leading-tight"
          >
            Auditoría <span className="text-accent-copper bg-accent-copper/10 px-3 rounded-xl ml-2">Gratis</span> <br />
            <span className="text-3xl md:text-5xl text-white/50 block mt-4">30 Minutos de Valor Puro</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-primary-steel mb-4 font-light max-w-2xl mx-auto"
          >
            Descubre exactamente cuánto puedes ahorrar automatizando tus procesos.
            <br />
            <span className="text-white font-medium">Sin compromiso. Con números reales de tu empresa.</span>
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 relative z-10">
        <div className="container-custom max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column: Qué recibes */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-white mb-10 font-heading">
                ¿Qué recibes en la auditoría?
              </h2>

              <div className="space-y-8">
                {[
                  { icon: '🎯', title: 'Diagnóstico de 3-5 oportunidades concretas', text: 'Identificamos los procesos más ineficientes de TU empresa específicamente. No genéricos.' },
                  { icon: '💰', title: 'ROI calculado con tus números reales', text: 'No usamos promedios. Calculamos el ahorro anual exacto basado en tu volumen de facturas, proyectos y personal.' },
                  { icon: '🚀', title: 'Propuesta de Quick Win implementable', text: 'Te sugerimos un proyecto piloto de bajo riesgo (implementable en < 1 semana) para validar resultados.' },
                  { icon: '📄', title: 'Informe PDF con análisis detallado', text: 'Después de la llamada, recibes un documento con todas las oportunidades identificadas y plan de acción sugerido.' }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-5 glass-card p-6 border-white/5 hover:border-white/10 transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-background-dark border border-white/10 flex items-center justify-center text-2xl shadow-lg">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 font-heading">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed font-light text-sm">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust Indicators */}
              <div className="mt-12 glass-panel p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent">
                <h3 className="font-bold text-white mb-6 font-heading flex items-center gap-2">✅ Garantías ModulorIA</h3>
                <ul className="space-y-4 text-sm text-gray-300">
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-accent-copper/20 flex items-center justify-center text-accent-copper text-xs font-bold">✓</span>
                    <span>100% gratis, sin compromiso de compra</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-accent-copper/20 flex items-center justify-center text-accent-copper text-xs font-bold">✓</span>
                    <span>No hay ventas agresivas ni presión</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-accent-copper/20 flex items-center justify-center text-accent-copper text-xs font-bold">✓</span>
                    <span>Si tu caso no es para automatización, te lo diremos honestamente</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-accent-copper/20 flex items-center justify-center text-accent-copper text-xs font-bold">✓</span>
                    <span>Firmamos NDA si es necesario</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Right Column: Formulario - TRUNCATED DUE TO LENGTH - Complete in next upload batch */}
            </div>
        </div>
      </section>
    </main>
  );
}
