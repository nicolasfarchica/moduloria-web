'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutClient() {
    return (
        <main className="min-h-screen bg-background-start text-white overflow-hidden relative">
            {/* Background Elements */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-copper/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-medium/20 rounded-full blur-[100px]" />
                <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            </div>

            {/* Hero Section */}
            <section className="relative z-10 py-24 overflow-hidden">
                <div className="container-custom max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-heading leading-tight">
                                Somos <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-copper to-white">ModulorIA</span>
                            </h1>
                            <p className="text-xl text-primary-steel mb-10 font-light leading-relaxed">
                                La agencia de automatización e IA especializada en construcción modular.
                                Transformamos operaciones manuales en flujos de trabajo eficientes y escalables.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="https://wa.me/4552801394"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary px-8 py-4 flex items-center justify-center gap-2 shadow-glow hover:shadow-copper-lg text-lg"
                                >
                                    <span>💬</span> Hablemos por WhatsApp
                                </a>
                                <a
                                    href="mailto:contacto@moduloria.com"
                                    className="btn-outline px-8 py-4 flex items-center justify-center gap-2 border-white/20 hover:bg-white/10 text-lg"
                                >
                                    <span>📧</span> contacto@moduloria.com
                                </a>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex flex-col items-center justify-center relative"
                        >
                            <div className="absolute inset-0 bg-accent-copper/20 rounded-full blur-[80px]" />

                            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full border-4 border-white/5 shadow-2xl overflow-hidden z-10 group">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 opacity-60" />
                                <Image
                                    src="/images/nicolas-farchica.jpg"
                                    alt="Nicolás Farchica, CEO ModulorIA"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    priority
                                />
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 }}
                                className="relative z-20 -mt-8 bg-background-dark/80 backdrop-blur-md border border-accent-copper/30 px-6 py-3 rounded-xl shadow-lg text-center"
                            >
                                <h3 className="text-xl font-bold text-white font-heading">Nicolás Farchica</h3>
                                <p className="text-accent-copper text-xs font-bold uppercase tracking-widest mt-1">CEO & Fundador</p>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Nuestra Historia / Mision */}
            <section className="relative z-10 py-24 bg-background-end/30">
                <div className="container-custom max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-white mb-16 text-center font-heading"
                    >
                        Nuestro <span className="text-accent-copper">ADN</span>
                    </motion.h2>

                    <div className="space-y-10 relative">
                        {/* Vertical Line */}
                        <div className="absolute left-[28px] top-8 bottom-8 w-[1px] bg-gradient-to-b from-accent-copper/50 to-transparent hidden md:block" />

                        {[
                            {
                                icon: "🏗️",
                                title: "Raíces en la Obra",
                                text: "Nacimos en el sitio de construcción, no en una oficina de desarrollo. Nuestro equipo fundador gestionó proyectos modulares reales, lidiando con logística, proveedores y plazos imposibles.",
                                lesson: "Entendemos el negocio porque lo hemos vivido desde adentro.",
                                delay: 0
                            },
                            {
                                icon: "📉",
                                title: "El Diagnóstico",
                                text: "Observamos que mientras el producto modular es innovador, los procesos operativos siguen siendo arcaicos. Equipos brillantes quemados por tareas manuales y repetitivas.",
                                lesson: "La ineficiencia operativa es el techo de cristal de las empresas modulares.",
                                delay: 0.1
                            },
                            {
                                icon: "💡",
                                title: "La Solución",
                                text: "Combinamos nuestra experiencia operativa con automatización avanzada en IA. Desarrollamos sistemas que entienden planos, procesan facturas y conectan equipos sin fricción.",
                                lesson: "La tecnología debe adaptarse a la obra, no al revés.",
                                delay: 0.2
                            },
                            {
                                icon: "🚀",
                                title: "Especialización Total",
                                text: "Hoy, ModulorIA se dedica 100% a este nicho. No somos generalistas. Hablamos tu idioma y resolvemos tus problemas específicos de industrialización.",
                                lesson: "La especialización es la clave para soluciones rápidas y efectivas.",
                                delay: 0.3
                            }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: item.delay }}
                                className="glass-panel p-8 flex flex-col md:flex-row gap-8 relative z-10 border hover:border-accent-copper/40 transition-all duration-300 hover:-translate-y-1 bg-background-dark/60 backdrop-blur-md"
                            >
                                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-background-dark border border-white/10 flex items-center justify-center text-3xl shadow-lg relative z-10">
                                    {item.icon}
                                </div>
                                <div className="flex-grow">
                                    <h3 className="text-xl font-bold text-white mb-3 font-heading">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed mb-6 font-light">
                                        {item.text}
                                    </p>
                                    <div className="bg-accent-copper/10 border-l-4 border-accent-copper pl-5 py-3 rounded-r-lg">
                                        <p className="text-sm text-gray-300 italic">
                                            <strong className="text-accent-copper not-italic font-bold uppercase tracking-wider text-xs block mb-1">Filosofía</strong>
                                            {item.lesson}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}

                        {/* Current Phase */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="glass-card p-10 border-2 border-accent-copper/50 bg-gradient-to-br from-background-dark to-primary-dark/80 relative z-10 shadow-copper-glow"
                        >
                            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                                <div className="flex-shrink-0 w-20 h-20 rounded-full bg-accent-copper flex items-center justify-center text-4xl text-white shadow-lg shadow-accent-copper/30 animate-pulse-slow">
                                    🤝
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-4 font-heading">
                                        Nuestra Promesa
                                    </h3>
                                    <p className="text-primary-steel leading-relaxed mb-8">
                                        En ModulorIA, nuestra misión es clara: <strong className="text-white">Democratizar la eficiencia operativa en la construcción off-site.</strong> Queremos que tu equipo se dedique a construir, no a llenar hojas de cálculo.
                                    </p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {[
                                            "Exclusivo Construcción Modular",
                                            "Implementación Rápida",
                                            "Retorno de Inversión Claro",
                                            "Soporte Directo"
                                        ].map((p, i) => (
                                            <div key={i} className="flex items-center gap-3 text-sm text-gray-300 bg-white/5 px-4 py-2 rounded-lg border border-white/5">
                                                <span className="text-accent-copper font-bold">✓</span> {p}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ¿Por qué confiar? */}
            <section className="relative z-10 py-24">
                <div className="container-custom max-w-6xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-white mb-12 text-center font-heading"
                    >
                        ¿Por qué elegir a <span className="text-accent-copper">ModulorIA</span>?
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            { icon: "🎯", title: "100% Especialización", desc: "No trabajamos con retail ni e-commerce. Solo construcción modular. Hablamos tu misma jerga técnica." },
                            { icon: "👷", title: "Experiencia de Campo", desc: "Sabemos lo diferencia entre obra gris y acabados. Diseñamos soluciones que funcionan en la realidad, no solo en teoría." },
                            { icon: "⚡", title: "Impacto Inmediato", desc: "Buscamos 'Quick Wins'. Implementamos pilotos en menos de 1 semana para validar valor antes de escalar." },
                            { icon: "🤝", title: "Partners, no Proveedores", desc: "Nos integramos con tu equipo. Tu éxito operativo es nuestro único KPI válido." }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="glass-panel p-8 hover:bg-white/5 transition-all duration-300 hover:-translate-y-1 border border-white/5 hover:border-accent-copper/30"
                            >
                                <div className="text-5xl mb-6 filter drop-shadow-md">{item.icon}</div>
                                <h3 className="text-xl font-bold text-white mb-3 font-heading">{item.title}</h3>
                                <p className="text-primary-steel font-light leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="relative z-10 py-24 bg-background-end/20">
                <div className="container-custom max-w-5xl mx-auto text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-white mb-12 font-heading"
                    >
                        Nuestro <span className="text-accent-copper">Stack Tecnológico</span>
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="glass-panel p-10 text-left border border-white/10 shadow-2xl"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {[
                                { title: "⚙️ Automatización", items: ["n8n (Workflow automation)", "Make (Integromat)", "Zapier", "Python Scripts"] },
                                { title: "🤖 IA y ML", items: ["Claude 3.5 Sonnet", "GPT-4o", "Tesseract OCR", "Modelos Locales Llama 3"] },
                                { title: "📊 Datos", items: ["Airtable / Supabase", "PostgreSQL", "Power BI", "Google Sheets"] },
                                { title: "🔗 Integraciones", items: ["APIs REST", "Webhooks", "Email Parsing", "Lectura de Planos PDF"] }
                            ].map((stack, idx) => (
                                <div key={idx}>
                                    <h4 className="font-bold text-white mb-4 text-lg border-b border-white/10 pb-3 font-heading flex items-center gap-2">
                                        {stack.title}
                                    </h4>
                                    <ul className="space-y-3">
                                        {stack.items.map((tech, i) => (
                                            <li key={i} className="text-gray-300 text-sm flex items-center gap-3">
                                                <span className="w-2 h-2 rounded-full bg-accent-copper" /> {tech}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                        <div className="mt-10 pt-8 border-t border-white/10 text-center">
                            <p className="text-sm text-gray-400 italic font-light">
                                "Seleccionamos la herramienta más robusta y escalable para cada desafío específico, evitando costes innecesarios."
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="relative z-10 py-32">
                <div className="container-custom max-w-5xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="glass-panel p-16 text-center relative overflow-hidden border border-accent-copper/20 shadow-copper-glow"
                    >
                        <div className="absolute inset-0 bg-accent-copper/5 pointer-events-none" />

                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 relative z-10 font-heading">
                            ¿Listo para optimizar tu empresa?
                        </h2>
                        <p className="text-xl text-primary-steel mb-12 max-w-2xl mx-auto relative z-10 font-light leading-relaxed">
                            Si buscas eficiencia real en tus procesos de construcción modular, estamos aquí para ayudar.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
                            <Link
                                href="/auditoria"
                                className="btn-primary px-10 py-5 text-lg shadow-glow hover:shadow-copper-lg"
                            >
                                📞 Auditoría Gratuita
                            </Link>
                            <a
                                href="https://wa.me/4552801394"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-outline px-10 py-5 text-lg border-white/20 hover:bg-white/10"
                            >
                                💬 WhatsApp Directo
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
