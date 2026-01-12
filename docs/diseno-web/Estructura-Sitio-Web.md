# 🌐 ESTRUCTURA Y ARQUITECTURA SITIO WEB - ModulorIA

**Fecha:** 4 de diciembre de 2025
**Versión:** 2.0 (incorpora mejores prácticas web 2019-2025)
**Objetivo:** Sitio web optimizado para conversión, performance (CWV), accesibilidad (WCAG 2.2 AA) y SEO

---

## 🎯 OBJETIVOS DEL SITIO WEB

### Objetivo Primario:
**Generar 10-15 leads calificados/mes para auditorías gratuitas de 30 minutos**

### Objetivos Secundarios:
1. LCP ≤ 2.5s, INP ≤ 200ms, CLS < 0.1 (Core Web Vitals excelentes)
2. 100% WCAG 2.2 AA compliance (accesibilidad total)
3. Educar al mercado (posicionar como autoridad en automatización construcción modular)
4. Tasa de conversión visitante → lead ≥ 5-10%
5. Capturar emails para nurturing con lead magnets

### KPIs Principales:
- **Conversión:** 5-10% visitantes → auditoría agendada o calculadora usada
- **Performance:** Lighthouse ≥ 90 en todas las categorías
- **Engagement:** Tiempo en sitio > 3 min, páginas/sesión > 2.5
- **SEO:** Posicionar top 10 para "automatización construcción modular", "IA construcción industrializada"

---

## 🗺️ ARQUITECTURA DE INFORMACIÓN (Sitemap)

```
moduloria.com
│
├── 🏠 HOME (/)
│   ├── Hero + Propuesta valor
│   ├── Calculadora ROI interactiva
│   ├── Problemas (grid 6-9 problemas destacados)
│   ├── Cómo funciona (3 pasos)
│   ├── Diferenciadores vs competencia
│   ├── Precios (tabla transparente)
│   ├── CTA auditoría
│   └── FAQ (objeciones comunes)
│
├── 📊 PROBLEMAS (/problemas)
│   ├── /problemas (index: 25 problemas organizados por tier)
│   │   ├── [TAB] Quick Wins (8 problemas)
│   │   ├── [TAB] High Impact (10 problemas)
│   │   └── [TAB] Transformacionales (7 problemas)
│   │
│   └── Landing pages individuales (template replicado 25×):
│       ├── /problemas/clasificacion-emails (#01)
│       ├── /problemas/ocr-facturas (#03)
│       ├── /problemas/tracking-herramientas (#08)
│       ├── /problemas/reportes-obra (#07)
│       ├── /problemas/control-materiales (#05)
│       └── ... (20 más)
│
├── 💡 SOLUCIONES (/soluciones)
│   ├── Visión general paquetes
│   ├── Auditoría (€1.5K-€3K)
│   ├── Quick Win (€3K-€8K)
│   ├── High Impact (€8K-€15K)
│   ├── Transformacional (€15K-€25K)
│   └── Retainer mensual (€500-€1.5K)
│
├── 💰 PRECIOS (/precios)
│   ├── Tabla comparativa paquetes
│   ├── ¿Qué incluye cada uno?
│   ├── Calculadora ROI avanzada
│   └── FAQ de precios
│
├── 📚 CASOS DE ÉXITO (/casos)
│   ├── [INICIALMENTE] "Primeros proyectos en implementación - casos Q1 2026"
│   ├── [FUTURO] 3-5 casos detallados con ROI medido
│   └── Empresa piloto CTA (20% descuento)
│
├── 🎓 RECURSOS (/recursos)
│   ├── Guías descargables (lead magnets):
│   │   ├── "25 Procesos Automatizables en Construcción Modular" [PDF]
│   │   ├── "Calculadora Excel: ¿Cuánto pierdes en tareas manuales?"
│   │   ├── "Checklist: ¿Está tu proceso listo para IA?" [PDF]
│   │   └── "Guía: Cómo preparar tu empresa para automatización" [PDF]
│   ├── /recursos/blog (artículos SEO)
│   └── /recursos/videos (tutoriales embedidos YouTube)
│
├── 👤 SOBRE NICOLÁS (/sobre-nicolas)
│   ├── Historia de origen (Brand Story)
│   ├── Por qué existe ModulorIA
│   ├── Experiencia construcción + IA
│   ├── Foto profesional
│   └── LinkedIn, contacto
│
├── 📞 AUDITORÍA GRATUITA (/auditoria)
│   ├── Calendly embedido (30 min slots)
│   ├── Formulario pre-auditoría (contexto empresa)
│   ├── Qué esperar (proceso detallado)
│   └── Testimonios (cuando estén disponibles)
│
└── 📧 CONTACTO (/contacto)
    ├── Formulario contacto
    ├── Email: nicolas@moduloria.com
    ├── WhatsApp: +34 XXX XXX XXX
    └── LinkedIn: /in/nicolasfarchica
```

---

## 🎨 HOMEPAGE - WIREFRAME DETALLADO

### NAVEGACIÓN (Header - Sticky)

**Desktop:**
```
┌─────────────────────────────────────────────────────────┐
│ [LOGO MODULORIA]  Problemas▼  Soluciones▼  Precios      │
│                   Recursos▼   Sobre Nicolás             │
│                              [🔍AUDITORÍA GRATIS] (CTA)  │
└─────────────────────────────────────────────────────────┘
```

**Mobile (Hamburger):**
```
[≡ MENÚ]  [LOGO]  [AUDITORÍA]
```

**Accesibilidad:**
- `<nav aria-label="Navegación principal">`
- Skip link: "Saltar al contenido principal"
- Foco visible en todos los elementos (outline 2px, contraste 3:1)
- Target size mínimo 44×44 px (WCAG 2.2 - 2.5.8)

---

### SECCIÓN 1: HERO (Above the fold - 100vh)

```
┌─────────────────────────────────────────────────────────┐
│                                                           │
│  [IMAGEN optimizada: Gerente construcción + tablet]     │
│  Alt: "Gerente de construcción modular usando tablet"   │
│  Format: AVIF/WebP, dimensions: 1200×800                │
│  fetchpriority="high" (para LCP ≤ 2.5s)                 │
│                                                           │
│  <h1>                                                     │
│  Automatización IA para Construcción Modular             │
│  </h1>                                                    │
│                                                           │
│  <p class="subheadline">                                 │
│  Ahorra €67K-€156K/año automatizando procesos            │
│  operativos. ROI en 2-3 semanas. Sin programar.          │
│  </p>                                                     │
│                                                           │
│  [BOTÓN PRIMARIO: 🧮 Calcular mi ahorro]                 │
│  [BOTÓN SECUNDARIO: 📞 Auditoría gratis 30 min]          │
│                                                           │
│  <ul class="beneficios-clave">                           │
│    ✓ Implementación 2-4 semanas                          │
│    ✓ Precios transparentes desde €3K                     │
│    ✓ 100% especializado en construcción modular          │
│  </ul>                                                    │
│                                                           │
│  [Scroll indicator ↓]                                    │
│                                                           │
└─────────────────────────────────────────────────────────┘
```

**Copy exacto:**
- **H1:** "Automatización IA para Construcción Modular"
- **Subheadline:** "Ahorra €67K-€156K/año automatizando procesos operativos. ROI en 2-3 semanas. Sin programar."
- **CTA Primario:** Botón verde 48×200px, "Calcular mi ahorro" → abre calculadora inline
- **CTA Secundario:** Botón outline, "Auditoría gratis 30 min" → /auditoria

