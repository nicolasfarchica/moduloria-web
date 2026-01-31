'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Zap, AlertCircle, CheckCircle2, TrendingUp, Cpu } from 'lucide-react';

const ComparisonServiceSection = () => {
    const comparisonData = [
        {
            title: "Extracción de Datos (OCR)",
            manualPrefix: "Proceso Tradicional",
            manualTime: "2-3 Horas / Día",
            manualDesc: "Picado manual de facturas y albaranes. Errores de transcripción constantes.",
            aiPrefix: "ModulorIA process",
            aiTime: "5 Segundos",
            aiDesc: "Extracción instantánea con 99% de precisión. Integración directa con tu ERP.",
            icon: <Clock className="w-6 h-6" />
        },
        {
            title: "Reportes de Obra",
            manualPrefix: "Proceso Tradicional",
            manualTime: "Fin de Jornada",
            manualDesc: "El jefe de obra dedica su tiempo de descanso a rellenar partes en papel o Excel.",
            aiPrefix: "ModulorIA process",
            aiTime: "Tiempo Real",
            aiDesc: "Dictado por voz vía WhatsApp. Reportes generados y analizados al instante.",
            icon: <Zap className="w-6 h-6" />
        },
        {
            title: "Generación de Presupuestos",
            manualPrefix: "Proceso Tradicional",
            manualTime: "48-72 Horas",
            manualDesc: "Dependencia de la oficina técnica para cálculos y disponibilidad de materiales.",
            aiPrefix: "ModulorIA process",
            aiTime: "Instantáneo",
            aiDesc: "Agentes de IA calculan costes y disponibilidad cruzando datos históricos.",
            icon: <TrendingUp className="w-6 h-6" />
        }
    ];

    return (
        <section className="section-padding relative overflow-hidden bg-background-start">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden opacity-20">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-accent-copper/20 blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-primary-steel/20 blur-[120px]" />
            </div>

            <div className="container-custom relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6"
                    >
                        <Cpu className="w-4 h-4 text-accent-copper" />
                        <span className="text-accent-copper text-xs font-bold uppercase tracking-wider">Efficiency Redefined</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading"
                    >
                        Traditional vs. <span className="text-accent-copper">AI-Powered</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-slate-400 max-w-2xl mx-auto text-lg"
                    >
                        No solo es más rápido, es una forma completamente nueva de operar tu empresa constructora.
                        Menos fricción, más rentabilidad.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 gap-12 max-w-5xl mx-auto">
                    {comparisonData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: index * 0.1 }}
                            className="group relative"
                        >
                            {/* Feature Title Mobile */}
                            <div className="md:hidden text-center mb-4">
                                <h3 className="text-xl font-bold text-white flex items-center justify-center gap-2">
                                    <span className="text-accent-copper">{item.icon}</span>
                                    {item.title}
                                </h3>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-4 md:gap-0">
                                {/* Traditional Side */}
                                <div className="glass-card !p-6 border-white/5 hover:border-white/10 transition-colors bg-white/[0.02]">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-primary-steel text-xs font-bold uppercase tracking-widest">{item.manualPrefix}</span>
                                        <AlertCircle className="w-5 h-5 text-primary-steel/50" />
                                    </div>
                                    <div className="text-2xl font-bold text-slate-300 mb-2">{item.manualTime}</div>
                                    <p className="text-sm text-slate-500 leading-relaxed italic">{item.manualDesc}</p>
                                </div>

                                {/* Center Icon/Arrow */}
                                <div className="flex flex-col items-center justify-center p-4 z-20">
                                    <div className="hidden md:block w-px h-12 bg-gradient-to-b from-transparent via-white/10 to-transparent mb-2" />
                                    <div className="w-10 h-10 rounded-full bg-accent-copper/10 border border-accent-copper/20 flex items-center justify-center text-accent-copper shadow-copper-glow/20">
                                        <Zap className="w-5 h-5 fill-accent-copper/20" />
                                    </div>
                                    <div className="hidden md:block w-px h-12 bg-gradient-to-b from-transparent via-white/10 to-transparent mt-2" />
                                </div>

                                {/* AI-Powered Side */}
                                <div className="glass-card !p-6 border-accent-copper/20 bg-accent-copper/[0.03] shadow-copper-glow/5 relative">
                                    <div className="absolute top-0 right-0 p-4 opacity-10">
                                        {item.icon}
                                    </div>
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-accent-copper text-xs font-bold uppercase tracking-widest">{item.aiPrefix}</span>
                                        <CheckCircle2 className="w-5 h-5 text-accent-copper" />
                                    </div>
                                    <div className="text-2xl font-bold text-white mb-2">{item.aiTime}</div>
                                    <p className="text-sm text-slate-300 leading-relaxed font-medium">{item.aiDesc}</p>
                                </div>
                            </div>

                            {/* Feature Title Desktop (Split) */}
                            <div className="hidden md:block absolute -top-8 left-1/2 -translate-x-1/2 px-6 py-2 bg-background-start border border-white/5 rounded-full">
                                <h3 className="text-sm font-bold text-white whitespace-nowrap">{item.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="mt-20 text-center"
                >
                    <a href="/auditoria" className="btn-primary">
                        Calcula tu ahorro real
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default ComparisonServiceSection;
