'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, CheckCircle2, Star } from 'lucide-react';

const heroImages = [
  '/images/hero-tech-1.png',
  '/images/hero-1.png',
  '/images/hero-2.png',
  '/images/hero-3.png',
];

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (heroImages.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background-dark">
      {/* Dynamic Background Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full"
          >
            {/* Image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 mix-blend-overlay"
              style={{ backgroundImage: `url(${heroImages[currentImage]})` }}
            />
            {/* Overlays for readability & aesthetic */}
            <div className="absolute inset-0 bg-gradient-to-r from-background-dark/95 via-background-dark/80 to-background-dark/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent opacity-90" />
          </motion.div>
        </AnimatePresence>

        {/* Animated Grid/Tech Pattern */}
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-grid-pattern" />
      </div>

      {/* Main Content */}
      <div className="container-custom relative z-10 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Column: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="inline-flex items-center space-x-2 bg-primary-dark/50 backdrop-blur-md border border-primary-steel/30 rounded-full px-5 py-2 shadow-glow"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-copper opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-copper"></span>
              </span>
              <span className="text-secondary-beige text-sm font-medium tracking-wide uppercase font-heading">
                Tecnología de Automatización Modular
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-white font-heading tracking-tight">
              Automatización IA para la <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-copper via-white to-primary-light animate-breathing">
                Industria de la Construcción
              </span>
            </h1>

            {/* Subhead */}
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
              Sistema operativo inteligente para constructoras y fábricas modulares.
              <span className="text-white font-medium"> Recupera €100k+ anuales</span> automatizando la gestión de inventario, proyectos y producción.
            </p>

            {/* Benefits Grid (Mini) */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start text-sm text-gray-300 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-copper" />
                <span>ROI certificado en 21 días</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-copper" />
                <span>Integración No-Code</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 justify-center lg:justify-start">
              <Link
                href="#calculadora"
                className="btn-primary group w-full sm:w-auto gap-3"
              >
                Calcula tu ROI
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/demo"
                className="btn-outline group w-full sm:w-auto gap-3"
              >
                <Play className="w-5 h-5 fill-current" />
                Demo Interactiva
              </Link>
            </div>

            {/* Social Proof */}
            <div className="pt-8 border-t border-white/5 flex items-center justify-center lg:justify-start gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-background-dark border-2 border-primary-medium overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-light/20 to-primary-dark/80" />
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <div className="flex items-center text-accent-copper gap-0.5">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                </div>
                <p className="text-primary-steel font-heading text-xs uppercase tracking-wider mt-1">Software Estándar en Latam & España</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive/Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="hidden lg:block relative perspective-1000"
          >
            {/* Glass Card Floating */}
            <div className="glass-card transform rotate-y-12 rotate-x-6 hover:rotate-0 transition-all duration-700 ease-out hover:scale-105">
              <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
                <div>
                  <h3 className="text-white font-heading font-semibold text-lg">Panel de Control de Planta</h3>
                  <p className="text-xs text-primary-steel uppercase tracking-widest">Estado en Tiempo Real</p>
                </div>
                <div className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-bold flex items-center gap-2 border border-green-500/20 shadow-[0_0_10px_rgba(74,222,128,0.2)]">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  SISTEMA ACTIVO
                </div>
              </div>

              {/* Simulated Graph */}
              <div className="h-40 flex items-end justify-between gap-3 mb-6 px-2">
                {[30, 45, 35, 60, 55, 80, 75, 95].map((h, i) => (
                  <div key={i} className="w-full bg-primary-dark/50 rounded-t-sm relative group overflow-hidden">
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 1.5, delay: 0.5 + (i * 0.1) }}
                      className="w-full bg-gradient-to-t from-accent-copper/40 to-accent-copper absolute bottom-0 rounded-t-sm group-hover:bg-primary-light transition-colors"
                    >
                      <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/50" />
                    </motion.div>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-background-dark/40 p-4 rounded-xl border border-white/5 hover:border-primary-steel/30 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-primary-medium/20 text-accent-copper flex items-center justify-center border border-accent-copper/20">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-primary-steel uppercase tracking-wider">Última Acción</div>
                    <div className="text-sm text-white font-medium">Inventario Sincronizado: Módulo B4</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-background-dark/40 p-4 rounded-xl border border-white/5 hover:border-primary-steel/30 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-primary-medium/20 text-primary-light flex items-center justify-center border border-primary-light/20">
                    <Star className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-primary-steel uppercase tracking-wider">Proyección</div>
                    <div className="text-sm text-white font-medium">Ahorro Mensual Estimado: €12,450</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements around floating card */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent-copper/20 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary-medium/20 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>
          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        >
          <span className="text-[10px] text-primary-steel uppercase tracking-[0.2em] font-heading">Explorar Soluciones</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-accent-copper via-accent-copper/50 to-transparent"></div>
        </motion.div>

      </div>
    </section>
  );
}