**Performance:**
- Imagen hero: AVIF primary, WebP fallback, JPG final fallback
- CSS crítico inline (<14KB)
- Fuentes: `font-display: swap`, preload de variantes principales
- LCP target: ≤ 2.5s en móvil 4G

**Accesibilidad:**
- Contraste texto/fondo ≥ 4.5:1
- Botones con `aria-label` descriptivos
- Imagen con `alt` significativo
- Focus visible en CTAs

---

### SECCIÓN 2: CALCULADORA ROI (Interactiva - Engagement)

```
┌─────────────────────────────────────────────────────────┐
│ <h2>¿Cuánto pierdes en tareas manuales?</h2>            │
│ <p>Calcula tu ahorro potencial en 30 segundos</p>       │
│                                                           │
│ <form id="calculadora-roi" aria-labelledby="calc-title">│
│                                                           │
│   <label for="empleados">                                │
│     ¿Cuántos empleados tiene tu empresa?                 │
│   </label>                                                │
│   <input type="number" id="empleados" min="1" max="250"  │
│          aria-describedby="empleados-hint">              │
│   <span id="empleados-hint">Entre 1 y 250 empleados</span>│
│                                                           │
│   <label for="facturas">                                 │
│     ¿Cuántas facturas procesan por semana?               │
│   </label>                                                │
│   <input type="number" id="facturas" min="0" max="200">  │
│                                                           │
│   <label for="obras">                                    │
│     ¿Cuántas obras activas simultáneas?                  │
│   </label>                                                │
│   <input type="range" id="obras" min="1" max="50"        │
│          aria-valuemin="1" aria-valuemax="50"            │
│          aria-valuenow="5">                              │
│   <output for="obras">5 obras</output>                   │
│                                                           │
│   <label for="reportes">                                 │
│     ¿Cuántos reportes generan por semana?                │
│   </label>                                                │
│   <input type="number" id="reportes" min="0" max="100">  │
│                                                           │
│   <button type="submit" aria-live="polite">              │
│     Calcular mi ahorro                                   │
│   </button>                                                │
│                                                           │
│ </form>                                                   │
│                                                           │
│ <div id="resultados" role="region" aria-live="polite"    │
│      aria-label="Resultados del cálculo" hidden>         │
│                                                           │
│   <h3>📊 Tu ahorro potencial</h3>                        │
│   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━                     │
│                                                           │
│   <p class="ahorro-total">                               │
│     <strong>€87.400/año</strong>                         │
│     en procesos automatizables                           │
│   </p>                                                    │
│                                                           │
│   <p class="horas-recuperadas">                          │
│     ⏱️ <strong>18.5 horas/semana</strong> recuperadas   │
│   </p>                                                    │
│                                                           │
│   <h4>Top 3 oportunidades para TU empresa:</h4>          │
│   <ol class="oportunidades-list">                        │
│     <li>                                                  │
│       <span class="problema-numero">#03</span>           │
│       <span class="problema-titulo">OCR Facturas</span>  │
│       <span class="ahorro-anual">€34.000/año</span>     │
│       <a href="/problemas/ocr-facturas">Ver detalles</a> │
│     </li>                                                 │
│     <li>                                                  │
│       <span class="problema-numero">#07</span>           │
│       <span class="problema-titulo">Reportes Obra</span> │
│       <span class="ahorro-anual">€28.000/año</span>     │
│       <a href="/problemas/reportes-obra">Ver detalles</a>│
│     </li>                                                 │
│     <li>                                                  │
│       <span class="problema-numero">#01</span>           │
│       <span class="problema-titulo">Emails</span>        │
│       <span class="ahorro-anual">€25.400/año</span>     │
│       <a href="/problemas/clasificacion-emails">         │
│         Ver detalles                                     │
│       </a>                                                │
│     </li>                                                 │
│   </ol>                                                   │
│                                                           │
│   <div class="cta-resultados">                           │
│     <button class="btn-primary">                         │
│       📞 Agendar auditoría                               │
│     </button>                                             │
│     <button class="btn-secondary">                       │
│       📥 Recibir informe PDF por email                   │
│     </button>                                             │
│   </div>                                                  │
│                                                           │
│ </div>                                                    │
│                                                           │
└─────────────────────────────────────────────────────────┘
```

**Lógica JavaScript (optimizada INP ≤ 200ms):**

```javascript
// Debounce para evitar cálculos excesivos
const debounce = (fn, delay) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };
};

// Cálculo ROI optimizado (< 50ms)
const calcularROI = (inputs) => {
  const { empleados, facturas, obras, reportes } = inputs;
  let ahorroTotal = 0;
  const oportunidades = [];

  // #03 OCR Facturas
  if (facturas >= 10) {
    const horasAno = (facturas * 5 / 60) * 52;
    const ahorro = Math.round(horasAno * 18);
    ahorroTotal += ahorro;
    oportunidades.push({
      id: '03',
      nombre: 'OCR Facturas',
      ahorro,
      slug: 'ocr-facturas'
    });
  }

  // #07 Reportes Obra
  if (reportes >= 5) {
    const horasAno = (reportes * 30 / 60) * 52;
    const ahorro = Math.round(horasAno * 22);
    ahorroTotal += ahorro;
    oportunidades.push({
      id: '07',
      nombre: 'Reportes Obra',
      ahorro,
      slug: 'reportes-obra'
    });
  }

  // #01 Clasificación Emails (basado en empleados)
  if (empleados >= 5) {
    const horasAno = (empleados * 0.5) * 250; // 30min/día por persona
    const ahorro = Math.round(horasAno * 25);
    ahorroTotal += ahorro;
    oportunidades.push({
      id: '01',
      nombre: 'Clasificación Emails',
      ahorro,
      slug: 'clasificacion-emails'
    });
  }

  // Ordenar por ahorro descendente y tomar top 3
  const top3 = oportunidades
    .sort((a, b) => b.ahorro - a.ahorro)
    .slice(0, 3);

  const horasRecuperadas = (ahorroTotal / 20 / 52).toFixed(1);

  return { ahorroTotal, top3, horasRecuperadas };
};

// Event handler con Web Worker para cálculos pesados (si escala)
document.getElementById('calculadora-roi')
  .addEventListener('submit', (e) => {
    e.preventDefault();

    const inputs = {
      empleados: +document.getElementById('empleados').value,
      facturas: +document.getElementById('facturas').value,
      obras: +document.getElementById('obras').value,
      reportes: +document.getElementById('reportes').value
    };

    // Cálculo instantáneo (< 50ms)
    const resultados = calcularROI(inputs);

    // Renderizar resultados con animación suave
    mostrarResultados(resultados);

    // Analytics event
    gtag('event', 'calculadora_usado', {
      ahorro_total: resultados.ahorroTotal,
      empleados: inputs.empleados
    });
  });
```

**Performance:**
- Cálculos < 50ms (no bloquean INP)
- Debounce en inputs para evitar re-cálculos excesivos
- Lazy-load del script calculadora hasta scroll a sección

**Accesibilidad:**
- `<label>` correctamente asociados a inputs
- `aria-live="polite"` en resultados (lectores de pantalla anuncian cambios)
- `aria-describedby` para hints
- Rango con `aria-valuemin`, `aria-valuemax`, `aria-valuenow`
- Focus management al mostrar resultados

