'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-primary-dark/95 backdrop-blur-lg shadow-lg'
        : 'bg-transparent'
        }`}
    >
      <nav className="container-custom" aria-label="Navegación principal">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <Image
              src="/images/moduloria-logo.png"
              alt="ModulorIA Logo"
              width={44}
              height={36}
              className="transition-transform duration-300 group-hover:scale-110 object-contain"
              priority
            />
            <span className="text-2xl font-bold text-white tracking-tight">
              Modulor<span className="text-accent-copper">IA</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              href="/servicios"
              className="text-white hover:text-accent-copper transition-colors duration-300 font-medium"
            >
              Servicios
            </Link>

            <Link
              href="/precios"
              className="text-white hover:text-accent-copper transition-colors duration-300 font-medium"
            >
              Precios
            </Link>

            <Link
              href="/recursos"
              className="text-white hover:text-accent-copper transition-colors duration-300 font-medium"
            >
              Recursos
            </Link>

            <Link
              href="/sobre-moduloria"
              className="text-white hover:text-accent-copper transition-colors duration-300 font-medium"
            >
              Nosotros
            </Link>

            {/* CTA Button */}
            <Link
              href="/auditoria"
              className="btn-primary text-sm px-6 py-3"
            >
              🎯 Diagnóstico Estratégico
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2 focus:outline-none focus:ring-2 focus:ring-accent-copper rounded"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="lg:hidden bg-primary-dark border-t border-white/10 overflow-hidden"
            >
              <motion.div
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                exit={{ y: -20 }}
                transition={{ duration: 0.3 }}
                className="py-4 space-y-4"
              >
                <Link
                  href="/servicios"
                  className="block text-white hover:text-accent-copper transition-colors duration-300 py-2 px-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Servicios
                </Link>
                <Link
                  href="/precios"
                  className="block text-white hover:text-accent-copper transition-colors duration-300 py-2 px-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Precios
                </Link>
                <Link
                  href="/recursos"
                  className="block text-white hover:text-accent-copper transition-colors duration-300 py-2 px-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Recursos
                </Link>
                <Link
                  href="/sobre-moduloria"
                  className="block text-white hover:text-accent-copper transition-colors duration-300 py-2 px-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Nosotros
                </Link>
                <Link
                  href="/auditoria"
                  className="block btn-primary text-center mt-4 mx-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  🎯 Diagnóstico Estratégico
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
