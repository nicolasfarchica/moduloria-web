# Integración Newsletter Template en n8n

## Workflow: ModulorIA - Envio Newsletter Semanal

### Variables del Template

El template `newsletter-n8n-template.html` usa estas variables:

| Variable | Descripción | Ejemplo |
|----------|-------------|---------|
| `{{ $json.saludo }}` | Saludo personalizado | "Hola, equipo ModulorIA" |
| `{{ $json.intro }}` | Párrafo introductorio (IA) | "Esta semana, la IA sigue..." |
| `{{ $json.resumen }}` | Resumen semanal (IA) | "Modelos que coordinan..." |
| `{{ $json.articulos_html }}` | HTML de artículos | Ver estructura abajo |
| `{{ $json.tip }}` | Tip de la semana (IA) | "¿Usas Slack? Integra..." |
| `{{ $json.unsubscribe_url }}` | URL de baja | Variable de Resend |

---

## Configuración de Nodos

### 1. Nodo "Preparar Datos" (Code Node)

Este nodo debe formatear los artículos de Notion en HTML:

```javascript
// Recibe artículos de Notion y los convierte a HTML
const articulos = $input.all();
let articulos_html = '';

for (const item of articulos) {
  const articulo = item.json;
  articulos_html += `
<table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 24px; border-bottom: 1px solid #e9ecef; padding-bottom: 24px;">
  <tr>
    <td>
      <h3 style="margin: 0 0 8px; color: #1a1a2e; font-size: 16px; font-weight: 600;">
        <span style="margin-right: 8px;">${articulo.emoji || '📰'}</span>${articulo.titulo}
      </h3>
      <p style="margin: 0 0 12px; color: #4a5568; font-size: 14px; line-height: 1.6;">
        ${articulo.descripcion}
      </p>
      <a href="${articulo.url}" style="color: #c9a56c; font-size: 14px; font-weight: 600; text-decoration: none;">
        Leer mas →
      </a>
    </td>
  </tr>
</table>`;
}

return [{ json: { articulos_html } }];
```

### 2. Nodo "AI Generar Newsletter" (OpenAI/Claude)

**Prompt sugerido:**

```
Genera contenido para el newsletter semanal de ModulorIA sobre IA y construcción modular.

Artículos de esta semana:
{{ $json.articulos }}

Genera en formato JSON:
{
  "intro": "Párrafo introductorio de 2-3 líneas sobre las novedades de la semana",
  "resumen": "Resumen ejecutivo de 2-3 líneas de los temas principales",
  "tip": "Un tip práctico de automatización para constructoras (1-2 líneas)"
}

Tono: Profesional pero accesible. Sin futurismos, datos reales.
```

**Output Parser:** JSON

### 3. Nodo "Aplicar Template" (Code Node)

```javascript
// Combina el contenido generado con el template
const aiContent = $('AI Generar Newsletter').item.json;
const articulos_html = $('Preparar Datos').item.json.articulos_html;

// Template HTML (copiar contenido de newsletter-n8n-template.html)
let template = `<!DOCTYPE html>...`; // Pegar template completo aquí

// Reemplazar variables
template = template.replace('{{ $json.saludo || \'Hola, equipo ModulorIA\' }}', 'Hola, equipo ModulorIA');
template = template.replace('{{ $json.intro }}', aiContent.intro);
template = template.replace('{{ $json.resumen }}', aiContent.resumen);
template = template.replace('{{ $json.articulos_html }}', articulos_html);
template = template.replace('{{ $json.tip }}', aiContent.tip);

return [{ json: { html: template } }];
```

### 4. Nodo "Enviar con Resend" (HTTP Request)

**Configuración:**

- **Method:** POST
- **URL:** `https://api.resend.com/emails`
- **Headers:**
  - `Authorization`: `Bearer {{ $env.RESEND_API_KEY }}`
  - `Content-Type`: `application/json`

**Body (JSON):**

```json
{
  "from": "ModulorIA <hola@moduloria.com>",
  "to": "{{ $json.email }}",
  "subject": "Newsletter ModulorIA: IA + Construcción esta semana",
  "html": "{{ $json.html }}"
}
```

---

## Estructura de Datos de Notion

Tu base de datos de Notion debe tener estos campos:

| Campo | Tipo | Uso |
|-------|------|-----|
| titulo | Title | Título del artículo |
| descripcion | Text | Descripción corta |
| url | URL | Link al artículo |
| emoji | Text | Emoji del artículo (opcional) |
| fecha | Date | Fecha de publicación |
| incluir_newsletter | Checkbox | Si incluir en newsletter |

**Filtro sugerido:** `incluir_newsletter = true` AND `fecha >= 7 días atrás`

---

## Emojis por Categoría

| Categoría | Emojis |
|-----------|--------|
| IA/Robots | 🤖 🧠 💡 |
| Comunicación | 💬 📱 📧 |
| Diseño | 🎨 ✏️ 📐 |
| Clima | 🌦️ ⛈️ ☀️ |
| Productividad | ⚡ 🚀 ⏱️ |
| Datos | 📊 📈 📉 |
| Construcción | 🏗️ 🔨 🏠 |

---

## Testing

1. Ejecuta el workflow manualmente primero
2. Verifica el HTML generado en el nodo "Aplicar Template"
3. Envía un email de prueba a tu correo personal
4. Revisa el renderizado en diferentes clientes (Gmail, Outlook)

---

## Colores de Marca

- **Dorado:** `#c9a56c`
- **Azul oscuro:** `#1a1a2e`
- **Azul medio:** `#16213e`
- **Texto principal:** `#1a1a2e`
- **Texto secundario:** `#4a5568`
- **Fondo:** `#f5f5f5`