---

### SECCIÓN 3: PROBLEMAS (Pain Points Grid)

```
┌─────────────────────────────────────────────────────────┐
│ <h2>¿Te suena familiar?</h2>                             │
│ <p>                                                       │
│   Estos son los problemas que más cuestan tiempo y       │
│   dinero a empresas de construcción modular como la tuya │
│ </p>                                                      │
│                                                           │
│ <nav class="problemas-tabs" role="tablist">              │
│   <button role="tab" aria-selected="true"                │
│           aria-controls="quick-wins-panel"               │
│           id="quick-wins-tab">                           │
│     Quick Wins                                           │
│   </button>                                               │
│   <button role="tab" aria-selected="false"               │
│           aria-controls="high-impact-panel"              │
│           id="high-impact-tab">                          │
│     High Impact                                          │
│   </button>                                               │
│   <button role="tab" aria-selected="false"               │
│           aria-controls="transform-panel"                │
│           id="transform-tab">                            │
│     Transformacionales                                   │
│   </button>                                               │
│ </nav>                                                    │
│                                                           │
│ <div role="tabpanel" id="quick-wins-panel"               │
│      aria-labelledby="quick-wins-tab">                   │
│                                                           │
│   <div class="problemas-grid">                           │
│   <!-- Grid 3 columnas desktop, 1 columna móvil -->      │
│                                                           │
│     <article class="problema-card">                      │
│       <span class="problema-badge">#01</span>            │
│       <h3>                                                │
│         <a href="/problemas/clasificacion-emails">       │
│           📧 Clasificación de Emails                     │
│         </a>                                              │
│       </h3>                                               │
│       <p class="problema-descripcion">                   │
│         500+ emails sin clasificar. Pierdes 60 min/día   │
│         buscando lo importante entre spam y urgencias.   │
│       </p>                                                │
│       <p class="problema-ahorro">                        │
│         <strong>Ahorro:</strong> €24K-€48K/año           │
│       </p>                                                │
│       <a href="/problemas/clasificacion-emails"          │
│          class="btn-link"                                │
│          aria-label="Ver solución para clasificación     │
│                      de emails">                         │
│         Ver solución →                                   │
│       </a>                                                │
│     </article>                                            │
│                                                           │
│     <article class="problema-card">                      │
│       <span class="problema-badge">#03</span>            │
│       <h3>                                                │
│         <a href="/problemas/ocr-facturas">               │
│           🧾 OCR de Facturas                             │
│         </a>                                              │
│       </h3>                                               │
│       <p class="problema-descripcion">                   │
│         Transcribir facturas a mano 5 min cada una.      │
│         40 facturas/semana = 200 min perdidos.           │
│       </p>                                                │
│       <p class="problema-ahorro">                        │
│         <strong>Ahorro:</strong> €17K-€34K/año           │
│       </p>                                                │
│       <a href="/problemas/ocr-facturas"                  │
│          class="btn-link"                                │
│          aria-label="Ver solución para OCR facturas">    │
│         Ver solución →                                   │
│       </a>                                                │
│     </article>                                            │
│                                                           │
│     <article class="problema-card">                      │
│       <span class="problema-badge">#08</span>            │
│       <h3>                                                │
│         <a href="/problemas/tracking-herramientas">      │
│           🔨 Tracking de Herramientas                    │
│         </a>                                              │
│       </h3>                                               │
│       <p class="problema-descripcion">                   │
│         "¿Dónde está el taladro?" Pierdes 30 min/día     │
│         buscando herramientas entre obras.               │
│       </p>                                                │
│       <p class="problema-ahorro">                        │
│         <strong>Ahorro:</strong> €5K-€10K/año            │
│       </p>                                                │
│       <a href="/problemas/tracking-herramientas"         │
│          class="btn-link"                                │
│          aria-label="Ver solución para tracking          │
│                      herramientas">                      │
│         Ver solución →                                   │
│       </a>                                                │
│     </article>                                            │
│                                                           │
│     <!-- Repetir pattern para 5-6 problemas más -->      │
│                                                           │
│   </div> <!-- .problemas-grid -->                        │
│                                                           │
│   <div class="ver-todos-cta">                            │
│     <a href="/problemas" class="btn-secondary">          │
│       Ver los 25 problemas automatizables               │
│     </a>                                                  │
│   </div>                                                  │
│                                                           │
│ </div> <!-- #quick-wins-panel -->                        │
│                                                           │
│ <!-- Repetir para High Impact y Transformacionales -->   │
│                                                           │
└─────────────────────────────────────────────────────────┘
```

**Diseño:**
- Grid CSS: `display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem;`
- Cards con `aspect-ratio` definido para evitar CLS
- Lazy-load de imágenes en cards (si las hay): `loading="lazy"`

**Accesibilidad:**
- Tabs con roles ARIA correctos (`role="tab"`, `role="tabpanel"`)
- Navegación por teclado (Arrow keys entre tabs)
- `aria-selected` dinámico en tab activo
- Enlaces con `aria-label` descriptivos

**Performance:**
- Imágenes de cards en WebP, dimensiones fijas
- JavaScript tabs progresivo (funciona sin JS mostrando todos)
- CSS crítico para above-the-fold tabs

---

### SECCIÓN 4: CÓMO FUNCIONA (Proceso 3 pasos)

```
┌─────────────────────────────────────────────────────────┐
│ <h2>Cómo funciona ModulorIA</h2>                         │
│ <p>De caos a automatización en 3 pasos</p>              │
│                                                           │
│ <ol class="proceso-pasos">                               │
│                                                           │
│   <li class="paso">                                      │
│     <div class="paso-numero" aria-hidden="true">1</div>  │
│     <h3>Auditoría (1-2 semanas)</h3>                     │
│     <ul>                                                  │
│       <li>Reunión 30 min para entender tu operación</li> │
│       <li>Identificamos 5-10 procesos automatizables</li>│
│       <li>Priorizamos por ROI (Quick Wins primero)</li>  │
│       <li>Propuesta con números reales de ahorro</li>    │
│     </ul>                                                 │
│     <p class="paso-precio">                              │
│       <strong>Inversión:</strong> €1.500-€3.000          │
│     </p>                                                  │
│   </li>                                                   │
│                                                           │
│   <li class="paso">                                      │
│     <div class="paso-numero" aria-hidden="true">2</div>  │
│     <h3>Implementación (2-4 semanas)</h3>                │
│     <ul>                                                  │
│       <li>Creamos las automatizaciones custom</li>       │
│       <li>Integramos con tus herramientas actuales</li>  │
│       <li>Capacitamos a tu equipo (2 horas)</li>         │
│       <li>Desplegamos y verificamos que funciona</li>    │
│     </ul>                                                 │
│     <p class="paso-precio">                              │
│       <strong>Inversión:</strong> €3.000-€25.000         │
│       según alcance                                      │
│     </p>                                                  │
│   </li>                                                   │
│                                                           │
│   <li class="paso">                                      │
│     <div class="paso-numero" aria-hidden="true">3</div>  │
│     <h3>Acompañamiento (90 días garantía)</h3>           │
│     <ul>                                                  │
│       <li>Medimos resultados vs objetivos</li>           │
│       <li>Ajustamos y optimizamos</li>                   │
│       <li>Soporte técnico incluido</li>                  │
│       <li>Opción retainer €500-€1.5K/mes</li>            │
│     </ul>                                                 │
│     <p class="paso-precio">                              │
│       <strong>Incluido</strong> en implementación        │
│     </p>                                                  │
│   </li>                                                   │
│                                                           │
│ </ol>                                                     │
│                                                           │
│ <div class="proceso-cta">                                │
│   <a href="/auditoria" class="btn-primary">              │
│     Agendar auditoría gratuita                          │
│   </a>                                                    │
│ </div>                                                    │
│                                                           │
└─────────────────────────────────────────────────────────┘
```

