# 🚀 Guía Completa: Blog, Captura de Emails y Chatbot

Esta guía explica cómo usar las nuevas funcionalidades implementadas en ModulorIA.

---

## 📝 Parte 1: Blog con MDX

### ¿Qué se implementó?

✅ Sistema de blog completo con Markdown (MD/MDX)
✅ SEO optimizado automático para cada artículo
✅ Structured Data (Schema.org) para Google
✅ Diseño responsive y profesional
✅ Tiempo de lectura calculado automáticamente
✅ Sistema de categorías y tags

### Estructura de Archivos

```
web/
├── src/
│   ├── app/
│   │   └── blog/
│   │       ├── page.tsx          # Página índice del blog
│   │       └── [slug]/
│   │           └── page.tsx      # Página individual de artículo
│   ├── content/
│   │   └── blog/
│   │       └── *.md              # TUS ARTÍCULOS AQUÍ
│   └── lib/
│       └── blog.ts               # Utilidades para leer artículos
└── public/
    └── downloads/                # PDFs y recursos descargables
```

---

### Cómo Crear un Nuevo Artículo

#### Paso 1: Crear el archivo `.md`

Crea un nuevo archivo en `src/content/blog/` con el nombre del slug (URL):

```bash
# Ejemplo:
src/content/blog/5-errores-ia-construccion.md
```

#### Paso 2: Agregar Front Matter (Metadatos)

Cada artículo DEBE comenzar con metadatos en formato YAML:

```markdown
---
title: "5 Errores Comunes al Implementar IA en Construcción Modular"
date: "2025-01-20"
excerpt: "Evita estos errores comunes que cometen las constructoras al implementar IA por primera vez."
author: "ModulorIA Team"
category: "Consejos"
image: "/images/blog/errores-ia.jpg"
tags: ["IA", "Errores Comunes", "Construcción Modular", "Consejos"]
---

# Tu contenido aquí...
```

**Campos obligatorios:**
- `title`: Título del artículo (SEO-friendly)
- `date`: Fecha de publicación (formato: YYYY-MM-DD)
- `excerpt`: Resumen breve (155-160 caracteres, aparece en Google)
- `author`: Nombre del autor
- `category`: Una categoría principal
- `tags`: Array de tags (keywords)

**Campo opcional:**
- `image`: Ruta a imagen destacada (recomendado para SEO)

#### Paso 3: Escribir el Contenido

Usa Markdown estándar:

```markdown
## Subtítulos con ##

Texto normal, **negrita**, *cursiva*.

### Listas

- Item 1
- Item 2
- Item 3

### Enlaces

[Texto del enlace](https://ejemplo.com)

### Imágenes

![Alt text](/images/blog/mi-imagen.jpg)

### Código

Usa \`código inline\` o bloques:

\`\`\`javascript
const ejemplo = "código";
\`\`\`

### Citas

> Esta es una cita destacada
```

#### Paso 4: Agregar CTAs (Calls to Action)

**Recomendación**: Incluye CTAs en tu contenido:

```markdown
---

¿Quieres ayuda para implementar esto en tu constructora?

[👉 Agendar Diagnóstico](/auditoria)

---
```

---

### SEO Automático

El blog implementa automáticamente:

✅ **Metadatos optimizados** (title, description, keywords)
✅ **Open Graph tags** (Facebook, LinkedIn)
✅ **Twitter Cards**
✅ **Canonical URLs** (evita duplicados)
✅ **Structured Data** (Schema.org Article)
✅ **Reading time** (tiempo de lectura)
✅ **Sitemap.xml** automático (Next.js lo genera)

**No necesitas hacer nada extra** - todo se genera automáticamente del front matter.

---

### Cómo Agregar Imágenes al Blog

#### Opción 1: Imágenes locales

1. Coloca tus imágenes en `public/images/blog/`
2. Referéncialas en el artículo:

```markdown
![Descripción](/images/blog/mi-imagen.jpg)
```

#### Opción 2: URLs externas

Puedes usar URLs de servicios como Unsplash, Cloudinary, etc:

```markdown
![Descripción](https://images.unsplash.com/photo-xxxx)
```

**Recomendación de tamaños:**
- Imagen destacada (featured): 1200x630px (formato Open Graph)
- Imágenes inline: 800-1200px de ancho máximo

---

### Cómo Enlazar PDFs Descargables

