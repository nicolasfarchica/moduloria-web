'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
          <Link href="/" className="flex items-center space-x-3 group">
            <Image
              src="/logo-moduloria.png"
              alt="ModulorIA Logo"
              width={48}
              height={48}
              className="transition-transform duration-300 group-hover:scale-105"
              priority
            />
            <span className="text-2xl font-bold text-white">
              Modulor<span className="text-accent-copper">IA</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="relative group">
              <button className="text-white hover:text-accent-copper transition-colors duration-300 font-medium">
                Problemas ▾
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-primary-dark/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-glow opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left">
                <Link
                  href="/problemas#quick-wins"
                  className="block px-4 py-3 text-gray-300 hover:bg-white/5 hover:text-accent-copper transition-colors duration-200 first:rounded-t-xl"
                >
                  Quick Wins
                </Link>
                <Link
                  href="/problemas#high-impact"
                  className="block px-4 py-3 text-gray-300 hover:bg-white/5 hover:text-accent-copper transition-colors duration-200"
                >
                  High Impact
                </Link>
                <Link
                  href="/problemas"
                  className="block px-4 py-3 text-gray-300 hover:bg-white/5 hover:text-accent-copper transition-colors duration-200 last:rounded-b-xl border-t border-white/5"
                >
                  Ver todos los problemas
                </Link>
              </div>
            </div>

            <div className="relative group">
              <button className="text-white hover:text-accent-copper transition-colors duration-300 font-medium font-heading">
                Soluciones ▾
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-primary-dark/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-glow opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left">
                <Link
                  href="/soluciones#auditoria"
                  className="block px-4 py-3 text-gray-300 hover:bg-white/5 hover:text-accent-copper transition-colors duration-200 first:rounded-t-xl"
                >
                  Auditoría
                </Link>
                <Link
                  href="/soluciones#quick-win"
                  className="block px-4 py-3 text-gray-300 hover:bg-white/5 hover:text-accent-copper transition-colors duration-200"
                >
                  Quick Win
                </Link>
                <Link
                  href="/soluciones#high-impact"
                  className="block px-4 py-3 text-gray-300 hover:bg-white/5 hover:text-accent-copper transition-colors duration-200 last:rounded-b-xl"
                >
                  High Impact
                </Link>
              </div>
            </div>

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
              href="/sobre-nicolas"
              className="text-white hover:text-accent-copper transition-colors duration-300 font-medium"
            >
              Nosotros
            </Link>

            {/* CTA Button */}
            <Link
              href="/auditoria"
              className="btn-primary text-sm px-6 py-3"
            >
              🔍 Auditoría Gratis
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
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-primary-dark border-t border-white/10">
            <div className="py-4 space-y-4">
              <Link
                href="/problemas"
                className="block text-white hover:text-accent-copper transition-colors duration-300 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Problemas
              </Link>
              <Link
                href="/soluciones"
                className="block text-white hover:text-accent-copper transition-colors duration-300 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Soluciones
              </Link>
              <Link
                href="/precios"
                className="block text-white hover:text-accent-copper transition-colors duration-300 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Precios
              </Link>
              <Link
                href="/recursos"
                className="block text-white hover:text-accent-copper transition-colors duration-300 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Recursos
              </Link>
              <Link
                href="/sobre-nicolas"
                className="block text-white hover:text-accent-copper transition-colors duration-300 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Nosotros
              </Link>
              <Link
                href="/auditoria"
                className="block btn-primary text-center mt-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                🔍 Auditoría Gratis
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
