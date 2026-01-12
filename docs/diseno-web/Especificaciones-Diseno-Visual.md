# 🎨 ESPECIFICACIONES DE DISEÑO VISUAL - ModulorIA

**Fecha:** 4 de diciembre de 2025
**Versión:** 1.0 - AI-Forward con Paleta Oficial
**Objetivo:** Diseño tech-forward que demuestra dominio IA + profesionalismo construcción

---

## 🎯 CONCEPTO CREATIVO

**Estética:** 70% Tech-Forward / 30% Construcción Modular
- Gradientes sutiles azul profundo → azul medio
- Glassmorphism en cards (semi-transparencia con blur)
- Micro-animaciones fluidas que "respiran"
- Tipografía moderna con jerarquía clara
- Contraste alto para accesibilidad WCAG 2.2 AA

**Mood:** "Startup IA profesional que entiende construcción"

---

## 🎨 PALETA DE COLORES OFICIAL

### Colores Primarios (60%)

**Azul Profundo (Dominante)**
```css
--color-primary-dark: #1B3C53;
--color-primary-dark-rgb: rgb(27, 60, 83);
```
**Uso:**
- Navbar / Header
- Footer
- Títulos principales (H1)
- Fondos de autoridad
- 40% del diseño total

**Azul Medio (Gradientes)**
```css
--color-primary-medium: #234C6A;
--color-primary-medium-rgb: rgb(35, 76, 106);
```
**Uso:**
- Gradientes con azul profundo
- Hero sections
- Hover states botones
- Subtítulos (H2)
- 20% del diseño total

**Azul Acero (Textos)**
```css
--color-primary-steel: #456882;
--color-primary-steel-rgb: rgb(69, 104, 130);
```
**Uso:**
- Textos secundarios / body
- Iconos
- Bordes sutiles
- H3, H4, párrafos

---

### Colores Secundarios (30%)

**Beige Arena (Complementario)**
```css
--color-secondary-beige: #D2C1B6;
--color-secondary-beige-rgb: rgb(210, 193, 182);
```
**Uso:**
- Fondos alternos (secciones pares/impares)
- Textos sobre fondos oscuros
- Acentos cálidos
- Badges light
- 30% del diseño total

---

### Colores de Acento (10% MAX!)

**Naranja Cobre (CTA Exclusivo) ⭐**
```css
--color-accent-copper: #C67A52;
--color-accent-copper-rgb: rgb(198, 122, 82);
```
**⚠️ USO EXCLUSIVO:**
- CTAs primarios (máx 1-2 por pantalla)
- Iconos destacados
- Badges importantes
- Elementos que requieren máxima atención
- **NUNCA superar 10% del diseño total**

---

### Colores Neutros (Complementarios)

```css
--color-white: #FFFFFF;
--color-gray-50: #F9F9F9;
--color-gray-100: #F5F5F5;
--color-gray-200: #E0E0E0;
--color-gray-800: #333333;
--color-black: #000000;
```

---

## 📐 REGLA 60-30-10 (ESTRICTA)

```
┌─────────────────────────────────────────────────────────┐
│                                                           │
│  60% AZULES DOMINANTES                                   │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━        │
│  #1B3C53 (40%) + #234C6A (20%)                           │
│  → Navbar, footer, títulos, textos, gradientes          │
│                                                           │
│  30% BEIGE COMPLEMENTARIO                                │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━        │
│  #D2C1B6                                                  │
│  → Fondos alternos, acentos cálidos, cards              │
│                                                           │
│  10% NARANJA COBRE (ACENTO)                              │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━        │
│  #C67A52 - ¡USAR CON EXTREMA MODERACIÓN!                │
│  → Solo CTAs críticos, nunca fondo grande                │
│                                                           │
└─────────────────────────────────────────────────────────┘
```

