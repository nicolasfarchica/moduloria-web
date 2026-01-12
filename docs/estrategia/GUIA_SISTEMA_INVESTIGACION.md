# GUÍA DEL SISTEMA DE INVESTIGACIÓN - ModulorIA

## Cómo Usar Este Sistema para Descubrir y Analizar Puntos de Dolor

---

## 1. FLUJO DE TRABAJO COMPLETO

```
PASO 1: Investigación          → PASO 2: Análisis           → PASO 3: Validación         → PASO 4: Priorización
├─ Usar PROMPT_RAPIDO.md       ├─ Usar TEMPLATE_ANALISIS   ├─ Entrevistas              ├─ Crear roadmap
├─ En Claude/ChatGPT/Perplexity├─ Llenar todos los campos   ├─ Prototipos rápidos       ├─ Definir Quick Wins
├─ Guardar resultados          ├─ Cuantificar impacto      ├─ Validar stack técnico    ├─ Plan de implementación
```

---

## 2. PASO 1: INVESTIGACIÓN PROFUNDA

### Opción A: Investigación Exhaustiva (1-2 horas)
**Usa:** `PROMPT_INVESTIGACION_PROFUNDA.md`

**Cuándo usarlo:**
- Cuando quieres explorar múltiples puntos de dolor a la vez
- Al inicio de un nuevo área de análisis
- Para investigaciones mensuales/trimestrales
- Cuando tienes tiempo para leer informes largos

**Cómo usarlo:**
1. Abre el archivo `PROMPT_INVESTIGACION_PROFUNDA.md`
2. Copia TODO el contenido
3. Pégalo en tu IA favorita:
   - **Perplexity:** Mejor para búsqueda web en tiempo real y fuentes actualizadas
   - **Claude (Sonnet/Opus):** Mejor para análisis profundo y estructurado
   - **ChatGPT (GPT-4):** Buen balance entre búsqueda y análisis
4. Espera 2-5 minutos (puede generar respuestas largas)
5. Guarda el resultado completo en una carpeta: `Investigacion/[Fecha]_[Tema].md`

**Ejemplo de uso:**
```
Archivo creado: Investigacion/2025-01-15_Puntos_Dolor_Comunicacion.md
```

### Opción B: Investigación Rápida (15-30 minutos)
**Usa:** `PROMPT_RAPIDO.md`

**Cuándo usarlo:**
- Cuando necesitas ideas rápidas
- Para validar una hipótesis específica
- Cuando quieres explorar un área puntual
- Para investigaciones semanales

**Cómo usarlo:**
1. Abre el archivo `PROMPT_RAPIDO.md`
2. Puedes personalizarlo:
   - Cambia el número de problemas (de 5-10 a menos si quieres)
   - Especifica un área concreta (ej: "enfócate en gestión de clientes")
3. Copia y pega en tu IA
4. Resultado en 1-2 minutos
5. Guarda en: `Investigacion/[Fecha]_Quick_[Tema].md`

### Consejos de Investigación:

**Para Perplexity:**
- Activa el modo "Pro Search" para búsquedas más profundas
- Pide que incluya links de todas las fuentes
- Útil para encontrar estadísticas y estudios recientes

**Para Claude:**
- Mejor para análisis de documentos que ya tienes
- Puedes adjuntar PDFs de informes del sector
- Excelente para estructurar información

**Para ChatGPT:**
- Puedes usar GPT-4 con búsqueda web (si tienes acceso)
- Buen balance entre velocidad y profundidad

---

## 3. PASO 2: ANÁLISIS DETALLADO

Una vez tengas resultados de tu investigación, analiza cada punto de dolor en profundidad.

### Usar el Template de Análisis

1. **Crea una copia del template:**
   ```bash
   cp TEMPLATE_ANALISIS_PROBLEMA.md "Investigacion/Analisis_[Nombre_Problema].md"
   ```

2. **Llena TODAS las secciones:**
   - ✅ No dejes secciones vacías (si no tienes datos, marca "Pendiente investigar")
   - ✅ Cuantifica TODO lo que puedas (horas, euros, porcentajes)
   - ✅ Busca fuentes y citas reales
   - ✅ Sé honesto en la evaluación de viabilidad

3. **Secciones Críticas (NO omitir):**

   **Impacto Cuantificado:**
   - Necesitas números reales: "€5.000/año" mejor que "mucho dinero"
   - Busca estudios del sector, benchmarks, estadísticas oficiales
   - Si no encuentras datos exactos, haz estimaciones conservadoras

   **Stack Técnico:**
   - Verifica que las APIs/herramientas existen y son accesibles
   - Confirma precios actualizados (muchas veces cambian)
   - Asegúrate de que sabes usarlas o puedes aprenderlas en 1-2 semanas

   **Viabilidad para ModulorIA:**
   - Sé REALISTA sobre tu capacidad técnica actual
   - Si necesitas aprender algo nuevo, añade ese tiempo
   - Identifica qué puedes hacer solo vs. qué requiere ayuda

