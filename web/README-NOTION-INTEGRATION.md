# 🔗 Sistema de Captura de Leads con Notion

## ✅ ¿Qué se implementó?

Se creó un **sistema completo de captura de leads** que conecta el formulario web de auditoría con tu workspace de Notion.

### 📦 Archivos Creados:

```
web/
├── .env.local                          # Variables de entorno (TOKEN + DATABASE_ID)
├── src/
│   ├── lib/
│   │   └── notion.ts                   # Cliente Notion + funciones helper
│   └── app/
│       ├── api/
│       │   └── auditoria/
│       │       └── route.ts            # API endpoint POST /api/auditoria
│       └── auditoria/
│           └── page.tsx                # Formulario actualizado (línea 22-48)
```

---

## 🚀 Cómo Funciona

### Flujo Completo:

1. **Usuario llena formulario** en `/auditoria`
2. **Frontend envía datos** vía POST a `/api/auditoria`
3. **API valida datos** (campos requeridos, formato email, rate limiting)
4. **API crea entrada** en Notion database usando `@notionhq/client`
5. **Usuario ve confirmación** con email de contacto
6. **Tú recibes lead** en tu Notion CRM automáticamente

---

## 🔧 Configuración Actual

### Variables de Entorno (.env.local):

```env
NOTION_API_KEY=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
NOTION_DATABASE_ID=294dd4a52f438007b3affd013b50c7f8
NEXT_PUBLIC_SITE_URL=https://moduloria.vercel.app
```

⚠️ **IMPORTANTE**: Este archivo está en `.gitignore` y NO se sube a GitHub por seguridad.

---

## 📊 Estructura de la Database Notion

La database debe tener estas propiedades **exactamente con estos nombres**:

| Propiedad | Tipo | Descripción |
|-----------|------|-------------|
| **Nombre** | Title | Nombre completo del lead |
| **Email** | Email | Email corporativo |
| **Empresa** | Text | Nombre de la empresa |
| **Teléfono** | Phone | Número de teléfono |
| **Empleados** | Select | Tamaño empresa (1-10, 11-50, 51-200, 200+) |
| **Proyectos Activos** | Number | Número de proyectos simultáneos |
| **Mayor Problema** | Text | Descripción del problema principal |
| **Presupuesto** | Select | Rango presupuestal (opcional) |
| **Source** | Select | Origen del lead (Web - Auditoría, etc.) |
| **Status** | Select | Estado en pipeline (Nuevo, Contactado, etc.) |
| **Fecha** | Date | Fecha de captura (automática) |

Ver instrucciones completas en: `/INSTRUCCIONES-NOTION-DATABASE.md`

---

## 🛡️ Características de Seguridad

### Rate Limiting:
- **5 solicitudes por IP por hora**
- Previene spam y abuso del formulario

### Validación:
- ✅ Campos requeridos verificados
- ✅ Formato de email validado
- ✅ Tipos de datos correctos

### Error Handling:
- ❌ Errores de API capturados y loggeados
- 🔄 Fallback a WhatsApp si falla el sistema
- 📧 Mensajes de error claros al usuario

---

## 🧪 Testing

### Prueba Local:

1. **Asegúrate que la database existe en Notion**
   - Sigue instrucciones en `INSTRUCCIONES-NOTION-DATABASE.md`

2. **Inicia el servidor de desarrollo:**
   ```bash
   cd web
   npm run dev
   ```

3. **Abre el formulario:**
   ```
   http://localhost:3000/auditoria
   ```

4. **Llena y envía el formulario**

5. **Verifica en Notion:**
   - Ve a tu database "Leads - ModulorIA"
   - Debe aparecer una nueva entrada con Status "Nuevo"

---

## 📝 Datos Capturados

### Del Formulario:
```typescript
{
  nombre: "Juan Pérez",
  empresa: "Constructora ABC",
  email: "juan@abc.com",
  telefono: "+34 600 000 000",
  empleados: "11-50",
  proyectosActivos: "5",
  mayorProblema: "Paso 3 horas al día procesando facturas...",
  presupuesto: "medio" // opcional
}
```

### Añadido Automáticamente:
```typescript
{
  source: "Web - Auditoría",
  status: "Nuevo",
  fecha: "2026-01-13T12:00:00Z"
}
```

---

## 🔮 Próximas Mejoras (Opcional)

### 1. Email de Confirmación
```typescript
// En /api/auditoria/route.ts
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: 'ModulorIA <hola@moduloria.com>',
  to: body.email,
  subject: '✅ Tu Auditoría Gratis está Confirmada',
  html: `...template HTML...`
});
```

### 2. Notificación a Equipo
```typescript
// Slack notification
await fetch('https://hooks.slack.com/...', {
  method: 'POST',
  body: JSON.stringify({
    text: `🎉 Nuevo lead: ${body.nombre} de ${body.empresa}`
  })
});
```

### 3. Analytics Tracking
```typescript
// Google Analytics event
gtag('event', 'form_submission', {
  form_name: 'auditoria',
  empresa_size: body.empleados
});
```

---

## 🐛 Troubleshooting

### Error: "NOTION_DATABASE_ID is not configured"
- Verifica que `.env.local` existe
- Verifica que `NOTION_DATABASE_ID` tiene el valor correcto
- Reinicia el servidor después de cambiar `.env`

### Error: "object_not_found" de Notion API
- La database no existe o fue eliminada
- La integración no tiene permisos (usa "Add connections")
- El Database ID es incorrecto

### Error: "validation_error" de Notion API
- Las propiedades de la database no coinciden
- Revisa nombres exactos en `INSTRUCCIONES-NOTION-DATABASE.md`
- Los tipos de datos deben ser exactos (Select, Email, etc.)

### Formulario no envía datos
- Abre Developer Tools (F12) → Console
- Busca errores de red o JavaScript
- Verifica que `/api/auditoria` responde correctamente

---

## 📚 Recursos

### Documentación Oficial:
- [Notion API Docs](https://developers.notion.com/)
- [Notion SDK for JS](https://github.com/makenotion/notion-sdk-js)
- [Next.js API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)

### Archivos de Referencia:
- `/INSTRUCCIONES-NOTION-DATABASE.md` - Setup de database
- `/web/src/lib/notion.ts` - Cliente y funciones
- `/web/src/app/api/auditoria/route.ts` - API endpoint

---

## ✅ Checklist de Deployment

Antes de deployar a producción:

- [ ] Database Notion creada con todas las propiedades
- [ ] Integration tiene acceso a la database
- [ ] `.env.local` configurado correctamente
- [ ] Formulario testeado localmente
- [ ] Variables de entorno agregadas a Vercel
  - `NOTION_API_KEY`
  - `NOTION_DATABASE_ID`
- [ ] Primer lead de prueba capturado exitosamente

---

## 🚀 Deploy a Vercel

```bash
# 1. Agrega variables de entorno en Vercel Dashboard
# Settings → Environment Variables

NOTION_API_KEY=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
NOTION_DATABASE_ID=294dd4a52f438007b3affd013b50c7f8

# 2. Deploy
npm run build    # verifica que compila sin errores
git push         # Vercel auto-deploys
```

---

**Implementado:** 2026-01-13
**Stack:** Next.js 14 + Notion API + TypeScript
**Estado:** ✅ Funcional (requiere setup de database)