**Accesibilidad:**
- Lista ordenada semántica (`<ol>`)
- Números decorativos con `aria-hidden="true"` (lectores leen "Paso 1" del `<h3>`)
- Contraste texto/fondo verificado

**Performance:**
- Sección sin imágenes pesadas
- CSS simple, sin animaciones complejas

---

### SECCIÓN 5: DIFERENCIADORES (Por qué ModulorIA)

```
┌─────────────────────────────────────────────────────────┐
│ <h2>Por qué ModulorIA vs otras consultorías</h2>        │
│                                                           │
│ <div class="diferenciadores-grid">                       │
│ <!-- Grid 2 columnas desktop, 1 móvil -->                │
│                                                           │
│   <article class="diferenciador">                        │
│     <div class="diferenciador-icono" aria-hidden="true"> │
│       🎯                                                  │
│     </div>                                                │
│     <h3>Ultra-Especializado</h3>                         │
│     <p>                                                   │
│       Solo construcción modular. Nada más.               │
│     </p>                                                  │
│     <p class="diferenciador-beneficio">                  │
│       → Conocemos TUS problemas específicos              │
│     </p>                                                  │
│   </article>                                              │
│                                                           │
│   <article class="diferenciador">                        │
│     <div class="diferenciador-icono" aria-hidden="true"> │
│       ⚡                                                  │
│     </div>                                                │
│     <h3>Ultra-Rápido</h3>                                │
│     <p>                                                   │
│       2-4 semanas implementación, no 6 meses             │
│     </p>                                                  │
│     <p class="diferenciador-beneficio">                  │
│       → Ves resultados en primera semana                 │
│     </p>                                                  │
│   </article>                                              │
│                                                           │
│   <article class="diferenciador">                        │
│     <div class="diferenciador-icono" aria-hidden="true"> │
│       💰                                                  │
│     </div>                                                │
│     <h3>Ultra-Transparente</h3>                          │
│     <p>                                                   │
│       Precios públicos. ROI calculado antes.             │
│     </p>                                                  │
│     <p class="diferenciador-beneficio">                  │
│       → Sin sorpresas, sin letra chica                   │
│     </p>                                                  │
│   </article>                                              │
│                                                           │
│   <article class="diferenciador">                        │
│     <div class="diferenciador-icono" aria-hidden="true"> │
│       🤖                                                  │
│     </div>                                                │
│     <h3>IA Moderna</h3>                                  │
│     <p>                                                   │
│       GPT-4, Claude, Whisper. Tecnología 2025.           │
│     </p>                                                  │
│     <p class="diferenciador-beneficio">                  │
│       → No software viejo de 2015                        │
│     </p>                                                  │
│   </article>                                              │
│                                                           │
│   <article class="diferenciador">                        │
│     <div class="diferenciador-icono" aria-hidden="true"> │
│       🚫                                                  │
│     </div>                                                │
│     <h3>Sin Código</h3>                                  │
│     <p>                                                   │
│       Tu equipo lo usa desde día 1                       │
│     </p>                                                  │
│     <p class="diferenciador-beneficio">                  │
│       → No necesitas contratar programadores             │
│     </p>                                                  │
│   </article>                                              │
│                                                           │
│ </div> <!-- .diferenciadores-grid -->                    │
│                                                           │
│ <div class="comparativa-competencia">                    │
│   <h3>Competencia vs ModulorIA</h3>                      │
│   <table>                                                 │
│     <caption class="sr-only">                            │
│       Comparativa de servicios competencia vs ModulorIA  │
│     </caption>                                            │
│     <thead>                                               │
│       <tr>                                                │
│         <th scope="col">Aspecto</th>                     │
│         <th scope="col">Competencia promedio</th>        │
│         <th scope="col">ModulorIA</th>                   │
│       </tr>                                               │
│     </thead>                                              │
│     <tbody>                                               │
│       <tr>                                                │
│         <th scope="row">Inversión</th>                   │
│         <td>€60.000+</td>                                │
│         <td><strong>€3K-€25K</strong></td>               │
│       </tr>                                               │
│       <tr>                                                │
│         <th scope="row">Tiempo implementación</th>       │
│         <td>6 meses</td>                                 │
│         <td><strong>2-4 semanas</strong></td>            │
│       </tr>                                               │
│       <tr>                                                │
│         <th scope="row">Especialización</th>             │
│         <td>Genérica construcción</td>                   │
│         <td><strong>100% modular</strong></td>           │
│       </tr>                                               │
│       <tr>                                                │
│         <th scope="row">ROI</th>                         │
│         <td>Incierto</td>                                │
│         <td><strong>Cuantificado y garantizado</strong></td>│
│       </tr>                                               │
│     </tbody>                                              │
│   </table>                                                │
│ </div>                                                    │
│                                                           │
└─────────────────────────────────────────────────────────┘
```

**Accesibilidad:**
- Tabla con `<caption>`, `<th scope="col/row">`
- Emojis decorativos con `aria-hidden="true"`
- `.sr-only` class para caption (visible solo lectores pantalla)

---

### SECCIÓN 6: PRECIOS (Transparencia total)

