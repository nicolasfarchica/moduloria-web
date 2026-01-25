# Comando /inicio - Resumen diario de ModulorIA

Cuando el usuario ejecute este comando, realiza las siguientes acciones para darle un resumen completo del estado del proyecto.

## Pasos a ejecutar

### 1. Estado de Git
- Ejecuta `git status` para ver cambios pendientes
- Ejecuta `git log --oneline -5` para ver últimos commits
- Indica si hay algo para pushear o si está todo sincronizado

### 2. Tareas Pendientes
- Lee el archivo `.taskmaster/tasks/tasks.json`
- Lista las tareas con status "pending" o "in-progress"
- Destaca la tarea más prioritaria

### 3. Documentación Reciente
- Revisa `docs/ESTADO-SISTEMAS.md` para contexto del proyecto
- Revisa si hay sesiones recientes en `docs/sesiones/`
- Resume brevemente en qué se estuvo trabajando

### 4. Estado del Sitio Web
- Verifica que no hay errores de TypeScript con `npx tsc --noEmit`
- Indica si el sitio está listo para producción

### 5. Recomendación del Día
Basándote en todo lo anterior, sugiere:
- EN QUÉ ENFOCARSE HOY (1 cosa principal)
- Tareas secundarias si sobra tiempo
- Recordatorios importantes (ej: "Hoy es martes, toca artículo de blog")

## Formato de respuesta

Presenta todo en una tabla resumen seguida de la recomendación:

```
## Estado de ModulorIA - [FECHA]

| Área | Estado |
|------|--------|
| Git | ✅ Sincronizado / ⚠️ X cambios pendientes |
| Código | ✅ Sin errores / ❌ X errores |
| Tareas | X pendientes, Y en progreso |

### Tareas prioritarias
1. [Tarea más importante]
2. [Siguiente tarea]

### Recomendación para hoy
[Sugerencia clara y accionable]
```

## Notas importantes
- Sé conciso, el usuario quiere un resumen rápido
- Si es martes, recuerda que toca crear artículo de blog
- Si hay tareas bloqueadas, menciónalas
- Prioriza acciones de negocio (conseguir clientes) sobre perfeccionamiento técnico