#### Paso 1: Subir PDF

Coloca tu PDF en `public/downloads/`:

```bash
public/downloads/guia-ia-construccion.pdf
```

#### Paso 2: Enlazar desde el artículo

```markdown
Descarga nuestra guía completa sobre IA en construcción:

[📥 Descargar Guía PDF (2.5 MB)](/downloads/guia-ia-construccion.pdf)
```

#### Paso 3 (Opcional): Lead Magnet

Si quieres capturar email antes de descargar:

```markdown
[📥 Descargar Guía Gratuita](#form-lead-magnet)

<!-- Más adelante en el artículo -->
<div id="form-lead-magnet">
  <!-- Aquí irá el formulario de captura (ver Parte 2) -->
</div>
```

---

### Categorías Recomendadas

Mantén consistencia en las categorías:

- **Guías**: Tutoriales paso a paso
- **Consejos**: Tips rápidos y best practices
- **Casos de Éxito**: Historias de clientes reales
- **Novedades**: Actualizaciones del sector
- **Recursos**: Plantillas, checklists, herramientas

---

### Checklist SEO por Artículo

Antes de publicar un nuevo artículo, verifica:

- [ ] Título optimizado (50-60 caracteres, incluye keyword)
- [ ] Excerpt atractivo (155-160 caracteres)
- [ ] Imagen destacada agregada (1200x630px)
- [ ] Al menos 3-5 tags relevantes
- [ ] Contenido > 1000 palabras (ideal: 1500-2500)
- [ ] Al menos 1 CTA hacia /auditoria
- [ ] Enlaces internos a otros artículos o páginas
- [ ] Headers estructurados (H1 → H2 → H3)
- [ ] Alt text en todas las imágenes

---

## 📧 Parte 2: Sistema de Captura de Emails

### ¿Qué se necesita implementar?

El blog está listo, pero **aún necesitas implementar** el backend para capturar emails.

### Opciones de Implementación

#### Opción A: Base de Datos Local (SQLite/PostgreSQL)

**Ventajas:**
- Control total de tus datos
- Gratis
- GDPR-compliant (datos en tu servidor)

**Desventajas:**
- Necesitas implementar API routes
- Necesitas panel admin para ver emails

**Pasos:**

1. **Instalar dependencias:**

```bash
npm install prisma @prisma/client
```

2. **Crear schema de base de datos:**

Archivo: `prisma/schema.prisma`

```prisma
datasource db {
  provider = "sqlite"  // o "postgresql"
  url      = "file:./dev.db"
}

generator client {
  provider = "prisma-client-js"
}

model EmailSubscriber {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  name      String?
  source    String   // "newsletter", "lead-magnet", "audit-form"
  metadata  String?  // JSON con info adicional
  createdAt DateTime @default(now())
  verified  Boolean  @default(false)
}
```

3. **Inicializar Prisma:**

```bash
npx prisma init
npx prisma migrate dev --name init
```

4. **Crear API route para suscripciones:**

Archivo: `src/app/api/subscribe/route.ts`

```typescript
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const { email, name, source } = await request.json();

    // Validar email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      );
    }

    // Guardar en base de datos
    const subscriber = await prisma.emailSubscriber.create({
      data: {
        email,
        name: name || null,
        source: source || 'newsletter',
      },
    });

    // TODO: Enviar email de confirmación (opcional)

    return NextResponse.json({
      success: true,
      message: 'Suscripción exitosa',
    });
  } catch (error: any) {
    if (error.code === 'P2002') {
      return NextResponse.json(
        { error: 'Este email ya está suscrito' },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { error: 'Error al suscribir' },
      { status: 500 }
    );
  }
}
```

5. **Crear componente de formulario:**

Archivo: `src/components/NewsletterForm.tsx`

```typescript
'use client';

import { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'newsletter' }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage('¡Gracias! Revisa tu email para confirmar.');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error || 'Error al suscribir');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Error de conexión');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="tu@email.com"
          required
          disabled={status === 'loading'}
          className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent-copper"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="btn-primary px-6 py-3"
        >
          {status === 'loading' ? 'Enviando...' : 'Suscribir'}
        </button>
      </div>
      {message && (
        <p className={`mt-2 text-sm ${status === 'success' ? 'text-green-400' : 'text-red-400'}`}>
          {message}
        </p>
      )}
    </form>
  );
}
```