```
┌─────────────────────────────────────────────────────────┐
│ <h2>Precios transparentes</h2>                           │
│ <p>Sin "contáctanos para cotización"</p>                │
│                                                           │
│ <div class="pricing-table">                              │
│                                                           │
│   <article class="pricing-tier">                         │
│     <h3>Auditoría</h3>                                   │
│     <p class="pricing-amount">                           │
│       <span class="currency">€</span>                    │
│       <span class="price">1.5K-3K</span>                 │
│     </p>                                                  │
│     <ul class="pricing-features">                        │
│       <li>✓ Análisis procesos</li>                       │
│       <li>✓ ROI calculado</li>                           │
│       <li>✓ Propuesta detallada</li>                     │
│     </ul>                                                 │
│     <p class="pricing-roi">                              │
│       <strong>ROI:</strong> N/A                          │
│     </p>                                                  │
│     <p class="pricing-payback">                          │
│       <strong>Payback:</strong> N/A                      │
│     </p>                                                  │
│     <a href="/auditoria" class="btn-outline">            │
│       Agendar                                            │
│     </a>                                                  │
│   </article>                                              │
│                                                           │
│   <article class="pricing-tier pricing-tier--popular">   │
│     <span class="pricing-badge">Más popular</span>       │
│     <h3>Quick Win</h3>                                   │
│     <p class="pricing-amount">                           │
│       <span class="currency">€</span>                    │
│       <span class="price">3K-8K</span>                   │
│     </p>                                                  │
│     <ul class="pricing-features">                        │
│       <li>✓ 1-2 automatizaciones</li>                    │
│       <li>✓ 2 semanas implementación</li>                │
│       <li>✓ Capacitación incluida</li>                   │
│       <li>✓ 90 días soporte</li>                         │
│     </ul>                                                 │
│     <p class="pricing-roi">                              │
│       <strong>ROI típico:</strong> €24K-€67K/año         │
│     </p>                                                  │
│     <p class="pricing-payback">                          │
│       <strong>Payback:</strong> 2-3 semanas              │
│     </p>                                                  │
│     <a href="/precios#quick-win" class="btn-primary">    │
│       Calcular mi ahorro                                 │
│     </a>                                                  │
│   </article>                                              │
│                                                           │
│   <article class="pricing-tier">                         │
│     <h3>High Impact</h3>                                 │
│     <p class="pricing-amount">                           │
│       <span class="currency">€</span>                    │
│       <span class="price">8K-15K</span>                  │
│     </p>                                                  │
│     <ul class="pricing-features">                        │
│       <li>✓ 3-5 automatizaciones</li>                    │
│       <li>✓ 3-4 semanas implementación</li>              │
│       <li>✓ Integraciones complejas</li>                 │
│       <li>✓ 90 días soporte</li>                         │
│     </ul>                                                 │
│     <p class="pricing-roi">                              │
│       <strong>ROI típico:</strong> €67K-€156K/año        │
│     </p>                                                  │
│     <p class="pricing-payback">                          │
│       <strong>Payback:</strong> 4-8 semanas              │
│     </p>                                                  │
│     <a href="/precios#high-impact" class="btn-outline">  │
│       Calcular mi ahorro                                 │
│     </a>                                                  │
│   </article>                                              │
│                                                           │
│ </div> <!-- .pricing-table -->                           │
│                                                           │
│ <p class="pricing-note">                                 │
│   💡 La mayoría de clientes empieza con 1 Quick Win      │
│   para probar, luego escala a High Impact.               │
│ </p>                                                      │
│                                                           │
│ <div class="pricing-cta">                                │
│   <a href="/precios" class="btn-secondary">              │
│     Ver tabla completa de precios                        │
│   </a>                                                    │
│ </div>                                                    │
│                                                           │
└─────────────────────────────────────────────────────────┘
```

**Diseño:**
- Grid 3 columnas desktop, scroll horizontal móvil
- Tier "popular" destacado con border/shadow

**Accesibilidad:**
- Cada tier en `<article>` semántico
- Precios con markup claro (span.currency + span.price)

---

### SECCIÓN 7: FAQ (Objeciones)

```
┌─────────────────────────────────────────────────────────┐
│ <h2>Preguntas frecuentes</h2>                            │
│                                                           │
│ <dl class="faq-list">                                    │
│                                                           │
│   <div class="faq-item">                                 │
│     <dt>                                                  │
│       <button aria-expanded="false"                      │
│               aria-controls="faq-1-answer"               │
│               id="faq-1-question">                       │
│         ▼ ¿Es muy caro para mi empresa?                  │
│       </button>                                           │
│     </dt>                                                 │
│     <dd id="faq-1-answer"                                │
│         aria-labelledby="faq-1-question"                 │
│         hidden>                                           │
│       <p>                                                 │
│         Comparemos: pagas €5.000 una vez, ahorras        │
│         €34.000 cada año. En 7 semanas recuperas         │
│         inversión. Después son 11 meses de ganancia pura.│
│         ¿Es caro?                                         │
│       </p>                                                │
│     </dd>                                                 │
│   </div>                                                  │
│                                                           │
│   <div class="faq-item">                                 │
│     <dt>                                                  │
│       <button aria-expanded="false"                      │
│               aria-controls="faq-2-answer"               │
│               id="faq-2-question">                       │
│         ▼ No tengo tiempo para implementar               │
│       </button>                                           │
│     </dt>                                                 │
│     <dd id="faq-2-answer"                                │
│         aria-labelledby="faq-2-question"                 │
│         hidden>                                           │
│       <p>                                                 │
│         Necesito 30 min tuyos para auditoría. Nosotros   │
│         implementamos. Tu equipo 2h onboarding. Luego    │
│         ahorras 20h/semana. ¿Vale invertir 2h para       │
│         ganar 20?                                         │
│       </p>                                                │
│     </dd>                                                 │
│   </div>                                                  │
│                                                           │
│   <!-- 3-5 FAQs más -->                                  │
│                                                           │
│ </dl>                                                     │
│                                                           │
│ <div class="faq-cta">                                    │
│   <a href="/recursos#faq" class="btn-link">              │
│     Ver todas las FAQ →                                  │
│   </a>                                                    │
│ </div>                                                    │
│                                                           │
└─────────────────────────────────────────────────────────┘
```

**Accesibilidad:**
- `<dl>` semántico (definition list)
- Botones con `aria-expanded` (true/false)
- `aria-controls` vincula pregunta a respuesta
- Teclado: Enter/Space para toggle, foco visible

**Performance:**
- Sin JavaScript bloqueante (progressive enhancement)
- Contenido pre-renderizado, solo toggle show/hide

---

### SECCIÓN 8: CTA FINAL

```
┌─────────────────────────────────────────────────────────┐
│                                                           │
│ <section class="cta-final">                              │
│   <h2>                                                    │
│     ¿Listo para recuperar 15-20 horas por semana?        │
│   </h2>                                                   │
│   <p>                                                     │
│     Agenda una auditoría gratuita de 30 minutos.         │
│     Te muestro 3-5 cosas específicas que puedes          │
│     automatizar en TU empresa, con números reales.       │
│   </p>                                                    │
│   <p>                                                     │
│     Sin compromiso. Solo quiero mostrarte qué es posible.│
│   </p>                                                    │
│                                                           │
│   <a href="/auditoria" class="btn-primary btn-large">    │
│     📅 Agendar auditoría gratuita                        │
│   </a>                                                    │
│                                                           │
│   <div class="contacto-alternativo">                     │
│     <p>O escríbeme directo:</p>                          │
│     <ul class="contacto-list">                           │
│       <li>                                                │
│         <a href="mailto:nicolas@moduloria.com">          │
│           📧 nicolas@moduloria.com                       │
│         </a>                                              │
│       </li>                                               │
│       <li>                                                │
│         <a href="https://wa.me/34XXXXXXXXX">             │
│           💬 WhatsApp: +34 XXX XXX XXX                   │
│         </a>                                              │
│       </li>                                               │
│       <li>                                                │
│         <a href="https://linkedin.com/in/nicolasfarchica">│
│           🔗 LinkedIn: /in/nicolasfarchica               │
│         </a>                                              │
│       </li>                                               │
│     </ul>                                                 │
│   </div>                                                  │
│                                                           │
│ </section>                                                │
│                                                           │
└─────────────────────────────────────────────────────────┘
```

---

### FOOTER

