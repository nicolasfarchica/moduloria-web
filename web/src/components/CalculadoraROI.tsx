'use client';

import { useState } from 'react';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export default function CalculadoraROI() {
  const t = useTranslations('home.calculator');
  const [facturas, setFacturas] = useState(100);
  const [proyectos, setProyectos] = useState(5);
  const [horasAdmin, setHorasAdmin] = useState(20);

  // Estilos para los sliders
  const sliderStyle = `
    input[type="range"] {
      -webkit-appearance: none;
      appearance: none;
      width: 100%;
      height: 8px;
      border-radius: 4px;
      outline: none;
    }

    input[type="range"]::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: #C67A52;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    input[type="range"]::-webkit-slider-thumb:hover {
      transform: scale(1.2);
      box-shadow: 0 0 10px rgba(198, 122, 82, 0.5);
    }

    input[type="range"]::-moz-range-thumb {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: #C67A52;
      cursor: pointer;
      border: none;
      transition: all 0.2s ease;
    }

    input[type="range"]::-moz-range-thumb:hover {
      transform: scale(1.2);
      box-shadow: 0 0 10px rgba(198, 122, 82, 0.5);
    }
  `;

  // Cálculos
  const ahorroFacturas = facturas * 12 * 8; // €8/factura promedio
  const ahorroProyectos = proyectos * 12 * 50; // €50/proyecto/mes en seguimiento
  const ahorroHoras = horasAdmin * 4 * 35 * 12; // €35/hora * 4 semanas * 12 meses
  const ahorroTotal = ahorroFacturas + ahorroProyectos + ahorroHoras;
  const roiMeses = Math.max(1, Math.ceil((8000 / ahorroTotal) * 12));

  return (
    <section id="calculadora" className="section-padding bg-background-end relative overflow-hidden">
      {/* Estilos para sliders */}
      <style dangerouslySetInnerHTML={{ __html: sliderStyle }} />

      {/* Background Decoration */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-medium/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
            {t('title')} <span className="text-accent-copper">{t('titleHighlight')}</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto font-light">
            {t('subtitle')}
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Inputs */}
            <div className="glass-card space-y-8">
              <div>
                <label className="flex justify-between items-center mb-3">
                  <span className="text-white font-semibold">{t('invoicesLabel')}</span>
                  <span className="text-accent-copper text-2xl font-bold">{facturas}</span>
                </label>
                <input
                  type="range"
                  min="10"
                  max="500"
                  step="10"
                  value={facturas}
                  onChange={(e) => setFacturas(Number(e.target.value))}
                  className="w-full cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #C67A52 0%, #C67A52 ${((facturas - 10) / 490) * 100}%, #334155 ${((facturas - 10) / 490) * 100}%, #334155 100%)`
                  }}
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>10</span>
                  <span>500+</span>
                </div>
              </div>

              <div>
                <label className="flex justify-between items-center mb-3">
                  <span className="text-white font-semibold">{t('projectsLabel')}</span>
                  <span className="text-accent-copper text-2xl font-bold">{proyectos}</span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="50"
                  step="1"
                  value={proyectos}
                  onChange={(e) => setProyectos(Number(e.target.value))}
                  className="w-full cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #C67A52 0%, #C67A52 ${((proyectos - 1) / 49) * 100}%, #334155 ${((proyectos - 1) / 49) * 100}%, #334155 100%)`
                  }}
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>1</span>
                  <span>50+</span>
                </div>
              </div>

              <div>
                <label className="flex justify-between items-center mb-3">
                  <span className="text-white font-semibold">{t('adminHoursLabel')}</span>
                  <span className="text-accent-copper text-2xl font-bold">{horasAdmin}</span>
                </label>
                <input
                  type="range"
                  min="5"
                  max="60"
                  step="5"
                  value={horasAdmin}
                  onChange={(e) => setHorasAdmin(Number(e.target.value))}
                  className="w-full cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #C67A52 0%, #C67A52 ${((horasAdmin - 5) / 55) * 100}%, #334155 ${((horasAdmin - 5) / 55) * 100}%, #334155 100%)`
                  }}
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>5</span>
                  <span>60+</span>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="glass-card bg-gradient-to-br from-white/5 to-accent-copper/5 border-accent-copper/20">
              <div className="text-center mb-8">
                <div className="text-slate-400 text-sm uppercase tracking-wider mb-2">{t('results.title')}</div>
                <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-copper to-white mb-2 font-heading">
                  €{ahorroTotal.toLocaleString('es-ES')}
                </div>
                <div className="text-slate-300 text-sm">≈ €{Math.round(ahorroTotal / 12).toLocaleString('es-ES')}{t('results.monthly')}</div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
                  <span className="text-slate-300">💰 {t('results.invoices')}</span>
                  <span className="text-white font-bold">€{ahorroFacturas.toLocaleString('es-ES')}{t('results.perYear')}</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
                  <span className="text-slate-300">📊 {t('results.projects')}</span>
                  <span className="text-white font-bold">€{ahorroProyectos.toLocaleString('es-ES')}{t('results.perYear')}</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
                  <span className="text-slate-300">⏱️ {t('results.adminHours')}</span>
                  <span className="text-white font-bold">€{ahorroHoras.toLocaleString('es-ES')}{t('results.perYear')}</span>
                </div>
              </div>

              <div className="p-6 bg-accent-copper/10 border border-accent-copper/30 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-slate-300 text-sm mb-1">{t('results.roiLabel')}</div>
                    <div className="text-3xl font-bold text-white font-heading">
                      {roiMeses} {roiMeses === 1 ? t('results.month') : t('results.months')}
                    </div>
                  </div>
                  <div className="text-5xl">🚀</div>
                </div>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 text-center">
            <p className="text-slate-500 text-sm max-w-3xl mx-auto mb-6">
              {t('disclaimer')}
            </p>
            <Link
              href="/auditoria"
              className="btn-primary inline-flex items-center gap-2 px-8 py-4 text-lg shadow-copper-glow hover:scale-105 transition-transform"
            >
              📞 {t('cta')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
