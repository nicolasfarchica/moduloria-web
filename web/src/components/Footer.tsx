'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-dark border-t border-white/5">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div>
            <Link href="/" className="flex items-center space-x-2 group mb-6">
              <Image
                src="/images/moduloria-logo-circular.png"
                alt="ModulorIA Logo"
                width={40}
                height={40}
                className="transition-transform duration-300 group-hover:scale-110 rounded-full"
              />
              <span className="text-2xl font-bold text-white tracking-tight">
                Modulor<span className="text-accent-copper">IA</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Automatización con IA especializada en construcción modular.
              Ahorra tiempo, reduce errores, escala sin contratar.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/108241372/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-accent-copper transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/moduloria"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-accent-copper transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61585194150495"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-accent-copper transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Soluciones */}
          <div>
            <h3 className="text-white font-bold mb-4 text-lg">Soluciones</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/#servicios" className="text-slate-400 hover:text-accent-copper transition-colors text-sm">
                  Servicios de IA
                </Link>
              </li>
              <li>
                <Link href="/#calculadora" className="text-slate-400 hover:text-accent-copper transition-colors text-sm">
                  Calculadora de ROI
                </Link>
              </li>
              <li>
                <Link href="/#diferenciadores" className="text-slate-400 hover:text-accent-copper transition-colors text-sm">
                  Nuestros Diferenciadores
                </Link>
              </li>
              <li>
                <Link href="/#como-funciona" className="text-slate-400 hover:text-accent-copper transition-colors text-sm">
                  Cómo Funciona
                </Link>
              </li>
              <li>
                <Link href="/auditoria" className="text-slate-400 hover:text-accent-copper transition-colors text-sm">
                  Diagnóstico Estratégico
                </Link>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="text-white font-bold mb-4 text-lg">Empresa</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/sobre-moduloria" className="text-slate-400 hover:text-accent-copper transition-colors text-sm">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-slate-400 hover:text-accent-copper transition-colors text-sm">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/precios" className="text-slate-400 hover:text-accent-copper transition-colors text-sm">
                  Precios
                </Link>
              </li>
              <li>
                <Link href="/recursos" className="text-slate-400 hover:text-accent-copper transition-colors text-sm">
                  Recursos
                </Link>
              </li>
              <li>
                <Link href="/newsletter" className="text-slate-400 hover:text-accent-copper transition-colors text-sm">
                  Newsletter
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="text-slate-400 hover:text-accent-copper transition-colors text-sm">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-white font-bold mb-4 text-lg">Contacto</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:contacto@moduloria.com"
                  className="text-slate-400 hover:text-accent-copper transition-colors text-sm flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  contacto@moduloria.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+4552801394"
                  className="text-slate-400 hover:text-accent-copper transition-colors text-sm flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  +45 5280 1394
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/4552801394"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-accent-copper transition-colors text-sm flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>
              </li>
              <li className="pt-4">
                <Link
                  href="/auditoria"
                  className="btn-primary text-sm px-4 py-2 inline-block"
                >
                  Agendar Diagnóstico
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {currentYear} ModulorIA. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <Link href="/privacidad" className="text-slate-500 hover:text-accent-copper transition-colors text-sm">
              Política de Privacidad
            </Link>
            <Link href="/terminos" className="text-slate-500 hover:text-accent-copper transition-colors text-sm">
              Términos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