```
┌─────────────────────────────────────────────────────────┐
│ <footer>                                                  │
│   <div class="footer-brand">                             │
│     <img src="/logo.svg" alt="ModulorIA"                 │
│          width="150" height="50">                        │
│     <p>                                                   │
│       Automatización IA para construcción modular        │
│     </p>                                                  │
│   </div>                                                  │
│                                                           │
│   <nav class="footer-nav" aria-label="Enlaces footer">   │
│     <div class="footer-column">                          │
│       <h3>Problemas</h3>                                 │
│       <ul>                                                │
│         <li><a href="/problemas#quick-wins">             │
│           Quick Wins                                     │
│         </a></li>                                         │
│         <li><a href="/problemas#high-impact">            │
│           High Impact                                    │
│         </a></li>                                         │
│         <li><a href="/problemas#transformacionales">     │
│           Transformacionales                             │
│         </a></li>                                         │
│       </ul>                                               │
│     </div>                                                │
│                                                           │
│     <div class="footer-column">                          │
│       <h3>Soluciones</h3>                                │
│       <ul>                                                │
│         <li><a href="/soluciones#auditoria">             │
│           Auditoría                                      │
│         </a></li>                                         │
│         <li><a href="/soluciones#quick-win">             │
│           Quick Win                                      │
│         </a></li>                                         │
│         <li><a href="/soluciones#high-impact">           │
│           High Impact                                    │
│         </a></li>                                         │
│         <li><a href="/soluciones#retainer">              │
│           Retainer                                       │
│         </a></li>                                         │
│       </ul>                                               │
│     </div>                                                │
│                                                           │
│     <div class="footer-column">                          │
│       <h3>Recursos</h3>                                  │
│       <ul>                                                │
│         <li><a href="/recursos#guias">Guías</a></li>     │
│         <li><a href="/recursos/blog">Blog</a></li>       │
│         <li><a href="/recursos#calculadora">             │
│           Calculadora ROI                                │
│         </a></li>                                         │
│       </ul>                                               │
│     </div>                                                │
│                                                           │
│     <div class="footer-column">                          │
│       <h3>Empresa</h3>                                   │
│       <ul>                                                │
│         <li><a href="/sobre-nicolas">                    │
│           Sobre Nicolás                                  │
│         </a></li>                                         │
│         <li><a href="/contacto">Contacto</a></li>        │
│         <li><a href="https://linkedin.com/in/nicolasfarchica" │
│                rel="noopener">LinkedIn</a></li>          │
│       </ul>                                               │
│     </div>                                                │
│                                                           │
│     <div class="footer-column">                          │
│       <h3>Legal</h3>                                     │
│       <ul>                                                │
│         <li><a href="/privacidad">Privacidad</a></li>    │
│         <li><a href="/terminos">Términos</a></li>        │
│         <li><a href="/cookies">Cookies</a></li>          │
│       </ul>                                               │
│     </div>                                                │
│   </nav>                                                  │
│                                                           │
│   <div class="footer-bottom">                            │
│     <p>                                                   │
│       © 2025 ModulorIA. Todos los derechos reservados.   │
│     </p>                                                  │
│   </div>                                                  │
│ </footer>                                                 │
└─────────────────────────────────────────────────────────┘
```

**Accesibilidad:**
- `<nav aria-label="Enlaces footer">` para diferenciar de nav principal
- Logo con `width`/`height` para evitar CLS
- Enlaces externos con `rel="noopener"` (seguridad)

---

## 📄 TEMPLATE: Landing Page Problema Individual

**Ruta:** `/problemas/[slug].html`

**Ejemplo:** `/problemas/ocr-facturas.html`

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>OCR de Facturas Automatizado | ModulorIA</title>
  <meta name="description" content="Automatiza la transcripción de facturas con IA. Ahorra €17K-€34K/año procesando facturas en 10 segundos. ROI en 2-3 semanas.">

  <!-- Open Graph -->
  <meta property="og:title" content="OCR de Facturas Automatizado | ModulorIA">
  <meta property="og:description" content="Automatiza facturas con IA. Ahorro €17K-€34K/año.">
  <meta property="og:image" content="https://moduloria.com/og-ocr-facturas.jpg">
  <meta property="og:url" content="https://moduloria.com/problemas/ocr-facturas">

  <!-- Canonical -->
  <link rel="canonical" href="https://moduloria.com/problemas/ocr-facturas">

  <!-- Structured Data -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "OCR de Facturas Automatizado para Construcción Modular",
    "description": "Automatiza transcripción de facturas con IA y ahorra €17K-€34K/año",
    "author": {
      "@type": "Person",
      "name": "Nicolás Farchica"
    },
    "publisher": {
      "@type": "Organization",
      "name": "ModulorIA"
    }
  }
  </script>

  <!-- Fonts (preload critical) -->
  <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossorigin>

  <!-- Critical CSS (inline <14KB) -->
  <style>
    /* Critical CSS aquí */
  </style>

  <!-- Defer non-critical CSS -->
  <link rel="preload" href="/css/main.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
  <noscript><link rel="stylesheet" href="/css/main.css"></noscript>
</head>