6. **Usar el formulario en cualquier página:**

```tsx
import NewsletterForm from '@/components/NewsletterForm';

// En tu componente:
<div className="section-padding bg-background-dark">
  <h3 className="text-2xl font-bold text-white text-center mb-6">
    Suscríbete a nuestro Newsletter
  </h3>
  <NewsletterForm />
</div>
```

---

#### Opción B: Servicio Externo (Más Simple)

**Servicios recomendados:**

1. **ConvertKit** (Gratis hasta 1000 suscriptores)
2. **Mailchimp** (Gratis hasta 500 suscriptores)
3. **Sendinblue / Brevo** (Gratis hasta 300 emails/día)

**Ventajas:**
- Setup en 10 minutos
- Emails automáticos incluidos
- Analytics incluido

**Desventajas:**
- Dependes de terceros
- Puede tener costos mensuales

---

### Tipos de Formularios a Implementar

#### 1. Newsletter Simple

Coloca en el blog sidebar o footer:

```tsx
<NewsletterForm />
```

#### 2. Lead Magnet (PDF a cambio de email)

```tsx
<LeadMagnetForm
  downloadUrl="/downloads/guia-ia.pdf"
  source="guia-ia-construccion"
/>
```

#### 3. Formulario de Contacto Mejorado

Ya tienes `/auditoria` - puedes mejorar para guardar en BD:

```typescript
// src/app/api/audit-form/route.ts
export async function POST(request: Request) {
  const data = await request.json();

  // Guardar en base de datos
  await prisma.auditForm.create({ data });

  // Enviar email notificación
  await sendEmailNotification(data);

  return NextResponse.json({ success: true });
}
```

---

## 🤖 Parte 3: Chatbot con N8n e IA

### ¿Qué es N8n?

**n8n** es una plataforma de automatización open-source (como Zapier/Make pero más potente y autohosteada).

Puedes usarlo para crear un chatbot con IA que:
- Responda preguntas sobre construcción modular
- Esté entrenado en tu contenido (blog, documentos)
- Capture leads automáticamente
- Se integre con Claude, GPT-4, o modelos open-source

---

### Opciones de Implementación

#### Opción A: n8n Cloud (Más Simple)

**Precio:** Desde $20/mes (incluye hosting)

**Pasos:**

1. **Crear cuenta en n8n.cloud**
   - Ve a [https://n8n.io/cloud](https://n8n.io/cloud)
   - Crea cuenta y workspace

2. **Crear workflow de chatbot**

Workflow básico:
```
Webhook → AI Agent (Claude/GPT) → Enviar Respuesta → Guardar en BD
```

3. **Configurar AI Agent:**
   - Modelo: Claude 3.5 Sonnet (recomendado para documentos técnicos)
   - Context: Cargar tus artículos del blog como knowledge base
   - System prompt: "Eres un experto en IA para construcción modular..."

4. **Obtener webhook URL**

n8n te dará una URL como:
```
https://tu-instance.n8n.cloud/webhook/chat
```

5. **Integrar en tu web:**

Archivo: `src/components/ChatWidget.tsx`

```typescript
'use client';

import { useState } from 'react';

export default function ChatWidget() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const sendMessage = async () => {
    const userMessage = { role: 'user', content: input };
    setMessages([...messages, userMessage]);
    setInput('');

    // Enviar a n8n webhook
    const response = await fetch('https://tu-instance.n8n.cloud/webhook/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input }),
    });

    const data = await response.json();
    const botMessage = { role: 'assistant', content: data.reply };
    setMessages([...messages, userMessage, botMessage]);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 w-16 h-16 bg-accent-copper rounded-full shadow-lg flex items-center justify-center z-50 hover:scale-110 transition-transform"
      >
        💬
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-8 w-96 h-[500px] bg-slate-900 border border-white/10 rounded-2xl shadow-2xl z-50 flex flex-col">
          {/* Header */}
          <div className="p-4 border-b border-white/10">
            <h3 className="font-bold text-white">Asistente ModulorIA</h3>
            <p className="text-xs text-slate-400">Pregúntame sobre IA en construcción</p>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-3 rounded-lg ${
                  msg.role === 'user'
                    ? 'bg-accent-copper text-white ml-8'
                    : 'bg-white/5 text-slate-300 mr-8'
                }`}
              >
                {msg.content}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-white/10">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Escribe tu pregunta..."
                className="flex-1 px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-accent-copper"
              />
              <button
                onClick={sendMessage}
                className="bg-accent-copper text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-accent-copper/80"
              >
                Enviar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
