# Comando /metricas - Análisis de rendimiento del proyecto

Cuando el usuario ejecute este comando, proporciona un análisis completo de las métricas disponibles del proyecto.

## Fuentes de datos actuales

### 1. Notion (Leads/CRM) - CONECTADO
- Acceso directo vía MCP
- Revisar base de datos de leads
- Métricas: leads totales, por estado, por fuente, conversión

### 2. Google Analytics - PENDIENTE CONEXIÓN
- Por ahora: pedir al usuario que comparta datos o capturas
- Futuro: conexión directa vía API
- Métricas deseadas: visitantes, páginas vistas, fuentes de tráfico, tiempo en sitio

### 3. Google Search Console - PENDIENTE CONEXIÓN
- Por ahora: pedir al usuario que comparta datos o capturas
- Futuro: conexión directa vía API
- Métricas deseadas: impresiones, clics, CTR, posiciones, keywords

## Pasos a ejecutar

### Paso 1: Revisar Notion (automático)
Usando el MCP de Notion, consultar:
- Total de leads en la base de datos
- Leads por estado (nuevo, contactado, calificado, cerrado)
- Leads por fuente (web, LinkedIn, referido)
- Últimos 5 leads (fecha y empresa)

Presentar así:
```
## Leads (Notion)

| Métrica | Valor |
|---------|-------|
| Total leads | X |
| Nuevos (sin contactar) | X |
| En proceso | X |
| Cerrados (ganados) | X |
| Cerrados (perdidos) | X |

### Últimos leads
1. [Fecha] - [Empresa] - [Estado]
2. ...
```

### Paso 2: Solicitar datos de Analytics (manual por ahora)

Si el usuario no proporcionó datos de GA/GSC, preguntar:
```
## Google Analytics & Search Console

No tengo acceso directo todavía. ¿Podés compartir alguno de estos datos?

1. **Visitantes últimos 7 días** (GA > Informes > Tiempo real o Adquisición)
2. **Páginas más visitadas** (GA > Informes > Participación > Páginas)
3. **Keywords que posicionan** (GSC > Rendimiento > Consultas)

Pegá los datos o una captura y los analizo.

💡 *Nota: Está en el roadmap conectar GA y GSC directamente para automatizar esto.*
```

### Paso 3: Análisis y recomendaciones

Con los datos disponibles, proporcionar:
- Tendencias (¿sube o baja?)
- Puntos de atención
- Acciones sugeridas

Ejemplo:
```
## Análisis

**Lo positivo:**
- X leads nuevos esta semana
- Tráfico estable/creciendo

**Puntos de atención:**
- Bajo CTR en búsquedas (si aplica)
- Leads estancados sin seguimiento

**Acciones sugeridas:**
1. Contactar leads pendientes
2. Publicar artículo del blog (si es martes)
3. Optimizar página X (si bajo rendimiento)
```

## Visión futura (cuando se conecten GA/GSC)

Cuando las integraciones estén activas, este comando mostrará automáticamente:

```
## Dashboard ModulorIA - [Fecha]

### Tráfico Web (Google Analytics)
| Métrica | Esta semana | Semana anterior | Cambio |
|---------|-------------|-----------------|--------|
| Visitantes únicos | X | X | +X% |
| Páginas vistas | X | X | +X% |
| Tiempo promedio | Xm Xs | Xm Xs | +X% |
| Tasa de rebote | X% | X% | -X% |

### SEO (Search Console)
| Métrica | Esta semana | Semana anterior | Cambio |
|---------|-------------|-----------------|--------|
| Impresiones | X | X | +X% |
| Clics | X | X | +X% |
| CTR promedio | X% | X% | +X% |
| Posición media | X | X | -X |

### Top Keywords
1. "keyword 1" - Pos X - X clics
2. "keyword 2" - Pos X - X clics
3. ...

### Leads (Notion)
[Datos de Notion]

### Recomendaciones IA
- [Sugerencia basada en datos]
- [Oportunidad detectada]
- [Alerta si algo baja]
```

## Configuración futura necesaria

Para habilitar conexión directa:

1. **Google Analytics 4:**
   - Crear proyecto en Google Cloud Console
   - Habilitar Analytics Data API
   - Crear cuenta de servicio con permisos de lectura
   - Agregar credenciales al MCP

2. **Google Search Console:**
   - En el mismo proyecto de Google Cloud
   - Habilitar Search Console API
   - Usar misma cuenta de servicio
   - Verificar acceso a la propiedad

3. **MCP Configuration:**
   - Crear MCP server para Google APIs
   - Configurar en .mcp.json
   - Documentar en docs/roadmap/

## Notas

- Priorizar insights accionables sobre datos crudos
- Siempre dar contexto (comparar con período anterior)
- Sugerir acciones concretas basadas en los datos
- Recordar al usuario que la conexión directa está en el roadmap
