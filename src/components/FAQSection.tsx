'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQ {
  question: string;
  answer: string;
}

const FAQS: FAQ[] = [
  {
    question: "¿Qué es exactamente la automatización con IA en construcción modular?",
    answer: "Es usar Inteligencia Artificial para eliminar tareas manuales repetitivas en tu empresa constructora. Por ejemplo: clasificar emails automáticamente, extraer datos de facturas con OCR, generar reportes de obra por voz, controlar stock de materiales, etc. No son robots físicos ni drones, sino automatizaciones de software que ahorran 15-20 horas/semana de trabajo administrativo."
  },
  {
    question: "¿Necesito tener conocimientos técnicos o de programación?",
    answer: "No. Nosotros implementamos todo y capacitamos a tu equipo. Las automatizaciones funcionan con herramientas visuales (sin código) que cualquier persona puede usar. Si sabes usar WhatsApp o email, sabes usar nuestras soluciones."
  },
  {
    question: "¿Cuánto tiempo toma implementar una automatización?",
    answer: "Depende de la complejidad: Quick Wins (OCR facturas, clasificación emails) se implementan en 3-7 días. Soluciones más complejas (dashboards integrados, múltiples automatizaciones) toman 2-4 semanas. Nunca más de 1 mes. Nada de proyectos eternos de 6-12 meses."
  },
  {
    question: "¿Cómo sé que realmente voy a ahorrar dinero?",
    answer: "En el Diagnóstico Estratégico inicial, calculamos el ahorro exacto en euros basado en tus procesos actuales. Te entregamos un informe con ROI proyectado. Además, incluimos un dashboard que muestra el ahorro real vs. proyectado en tiempo real. Si después de 3 meses no alcanzas el ROI proyectado, refinamos hasta que funcione o reembolsamos parcialmente."
  },
  {
    question: "¿Qué diferencia a ModulorIA de otras agencias de automatización?",
    answer: "Tres cosas: 1) Nos especializamos 100% en construcción modular (conocemos tus procesos específicos). 2) Implementamos en semanas, no meses (sin proyectos eternos). 3) Sin contratos de permanencia obligatoria (pagas por proyecto o mes a mes). Otras agencias son genéricas, lentas y te atan a contratos anuales."
  },
  {
    question: "¿Funciona con mi ERP/software actual o tengo que cambiar todo?",
    answer: "Se integra con tus sistemas actuales. No tienes que cambiar nada. Conectamos con tu ERP, Google Sheets, Excel, WhatsApp, email, etc. La idea es automatizar encima de lo que ya tienes, no reemplazarlo todo."
  },
  {
    question: "¿Hay costes ocultos o recurrentes después de la implementación?",
    answer: "No hay costes ocultos. El precio inicial incluye todo (implementación + capacitación + soporte). Las herramientas que usamos tienen planes gratuitos o de bajo coste que corren por tu cuenta. Después del soporte incluido, puedes contratar mantenimiento opcional o gestionar tú mismo (te entregamos todo documentado)."
  },
  {
    question: "¿Qué pasa si mi equipo se resiste al cambio?",
    answer: "Es normal. Por eso hacemos onboarding gradual: empezamos con 1-2 personas clave, demostramos resultados reales y luego escalamos. Además, nuestras automatizaciones eliminan tareas aburridas (nadie extraña transcribir facturas), así que la adopción es rápida. Incluimos capacitación continua hasta que todos estén cómodos."
  },
  {
    question: "¿Puedo empezar con algo pequeño y escalar después?",
    answer: "Absolutamente. Es el camino recomendado. Empieza con un Quick Win como OCR de facturas o clasificación de emails. Ves resultados reales en 1-3 semanas. Si funciona (siempre funciona), escalas a soluciones más grandes. Bonus: Si contratas High Impact después de un Quick Win exitoso, te descontamos el 100% del Quick Win del precio final."
  },
  {
    question: "¿Ofrecen garantía de resultados?",
    answer: "Sí. Garantía de ROI: Si después de 3 meses no ahorras mínimo el doble de la inversión, hacemos 2 sesiones de optimización gratis hasta que funcione. Si el problema es técnico nuestro (bug, error), lo arreglamos sin costo adicional. Si simplemente no funciona para tu caso (raro), lo discutimos honestamente y buscamos solución o reembolso parcial."
  },
  {
    question: "¿Cómo implementar IA en construcción modular sin interrumpir operaciones?",
    answer: "Trabajamos en paralelo a tus operaciones. No paramos nada. Configuramos las automatizaciones en un entorno de prueba, las validamos con tu equipo, y luego las activamos gradualmente. La transición es invisible para tus clientes y subcontratistas. Tu empresa sigue funcionando normal mientras implementamos."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding bg-background-end relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-medium/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
            Preguntas Frecuentes
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto font-light">
            Todo lo que necesitas saber sobre <span className="text-accent-copper">IA en construcción modular</span>
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {FAQS.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="glass-card"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 flex items-center justify-between gap-4 hover:bg-white/5 transition-colors duration-200"
              >
                <span className="text-lg font-medium text-white pr-8">
                  {faq.question}
                </span>
                <motion.svg
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-6 h-6 text-accent-copper flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </button>

              {/* Answer */}
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-slate-300 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-slate-300 mb-6">
            ¿Tienes otra pregunta? Hablemos.
          </p>
          <a
            href="/auditoria"
            className="btn-secondary text-lg px-8 py-4 inline-block"
          >
            📞 Agendar Diagnóstico Estratégico
          </a>
        </motion.div>
      </div>
    </section>
  );
}
