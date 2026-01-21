# Sesion 2026-01-21: Sistema de Newsletter

## Resumen

Se implemento el sistema completo de newsletter para ModulorIA, incluyendo:
- Pagina de suscripcion
- API para registrar suscriptores
- Base de datos separada en Notion
- Email de bienvenida
- Workflows N8N para automatizacion (pendientes de activar)

---

## Cambios Realizados

### 1. Nuevas Bases de Datos en Notion

| Base de Datos | ID | Proposito |
|---------------|-----|-----------|
| Suscriptores Newsletter | `1bf2788f3a7f45608f437a9280e0b691` | Guardar suscriptores del newsletter |
| Newsletter Content | `061483b8b89b48d0beece04cbefb2300` | Guardar articulos recolectados por N8N |

**Campos Suscriptores Newsletter:**
- Email (Title)
- Nombre (Text)
- Fecha Suscripcion (Date)
- Activo (Checkbox)
- Source (Text)

**Campos Newsletter Content:**
- Titulo (Title)
- URL (URL)
- Fuente (Text)
- Fecha Recoleccion (Date)
- Resumen AI (Text)
- Usado (Checkbox)
- Categoria (Select: Construccion, IA, Modular, Industria)

### 2. Archivos Creados

| Archivo | Descripcion |
|---------|-------------|
| `web/src/app/newsletter/page.tsx` | Pagina de suscripcion al newsletter |
| `web/src/app/api/newsletter/route.ts` | API endpoint para suscripciones |
| `n8n-workflows/01-daily-content-collector.json` | Workflow diario: RSS → AI → Notion |
| `n8n-workflows/02-weekly-newsletter-sender.json` | Workflow semanal: Notion → AI → Resend |

### 3. Archivos Modificados

| Archivo | Cambio |
|---------|--------|
| `web/src/lib/notion.ts` | Agregada funcion `createNewsletterSubscription()` |
| `web/src/lib/email.ts` | Agregada funcion `sendNewsletterWelcome()` |
| `web/src/components/RecursosSection.tsx` | Formulario newsletter funcional |
| `web/src/components/Footer.tsx` | Link a pagina newsletter |
| `web/src/app/auditoria/page.tsx` | Campos opcionales: Proyectos Activos, Mayor Problema |
| `web/src/app/api/auditoria/route.ts` | Validacion actualizada para campos opcionales |

### 4. Variables de Entorno Agregadas (Vercel)

| Variable | Valor |
|----------|-------|
| `NOTION_NEWSLETTER_DB_ID` | `1bf2788f3a7f45608f437a9280e0b691` |

### 5. Archivos Eliminados

| Archivo | Razon |
|---------|-------|
| `vercel.json` | Causaba conflicto con Root Directory configurado en Vercel Dashboard |

---

## Configuracion Vercel

**Build and Deployment Settings:**
- Root Directory: `web`
- Framework Preset: Next.js
- Build Command: (default)
- Install Command: (default)

**IMPORTANTE:** Despues de cada deploy, verificar que `moduloria.com` apunte al deployment correcto:
```bash
npx vercel ls
npx vercel alias [URL-DEL-DEPLOYMENT] moduloria.com
```

---

## URLs del Sistema

| Recurso | URL |
|---------|-----|
| Pagina Newsletter | https://moduloria.com/newsletter |
| Pagina Auditoria | https://moduloria.com/auditoria |
| API Newsletter | https://moduloria.com/api/newsletter |
| API Auditoria | https://moduloria.com/api/auditoria |

---

## Flujo de Datos

### Suscripcion Newsletter
```
Usuario → /newsletter → POST /api/newsletter → createNewsletterSubscription()
    → Notion: Suscriptores Newsletter
    → sendNewsletterWelcome() → Email bienvenida
```

### Solicitud Auditoria
```
Usuario → /auditoria → POST /api/auditoria → createNotionLead()
    → Notion: Leads - ModulorIA
    → sendConfirmacionAuditoria() → Email confirmacion
    → sendNotificacionNuevoLead() → Email al equipo
```

---

## Pendientes (N8N)

Los workflows de N8N estan creados pero no activados. Para activarlos:

1. Importar `01-daily-content-collector.json` en N8N
2. Configurar credenciales:
   - OpenAI API Key
   - Notion API Key (con acceso a Newsletter Content)
3. Activar el workflow

4. Importar `02-weekly-newsletter-sender.json` en N8N
5. Configurar credenciales:
   - OpenAI API Key
   - Notion API Key (con acceso a ambas bases de datos)
   - Resend API Key (Header Auth: `Authorization: Bearer [key]`)
6. Activar el workflow

---

## Commits de esta Sesion

1. `feat: add newsletter subscription system`
2. `feat: make newsletter form functional + add footer link`
3. `feat: make proyectosActivos and mayorProblema optional`
4. `feat: use separate Notion database for newsletter subscribers`
5. `fix: remove vercel.json to use Vercel dashboard settings`
6. `chore: trigger redeploy to load NOTION_NEWSLETTER_DB_ID env var`
7. `debug: add logging to newsletter subscription to debug database issue`
8. `docs: update project documentation with newsletter system`
