# Como Usar el Template de Newsletter Semanal

## Archivo Template
`newsletter-semanal-template.html`

## Instrucciones para Resend

### 1. Crear nuevo email en Resend
1. Ve a Resend > Emails > Create Email
2. Selecciona "HTML" como formato
3. Copia y pega el contenido de `newsletter-semanal-template.html`

### 2. Personalizar cada semana

#### Cambiar el saludo (opcional)
```html
<h1 style="...">
  Hola, equipo ModulorIA  <!-- Cambiar si quieres personalizar -->
</h1>
```

#### Cambiar el intro semanal
```html
<p style="margin: 0 0 28px; ...">
  Esta semana, la IA sigue transformando...  <!-- TU INTRO AQUI -->
</p>
```

#### Cambiar el resumen semanal
```html
<p style="margin: 0; color: #4a5568; ...">
  Modelos que coordinan humanos...  <!-- TU RESUMEN AQUI -->
</p>
```

#### Agregar/Modificar articulos
Cada articulo tiene esta estructura:
```html
<table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 24px; border-bottom: 1px solid #e9ecef; padding-bottom: 24px;">
  <tr>
    <td>
      <h3 style="margin: 0 0 8px; color: #1a1a2e; font-size: 16px; font-weight: 600;">
        <span style="margin-right: 8px;">EMOJI</span>TITULO DEL ARTICULO
      </h3>
      <p style="margin: 0 0 12px; color: #4a5568; font-size: 14px; line-height: 1.6;">
        DESCRIPCION DEL ARTICULO
      </p>
      <a href="URL_DEL_ARTICULO" style="color: #c9a56c; font-size: 14px; font-weight: 600; text-decoration: none;">
        Leer mas →
      </a>
    </td>
  </tr>
</table>
```

#### Cambiar el tip de la semana
```html
<p style="margin: 0; color: #78350f; ...">
  ¿Usas Slack? Integra Claude AI...  <!-- TU TIP AQUI -->
</p>
```

### 3. Emojis recomendados por categoria

| Categoria | Emojis |
|-----------|--------|
| IA/Robots | 🤖 🧠 💡 |
| Comunicacion | 💬 📱 📧 |
| Diseno | 🎨 ✏️ 📐 |
| Clima/Tiempo | 🌦️ ⛈️ ☀️ |
| Productividad | ⚡ 🚀 ⏱️ |
| Datos | 📊 📈 📉 |
| Construccion | 🏗️ 🔨 🏠 |
| Tips | 💡 ⚡ ✨ |

### 4. Variables de Resend

Reemplazar `{{unsubscribe_url}}` con la variable de Resend para darse de baja.

## Mejoras vs Template Anterior

| Antes | Ahora |
|-------|-------|
| Sin logo imagen | Logo HD con imagen |
| "\`\`\`html" visible | Sin errores de render |
| Lista con bullets basica | Cards con separadores |
| CTA simple | CTA con fondo destacado |
| Footer minimo | Footer completo con links |

## Preview

Para previsualizar:
1. Abre el archivo `.html` en un navegador
2. O usa una herramienta como [Litmus](https://litmus.com) o [Email on Acid](https://emailonacid.com)

## Colores de la marca

- **Dorado/Copper:** `#c9a56c`
- **Azul oscuro:** `#1a1a2e`
- **Azul medio:** `#16213e`
- **Texto principal:** `#1a1a2e`
- **Texto secundario:** `#4a5568`
- **Fondo:** `#f5f5f5`