<body>
  <!-- Skip link (accesibilidad) -->
  <a href="#main-content" class="skip-link">
    Saltar al contenido principal
  </a>

  <header>
    <!-- Header sticky igual homepage -->
  </header>

  <main id="main-content">

    <!-- Breadcrumbs (SEO + accesibilidad) -->
    <nav aria-label="Migas de pan">
      <ol itemscope itemtype="https://schema.org/BreadcrumbList">
        <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
          <a itemprop="item" href="/">
            <span itemprop="name">Inicio</span>
          </a>
          <meta itemprop="position" content="1" />
        </li>
        <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
          <a itemprop="item" href="/problemas">
            <span itemprop="name">Problemas</span>
          </a>
          <meta itemprop="position" content="2" />
        </li>
        <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
          <span itemprop="name">OCR de Facturas</span>
          <meta itemprop="position" content="3" />
        </li>
      </ol>
    </nav>

    <article>

      <header>
        <span class="problema-badge">#03</span>
        <span class="problema-tier">Quick Win</span>

        <h1>
          Problema #03: OCR de Facturas Automatizado
        </h1>

        <p class="problema-intro">
          Ahorra €17.000-€34.000/año automatizando la transcripción
          de facturas con IA. De 5 minutos por factura a 10 segundos.
        </p>
      </header>

      <section id="el-problema">
        <h2>El Problema</h2>
        <p>
          Recibes 40 facturas por semana. Cada una toma 5 minutos
          transcribirla manualmente a tu sistema.
        </p>
        <ul>
          <li>200 minutos/semana perdidos</li>
          <li>160 horas/año en tareas repetitivas</li>
          <li>10-15% de errores de transcripción</li>
          <li>Facturas atrasadas por falta de tiempo</li>
        </ul>
      </section>

      <section id="el-costo">
        <h2>El Costo Real</h2>

        <div class="costo-breakdown">
          <h3>Para una empresa de 20 empleados:</h3>

          <table>
            <caption>Desglose de costos anuales</caption>
            <tbody>
              <tr>
                <th scope="row">Tiempo perdido</th>
                <td>160 horas/año</td>
              </tr>
              <tr>
                <th scope="row">Costo por hora</th>
                <td>€18-€22 (salario admin)</td>
              </tr>
              <tr>
                <th scope="row">Costo anual</th>
                <td><strong>€17.000 - €34.000</strong></td>
              </tr>
              <tr>
                <th scope="row">Errores</th>
                <td>10-15% facturas con errores</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="la-solucion">
        <h2>La Solución ModulorIA</h2>

        <h3>Sistema IA de OCR + Validación Automática</h3>

        <ol class="solucion-pasos">
          <li>
            <strong>Toma foto de factura</strong> con celular
          </li>
          <li>
            <strong>IA extrae todos los datos</strong> en 10 segundos
            (proveedor, fecha, número, líneas, total, IVA)
          </li>
          <li>
            <strong>Valida que todo esté correcto</strong>
            (detecta inconsistencias)
          </li>
          <li>
            <strong>Registra automáticamente</strong> en tu sistema
            (ERP, Excel, Airtable)
          </li>
          <li>
            <strong>Te notifica</strong> vía WhatsApp si hay algo
            que revisar manualmente
          </li>
        </ol>

        <div class="solucion-resultado">
          <h4>Resultado:</h4>
          <ul>
            <li>De 200 min/semana → 40 min/semana</li>
            <li>De 5 min/factura → 10 segundos/factura</li>
            <li>0% errores de transcripción</li>
            <li>Facturas procesadas mismo día</li>
          </ul>
        </div>
      </section>

      <section id="roi-calculado">
        <h2>ROI Calculado</h2>

        <table class="roi-table">
          <caption>Retorno de inversión</caption>
          <tbody>
            <tr>
              <th scope="row">Inversión</th>
              <td>€5.000 (implementación)</td>
            </tr>
            <tr>
              <th scope="row">Ahorro anual</th>
              <td><strong>€17.000 - €34.000</strong></td>
            </tr>
            <tr>
              <th scope="row">Payback</th>
              <td><strong>2-3 semanas</strong></td>
            </tr>
            <tr>
              <th scope="row">ROI 1er año</th>
              <td><strong>240% - 580%</strong></td>
            </tr>
          </tbody>
        </table>
      </section>

      <section id="tecnologia">
        <h2>Tecnología Usada</h2>
        <ul>
          <li>Google Vision AI / Tesseract para OCR</li>
          <li>GPT-4 para validación y estructuración de datos</li>
          <li>N8N para automatización del flujo</li>
          <li>WhatsApp Business API para notificaciones</li>
          <li>Integración con tu ERP/Excel/Airtable</li>
        </ul>

        <div class="implementacion-detalles">
          <p>
            <strong>Implementación:</strong> 1-2 semanas<br>
            <strong>Complejidad técnica:</strong> ⭐☆☆☆☆ (muy simple para usuario)
          </p>
        </div>
      </section>

      <aside id="casos-similares">
        <h2>Casos Similares</h2>
        <blockquote>
          <p>
            "Antes pasaba 3 horas/semana transcribiendo facturas.
            Ahora 30 minutos. Y cero errores."
          </p>
          <footer>
            — <cite>Carlos M., Gerente Modular Homes SL</cite>
          </footer>
        </blockquote>

        <p class="casos-note">
          <em>
            Nota: Casos reales disponibles Q1 2026.
            Empresas piloto reciben 20% descuento.
          </em>
        </p>
      </aside>

      <section id="cta-problema">
        <h2>¿Listo para automatizar esto?</h2>
        <p>
          Calcula tu ahorro específico o agenda una auditoría
          gratuita de 30 minutos.
        </p>

        <div class="cta-buttons">
          <a href="#calculadora" class="btn-primary">
            Calcular mi ahorro específico
          </a>
          <a href="/auditoria" class="btn-secondary">
            Agendar auditoría gratis
          </a>
        </div>
      </section>

      <nav id="problemas-relacionados" aria-label="Problemas relacionados">
        <h2>Problemas Relacionados</h2>
        <ul>
          <li>
            <a href="/problemas/clasificacion-emails">
              #01: Clasificación de Emails
            </a>
            (automatiza gestión emails)
          </li>
          <li>
            <a href="/problemas/reportes-obra">
              #07: Reportes Automáticos Obra
            </a>
            (integra con facturas)
          </li>
          <li>
            <a href="/problemas/control-materiales">
              #05: Control de Materiales
            </a>
            (cruza con facturas)
          </li>
        </ul>

        <a href="/problemas" class="btn-link">
          Ver los 25 problemas →
        </a>
      </nav>

    </article>

  </main>

  <footer>
    <!-- Footer igual homepage -->
  </footer>

  <!-- Scripts defer -->
  <script src="/js/main.js" defer></script>

  <!-- Analytics (defer, no afecta INP) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXX"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXX');
  </script>

</body>
</html>
```

---

## 🛠️ STACK TÉCNICO RECOMENDADO

### Opción A: No-Code / Low-Code (MVP rápido)
**Stack:** Webflow + Airtable + Zapier/N8N

**Pros:**
- Setup en 2-3 semanas
- Nicolás puede editar contenido sin dev
- Webflow optimiza automáticamente CWV
- Hosting incluido (CDN global)

**Contras:**
- Menos flexible para features custom
- Costo mensual Webflow (~€30-€50/mes)
- Calculadora ROI requiere custom code embed

**Recomendado para:** Lanzamiento rápido, validar mercado, iterar messaging

---

### Opción B: Framework Moderno (Escalable)
**Stack:** Next.js 14 + TailwindCSS + Vercel + Airtable

**Pros:**
- Performance excelente (ISR, Server Components)
- Calculadora ROI integrada nativamente
- SEO óptimo (SSR)
- Escalable a largo plazo
- Design Tokens fácil de implementar

**Contras:**
- Requiere desarrollador
- Setup inicial 3-4 semanas
- Mantenimiento técnico continuo

**Recomendado para:** Si tienes acceso a dev o quieres máximo control

---

### Opción C: WordPress (Cliente puede editar)
**Stack:** WordPress + Elementor + WP Rocket (performance)

**Pros:**
- Nicolás puede editar todo sin código
- Ecosystem maduro, plugins disponibles
- Hosting económico (€10-€20/mes)
- Calculadora ROI vía plugin/custom

**Contras:**
- Performance requiere optimización manual
- Seguridad requiere mantenimiento
- Menos moderno que Next.js/Webflow

**Recomendado para:** Si Nicolás quiere autonomía total para editar

---

## 📊 DESIGN TOKENS (Sistema de Diseño Base)

### Colores

```css
:root {
  /* Primitivos */
  --color-blue-500: #1E40AF;
  --color-blue-600: #1E3A8A;
  --color-green-500: #10B981;
  --color-green-600: #059669;
  --color-gray-50: #F9FAFB;
  --color-gray-100: #F3F4F6;
  --color-gray-900: #111827;

  /* Semánticos */
  --color-action-primary: var(--color-blue-600);
  --color-action-secondary: var(--color-green-600);
  --color-text-primary: var(--color-gray-900);
  --color-text-secondary: #6B7280;
  --color-background: #FFFFFF;
  --color-background-alt: var(--color-gray-50);

  /* De componente */
  --btn-primary-bg: var(--color-action-primary);
  --btn-primary-text: #FFFFFF;
  --btn-primary-hover: var(--color-blue-500);
}
```

### Tipografía

```css
:root {
  /* Primitivos */
  --font-family-primary: 'Inter', -apple-system, sans-serif;
  --font-size-xs: 0.75rem;    /* 12px */
  --font-size-sm: 0.875rem;   /* 14px */
  --font-size-base: 1rem;     /* 16px */
  --font-size-lg: 1.125rem;   /* 18px */
  --font-size-xl: 1.25rem;    /* 20px */
  --font-size-2xl: 1.5rem;    /* 24px */
  --font-size-3xl: 1.875rem;  /* 30px */
  --font-size-4xl: 2.25rem;   /* 36px */
  --font-size-5xl: 3rem;      /* 48px */

  /* Semánticos */
  --heading-1: var(--font-size-4xl);
  --heading-2: var(--font-size-3xl);
  --heading-3: var(--font-size-2xl);
  --body-large: var(--font-size-lg);
  --body-base: var(--font-size-base);
  --body-small: var(--font-size-sm);
}

