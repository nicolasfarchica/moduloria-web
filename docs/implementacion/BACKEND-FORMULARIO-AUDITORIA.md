# 🔷 [WEB-DEV] Backend Formulario Auditoría - Guía Implementación

**Agente:** Frontend Developer (Azul cyan #06B6D4)
**Tarea:** Implementar backend formulario /auditoria
**Stack:** N8N Cloud + Resend + Airtable
**ETA:** 2-3 horas

---

## 📋 PLAN DE IMPLEMENTACIÓN

### Fase 1: Setup Servicios (30 min)

#### 1.1 N8N Cloud
```
✅ Paso 1: Crear cuenta N8N
   URL: https://app.n8n.cloud/register
   Plan: Trial gratuito (después €24/mes)

✅ Paso 2: Crear nuevo workflow
   Nombre: "ModulorIA - Formulario Auditoría"

✅ Paso 3: Obtener Webhook URL
   Nodo: Webhook Trigger
   Método: POST
   URL generada: https://[tu-instancia].app.n8n.cloud/webhook/auditoria
```

#### 1.2 Resend (Email Service)
```
✅ Paso 1: Crear cuenta Resend
   URL: https://resend.com/signup
   Plan: Free (3,000 emails/mes)

✅ Paso 2: Verificar dominio
   Dominio: moduloria.com
   DNS records: Agregar en tu proveedor DNS

✅ Paso 3: Obtener API Key
   Dashboard → API Keys → Create
   Guardar: re_XXXXXXXXXXXXX
```

#### 1.3 Airtable (Lead Database)
```
✅ Paso 1: Crear cuenta Airtable
   URL: https://airtable.com/signup
   Plan: Free

✅ Paso 2: Crear base "ModulorIA Leads"
   Tabla: "Auditorías"
   Campos:
   - Nombre (Single line text)
   - Email (Email)
   - Empresa (Single line text)
   - Teléfono (Phone number)
   - Empleados (Number)
   - Mensaje (Long text)
   - Plan interés (Single select: Quick Win, High Impact, Enterprise)
   - Fecha (Created time)
   - Status (Single select: Nuevo, Contactado, Propuesta, Cerrado)

✅ Paso 3: Obtener API Key
   Account → Generate API key
   Guardar: keyXXXXXXXXXXXX

✅ Paso 4: Obtener Base ID y Table ID
   API Documentation → Tu base
   Base ID: appXXXXXXXXXXXX
   Table ID: Ver en URL
```

---

### Fase 2: Workflow N8N (45 min)

#### Nodos del workflow:

```
1. [Webhook] Recibir datos formulario
   ↓
2. [Function] Validar y formatear datos
   ↓
3. [Airtable] Guardar lead
   ↓
4. [Resend] Enviar email confirmación cliente
   ↓
5. [Resend] Notificar equipo ModulorIA
```

#### 2.1 Nodo 1: Webhook
```javascript
// Configuración
Method: POST
Path: /auditoria
Authentication: None (agregar después)

// Datos esperados del formulario:
{
  "nombre": "string",
  "email": "string",
  "empresa": "string",
  "telefono": "string",
  "empleados": "number",
  "mensaje": "string",
  "plan": "string" // quick-win, high-impact, enterprise
}
```

#### 2.2 Nodo 2: Function (Validación)
```javascript
// Código del nodo Function
const data = $input.item.json;

// Validaciones básicas
if (!data.email || !data.email.includes('@')) {
  throw new Error('Email inválido');
}

if (!data.nombre || data.nombre.length < 2) {
  throw new Error('Nombre inválido');
}

// Formatear datos
return {
  json: {
    nombre: data.nombre.trim(),
    email: data.email.toLowerCase().trim(),
    empresa: data.empresa?.trim() || 'No especificada',
    telefono: data.telefono?.trim() || '',
    empleados: parseInt(data.empleados) || 0,
    mensaje: data.mensaje?.trim() || '',
    plan: data.plan || 'quick-win',
    fecha: new Date().toISOString(),
    status: 'Nuevo'
  }
};
```

#### 2.3 Nodo 3: Airtable (Guardar)
```javascript
// Configuración
Resource: Append
Base ID: [TU_BASE_ID]
Table: Auditorías

// Mapeo de campos:
Nombre: {{$json.nombre}}
Email: {{$json.email}}
Empresa: {{$json.empresa}}
Teléfono: {{$json.telefono}}
Empleados: {{$json.empleados}}
Mensaje: {{$json.mensaje}}
Plan interés: {{$json.plan}}
Status: Nuevo
```

#### 2.4 Nodo 4: Resend (Email Cliente)
```javascript
// Configuración
API Key: [TU_RESEND_API_KEY]
From: Nicolás Farchica <nicolas@moduloria.com>
To: {{$node["Function"].json["email"]}}
Subject: ✅ Hemos recibido tu solicitud de auditoría - ModulorIA

// HTML Template:
```
```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: 'Inter', Arial, sans-serif; line-height: 1.6; color: #1a1a1a; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #1E3A8A 0%, #06B6D4 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
    .content { background: #ffffff; padding: 30px; border: 1px solid #e5e7eb; border-top: none; }
    .cta-button { background: #EA580C; color: white; padding: 14px 28px; text-decoration: none; border-radius: 6px; display: inline-block; margin: 20px 0; }
    .footer { background: #f9fafb; padding: 20px; text-align: center; font-size: 14px; color: #6b7280; border-radius: 0 0 8px 8px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>¡Gracias por tu interés, {{nombre}}!</h1>
    </div>

    <div class="content">
      <p>Hemos recibido tu solicitud de auditoría para <strong>{{empresa}}</strong>.</p>

      <h3>📋 Resumen de tu solicitud:</h3>
      <ul>
        <li><strong>Plan de interés:</strong> {{plan}}</li>
        <li><strong>Empleados:</strong> {{empleados}}</li>
        <li><strong>Email:</strong> {{email}}</li>
      </ul>

      <h3>📅 Próximos pasos:</h3>
      <ol>
        <li>En las próximas 24 horas recibirás un email de Nicolás Farchica (CEO) para agendar una reunión de 30 minutos.</li>
        <li>Revisaremos juntos tus procesos y identificaremos los quick wins con mayor ROI.</li>
        <li>Recibirás un diagnóstico personalizado con roadmap de implementación.</li>
      </ol>

      <p style="text-align: center;">
        <a href="https://moduloria.com/recursos" class="cta-button">
          📚 Mientras tanto, descarga recursos gratuitos
        </a>
      </p>

      <p><strong>¿Tienes dudas urgentes?</strong></p>
      <p>Responde este email o escríbenos a WhatsApp: +45 5280 1394</p>

      <p>Saludos,<br>
      <strong>Nicolás Farchica</strong><br>
      CEO & Founder, ModulorIA<br>
      <em>Transformación inteligente del sector construcción modular</em></p>
    </div>

    <div class="footer">
      <p>ModulorIA - IA Práctica para Construcción Modular</p>
      <p><a href="https://moduloria.com">moduloria.com</a> | <a href="mailto:contacto@moduloria.com">contacto@moduloria.com</a></p>
    </div>
  </div>
</body>
</html>
```

#### 2.5 Nodo 5: Resend (Notificación Interna)
```javascript
// Configuración
From: Sistema ModulorIA <no-reply@moduloria.com>
To: nicolas@moduloria.com, contacto@moduloria.com
Subject: 🔔 Nuevo lead de auditoría: {{$node["Function"].json["empresa"]}}

// HTML Simple:
```
```html
<h2>Nuevo Lead Capturado</h2>

<p><strong>Empresa:</strong> {{nombre}} - {{empresa}}</p>
<p><strong>Email:</strong> {{email}}</p>
<p><strong>Teléfono:</strong> {{telefono}}</p>
<p><strong>Empleados:</strong> {{empleados}}</p>
<p><strong>Plan interés:</strong> {{plan}}</p>

<h3>Mensaje:</h3>
<p>{{mensaje}}</p>

<hr>

<p><strong>Acción requerida:</strong> Contactar en próximas 24h</p>
<p><a href="https://airtable.com/[TU_BASE_URL]">Ver en Airtable</a></p>
```

---

### Fase 3: Actualizar Código Web (45 min)

#### 3.1 Crear API Route en Next.js

**Archivo:** `src/app/api/auditoria/route.ts` (CREAR)

```typescript
// src/app/api/auditoria/route.ts
import { NextRequest, NextResponse } from 'next/server';

const N8N_WEBHOOK_URL = process.env.N8N_WEBHOOK_URL || '';

export async function POST(request: NextRequest) {
  try {
    // Parsear datos del formulario
    const data = await request.json();

    // Validación básica
    if (!data.email || !data.nombre) {
      return NextResponse.json(
        { error: 'Email y nombre son requeridos' },
        { status: 400 }
      );
    }

    // Enviar a N8N webhook
    const response = await fetch(N8N_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Error al enviar datos a N8N');
    }

    // Respuesta exitosa
    return NextResponse.json(
      {
        success: true,
        message: 'Solicitud recibida correctamente'
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error en API auditoría:', error);
    return NextResponse.json(
      { error: 'Error al procesar solicitud' },
      { status: 500 }
    );
  }
}
```

#### 3.2 Actualizar Componente Formulario

**Archivo:** `src/app/auditoria/page.tsx` (MODIFICAR)

**Buscar la línea del TODO:**
```typescript
// TODO: Integrar con backend (n8n webhook, Resend, etc.)
```

**Reemplazar con:**
```typescript
// Enviar a nuestra API
try {
  const response = await fetch('/api/auditoria', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  const result = await response.json();

  if (response.ok) {
    // Éxito - mostrar mensaje
    setSubmitStatus('success');
    setFormData({
      nombre: '',
      email: '',
      empresa: '',
      telefono: '',
      empleados: '',
      mensaje: '',
      plan: searchParams.get('plan') || 'quick-win',
    });
  } else {
    // Error del servidor
    setSubmitStatus('error');
    console.error('Error:', result.error);
  }
} catch (error) {
  // Error de red
  setSubmitStatus('error');
  console.error('Error al enviar:', error);
}
```

#### 3.3 Variables de Entorno

**Archivo:** `.env.local` (CREAR en raíz del proyecto web)

```bash
# N8N Webhook
N8N_WEBHOOK_URL=https://[tu-instancia].app.n8n.cloud/webhook/auditoria
```

**Archivo:** `.gitignore` (VERIFICAR que incluya)
```
.env.local
.env*.local
```

---

### Fase 4: Testing (30 min)

#### 4.1 Test Local
```bash
# En tu repo local
cd moduloria-web
npm run dev

# Abrir http://localhost:3000/auditoria
# Llenar formulario con datos de prueba
# Verificar:
# 1. POST se envía a /api/auditoria
# 2. API reenvía a N8N webhook
# 3. N8N ejecuta workflow completo
# 4. Lead aparece en Airtable
# 5. Emails enviados (cliente + notificación)
```

#### 4.2 Test N8N
```
En N8N:
1. Test del workflow manualmente
2. Ver logs de cada nodo
3. Verificar que Airtable recibe datos
4. Verificar que Resend envía emails
5. Simular error y ver manejo
```

#### 4.3 Test Producción
```bash
# Deploy a Vercel
git add .
git commit -m "feat: integrar backend formulario auditoría (N8N + Resend + Airtable)"
git push origin main

# Verificar en Vercel dashboard
# 1. Variables de entorno agregadas
# 2. Build exitoso
# 3. Función /api/auditoria desplegada

# Test en producción
# Ir a https://moduloria.com/auditoria
# Enviar formulario real
# Verificar todo el flujo
```

---

## 🔧 CONFIGURACIONES ADICIONALES

### Vercel Environment Variables

En Vercel dashboard → Settings → Environment Variables:

```
N8N_WEBHOOK_URL = https://[tu-instancia].app.n8n.cloud/webhook/auditoria
```

### Resend Domain Verification

DNS records a agregar en tu proveedor:

```
Type: TXT
Name: resend._domainkey
Value: [proporcionado por Resend]

Type: TXT
Name: @
Value: v=spf1 include:resend.com ~all
```

---

## 📊 RESULTADO ESPERADO

### Flujo completo:

```
Usuario → moduloria.com/auditoria
    ↓
Llena formulario
    ↓
Submit → /api/auditoria (Next.js)
    ↓
POST → N8N Webhook
    ↓
Validación + Formateo
    ↓
Guardar en Airtable ✅
    ↓
Email confirmación cliente ✅
    ↓
Email notificación Nicolás ✅
    ↓
Usuario ve mensaje "Solicitud enviada con éxito"
```

### Tiempo total estimado:
- Setup servicios: 30 min
- Workflow N8N: 45 min
- Código Next.js: 45 min
- Testing: 30 min
**Total: 2.5 horas**

---

## 🚨 ERRORES COMUNES Y SOLUCIONES

### Error 1: N8N webhook no recibe datos
```
Solución: Verificar que webhook esté activo
N8N → Workflow → Production → Activar
```

### Error 2: Resend emails no llegan
```
Solución: Verificar dominio verificado
Resend → Domains → Status: Verified
```

### Error 3: Airtable no guarda
```
Solución: Verificar API key y permisos
Airtable → Account → API → Scope: data.records:write
```

### Error 4: CORS error en producción
```
Solución: N8N webhook debe aceptar tu dominio
N8N → Webhook settings → Allow origins: https://moduloria.com
```

---

## ✅ CHECKLIST FINAL

Antes de considerar completado:

**Setup:**
- [ ] N8N Cloud cuenta creada
- [ ] Resend cuenta creada + dominio verificado
- [ ] Airtable base creada con campos correctos

**N8N:**
- [ ] Workflow creado con 5 nodos
- [ ] Webhook URL obtenida
- [ ] Test manual exitoso
- [ ] Workflow activado (Production)

**Código:**
- [ ] API route `/api/auditoria/route.ts` creada
- [ ] Formulario actualizado (línea TODO reemplazada)
- [ ] `.env.local` configurado
- [ ] Variables en Vercel configuradas

**Testing:**
- [ ] Test local exitoso
- [ ] Test N8N exitoso
- [ ] Deploy Vercel exitoso
- [ ] Test producción exitoso
- [ ] Email recibido (confirmación)
- [ ] Email recibido (notificación)
- [ ] Lead en Airtable visible

---

**🔷 [WEB-DEV] Status: Guía completada - Listo para implementar**
