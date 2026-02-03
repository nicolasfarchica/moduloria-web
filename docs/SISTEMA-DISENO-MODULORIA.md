# 💎 Manual de Identidad Visual y Sistema de Diseño: ModulorIA

Este documento define las reglas de oro para mantener la estética **Premium / Nordic Light / Electric AI** de ModulorIA. Es la referencia absoluta para desarrolladores y creadores de contenido.

---

## 🎨 1. Paleta de Colores (The Power Trio)

El diseño se basa en el contraste entre la profundidad del Navy y el brillo metalizado del Cobre.

### Colores Base (60%)
- **Deep Navy (Fondo)**: `#050810` (Fondo principal, profundidad absoluta).
- **Secondary Navy**: `#0B1121` (Paneles, tarjetas y secciones secundarias).
- **Steel Blue**: `#456882` (Acentos técnicos, iconos discretos).

### Colores de Acción (30%)
- **Primary Cobre**: `#C67A52` (Botones principales, bordes de títulos H2, resaltados).
- **Copper Glow**: `#FFB088` (Efectos de iluminación, texto en hover).

### Highlights (10%)
- **Ice Silver**: `#E0F2FE` (Textos de alta lectura, detalles sutiles).
- **Pure White**: `#FFFFFF` (Títulos H1 y estados activos).

---

## ✍️ 2. Tipografía y Legibilidad

### Jerarquía de Títulos
- **H1 (Header)**: Fuente `Manrope`, peso `800`, tamaño `4rem+`. Tracking `tight`. Color `White`.
- **H2 (Sección)**: Fuente `Manrope`, peso `700`. **Regla de Oro**: Siempre acompañado de una barra vertical izquierda de `6px` en color `Cobre`.
- **H3 (Subsección)**: Fuente `Manrope`, peso `600`. Color `White` o `Cobre` muy suave.

### Cuerpo de Texto (Magazine Style)
- **Fuente**: `Inter`, peso `300` o `400`.
- **Color**: `#f1f5f9` (Slate-100/200). Nunca usar gris oscuro sobre fondo negro.
- **Interlineado (Aire)**: Mínimo `1.8`, ideal `2.2` para blogs. El texto debe "respirar".
- **Ancho de Lectura**: Máximo `850px` para artículos. Evitar líneas que crucen toda la pantalla.

---

## 📦 3. Componentes y Estructura

### Las Tarjetas (Glassmorphism)
- **Fondo**: `rgba(255, 255, 255, 0.03)`.
- **Borde**: `1px solid rgba(255, 255, 255, 0.1)`.
- **Radio**: `2rem` (32px) para un look moderno y suave.
- **Sombra**: `copper-glow` solo en hover.

### Las Tablas (The Premium Metric)
- **Padding**: Mínimo `2rem` (32px) en cada celda. No negociable.
- **Header**: Fondo cobre al `15%` de opacidad. Texto en mayúsculas con `letter-spacing: 0.2em`.
- **Separación**: `border-separate` con `spacing-0`.

---

## 🚀 4. Workflow de Implementación (Pasos para No Fallar)

Para añadir cualquier página o componente nuevo, sigue este orden:

1.  **Análisis de Espacio**: Define primero los márgenes. ¿Tiene suficiente aire? Si dGeneric, añade un 20% más de margen.
2.  **Id de Especificidad**: Para páginas de contenido (como el blog), usa un ID contenedor (ej: `#blog-premium-content`) para que los estilos personalizados manden sobre Tailwind.
3.  **Inyección de "Glow"**: Añade un elemento decorativo de fondo (un círculo de color con 120px de blur a opacidad 10%) para dar profundidad.
4.  **Test de Contrastes**: Verifica que el texto se lee perfectamente sin forzar la vista.
5.  **Verificación Móvil**: Todo debe colapsar en tarjetas verticales, manteniendo el padding de `2rem`.

---

## 🛠️ 5. Glosario de Clases CSS Reutilizables

- `.btn-primary`: Fondo cobre, texto blanco, sombra `copper-glow` en hover.
- `.glass-card`: Fondo translúcido con desenfoque (`backdrop-blur`).
- `.section-padding`: Margen vertical de `py-24` mínimo.
- `.text-gradient`: Degradado de Blanco a Steel Blue.

---
*Última actualización: 31 de Enero de 2026*