**Ejemplo aplicado en Homepage:**
- Navbar: Azul profundo (#1B3C53) → 10% viewport
- Hero section: Fondo blanco con gradiente azul sutil → 25%
- Sección alternada: Fondo beige (#D2C1B6) → 15%
- Texto general: Azul acero (#456882) → 30%
- Footer: Azul profundo → 10%
- CTAs: Naranja cobre (#C67A52) → 2-3% (solo botones principales)

---

## 🎨 GRADIENTES SUTILES

### Gradiente Principal (Hero backgrounds)
```css
.gradient-hero {
  background: linear-gradient(
    135deg,
    #1B3C53 0%,
    #234C6A 50%,
    #456882 100%
  );
}
```

### Gradiente Overlay (sobre imágenes)
```css
.gradient-overlay {
  background: linear-gradient(
    to bottom,
    rgba(27, 60, 83, 0.9) 0%,
    rgba(35, 76, 106, 0.7) 100%
  );
}
```

### Gradiente CTA (botones primarios)
```css
.btn-primary {
  background: linear-gradient(
    135deg,
    #C67A52 0%,
    #b36943 100%
  );
}

.btn-primary:hover {
  background: linear-gradient(
    135deg,
    #b36943 0%,
    #C67A52 100%
  );
}
```

---

## 💎 GLASSMORPHISM (Cards Semi-Transparentes)

### Glassmorphism Standard
```css
.glassmorphism {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(27, 60, 83, 0.15);
}
```

### Glassmorphism Dark (sobre fondos oscuros)
```css
.glassmorphism-dark {
  background: rgba(27, 60, 83, 0.3);
  backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(210, 193, 182, 0.2);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}
```

### Glassmorphism Header (sticky nav)
```css
.header-glassmorphism {
  background: rgba(27, 60, 83, 0.85);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(210, 193, 182, 0.1);
}
```

**Uso:**
- Cards de problemas
- Calculadora ROI
- Navegación sticky
- Modales
- Tooltips

---

## ✨ MICRO-ANIMACIONES (Sutiles, Fluidas)

### Animación "Breathing" (elementos destacados)
```css
@keyframes breathing {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.015);
  }
}

.card-breathing {
  animation: breathing 6s ease-in-out infinite;
}
```

### Hover States (botones, cards)
```css
.btn-primary {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 24px rgba(198, 122, 82, 0.3);
}

.btn-primary:active {
  transform: translateY(0);
}

.card-hover {
  transition: all 0.3s ease;
}

.card-hover:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 32px rgba(27, 60, 83, 0.15);
}
```

### Fade-in on Scroll (Intersection Observer)
```css
.fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}
```

### Gradient Shift (fondos animados)
```css
@keyframes gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.gradient-animated {
  background: linear-gradient(
    270deg,
    #1B3C53,
    #234C6A,
    #456882
  );
  background-size: 600% 600%;
  animation: gradient-shift 15s ease infinite;
}
```

---

## 🔤 TIPOGRAFÍA

### Font Family
```css
:root {
  --font-primary: 'Inter', -apple-system, BlinkMacSystemFont,
                  'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
  --font-mono: 'JetBrains Mono', 'Courier New', monospace;
}

body {
  font-family: var(--font-primary);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

### Escala Tipográfica

```css
:root {
  /* Mobile */
  --text-xs: 0.75rem;    /* 12px */
  --text-sm: 0.875rem;   /* 14px */
  --text-base: 1rem;     /* 16px */
  --text-lg: 1.125rem;   /* 18px */
  --text-xl: 1.25rem;    /* 20px */
  --text-2xl: 1.5rem;    /* 24px */
  --text-3xl: 1.875rem;  /* 30px */
  --text-4xl: 2.25rem;   /* 36px */
  --text-5xl: 3rem;      /* 48px */
}

/* Desktop */
@media (min-width: 768px) {
  :root {
    --text-3xl: 2.25rem;  /* 36px */
    --text-4xl: 3rem;     /* 48px */
    --text-5xl: 3.75rem;  /* 60px */
  }
}
```

### Headings (Aplicando Paleta)

```css
h1 {
  font-size: var(--text-5xl);
  font-weight: 700;
  color: var(--color-primary-dark);
  line-height: 1.1;
  letter-spacing: -0.02em;
}

h2 {
  font-size: var(--text-4xl);
  font-weight: 600;
  color: var(--color-primary-medium);
  line-height: 1.2;
  letter-spacing: -0.01em;
}

h3 {
  font-size: var(--text-3xl);
  font-weight: 600;
  color: var(--color-primary-steel);
  line-height: 1.3;
}

h4 {
  font-size: var(--text-2xl);
  font-weight: 600;
  color: var(--color-primary-steel);
  line-height: 1.4;
}
```

### Body Text

```css
body {
  font-size: var(--text-base);
  color: var(--color-primary-steel);
  line-height: 1.6;
}

.text-large {
  font-size: var(--text-lg);
  line-height: 1.7;
  color: var(--color-primary-steel);
}

.text-small {
  font-size: var(--text-sm);
  line-height: 1.5;
  color: var(--color-primary-steel);
}

.text-xs {
  font-size: var(--text-xs);
  line-height: 1.4;
  color: var(--color-primary-steel);
}
```

---

## 🔘 BOTONES (Sistema Completo)

### Botón Primario (CTA Principal - Naranja Cobre)

```css
.btn-primary {
  background: var(--color-accent-copper);
  color: #FFFFFF;
  padding: 15px 35px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 12px rgba(198, 122, 82, 0.25);
}

.btn-primary:hover {
  background: #b36943;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(198, 122, 82, 0.35);
}

.btn-primary:active {
  transform: translateY(0);
}
```

**⚠️ Regla Crítica:**
- Máximo 1-2 botones primarios por pantalla
- Solo para acciones de conversión directa:
  - "Agendar auditoría"
  - "Calcular mi ahorro"
  - "Empezar ahora"

---

### Botón Secundario (Azul Medio)

```css
.btn-secondary {
  background: var(--color-primary-medium);
  color: #FFFFFF;
  padding: 15px 35px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: var(--color-primary-dark);
  transform: translateY(-2px);
}
```

**Uso:**
- Acciones secundarias
- "Conocer más"
- "Ver soluciones"
- "Leer caso de éxito"

---

### Botón Outline (Borde)

```css
.btn-outline {
  background: transparent;
  color: var(--color-primary-medium);
  border: 2px solid var(--color-primary-medium);
  padding: 13px 33px; /* -2px por border */
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-outline:hover {
  background: var(--color-primary-medium);
  color: #FFFFFF;
}
```

**Uso:**
- Acciones terciarias
- "Descargar PDF"
- "Ver más problemas"
- Enlaces que parecen botones

---

### Botón Light (Beige)

```css
.btn-light {
  background: var(--color-secondary-beige);
  color: var(--color-primary-dark);
  padding: 15px 35px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-light:hover {
  background: #c4b3a6;
}
```

**Uso:**
- Sobre fondos oscuros (azul profundo)
- Variación visual en secciones alternadas

---

### Variaciones de Tamaño

```css
.btn-small {
  padding: 10px 25px;
  font-size: 14px;
}

.btn-large {
  padding: 20px 45px;
  font-size: 18px;
}

.btn-hero {
  padding: 24px 56px;
  font-size: 20px;
  border-radius: 12px;
}
```

---

## 🗂️ CARDS (Tarjetas)

### Card Default (Fondo Blanco)

```css
.card-default {
  background: #FFFFFF;
  border: 1px solid var(--color-gray-200);
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 2px 10px rgba(27, 60, 83, 0.08);
  transition: all 0.3s ease;
}

.card-default:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(27, 60, 83, 0.12);
}
```

---

### Card Primary (Azul Profundo)

```css
.card-primary {
  background: var(--color-primary-dark);
  color: #FFFFFF;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 4px 16px rgba(27, 60, 83, 0.2);
}

.card-primary h3 {
  color: #FFFFFF;
}

.card-primary p {
  color: var(--color-secondary-beige);
}
```

---

### Card Accent (Beige)

```css
.card-accent {
  background: var(--color-secondary-beige);
  color: var(--color-primary-dark);
  border-radius: 12px;
  padding: 30px;
}
```

---

### Card Glassmorphism (Semi-transparente)

```css
.card-glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 16px;
  padding: 30px;
  box-shadow: 0 8px 32px rgba(27, 60, 83, 0.1);
}
```

---

## 🏷️ BADGES

```css
.badge {
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
  display: inline-block;
}

.badge-primary {
  background: var(--color-accent-copper);
  color: #FFFFFF;
}

.badge-secondary {
  background: var(--color-primary-medium);
  color: #FFFFFF;
}

.badge-light {
  background: var(--color-secondary-beige);
  color: var(--color-primary-dark);
}

.badge-outline {
  background: transparent;
  border: 2px solid var(--color-accent-copper);
  color: var(--color-accent-copper);
}
```

---

## 📏 ESPACIADO (Sistema 8px)

```css
:root {
  --space-1: 0.25rem;  /* 4px */
  --space-2: 0.5rem;   /* 8px */
  --space-3: 0.75rem;  /* 12px */
  --space-4: 1rem;     /* 16px */
  --space-6: 1.5rem;   /* 24px */
  --space-8: 2rem;     /* 32px */
  --space-10: 2.5rem;  /* 40px */
  --space-12: 3rem;    /* 48px */
  --space-16: 4rem;    /* 64px */
  --space-20: 5rem;    /* 80px */
  --space-24: 6rem;    /* 96px */
}
```

**Uso:**
- Padding componentes: `var(--space-6)` (24px)
- Margin entre secciones: `var(--space-16)` (64px)
- Gap en grids: `var(--space-8)` (32px)

---

## 🎭 EFECTOS ESPECIALES

### Partículas de Fondo (Canvas Animation)

**Concepto:** Partículas que se conectan formando "red neural" en hero section.

```javascript
// particles.js
const canvas = document.getElementById('particles-canvas');
const ctx = canvas.getContext('2d');

// Partículas con colores de paleta ModulorIA
const particles = [];
const colors = ['#1B3C53', '#234C6A', '#456882'];

// Lógica de animación: partículas se mueven suavemente
// Se conectan con líneas cuando están cerca
// Efecto parallax al mover mouse

// Implementación completa disponible en repo
```

**Implementación:**
- Canvas de fondo en hero section
- Muy sutil (opacidad 0.3)
- No distrae del contenido
- Se pausa si no está visible (performance)

---

### Scroll-triggered Animations

```javascript
// scroll-animations.js
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '-50px'
});

// Aplicar a elementos con clase .fade-in
document.querySelectorAll('.fade-in').forEach(el => {
  observer.observe(el);
});
```

---

### Número Animado (Contadores)

```javascript
// counter-animation.js
function animateCounter(element, target, duration = 2000) {
  const start = 0;
  const increment = target / (duration / 16);
  let current = start;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    element.textContent = Math.floor(current).toLocaleString('es-ES');
  }, 16);
}

