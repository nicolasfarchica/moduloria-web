# Próximos Pasos - ModulorIA

## Fecha: 2026-01-13
## Estado Actual: ✅ Sistema de Leads en Producción Funcionando

---

## ✅ COMPLETADO HOY

### 1. Integración Notion - CRM
- ✅ Instalado `@notionhq/client` SDK
- ✅ Configurado cliente Notion en `/web/src/lib/notion.ts`
- ✅ Creado endpoint API `/web/src/app/api/auditoria/route.ts`
- ✅ Base de datos Notion configurada: `6c35249b61994f2cad00b8266ea0a85f`
- ✅ 11 propiedades configuradas (Name, Email, Empresa, Teléfono, etc.)

### 2. Deployment Producción
- ✅ Autenticado en Vercel CLI
- ✅ Proyecto vinculado: `prj_Q6EjRW39v4sj4FDVdgCnjGE30mPF`
- ✅ Variables de entorno configuradas en producción
- ✅ Dominio configurado: https://moduloria.com
- ✅ API funcionando: https://moduloria.com/api/auditoria

### 3. Problemas Resueltos
- ✅ Fixed: Runtime edge → nodejs para Notion SDK
- ✅ Fixed: NOTION_DATABASE_ID tenía `\n` al final (33 chars en vez de 32)
- ✅ Fixed: Deployment protection bypassed para testing
- ✅ Added: Error logging detallado para debugging

### 4. Tests Exitosos
- ✅ Test local: Formulario → API → Notion ✅
- ✅ Test producción: 3 leads creados exitosamente
- ✅ PageIDs generados:
  - `2e7dd4a5-2f43-81a6-abc3-dc24bb99d6f7`
  - `2e7dd4a5-2f43-81d5-ab05-d97c126da055`
  - `2e7dd4a5-2f43-818f-8358-f7176cc85c60`

---

## 🎯 SIGUIENTE SESIÓN: AUTOMATIZACIÓN DE EMAILS

### Objetivo Principal
Implementar sistema de emails automáticos usando Resend para:
1. Email de confirmación al usuario (lead)
2. Notificación al equipo cuando llega un nuevo lead

### Tareas Pendientes

