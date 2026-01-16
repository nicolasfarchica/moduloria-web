# Sesión 16 Enero 2026 - Sistema de Emails Automáticos

**Fecha**: 16 de enero de 2026
**Duración**: ~2 horas
**Estado Final**: ✅ COMPLETADO Y FUNCIONANDO

---

## Resumen Ejecutivo

Se implementó exitosamente el sistema de emails automáticos para el formulario de auditoría en moduloria.com. Cuando un cliente llena el formulario:
1. Se guarda el lead en Notion
2. El cliente recibe un email de confirmación profesional
3. Nicolás recibe una notificación con todos los datos del lead

---

## Problemas Resueltos

### 1. Configuración de Resend
- **API Key creada**: `re_Veh4EVMZ_6VGrcBg8NAZQ2r3KLtvpiahQ`
- **Dominio verificado**: moduloria.com (DNS configurado en sesión anterior)
- **Emails de envío**:
  - `hola@moduloria.com` (confirmaciones a clientes)
  - `notificaciones@moduloria.com` (alertas internas)

### 2. Variable de Entorno en Vercel
- Se agregó `RESEND_API_KEY` a las variables de entorno de producción en Vercel
- Las otras variables ya existían: `NOTION_API_KEY`, `NOTION_DATABASE_ID`, `NEXT_PUBLIC_GA_ID`

### 3. Problema Crítico: Alias de Dominio Incorrecto
- **Problema**: `moduloria.com` apuntaba a un proyecto viejo (`moduloria-lfyz1imo2`) de hace 32 días
- **Síntoma**: Todos los deploys al proyecto `web` no se reflejaban en producción
- **Solución**: Se actualizó el alias para que `moduloria.com` apunte al proyecto `web` actual
- **Comando usado**: `vercel alias set web-m8rfz9g7v-nicolasfarchicas-projects.vercel.app moduloria.com`

### 4. Rate Limiting
- Se deshabilitó temporalmente el rate limiting para debugging
- **Pendiente**: Re-habilitar con mejor lógica de detección de IP

---

## Archivos Creados/Modificados

### Nuevo: `web/src/lib/email.ts`
Contiene dos funciones principales:
- `sendConfirmacionAuditoria()` - Email al cliente con diseño profesional
- `sendNotificacionNuevoLead()` - Notificación a Nicolás con datos del lead

### Modificado: `web/src/app/api/auditoria/route.ts`
- Se agregó importación de funciones de email
- Se agregó envío de emails después de crear el lead en Notion
- Rate limiting temporalmente deshabilitado (líneas 37-42 comentadas)

### Modificado: `web/.env.local`
- Se agregó `RESEND_API_KEY=re_Veh4EVMZ_6VGrcBg8NAZQ2r3KLtvpiahQ`

### Modificado: `web/package.json`
- Se agregó dependencia `resend`

---

## Estado de Variables de Entorno en Vercel

```
RESEND_API_KEY       ✅ Configurado (Production)
NOTION_API_KEY       ✅ Configurado (Production)
NOTION_DATABASE_ID   ✅ Configurado (Production)
NEXT_PUBLIC_GA_ID    ✅ Configurado (All environments)
```

---

## Flujo Actual del Formulario

```
Usuario llena formulario en /auditoria
         ↓
POST /api/auditoria
         ↓
    ┌────┴────┐
    ↓         ↓
Notion DB   Emails
    ↓         ↓
Lead        ├─→ Cliente: Confirmación
guardado    └─→ Nicolás: Notificación
         ↓
Respuesta exitosa al usuario
```

---

## Tareas Pendientes

### Alta Prioridad
1. [ ] **Re-habilitar rate limiting** con mejor lógica
   - Ubicación: `web/src/app/api/auditoria/route.ts` líneas 37-42
   - Descomentar y ajustar límite (actualmente 20/hora)

2. [ ] **Mejorar plantillas de email**
   - El usuario quiere diseñar en Canva y que se convierta a HTML
   - Agregar logo de ModulorIA
   - Agregar botón de Calendly
   - Mejorar diseño visual

### Media Prioridad
3. [ ] **Agregar registro DMARC** para mejor deliverability
   - Tipo: TXT
   - Nombre: _dmarc
   - Valor: `v=DMARC1; p=none; rua=mailto:hola@moduloria.com`

4. [ ] **Actualizar Next.js** - Hay advertencia de seguridad
   - Versión actual: 14.2.18
   - Recomendación: Actualizar a versión parcheada

### Baja Prioridad
5. [ ] Implementar secuencias de email con N8N
6. [ ] Crear plantillas adicionales para diferentes casos de uso
7. [ ] Agregar tracking de apertura de emails

---

## Configuración de Servicios

### Resend (Email)
- **Dashboard**: https://resend.com/emails
- **API Keys**: https://resend.com/api-keys
- **Dominio**: moduloria.com (verificado)

### Vercel (Hosting)
- **Proyecto**: web
- **URL Producción**: https://moduloria.com
- **Dashboard**: https://vercel.com/nicolasfarchicas-projects/web

### Notion (CRM)
- **Database ID**: 6c35249b61994f2cad00b8266ea0a85f
- **Campos**: Nombre, Empresa, Email, Teléfono, Empleados, Proyectos, Problema, Presupuesto, Estado

---

## Comandos Útiles

```bash
# Desplegar a producción
npx vercel --prod

# Ver variables de entorno
npx vercel env ls production

# Agregar variable de entorno
echo "valor" | npx vercel env add NOMBRE_VARIABLE production

# Ver deployments recientes
npx vercel ls

# Ver logs de deployment
npx vercel logs [deployment-url]

# Actualizar alias de dominio
npx vercel alias set [deployment-url] moduloria.com
```

---

## Notas Importantes

1. **El proyecto correcto es `web`**, no `moduloria` (el viejo)
2. **Siempre verificar** que moduloria.com apunte al deploy correcto después de desplegar
3. **Los emails funcionan** - verificado en dashboard de Resend con múltiples envíos exitosos
4. **Rate limiting deshabilitado** - recordar habilitarlo antes de ir a producción real

---

## Próxima Sesión

El usuario quiere:
1. Mejorar las plantillas de email
2. Diseñar en Canva y convertir a HTML
3. Posiblemente agregar logo y botón de Calendly

**Documentación relacionada**:
- `/docs/REGISTRO-EMAIL-CONFIG-2026-01-15.md` - Configuración DNS de email
- `/docs/SESION-2026-01-14.md` - Sesión anterior

---

**Última actualización**: 16 enero 2026, ~16:30
**Creado por**: Claude Code