// Uso: animateCounter(document.querySelector('.ahorro-total'), 87400);
```

---

## 🌓 DARK MODE (Opcional Fase 2)

```css
[data-theme="dark"] {
  --color-bg: var(--color-primary-dark);
  --color-text: var(--color-secondary-beige);
  --color-card-bg: rgba(35, 76, 106, 0.3);
}
```

*(No prioritario para MVP)*

---

## 📱 RESPONSIVE BREAKPOINTS

```css
/* Mobile First */
:root {
  --breakpoint-sm: 640px;   /* Tablets pequeñas */
  --breakpoint-md: 768px;   /* Tablets */
  --breakpoint-lg: 1024px;  /* Desktop */
  --breakpoint-xl: 1280px;  /* Desktop grande */
  --breakpoint-2xl: 1536px; /* Ultra wide */
}

/* Uso */
@media (min-width: 768px) {
  .hero-headline {
    font-size: var(--text-5xl);
  }
}
```

---

## ✅ CHECKLIST DE IMPLEMENTACIÓN

### Colores
- [ ] Máximo 10% naranja cobre (#C67A52) en todo el diseño
- [ ] 60% azules dominantes (#1B3C53, #234C6A, #456882)
- [ ] 30% beige (#D2C1B6) para fondos alternos
- [ ] Contraste ≥ 4.5:1 para textos (WCAG AA)

### Botones
- [ ] Máximo 1-2 CTAs primarios (naranja cobre) por pantalla
- [ ] Resto en secundario (#234C6A) u outline
- [ ] Hover states consistentes en todos
- [ ] Target size mínimo 44×44 px (accesibilidad)

### Tipografía
- [ ] Inter Variable como font principal
- [ ] Jerarquía clara H1-H4
- [ ] Line-height mínimo 1.5 para body text
- [ ] Letter-spacing negativo en headlines grandes

### Glassmorphism
- [ ] Blur mínimo 20px
- [ ] Border sutil rgba(255,255,255,0.18)
- [ ] Solo en cards, no en fondos grandes

### Animaciones
- [ ] Duración 0.3s estándar (ease-in-out)
- [ ] Breathing animation solo en elementos destacados
- [ ] Scroll animations con Intersection Observer
- [ ] No abusar: máximo 2-3 tipos de animación por página

---

**Última actualización:** 4 de diciembre de 2025
**Versión:** 1.0 con Paleta Oficial ModulorIA
**Para Gaby (diseñadora):** Este documento es la base. Todo diseño debe respetar esta paleta y proporciones 60-30-10.