### Ejemplo de Template Lleno:

Mira el ejemplo completo en: `Ejemplos/Analisis_Gestion_Vencimientos_COMPLETO.md` (este archivo lo puedes crear tú cuando termines tu primer análisis, como referencia futura)

---

## 4. PASO 3: VALIDACIÓN

No implementes nada sin validar primero. Ahorra tiempo y dinero.

### Validación del Problema (¿Es real?)

**Entrevistas Informales (3-5 personas):**
- Contacta jefes de obra, administrativos, gerentes de construcción
- Pregunta abierta: "¿Cuánto tiempo dedicas a [tarea X] por semana?"
- No vendas nada todavía, solo escucha
- Confirma: ¿El dolor es tan grande como creías?

**LinkedIn/Grupos:**
- Publica una pregunta en grupos de construcción
- "¿Cómo gestionan [problema X]?"
- Observa: ¿Mucha gente responde? ¿Es un problema común?

### Validación de la Solución (¿Es viable?)

**Prototipo Rápido (2-5 días):**
- Monta una versión ultra-simplificada en N8N
- No necesita estar perfecto, solo funcional
- Pruébalo tú mismo con datos de ejemplo
- Confirma: ¿Funciona como pensabas? ¿Qué falta?

**Validación con 1-2 Clientes Beta:**
- Ofrece implementación gratis/descuento a cambio de feedback
- Observa: ¿Lo usan realmente? ¿Les ahorra tiempo?
- Itera: Mejora según feedback

---

## 5. PASO 4: PRIORIZACIÓN Y ROADMAP

No puedes hacer todo a la vez. Prioriza.

### Matriz de Priorización

Clasifica cada punto de dolor según:

| Criterio | Peso | Escala |
|----------|------|--------|
| **Impacto (ROI)** | 40% | 1-10 (10 = ahorra €10k+/año) |
| **Viabilidad Técnica** | 30% | 1-10 (10 = puedes hacerlo en 1 semana) |
| **Demanda del Mercado** | 20% | 1-10 (10 = todos lo piden) |
| **Diferenciación** | 10% | 1-10 (10 = nadie más lo ofrece así) |

**Fórmula:**
```
Puntuación = (Impacto × 0.4) + (Viabilidad × 0.3) + (Demanda × 0.2) + (Diferenciación × 0.1)
```

Crea una tabla en Excel/Sheets:

| Problema | Impacto | Viabilidad | Demanda | Difer. | **TOTAL** | Prioridad |
|----------|---------|------------|---------|--------|-----------|-----------|
| Partes voz | 8 | 9 | 9 | 7 | **8.4** | 🟢 ALTA |
| Albaranes OCR | 7 | 8 | 8 | 6 | **7.4** | 🟢 ALTA |
| ... | | | | | | |

### Crear tu Roadmap (3-12 meses)

**Q1 (0-3 meses) - Quick Wins:**
- Los 3 problemas con puntuación > 8.0
- Implementa, crea casos de éxito, documenta

**Q2 (3-6 meses) - Expansión:**
- Los 3-5 problemas con puntuación 6.5-8.0
- Valida que Q1 funciona antes de avanzar

**Q3-Q4 (6-12 meses) - Optimización:**
- Mejora soluciones existentes
- Explora problemas complejos (puntuación < 6.5)

---

## 6. ORGANIZACIÓN DE ARCHIVOS

Mantén todo ordenado desde el inicio:

```
ModulorIA/
├── PROMPT_INVESTIGACION_PROFUNDA.md    ← Prompt largo
├── PROMPT_RAPIDO.md                    ← Prompt corto
├── TEMPLATE_ANALISIS_PROBLEMA.md       ← Template vacío
├── GUIA_SISTEMA_INVESTIGACION.md       ← Este archivo
│
├── Investigacion/                       ← Resultados de búsquedas
│   ├── 2025-01-15_Puntos_Dolor_Comunicacion.md
│   ├── 2025-01-20_Quick_Gestion_Clientes.md
│   └── ...
│
├── Analisis/                            ← Análisis detallados
│   ├── Analisis_Gestion_Vencimientos.md
│   ├── Analisis_Coordinacion_Subcontratas.md
│   └── ...
│
├── QuickWins/                           ← Soluciones implementadas
│   ├── 01_Partes_Voz/
│   │   ├── README.md                    ← Descripción
│   │   ├── flujo_n8n.json              ← Workflow exportado
│   │   ├── documentacion_cliente.md     ← Manual para el cliente
│   │   └── caso_exito.md               ← Resultados reales
│   │
│   ├── 02_Albaranes_OCR/
│   └── ...
│
├── Stack_Tecnico/                       ← Documentación técnica
│   ├── N8N_Setup.md
│   ├── APIs_Recomendadas.md
│   └── Costes_Recurrentes.xlsx
│
├── Flujos_N8N/                          ← Workflows reutilizables
│   ├── Transcripcion_Audio_WhatsApp.json
│   ├── OCR_Albaranes_Basic.json
│   └── ...
│
└── Roadmap_2025.xlsx                    ← Tu plan maestro
```