/* Responsive */
@media (min-width: 768px) {
  :root {
    --heading-1: var(--font-size-5xl);
    --heading-2: var(--font-size-4xl);
  }
}
```

### Espaciado

```css
:root {
  --space-1: 0.25rem;  /* 4px */
  --space-2: 0.5rem;   /* 8px */
  --space-3: 0.75rem;  /* 12px */
  --space-4: 1rem;     /* 16px */
  --space-6: 1.5rem;   /* 24px */
  --space-8: 2rem;     /* 32px */
  --space-12: 3rem;    /* 48px */
  --space-16: 4rem;    /* 64px */
  --space-24: 6rem;    /* 96px */
}
```

---

## 🎯 MÉTRICAS DE ÉXITO (KPIs)

### Performance (Core Web Vitals)
**Objetivo Excelente:**
- LCP ≤ 2.5s (móvil 4G)
- INP ≤ 200ms (interacciones)
- CLS < 0.1 (estabilidad visual)
- Lighthouse Score ≥ 90 (todas categorías)

**Medición:**
- Google Search Console (datos reales campo)
- Vercel Analytics / Cloudflare Analytics
- Real User Monitoring (RUM) con herramientas como SpeedCurve

---

### Conversión
**Objetivos:**
- 5-10% visitantes → auditoría agendada
- 20-30% visitantes → usan calculadora ROI
- 15% visitantes → descargan lead magnet

**Medición:**
- Google Analytics 4 (eventos custom)
- Calendly analytics (auditorías agendadas)
- ConvertKit (emails capturados)

---

### Engagement
**Objetivos:**
- Tiempo en sitio > 3 minutos
- Páginas/sesión > 2.5
- Bounce rate < 40%

---

### SEO
**Objetivos Mes 3:**
- Top 20 para "automatización construcción modular"
- Top 20 para "IA construcción industrializada"
- Top 10 para long-tails específicos (ej: "automatizar facturas construcción")

**Medición:**
- Google Search Console (impresiones, clics, posición)
- Ahrefs / SEMrush (rankings keywords)

---

## 📅 ROADMAP IMPLEMENTACIÓN SITIO WEB

### Fase 1 - MVP (Semanas 1-2):
- [ ] Homepage completa funcional
- [ ] Navegación y footer
- [ ] Página /precios
- [ ] Página /auditoria (Calendly embedido)
- [ ] 5 landing pages problemas top (Quick Wins)
- [ ] Calculadora ROI v1 (básica JavaScript)
- [ ] Página /sobre-nicolas
- [ ] Setup Analytics (GA4)
- [ ] Optimización performance básica (imágenes, fonts)

**Entregables:**
- Sitio funcional en staging
- LCP ≤ 3.5s, INP ≤ 300ms, CLS < 0.15
- 100% navegable con teclado
- Mobile responsive

---

### Fase 2 - Contenido & SEO (Semanas 3-4):
- [ ] 20 landing pages problemas restantes
- [ ] Página /soluciones detallada
- [ ] Página /casos (placeholder + CTA piloto)
- [ ] 3 lead magnets (PDFs):
  - "25 Procesos Automatizables"
  - "Calculadora Excel ROI"
  - "Checklist: ¿Tu proceso listo para IA?"
- [ ] Setup email nurturing (ConvertKit)
- [ ] Optimización SEO on-page (titles, metas, H1-H3)
- [ ] Structured data (JSON-LD) en todas páginas
- [ ] Sitemap XML + robots.txt
- [ ] Google Search Console setup

**Entregables:**
- 25+ páginas indexables
- Lead magnets descargables
- Email automation básico

---

### Fase 3 - Optimización & A/B (Semanas 5-6):
- [ ] Optimización CWV agresiva:
  - AVIF/WebP todas imágenes
  - Code splitting JavaScript
  - CSS critical inline
  - Lazy-load progresivo
- [ ] Calculadora ROI v2 (avanzada con más inputs)
- [ ] A/B testing:
  - CTAs homepage (copy, color, ubicación)
  - Hero headline (3 variantes)
  - Pricing table layout
- [ ] Heatmaps (Hotjar/Microsoft Clarity)
- [ ] Accesibilidad audit completo (axe, WAVE)
- [ ] Blog setup + primeros 3 artículos SEO

**Entregables:**
- LCP ≤ 2.5s, INP ≤ 200ms, CLS < 0.1
- 0 errores WCAG 2.2 AA críticos
- Blog activo con contenido

---

### Fase 4 - Casos Reales (Cuando disponibles):
- [ ] Página /casos actualizada con 3-5 casos reales
- [ ] Video testimonials embedidos
- [ ] Logos clientes (con permiso)
- [ ] Case study detallado por problema (antes/después)
- [ ] Social proof en homepage (testimonios, logos)

---

## ✅ CHECKLIST LANZAMIENTO

### Performance
- [ ] LCP ≤ 2.5s móvil (3G/4G simulado)
- [ ] INP ≤ 200ms todas interacciones críticas
- [ ] CLS < 0.1 todo el sitio
- [ ] Imágenes optimizadas (AVIF/WebP, dimensions, lazy-load)
- [ ] Fuentes con `font-display: swap`
- [ ] CSS/JS minificados, sin recursos no usados
- [ ] Lighthouse Score ≥ 90 (Performance, Accessibility, Best Practices, SEO)

### Accesibilidad
- [ ] 0 errores críticos axe/WAVE
- [ ] Navegación completa solo teclado
- [ ] Foco visible todos elementos interactivos
- [ ] Contraste ≥ 4.5:1 (texto normal), ≥ 3:1 (texto grande)
- [ ] Formularios con labels, errores asociados
- [ ] Target size mínimo 44×44 px (WCAG 2.2)
- [ ] `lang="es"` en `<html>`
- [ ] Skip links funcionales

### SEO
- [ ] `title` y `meta description` únicos por página
- [ ] H1 único por página
- [ ] Estructura headings lógica (H2-H3)
- [ ] `rel="canonical"` configurado
- [ ] Structured data validado (Rich Results Test)
- [ ] Sitemap XML submitido a Search Console
- [ ] robots.txt configurado
- [ ] URLs limpias y descriptivas

### Seguridad
- [ ] HTTPS forzado
- [ ] Headers seguridad (CSP, X-Frame-Options, etc.)
- [ ] Sin mixed content
- [ ] Gestión cookies RGPD-compliant

### Funcional
- [ ] Calculadora ROI funcional y precisa
- [ ] Calendly auditoría funcional
- [ ] Formularios envían correctamente
- [ ] Lead magnets descargan sin errores
- [ ] Enlaces internos/externos funcionan
- [ ] Mobile responsive verificado (iOS Safari, Chrome Android)

### Analytics
- [ ] Google Analytics 4 instalado
- [ ] Eventos custom configurados:
  - calculadora_usado
  - auditoria_agendada
  - lead_magnet_descargado
  - problema_visto
- [ ] Conversiones trackeadas
- [ ] Search Console conectado a GA4

---

**Última actualización:** 4 de diciembre de 2025
**Versión:** 2.0 (incorpora mejores prácticas web 2019-2025)
**Próxima revisión:** Después de lanzar MVP y recoger datos reales de usuarios
