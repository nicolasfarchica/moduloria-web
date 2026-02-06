# Manual de Marca - ModulorIA

> Documento unico y consolidado de identidad visual y verbal.
> Fuente de verdad para todo contenido, diseno y comunicacion de ModulorIA.
>
> Ultima actualizacion: 5 de febrero 2026

---

## Tabla de Contenidos

1. [Identidad Visual](#1-identidad-visual)
   - [Paleta de Colores](#11-paleta-de-colores)
   - [Tipografia](#12-tipografia)
   - [Logo](#13-logo)
   - [Gradientes](#14-gradientes)
   - [Sombras y Efectos](#15-sombras-y-efectos)
   - [Componentes UI](#16-componentes-ui)
2. [Identidad Verbal](#2-identidad-verbal)
   - [Arquetipo de Marca](#21-arquetipo-de-marca)
   - [Tono de Voz](#22-tono-de-voz)
   - [Vocabulario de Marca](#23-vocabulario-de-marca)
   - [Tagline y UVP](#24-tagline-y-uvp)
3. [Aplicaciones](#3-aplicaciones)
   - [Web](#31-web)
   - [Redes Sociales](#32-redes-sociales)
   - [Limites de Caracteres](#33-limites-de-caracteres)
4. [Referencia Rapida](#4-referencia-rapida)

---

# 1. Identidad Visual

## 1.1 Paleta de Colores

### Colores Primarios (60% del diseno)

| Color | HEX | Variable Tailwind | Uso |
|-------|-----|-------------------|-----|
| Azul Profundo | `#1B3C53` | `primary-dark` | Fondos principales, secciones |
| Azul Medio | `#234C6A` | `primary-medium` | Acciones primarias, botones secundarios |
| Azul Acero | `#456882` | `primary-steel` | Acentos tecnicos, bordes, detalles |
| Ice / Silver | `#E0F2FE` | `primary-light` | Highlights, textos claros sobre oscuro |

### Colores Secundarios (30%)

| Color | HEX | Variable Tailwind | Uso |
|-------|-----|-------------------|-----|
| Beige Arena | `#D2C1B6` | `secondary-beige` | Equilibrio de calidez, textos suaves |

### Colores de Acento (10% MAX)

| Color | HEX | Variable Tailwind | Uso |
|-------|-----|-------------------|-----|
| Naranja Cobre | `#C67A52` | `accent-copper` | CTA principal, bordes destacados, blockquotes |
| Copper Glow | `#FFB088` | `accent-glow` | Efectos de brillo, hover states |

### Fondos

| Color | HEX | Variable Tailwind | Uso |
|-------|-----|-------------------|-----|
| Deep Dark Navy | `#050810` | `background-start` | Fondo principal del body |
| Rich Dark Blue | `#0B1121` | `background-end` | Fondo de cards, secciones alternas |
| Almost Black | `#020408` | `background-dark` | Fondo mas oscuro, overlays |

### Neutros

| Color | HEX | Variable Tailwind | Uso |
|-------|-----|-------------------|-----|
| Blanco | `#FFFFFF` | `neutral-white` | Headings, texto principal |
| Gris 50 | `#F9F9F9` | `neutral-gray-50` | Fondos muy claros |
| Gris 100 | `#F3F4F6` | `neutral-gray-100` | Fondos claros |
| Gris 200 | `#E5E7EB` | `neutral-gray-200` | Bordes, separadores |
| Gris 800 | `#1F2937` | `neutral-gray-800` | Texto oscuro secundario |
| Gris 900 | `#111827` | `neutral-gray-900` | Texto oscuro primario |
| Negro | `#000000` | `neutral-black` | Absoluto |

### Colores Gamma (Tema Social Media)

Colores adaptados para carruseles y contenido generado con Gamma:

| Elemento | HEX | Uso |
|----------|-----|-----|
| Background Primary | `#1a1f36` | Fondo slides |
| Background Secondary | `#252b45` | Fondo alterno slides |
| Accent Dorado/Cobre | `#d4a574` | Lineas decorativas, acentos |
| Texto | `#FFFFFF` | Texto principal sobre fondo oscuro |

---

## 1.2 Tipografia

### Fuentes

| Fuente | Familia CSS | Uso | Carga |
|--------|-------------|-----|-------|
| **Inter** | `var(--font-inter), sans-serif` | Cuerpo de texto, parrafos, botones | Google Fonts (swap) |
| **Manrope** | `var(--font-manrope), sans-serif` | Titulos, headings, CTAs | Google Fonts (swap) |
| **JetBrains Mono** | `JetBrains Mono, Courier New, monospace` | Codigo, datos tecnicos | Local / fallback |

### Escala Tipografica

| Token | Tamano | Line Height | Uso tipico |
|-------|--------|-------------|------------|
| `xs` | 0.75rem (12px) | 1.4 | Etiquetas, metadata |
| `sm` | 0.875rem (14px) | 1.5 | Texto pequeno, captions |
| `base` | 1rem (16px) | 1.6 | Parrafos, cuerpo principal |
| `lg` | 1.125rem (18px) | 1.7 | Texto destacado, lead |
| `xl` | 1.25rem (20px) | 1.5 | Subtitulos pequenos |
| `2xl` | 1.5rem (24px) | 1.4 | Subtitulos |
| `3xl` | 1.875rem (30px) | 1.3 | H4 |
| `4xl` | 2.25rem (36px) | 1.2 | H3 |
| `5xl` | 3rem (48px) | 1.1 | H2 |
| `6xl` | 3.75rem (60px) | 1.1 | H1 |
| `7xl` | 4.5rem (72px) | 1.0 | Hero display |

### Pesos

| Peso | Valor | Uso |
|------|-------|-----|
| Light | 300 | Parrafos de blog (`blog-content p`) |
| Regular | 400 | Cuerpo general |
| Semibold | 600 | Subtitulos, botones |
| Bold | 700 | Strong, H3 |
| ExtraBold | 800 | H2, titulos de seccion |

### Reglas Tipograficas

- **Headings** (h1-h6): Color blanco (`#FFFFFF`), `tracking-tight`
- **Parrafos**: Color `slate-300`, `leading-relaxed`
- **Botones**: Font family `heading` (Manrope), `font-semibold`, `tracking-wide`
- **Blog content**: Font size `1.15rem`, line-height `2` (maximo aire)

### Tamanos para Redes Sociales

| Elemento | Instagram (1080px) | LinkedIn (1200px) |
|----------|-------------------|-------------------|
| Titulo principal | 48-72px | 56-80px |
| Subtitulo | 28-36px | 32-40px |
| Cuerpo | 20-28px | 24-32px |
| Texto pequeno | 16-20px | 18-24px |

---

## 1.3 Logo

### Versiones Disponibles

| Archivo | Formato | Uso |
|---------|---------|-----|
| `moduloria-logo-large-v1.jpg` | JPG | Presentaciones, documentos, fondos claros |
| `moduloria-logo-transparent.png` | PNG (transparente) | Web, overlays sobre fondos oscuros |
| `moduloria-logo-hd.png` | PNG (HD) | Impresion, uso a gran tamano |
| `moduloria-logo-circular.png` | PNG (circular) | Avatar de perfil, Gamma |
| `social/moduloria-logo-hires-borde.png` | PNG (borde) | Posts grandes en redes |
| `moduloria-logo-v2.png` | PNG | Headers, presentaciones |

Ubicacion en el proyecto: `web/public/images/`

### Posicionamiento del Logo

| Contexto | Posicion | Margen |
|----------|----------|--------|
| Posts / Carruseles | Esquina inferior derecha | 60px del borde |
| CTA final (slides) | Centrado | - |
| Stories | Esquina superior izquierda o centrado arriba | - |

### Espacio de Respeto

Mantener un margen minimo alrededor del logo equivalente al alto de la letra "M" del logotipo en todos los lados. Nunca colocar texto, iconos u otros elementos dentro de esta zona.

### Usos Incorrectos

- No estirar ni deformar el logo
- No cambiar los colores del logo
- No colocarlo sobre fondos que dificulten la lectura
- No rotarlo ni aplicar efectos no aprobados

---

## 1.4 Gradientes

### Hero Gradient

```css
background: linear-gradient(135deg, #0B1121 0%, #1B3C53 100%);
```
Tailwind: `bg-gradient-hero`

Uso: Seccion hero, fondos principales de pagina.

### CTA Gradient

```css
background: linear-gradient(135deg, #C67A52 0%, #b36943 100%);
```
Tailwind: `bg-gradient-cta`

Uso: Botones CTA premium, banners destacados.

### Hero Radial (CSS Component)

```css
background: radial-gradient(ellipse at top,
  rgba(35, 76, 106, 0.2),  /* primary-medium/20 */
  #050810,                   /* background-start */
  #050810                    /* background-start */
);
```
Clase: `.hero-gradient`

Uso: Fondo de seccion hero con efecto de luz superior.

### Text Gradient

```css
background: linear-gradient(to right, #FFFFFF, #E0F2FE, #456882);
background-clip: text;
color: transparent;
```
Clase: `.text-gradient`

Uso: Titulos hero con efecto degradado blanco-a-azul.

---

## 1.5 Sombras y Efectos

### Sombras

| Nombre | CSS | Uso |
|--------|-----|-----|
| `sm` | `0 2px 10px rgba(0,0,0,0.2)` | Elementos sutiles, inputs |
| `DEFAULT` | `0 4px 16px rgba(0,0,0,0.3)` | Cards estandar |
| `md` | `0 8px 30px rgba(0,0,0,0.4)` | Cards elevadas |
| `lg` | `0 20px 50px rgba(0,0,0,0.5)` | Modales, paneles flotantes |
| `glow` | `0 0 20px rgba(69,104,130,0.3)` | Hover en cards (azul acero) |
| `copper-glow` | `0 0 25px rgba(198,122,82,0.4)` | Hover en CTA (naranja cobre) |

### Text Glow

```css
text-shadow: 0 0 30px rgba(69, 104, 130, 0.5);
```
Clase: `.text-glow`

Uso: Titulos hero con efecto luminoso azul acero.

### Glassmorphism

Efecto de cristal con desenfoque usado en cards y navigation:

```
background: rgba(27, 60, 83, 0.2);   /* primary-dark/20 */
backdrop-filter: blur(24px);          /* backdrop-blur-xl */
border: 1px solid rgba(255,255,255,0.1);
```
Clase: `.glass-card`

Para el navbar:
```
background: rgba(5, 8, 16, 0.9);     /* background-start/90 */
backdrop-filter: blur(40px);          /* backdrop-blur-2xl */
border-bottom: 1px solid rgba(255,255,255,0.05);
```
Clase: `.glass-panel`

### Animaciones

| Nombre | Duracion | Tipo | Uso |
|--------|----------|------|-----|
| `breathing` | 6s ease-in-out infinite | Scale 1 → 1.02 | Elementos con efecto "respiracion" |
| `fade-in` | 0.8s ease-out | Opacity + translateY(20px→0) | Entrada de elementos al scroll |
| `slide-up` | 0.8s ease-out | TranslateY(40px→0) | Entrada desde abajo |
| `pulse-slow` | 4s cubic-bezier | Pulse | Indicadores sutiles |

### Grid Pattern (Background)

```css
background-image:
  linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
  linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px);
background-size: 40px 40px;
```
Clase: `.bg-grid-pattern`

Uso: Fondos con patron de cuadricula sutil.

---

## 1.6 Componentes UI

### Botones

| Clase | Fondo | Texto | Hover |
|-------|-------|-------|-------|
| `.btn-primary` | `accent-copper` (#C67A52) | Blanco | Copper glow + elevacion |
| `.btn-secondary` | `primary-medium` (#234C6A) | Blanco | Oscurece a `primary-dark` |
| `.btn-outline` | Transparente | Blanco | Fondo `primary-dark/50`, borde y texto cobre |

Todos los botones: `rounded-lg`, font Manrope, `font-semibold`, `px-8 py-4`, transicion 300ms.

### Cards

| Clase | Estilo | Hover |
|-------|--------|-------|
| `.card` | Fondo `background-end/80`, borde `white/5`, `rounded-2xl`, `backdrop-blur-sm` | Borde `primary-steel/30`, shadow `glow` |
| `.glass-card` | Fondo `primary-dark/20`, `backdrop-blur-xl`, borde `white/10` | Fondo `primary-dark/30`, borde `white/20`, gradiente overlay |

### Espaciado

| Clase | Valor |
|-------|-------|
| `.container-custom` | `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` |
| `.section-padding` | `py-24 md:py-32` |

### Border Radius

| Token | Valor |
|-------|-------|
| `DEFAULT` | 8px |
| `lg` | 12px |
| `xl` | 16px |
| `2xl` | 24px |

---

# 2. Identidad Verbal

## 2.1 Arquetipo de Marca

### EL SABIO PRAGMATICO (The Sage + The Hero)

**70% Sabio / 30% Heroe**

**El Sabio (70%):**
- Busca la verdad y el conocimiento
- Comparte expertise generosamente
- Transparente, honesto, educativo
- Basado en datos y evidencia

**El Heroe (30%):**
- Resuelve problemas concretos
- Actua con valentia y determinacion
- Capacita a otros para el exito
- Orientado a resultados tangibles

**En la practica:**
ModulorIA es el consultor que no solo te dice QUE hacer, sino que te MUESTRA como hacerlo. No vende humo ni promesas. Comparte conocimiento abiertamente, educa al mercado, y luego demuestra valor con resultados medibles.

### Brand Story (Resumen)

Fundada por Nicolas Farchica - licenciado en marketing argentino que emigro a Europa y trabajo 3 anos en construccion. Esa experiencia directa en obra le dio una vision unica: vio problemas operativos que consultores tecnologicos nunca ven, y conecto esos problemas con soluciones de IA practica.

**ModulorIA = el puente entre la realidad diaria de la construccion y el potencial transformador de la IA.**

---

## 2.2 Tono de Voz

### Los 5 Pilares del Tono

#### 1. DIRECTO Y CLARO (No Corporate Speak)

| SI | NO |
|----|-----|
| "Ahorras €67K al ano. Punto." | "Optimizamos sinergias operativas..." |
| "Procesas facturas en 10 segundos, no 5 minutos." | "Soluciones end-to-end que transforman..." |
| "Implementamos en 2 semanas. No en 6 meses." | "Ecosistema integrado de innovacion..." |

#### 2. TRANSPARENTE Y HONESTO (Radical Transparency)

| SI | NO |
|----|-----|
| "Esto cuesta €5.000. Lo recuperas en 7 semanas." | "Contactanos para presupuesto personalizado" |
| "No puedo automatizar eso. No tiene sentido." | "Solucion a medida segun necesidades" |
| "Competencia cobra €60K. Yo €8K." | "Cotizacion sujeto a analisis" |

#### 3. PRACTICO Y ACCIONABLE (No Fluff, All Substance)

| SI | NO |
|----|-----|
| "Paso 1: Toma foto. Paso 2: IA extrae datos. Paso 3: Se registra solo." | "Transformamos tu forma de trabajar..." |
| "Problema: 20h/semana en WhatsApp. Solucion: Bot. Ahorro: 15h." | "Innovacion disruptiva en tu industria..." |

#### 4. EMPATICO Y CERCANO (Entiendo tu dolor)

| SI | NO |
|----|-----|
| "Se lo que es buscar una factura en 500 emails." | "Nuestros estudios demuestran que el 73.2%..." |
| "Trabaje en construccion 3 anos. Vivi estos problemas." | "Como lideres en transformacion digital..." |

#### 5. CONFIADO PERO HUMILDE (Expert, not Arrogant)

| SI | NO |
|----|-----|
| "He automatizado esto 10 veces. Funciona." | "Somos los #1 en IA para construccion" |
| "No se todo de construccion, pero se TODO de automatizar construccion." | "Metodologia unica, patentada, revolucionaria..." |

### Matriz de Tono por Contexto

| Contexto | Tono Dominante |
|----------|---------------|
| LinkedIn Post | 60% Educativo / 40% Inspiracional |
| Landing Page | 70% Practico / 30% Persuasivo |
| Email Cliente | 80% Directo / 20% Empatico |
| Llamada Auditoria | 50% Consultivo / 50% Analitico |
| Propuesta Comercial | 90% Tecnico / 10% Inspiracional |
| Redes Sociales (Story/Reel) | 70% Casual / 30% Educativo |
| Networking Presencial | 60% Conversacional / 40% Experto |

---

## 2.3 Vocabulario de Marca

### Palabras que USAMOS

**Verbos de accion:**
- Automatizar (no "digitalizar")
- Ahorrar (no "optimizar")
- Implementar (no "desplegar")
- Procesar (no "gestionar")
- Eliminar (no "reducir")

**Sustantivos clave:**
- Proceso (no "workflow")
- Ahorro (no "eficiencia")
- Factura / Albaran / Parte de obra (lenguaje del sector)
- WhatsApp / Email / Foto (herramientas que ya usan)
- IA practica (no "inteligencia artificial avanzada")

**Adjetivos diferenciadores:**
- Rapido (2-4 semanas)
- Simple (sin codigo)
- Transparente (precios publicos)
- Practico (no teorico)
- Medible (ROI cuantificado)

### Palabras que EVITAMOS

**Jerga tech generica:**
- "Transformacion digital"
- "Disruptivo"
- "Innovacion"
- "Ecosistema"
- "Sinergia"
- "End-to-end"
- "Holistico"
- "Escalable" → usar "crecer sin contratar mas gente"
- "Solucion integral"

**Promesas vagas:**
- "Ahorrar tiempo" → usar "ahorrar 15 horas/semana"
- "Mejorar eficiencia" → usar "reducir errores 80%"
- "Optimizar procesos" → usar "procesar facturas en 10 segundos"

**Exageraciones:**
- "Revolucionario"
- "Magico"
- "Increible"
- "El futuro es ahora"

---

## 2.4 Tagline y UVP

### Tagline (favorita)

> **"Construye mas rapido. Automatiza mas inteligente."**

Alternativas aprobadas:
- "Automatizacion inteligente. Construccion sin complicaciones."
- "Tu construccion modular, automatizada."
- "IA practica para construccion real."

### Propuesta de Valor Unica (UVP)

**Version completa:**
Ayudamos a PYMEs de construccion modular (5-200 empleados) a automatizar procesos operativos repetitivos que consumen 15-25 horas/semana, mediante IA practica y automatizacion no-code implementada en 2-4 semanas, para que ahorren €67K-€156K/ano y escalen sin contratar mas gente.

**Version corta (web):**
"Automatizacion IA para construccion modular. Ahorra tiempo y dinero sin programar. ROI en 2-3 semanas."

**Version LinkedIn (220 caracteres):**
"Ayudo a PYMEs de construccion modular a ahorrar €67K-156K/ano automatizando con IA | Fundador @ModulorIA | ROI en 2-3 semanas sin programar"

### Pilares de Comunicacion

1. **Especializacion extrema** → "Solo construccion modular. Nada mas."
2. **Velocidad y practicidad** → "Resultados en semanas, no meses."
3. **ROI cuantificado y transparente** → "Numeros claros. Sin promesas vagas."

---

# 3. Aplicaciones

## 3.1 Web

### Estilos de Texto

| Elemento | Fuente | Tamano | Peso | Color |
|----------|--------|--------|------|-------|
| H1 Hero | Manrope | 3.75-4.5rem | 800 | `#FFFFFF` |
| H2 Seccion | Manrope | 2.25rem | 800 | `#FFFFFF`, borde izq cobre |
| H3 | Manrope | 1.75rem | 700 | `#FFFFFF` |
| Parrafo | Inter | 1-1.15rem | 300-400 | `slate-300` |
| CTA texto | Manrope | base | 600 | `#FFFFFF` |
| Codigo | JetBrains Mono | sm | 400 | Segun contexto |

### Blog Content

- H2 con borde izquierdo de 6px en `#C67A52` y padding-left 1.5rem
- Parrafos con `margin-bottom: 2.5rem`, peso 300, `letter-spacing: 0.02em`
- Blockquotes con fondo `rgba(255,255,255,0.03)`, `border-radius: 1.5rem`, borde izq 4px cobre
- Tablas con fondo `rgba(255,255,255,0.02)`, headers en color cobre con uppercase y letter-spacing
- HR: 1px `rgba(255,255,255,0.1)` con margin 6rem

---

## 3.2 Redes Sociales

### Colores por Plataforma

**Contenido organico (posts, carruseles):**
Usar la paleta Gamma para contenido generado:
- Fondo: `#1a1f36` (primario) / `#252b45` (secundario)
- Acento: `#d4a574` (dorado/cobre)
- Texto: `#FFFFFF`

### Dimensiones por Plataforma

#### Instagram

| Tipo | Dimensiones | Ratio |
|------|-------------|-------|
| Feed post (preferido) | 1080x1350px | 4:5 |
| Feed cuadrado | 1080x1080px | 1:1 |
| Stories/Reels | 1080x1920px | 9:16 |
| Carrusel | 1080x1350px | 4:5 |

#### Facebook

| Tipo | Dimensiones | Ratio |
|------|-------------|-------|
| Feed post | 1200x630px | ~1.9:1 |
| Cuadrado | 1200x1200px | 1:1 |
| Carrusel | 1080x1080px | 1:1 |
| Cover page | 820x312px | ~2.6:1 |

#### LinkedIn

| Tipo | Dimensiones | Ratio |
|------|-------------|-------|
| Post con imagen | 1200x627px | ~1.9:1 |
| Post cuadrado | 1200x1200px | 1:1 |
| Documento/PDF | 1080x1350px | 4:5 |
| Banner empresa | 1128x191px | ~5.9:1 |

### Estructura de Carrusel (8 slides)

1. **Portada**: Hook + titulo atractivo
2. **Problema**: Pregunta o dolor identificable
3. **Agitacion**: Consecuencias del problema
4. **Solucion**: Que ofrecemos
5. **Como funciona**: Proceso o metodologia
6. **Beneficios**: 3-4 puntos clave
7. **Prueba/Autoridad**: Credibilidad
8. **CTA**: Llamada a la accion clara

### Estructura de Post de Texto (LinkedIn)

```
[Hook - primera linea impactante]

[Desarrollo del problema - 2-3 parrafos]

[Solucion propuesta - puntos claros]

[CTA + pregunta de engagement]

[Hashtags - maximo 5-7]
```

---

## 3.3 Limites de Caracteres

| Plataforma | Limite | Notas |
|------------|--------|-------|
| LinkedIn | 3,000 caracteres | Post de empresa |
| Instagram | 2,200 caracteres | Caption. Hashtags en primer comentario |
| Facebook | 63,206 caracteres | Post de pagina |

---

# 4. Referencia Rapida

## Cheat Sheet de Colores

```
PRIMARIOS (60%)
  Azul Profundo ........ #1B3C53
  Azul Medio ........... #234C6A
  Azul Acero ........... #456882
  Ice / Silver ......... #E0F2FE

SECUNDARIO (30%)
  Beige Arena .......... #D2C1B6

ACENTO (10% MAX)
  Naranja Cobre ........ #C67A52
  Copper Glow .......... #FFB088

FONDOS
  Deep Dark Navy ....... #050810
  Rich Dark Blue ....... #0B1121
  Almost Black ......... #020408

NEUTROS
  Blanco ............... #FFFFFF
  Gris 50 .............. #F9F9F9
  Gris 100 ............. #F3F4F6
  Gris 200 ............. #E5E7EB
  Gris 800 ............. #1F2937
  Gris 900 ............. #111827
  Negro ................ #000000

GAMMA (Redes Sociales)
  Fondo Primario ....... #1a1f36
  Fondo Secundario ..... #252b45
  Acento Dorado ........ #d4a574
```

## Fuentes de un Vistazo

```
TITULOS ........... Manrope (SemiBold 600 / Bold 700 / ExtraBold 800)
CUERPO ............ Inter (Light 300 / Regular 400)
BOTONES ........... Manrope (SemiBold 600)
CODIGO ............ JetBrains Mono (Regular 400)
```

## Tono en una Linea

> Directo + Transparente + Practico + Empatico + Confiado (sin arrogancia)

## Regla de Oro del Contenido

Antes de publicar, verifica:

- [ ] Tiene numeros especificos (ahorro/tiempo/ROI)?
- [ ] Usa lenguaje directo sin jerga corporativa?
- [ ] Incluye ejemplos concretos del sector?
- [ ] Termina con CTA accionable?
- [ ] Suena como Nicolas hablando, no como un depto. de marketing?
- [ ] Aporta valor educativo incluso si no compran?

**Si 2+ respuestas son NO: reescribir.**

---

## Documentos Fuente

Este manual consolida informacion de:

| Archivo | Contenido |
|---------|-----------|
| `web/tailwind.config.ts` | Colores, tipografia, sombras, animaciones |
| `web/src/app/globals.css` | Estilos de componentes, variables CSS |
| `web/src/app/[locale]/layout.tsx` | Definicion de fuentes |
| `web/public/images/` | Logos |
| `web/public/images/social/GUIA-MARCA-REDES.md` | Guia visual para redes |
| `docs/estrategia/Tono-de-Voz-Personalidad-Marca.md` | Voz y personalidad |
| `docs/estrategia/Brand-Story.md` | Historia de marca |
| `docs/estrategia/Propuesta-Valor-Elevator-Pitch.md` | Posicionamiento |
| `docs/SISTEMA-CONTENIDO-APIS.md` | Colores Gamma |