---

## 7. FRECUENCIA RECOMENDADA

### Investigación:
- **Semanal (30 min):** Usa PROMPT_RAPIDO para explorar 1 área nueva
- **Mensual (2 horas):** Usa PROMPT_PROFUNDO para análisis exhaustivo
- **Trimestral (1 día):** Revisa toda la info, actualiza roadmap

### Análisis:
- **Por cada problema prometedor:** Llena el TEMPLATE completo
- **No analices más de 2-3 problemas por semana** (evita parálisis por análisis)

### Validación:
- **Antes de implementar cualquier cosa:** 1-2 semanas de validación mínima

---

## 8. HERRAMIENTAS RECOMENDADAS

### Para Investigación:
- **Perplexity Pro:** $20/mes - Excelente para búsqueda web actualizada
- **Claude Pro:** $20/mes - Mejor para análisis profundo
- **ChatGPT Plus:** $20/mes - Buen balance

*Consejo: Empieza con versiones gratuitas y evalúa cuál te funciona mejor antes de pagar*

### Para Organización:
- **Obsidian (gratis):** Para gestionar todos los .md con enlaces internos
- **Notion (gratis):** Si prefieres base de datos visual
- **Google Drive + Sheets:** Lo más simple para empezar

### Para Gestión de Proyectos:
- **Task Master:** Para gestionar el roadmap de implementaciones (lo tienes instalado)
- **Trello/Notion:** Para tracking simple

---

## 9. CHECKLIST MENSUAL

Usa esto para no perderte:

**Cada mes, haz:**
- [ ] 1 investigación profunda (PROMPT_PROFUNDO)
- [ ] 2-4 investigaciones rápidas (PROMPT_RAPIDO)
- [ ] Analizar 2-3 problemas nuevos (llenar TEMPLATE)
- [ ] Validar con 3-5 profesionales del sector (entrevistas informales)
- [ ] Crear/mejorar 1 prototipo en N8N
- [ ] Actualizar matriz de priorización
- [ ] Revisar y ajustar roadmap trimestral
- [ ] Documentar lecciones aprendidas

---

## 10. PRÓXIMOS PASOS INMEDIATOS (Hoy)

Para empezar HOY MISMO:

1. **Ahora (5 min):**
   - Copia `PROMPT_RAPIDO.md`
   - Pégalo en Perplexity o Claude
   - Obtén tu primera lista de 5-10 problemas

2. **Hoy (1 hora):**
   - Elige el problema que más te llame la atención
   - Crea una copia del TEMPLATE: `Analisis_[Nombre].md`
   - Llena las secciones 1, 2 y 6 (identificación, impacto, viabilidad)

3. **Esta semana (3 horas):**
   - Contacta 3 personas del sector (LinkedIn, email, WhatsApp)
   - Pregúntales sobre ese problema específico
   - Ajusta tu análisis según su feedback

4. **Próximas 2 semanas (1 día):**
   - Crea un prototipo simple en N8N
   - Documenta el proceso
   - Decide: ¿Vale la pena seguir con esto?

---

## 11. RECURSOS ADICIONALES

### Fuentes de Información Confiables:
- **McKinsey Construction Practice:** Informes trimestrales gratuitos
- **Deloitte Engineering & Construction:** Estudios del sector
- **AGC (Associated General Contractors):** Estadísticas USA
- **SEOPAN (España):** Observatorio de la construcción
- **Construction Dive / ENR:** Noticias y tendencias
- **Reddit r/Construction:** Problemas reales del día a día

### Comunidades donde Validar:
- **LinkedIn:** Grupos de construcción modular, BIM, project managers
- **Discord/Slack:** Comunidades de N8N, automatización, no-code
- **Foros:** ForoCoches (sección construcción), Habitissimo Pro

---

## ¿DUDAS? ESCENARIOS COMUNES

**P: "¿Cuántos problemas debo investigar antes de empezar a implementar?"**
R: Mínimo 10-15. Luego prioriza los 3 mejores y empieza con esos. No investigues infinitamente.

**P: "¿Qué hago si encuentro un problema interesante pero no sé cómo resolverlo técnicamente?"**
R: Anótalo en "Prioridad BAJA" y sigue con otros. Cuando aprendas más, vuelve a él.

**P: "¿Es necesario llenar TODO el template?"**
R: Sí, para problemas que vas a implementar. No, para exploraciones iniciales (puedes llenar solo secciones 1, 2 y 6).

**P: "¿Cómo sé si mi estimación de impacto es correcta?"**
R: Valida con 3-5 personas del sector. Si todos dicen "sí, eso nos pasa", estás en el camino correcto.

---

**¡Listo! Tienes todo lo necesario para convertirte en un experto en descubrir y resolver puntos de dolor en construcción.**

**Empieza AHORA con el PROMPT_RAPIDO.md** 🚀