```

6. **Agregar a layout:**

```tsx
// src/app/layout.tsx
import ChatWidget from '@/components/ChatWidget';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
```

---

#### Opción B: n8n Self-Hosted (Gratis pero más técnico)

**Requisitos:**
- VPS (DigitalOcean, AWS, etc.) - $5-10/mes
- Docker instalado

**Pasos:**

1. **Instalar n8n con Docker:**

```bash
docker run -it --rm \
  --name n8n \
  -p 5678:5678 \
  -v ~/.n8n:/home/node/.n8n \
  n8nio/n8n
```

2. **Acceder a n8n:**
   - Abre `http://tu-servidor:5678`
   - Crea cuenta admin

3. **Seguir los mismos pasos de Opción A**

---

### Example Workflow N8n para Chatbot

**Nodos del workflow:**

1. **Webhook Trigger** (recibe mensajes del widget)
2. **Function Node** (procesa el input)
3. **AI Agent** (Claude API)
   - Configurar API key de Anthropic
   - System prompt personalizado
4. **If Node** (detectar si es un lead)
5. **Database Node** (guardar lead si aplica)
6. **Respond to Webhook** (enviar respuesta al usuario)

**System Prompt Recomendado:**

```
Eres un asistente experto en IA y automatización para la industria de construcción modular.

Tu trabajo es:
1. Responder preguntas sobre cómo implementar IA en empresas constructoras
2. Explicar casos de uso reales (OCR facturas, dashboards, automatización)
3. Si el usuario muestra interés, sugerir agendar un diagnóstico estratégico

Conocimiento base:
- ModulorIA ayuda a constructoras a automatizar procesos con IA
- Casos típicos: OCR facturas, generación de presupuestos, dashboards en tiempo real
- ROI típico: 2-3 semanas
- No hay contratos eternos
- Diagnóstico estratégico: 45 minutos, incluye roadmap y ROI calculado

Tono: Profesional pero cercano. No vendas agresivamente, educa primero.
```

---

### Alternativas Más Simples

Si N8n te parece muy complejo, considera:

#### 1. **Tawk.to** (Gratis, Chat en Vivo + Bots)
- Setup: 5 minutos
- Atiendes tú directamente
- Tiene IA básica incluida

#### 2. **Crisp Chat** (Freemium)
- Similar a Tawk.to
- UI más moderna

#### 3. **WhatsApp Business API**
- Chatbot que responde por WhatsApp
- Requiere más setup técnico

---

## 🎯 Resumen: Siguiente Pasos Prioritarios

### ✅ Ya Está Listo:
1. Blog funcional con SEO
2. Estructura de navegación actualizada
3. Ejemplo de artículo
4. Sistema de lectura de MD/MDX

### ⚠️ Necesitas Implementar:

#### Prioridad Alta (1-2 semanas):
1. **Formulario de Newsletter:**
   - Decidir: ¿BD local o servicio externo?
   - Implementar NewsletterForm component
   - Agregar al blog y homepage

2. **Lead Magnets:**
   - Crear 1-2 PDFs descargables
   - Implementar formulario de captura antes de descarga

#### Prioridad Media (2-4 semanas):
3. **Chatbot:**
   - Decidir: ¿n8n Cloud o self-hosted?
   - Configurar workflow básico
   - Integrar widget en el sitio

4. **Más Contenido de Blog:**
   - Escribir 3-5 artículos más
   - Optimizar para keywords objetivo
   - Crear calendario editorial

#### Prioridad Baja (opcional):
5. **Analytics:**
   - Google Analytics 4
   - Tracking de conversiones

6. **Email Marketing:**
   - Secuencias automáticas de emails
   - Nurturing de leads

---

## 📞 ¿Necesitas Ayuda?

Si tienes preguntas sobre alguna de estas implementaciones:

1. **Base de Datos:** Necesitas crear los API routes y schema de Prisma
2. **N8n:** Necesitas configurar el workflow y API keys
3. **Contenido:** Necesitas escribir más artículos

¿Quieres que te ayude con alguna de estas implementaciones específicas?