#### 1. Setup Resend
- [ ] Crear cuenta en Resend (https://resend.com)
- [ ] Obtener API Key de Resend
- [ ] Verificar dominio moduloria.com en Resend
- [ ] Configurar DNS records para email sending

#### 2. Instalación y Configuración
```bash
npm install resend
```

#### 3. Variables de Entorno a Agregar
```env
# Resend Configuration
RESEND_API_KEY=re_xxxxxxxxxxxxx
RESEND_FROM_EMAIL=auditoria@moduloria.com
RESEND_NOTIFICATION_EMAIL=nicolas@moduloria.com
```

#### 4. Archivos a Crear/Modificar

**Crear: `/web/src/lib/resend.ts`**
- Cliente de Resend configurado
- Funciones para enviar emails:
  - `sendLeadConfirmation(data: AuditoriaFormData)`
  - `sendTeamNotification(data: AuditoriaFormData, pageId: string)`

**Crear: `/web/src/emails/lead-confirmation.tsx`**
- Template React Email para confirmación
- Diseño profesional con branding ModulorIA
- Información de próximos pasos

**Crear: `/web/src/emails/team-notification.tsx`**
- Template para notificación interna
- Resumen del lead con todos los datos
- Link directo a página de Notion

**Modificar: `/web/src/app/api/auditoria/route.ts`**
- Líneas 78-79: Descomentar y implementar envío de emails
- Agregar llamadas a funciones de Resend
- Manejar errores de email sin bloquear creación de lead

#### 5. Templates de Email Sugeridos

**Email de Confirmación al Usuario:**
```
Asunto: ✅ Auditoría Solicitada - ModulorIA

Hola [nombre],

Gracias por solicitar una auditoría de automatización para [empresa].

Recibimos tu solicitud y nuestro equipo la está revisando.

📋 Resumen de tu solicitud:
- Empresa: [empresa]
- Empleados: [empleados]
- Proyectos Activos: [proyectosActivos]
- Mayor Desafío: [mayorProblema]

🎯 Próximos pasos:
1. Revisaremos tu información en las próximas 24 horas
2. Te contactaremos para agendar una llamada de diagnóstico
3. Prepararemos un análisis preliminar de oportunidades

¿Preguntas? Contáctanos por WhatsApp: +34 600 XXX XXX

Saludos,
Equipo ModulorIA
```

**Notificación al Equipo:**
```
Asunto: 🔔 Nuevo Lead - [empresa]

Nuevo lead recibido desde el formulario de auditoría:

👤 Contacto: [nombre]
🏢 Empresa: [empresa]
📧 Email: [email]
📱 Teléfono: [telefono]

📊 Detalles:
- Tamaño: [empleados] empleados
- Proyectos: [proyectosActivos]
- Problema principal: [mayorProblema]
- Presupuesto: [presupuesto]

🔗 Ver en Notion: https://notion.so/[pageId]

Hora: [timestamp]
```

#### 6. Testing a Realizar
- [ ] Test local: Email de confirmación
- [ ] Test local: Email de notificación
- [ ] Test staging: Ambos emails
- [ ] Test producción: Flujo completo
- [ ] Verificar diseño en diferentes clientes (Gmail, Outlook, Apple Mail)

#### 7. Mejoras Adicionales (Opcionales)
- [ ] Rate limiting para emails (evitar spam)
- [ ] Email template personalizado según presupuesto
- [ ] Analytics de apertura de emails
- [ ] Workflow de seguimiento automático

---

## 📝 Información Importante para No Perder

### Configuración Actual Notion
```javascript
Database ID: 6c35249b61994f2cad00b8266ea0a85f
Integration: ModulorIA Integration
Token: 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
```

### Configuración Actual Vercel
```
Project ID: prj_Q6EjRW39v4sj4FDVdgCnjGE30mPF
Org ID: team_DzMhXwqm1422mKnvBvbPz4I6
Project Name: web
Domain: moduloria.com
Latest Deployment: web-dx4dgb1x0-nicolasfarchicas-projects.vercel.app
```

### Variables de Entorno Producción
```
NOTION_API_KEY: ✅ Configurada (51 chars)
NOTION_DATABASE_ID: ✅ Configurada (32 chars, sin \n)
```

### Archivos Clave del Sistema
```
/web/src/lib/notion.ts              - Cliente y funciones Notion
/web/src/app/api/auditoria/route.ts - API endpoint principal
/web/src/app/auditoria/page.tsx     - Formulario frontend
/web/.env.local                      - Env vars local
```

### Commits Importantes
```
c8b584e - fix(api): change runtime from edge to nodejs for Notion SDK
261d01a - fix(api): resolve production 500 error with improved logging
```

---

## 🔍 Notas Técnicas

### Rate Limiting Actual
- 5 requests por hora por IP
- Almacenado en memoria (Map)
- Reset automático después de 1 hora
- ⚠️ TODO: Migrar a Redis para producción multi-instancia

### Validaciones Implementadas
- ✅ Campos requeridos
- ✅ Formato de email
- ✅ Rate limiting por IP
- ⚠️ TODO: Validación de teléfono
- ⚠️ TODO: Sanitización de inputs

### Notion Database Properties
1. Name (Title) - Nombre del contacto
2. Email (Email) - Email del contacto
3. Empresa (Rich Text) - Nombre de la empresa
4. Teléfono (Phone) - Número de teléfono
5. Empleados (Select) - 1-10, 11-50, 51-200, 200+
6. Proyectos Activos (Number) - Cantidad de proyectos
7. Mayor Problema (Rich Text) - Descripción del problema
8. Presupuesto (Select) - bajo, medio, alto, flexible, proyecto-unico
9. Source (Select) - Web - Auditoría, Web - Newsletter, LinkedIn, WhatsApp, Referido
10. Status (Select) - Nuevo, Contactado, Calificado, Reunión, Propuesta, Cerrado Ganado, Cerrado Perdido, Newsletter
11. Fecha (Date) - Timestamp de creación

---

## ✅ Checklist Pre-Implementación Email

Antes de empezar mañana, verificar que tengas:
- [ ] Acceso a cuenta de Resend (o crear una)
- [ ] Acceso al DNS de moduloria.com para configurar records
- [ ] Decidir email de envío: ¿auditoria@moduloria.com o hola@moduloria.com?
- [ ] Decidir email(s) de notificación para el equipo
- [ ] Revisar templates de email sugeridos arriba
- [ ] Tener a mano logo de ModulorIA para emails

---

## 🚀 Comando Rápido para Continuar Mañana

```bash
cd /Users/nicolasfarchica/Desktop/ModulorIA/web
git status
npm run dev  # Para testing local
```

---

**Última actualización:** 2026-01-13 23:15 CET
**Próxima sesión:** Implementación de automatización de emails con Resend
