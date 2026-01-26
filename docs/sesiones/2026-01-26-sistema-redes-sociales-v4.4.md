# Sesión 2026-01-26: Sistema Redes Sociales v4.4

## Resumen Ejecutivo

Se implementó y mejoró significativamente el sistema de generación automática de contenido para redes sociales (LinkedIn, Instagram, Facebook) con N8N.

---

## Cambios Realizados

### 1. Workflow Principal Actualizado a v4.4

**Archivo:** `n8n-workflows/generador-posts-multiagente-v4-definitivo.json`

#### Nuevas Funcionalidades:

**3 Triggers disponibles:**
- `Trigger Manual` - Para pruebas
- `Schedule Diario 8AM` - Automático L-V a las 8AM
- `Notion: Nueva Fuente` - Se dispara cuando se agrega contenido nuevo a Notion (polling cada 15 min)

**Rotación automática de formatos por red social:**

| LinkedIn (7 formatos) | Instagram (6 formatos) | Facebook (6 formatos) |
|----------------------|------------------------|----------------------|
| post_texto | post_imagen | pregunta |
| post_imagen | carrusel | reflexion |
| carrusel | tip_rapido | compartir_articulo |
| thought_leadership | dato_curioso | encuesta_opinion |
| caso_estudio | behind_scenes | historia_corta |
| lista_tips | antes_despues | tip_practico |
| pregunta_debate | | |

**Tonos por día de la semana:**
| Día | Tono |
|-----|------|
| Lunes | Formal-Técnico |
| Martes | Storytelling |
| Miércoles | Datos-Duros |
| Jueves | Cercano-Profesional |
| Viernes | Opinión-Experta |
| Sábado | Reflexivo |
| Domingo | Inspiracional |

### 2. Prompts de Agentes Mejorados

**Agente LinkedIn:**
- Estructura obligatoria con ejemplos de hooks por formato
- Ejemplos concretos de buenos hooks
- Reglas claras de caracteres y formato
- Palabras prohibidas definidas

**Agente Instagram:**
- Adaptación por formato asignado
- Estructura de caption optimizada
- Hashtags en bloque separado

**Agente Facebook:**
- Enfoque en generar conversación
- Posts más cortos (400 chars max)
- Formatos que invitan a comentar

### 3. Orquestador Mejorado

- Genera título atractivo automáticamente
- Crea hook principal para cada post
- Define puntos clave del contenido
- Adapta estrategia según formato asignado

### 4. Bugs Corregidos

- **sourcePageId undefined:** Corregido. Ahora el nodo "15. Marcar Fuente Usada" toma el ID directamente del nodo "2. Preparar Datos + Tono"
- **Extracción de ID robusta:** El código ahora busca el ID en múltiples campos posibles

---

## Archivos Modificados

1. `n8n-workflows/generador-posts-multiagente-v4-definitivo.json` - Workflow principal v4.4
2. `n8n-workflows/generador-posts-SIN-IMAGENES.json` - Versión simplificada (sin cambios hoy)
3. `n8n-workflows/carrusel-linkedin-workflow.json` - Workflow carruseles (sin cambios hoy)

---

## Estado del Sistema

### Funcional (90%):
- [x] Lectura de fuentes desde Notion
- [x] Preparación de datos con tonos y formatos
- [x] Orquestador GPT-4o
- [x] 3 Agentes en paralelo (LinkedIn, Instagram, Facebook)
- [x] Guardado en Notion como Borrador
- [x] Rotación automática de formatos
- [x] 3 triggers disponibles

### Pendiente/Desactivado:
- [ ] Generación de imágenes (Replicate/Cloudinary desactivado)
- [ ] Nodo 15 "Marcar Fuente Usada" - Puede necesitar configuración manual de Estado en Notion
- [ ] Perplexity para investigación (bypass activo, siempre va a "Sin Investigación")

---

## Próximos Pasos

1. **Probar workflow completo** - Verificar que el error del sourcePageId esté corregido
2. **Configurar Perplexity** - Cuando tengas API key funcional
3. **Activar generación de imágenes** - Con Replicate o alternativa
4. **Revisar calidad de posts** - Ajustar prompts según resultados

---

## Bases de Datos Notion

| Base de Datos | ID | Uso |
|---------------|-----|-----|
| Fuentes de Contenido | `018b5945-2eea-488c-ae35-0bc91acee98c` | Noticias, ideas, artículos |
| Posts Redes Sociales | `b9a8420c-f289-4ca1-ab49-25271e21e71a` | Posts generados |

---

## Cómo Continuar Mañana

1. **Re-importar workflow** en N8N (archivo ya actualizado)
2. **Probar con trigger manual** para verificar que funciona
3. **Revisar posts generados** en Notion
4. **Ajustar prompts** si es necesario según calidad

---

## Notas Técnicas

- El workflow usa bypass de Perplexity (IF siempre false)
- Las imágenes no se generan, pero se guardan prompts en "Imagen Sugerida"
- El trigger de Notion hace polling cada 15 minutos
- Los formatos rotan basándose en el día del año + índice

---

*Sesión finalizada: 2026-01-26 ~2:00 AM*
