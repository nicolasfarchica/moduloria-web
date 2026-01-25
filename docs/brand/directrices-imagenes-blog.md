# Directrices de Imágenes - Blog ModulorIA

## Especificaciones Técnicas (USAR SIEMPRE)

| Propiedad | Valor |
|-----------|-------|
| **Tamaño** | 1200 x 630 px (ratio OG para redes sociales) |
| **Formato** | WebP o JPG |
| **Peso máximo** | < 200 KB |
| **Estilo** | Profesional, minimalista, tonos oscuros con acentos cobre/naranja |

## Paleta de Colores

| Color | Hex | Uso |
|-------|-----|-----|
| Fondo oscuro | #0f172a o #1e293b | Background principal |
| Acento cobre | #c77b42 | Elementos destacados, datos digitales |
| Texto | #FFFFFF | Si hubiera texto (evitar) |

## Estructura del Prompt

Cada prompt debe seguir este formato:

```
Professional tech illustration for a blog post about [TEMA].
Dark navy background (#0f172a). [DESCRIPCIÓN VISUAL ESPECÍFICA].
Copper/orange accent color (#c77b42) for [ELEMENTOS DESTACADOS].
Clean, minimal, modern SaaS style. No text.
1200x630px.
```

---

## Prompts para Artículos Nuevos

### 1. 5 Tareas que tu Constructora Puede Automatizar
**Archivo:** `automatizacion-construccion-modular.jpg`

```
Professional tech illustration for a blog post about construction automation tasks.
Dark navy background (#0f172a). Show 5 floating icons representing different
business tasks (invoice, email, report, chat bubble, calendar) connected by
flowing digital lines to a central automation hub. Copper/orange accent color
(#c77b42) for the digital connections and hub glow. Clean, minimal, modern
SaaS style. No text. 1200x630px.
```

### 2. Por Qué el 80% Pierde Dinero en Tareas Manuales
**Archivo:** `perdida-dinero-tareas-manuales.jpg`

```
Professional tech illustration for a blog post about money lost in manual tasks.
Dark navy background (#0f172a). Show a visual metaphor of time/money draining
through manual paperwork on the left side, contrasted with efficient digital
automation on the right side. Copper/orange accent color (#c77b42) for the
digital/efficient elements. Clean, minimal, modern SaaS style. No text.
1200x630px.
```

### 3. OCR para Facturas: De 15 Minutos a 30 Segundos
**Archivo:** `ocr-facturas-construccion.jpg`

```
Professional tech illustration for a blog post about OCR invoice automation
in construction. Dark navy background (#0f172a). Show a stack of paper invoices
on the left transforming into organized digital data on the right, with subtle
AI neural network lines connecting them. Copper/orange accent color (#c77b42)
for the digital elements. Clean, minimal, modern SaaS style. No text.
1200x630px.
```

### 4. Reportes Automáticos de Obra en Minutos
**Archivo:** `reportes-automaticos-obra.jpg`

```
Professional tech illustration for a blog post about automated construction reports.
Dark navy background (#0f172a). Show data flowing from multiple construction
project sources into a central dashboard that generates a polished PDF report.
Copper/orange accent color (#c77b42) for the dashboard elements and data flows.
Clean, minimal, modern SaaS style. No text. 1200x630px.
```

### 5. Chatbots para Construcción: Responder 24/7
**Archivo:** `chatbot-construccion-modular.jpg`

```
Professional tech illustration for a blog post about AI chatbots for construction.
Dark navy background (#0f172a). Show a friendly chat interface with conversation
bubbles, connected to a 24/7 clock symbol and construction industry icons
(building, hardhat). Copper/orange accent color (#c77b42) for the chat bubbles
and AI elements. Clean, minimal, modern SaaS style. No text. 1200x630px.
```

---

## Imágenes Existentes (Referencia)

Estas imágenes ya existen en `/public/images/blog/`:

| Archivo | Artículo |
|---------|----------|
| hero-casos-exito.jpg | Casos de éxito IA España |
| hero-chatbot-whatsapp.jpg | Chatbot WhatsApp |
| hero-ia-construccion-modular.jpg | Cómo implementar IA |
| hero-ocr-facturas.jpg | OCR Facturas ROI |
| hero-reportes-voz.jpg | Reportes por voz |

---

## Proceso de Creación

1. Copiar el prompt correspondiente
2. Generar en DALL-E, Midjourney o similar
3. Verificar que el tamaño sea 1200x630px
4. Optimizar para que pese < 200KB (TinyPNG, Squoosh)
5. Guardar con el nombre correcto en `/public/images/blog/`
6. Verificar que el artículo referencia el archivo correcto

---

## Notas Importantes

- **NO incluir texto** en las imágenes (se ve mal al escalar)
- **Mantener consistencia** en el estilo entre todas las imágenes
- **Fondo siempre oscuro** (#0f172a o #1e293b)
- **Acento siempre cobre** (#c77b42) para elementos digitales/tecnológicos

---

*Última actualización: 25 Enero 2026*
