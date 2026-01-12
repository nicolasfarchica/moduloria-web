# Template de Commit Message

## Formato Estándar

```
<tipo>(<scope>): <descripción corta en imperativo>

[cuerpo opcional con detalles]

[footer opcional con referencias]
```

---

## Tipos de Commit

### feat - Nueva funcionalidad
```bash
feat(web): agregar calculadora ROI interactiva

- Input: horas/mes en tareas manuales
- Output: ahorro anual proyectado en €
- CTA: botón "Agendar Auditoría Gratuita"
- Diseño: slider + tarjetas de resultados

Closes #23
```

### fix - Corrección de bug
```bash
fix(agents): corregir error delegación orquestador

El orquestador no pasaba contexto completo a isabella-social-media.
Ahora incluye target audience y tone of voice.

Bug reportado en: #45
```

### docs - Documentación
```bash
docs(readme): actualizar sección stack tecnológico

- Agregar Task Master 0.40.1
- Actualizar modelos IA configurados
- Añadir badges de estado
- Corregir comandos desactualizados
```

### content - Contenido de marketing
```bash
content(linkedin): agregar 2 posts enero sobre IA construcción

POST 1: 5 señales constructora necesita IA
- Evitado término "PYME" como solicitado
- Tono: directo, ejemplos sector
- CTA: link auditoría gratuita

POST 2: IA vs Automatización con casos prácticos
- Tabla comparativa coste/beneficio
- 3 ejemplos reales construcción modular
- CTA: calculadora ROI

Guardado en: docs/contenido-linkedin/posts-enero-2026.md
Agent: isabella-social-media
```

### style - Formato código (sin afectar funcionalidad)
```bash
style(web): aplicar prettier a componentes

- Reformatear HeroSection.tsx
- Reformatear Navigation.tsx
- Actualizar .prettierrc con reglas proyecto
```

### refactor - Refactorización
```bash
refactor(api): simplificar lógica autenticación

- Extraer validación JWT a middleware
- Unificar manejo de errores
- Reducir duplicación de código en 3 endpoints

Sin cambios funcionales, mejora mantenibilidad.
```

### test - Tests
```bash
test(web): agregar tests unitarios calculadora ROI

- Test cálculo ahorro anual
- Test validación inputs
- Test edge cases (valores negativos, cero)
- Coverage: 95%
```

### chore - Mantenimiento
```bash
chore(deps): actualizar Next.js a 14.2.18

- Next.js: 14.2.15 → 14.2.18
- React: mantener en 18.3.1
- Tailwind: mantener en 3.4.17

Incluye fixes de seguridad y performance.
```

### config - Configuración
```bash
config(taskmaster): actualizar modelos IA

Cambios:
- Main: claude-3-7-sonnet → gpt-5.2 (80% SWE, gratis)
- Research: sonar-pro → sonnet (72.7% SWE, gratis)
- Fallback: agregar opus (72.5% SWE, gratis)

Motivación: Mejorar performance 28% y reducir costes a €0.
```

---

## Scopes Comunes

| Scope | Uso | Ejemplos |
|-------|-----|----------|
| `web` | Aplicación Next.js | `feat(web): agregar página /servicios` |
| `agents` | Sistema multi-agente | `fix(agents): corregir orchestrator` |
| `docs` | Documentación | `docs(contributing): agregar sección PRDs` |
| `taskmaster` | Task Master config | `config(taskmaster): actualizar modelos` |
| `api` | Backend/APIs | `feat(api): agregar endpoint analytics` |
| `content` | Marketing y contenido | `content(linkedin): agregar posts` |
| `config` | Configuración general | `config(mcp): agregar servidor Notion` |
| `tests` | Testing | `test(web): agregar tests E2E` |

---

## Reglas de Escritura

### ✅ HACER

```bash
# Imperativo, presente
feat(web): agregar calculadora

# Específico
fix(agents): corregir error en orchestrator.delegateTask()

# Con contexto en cuerpo
feat(web): agregar sección testimonios

Incluye:
- 3 testimonios reales de clientes
- Carrusel con Framer Motion
- Diseño responsive

# Referencias a issues
fix(api): corregir timeout en /analytics

Closes #67
```

### ❌ NO HACER

```bash
# ❌ Pasado
fixed the bug

# ❌ Vago
update stuff

# ❌ Demasiado largo (>72 chars en primera línea)
feat(web): agregar calculadora ROI interactiva con inputs de horas mensuales y outputs de ahorro anual

# ❌ Sin scope cuando es específico
agregar nueva funcionalidad

# ❌ Sin tipo
calculadora ROI
```

---

## Commits Atómicos

### ✅ BUENA PRÁCTICA

```bash
# Commits separados por responsabilidad
git add src/components/Calculator.tsx
git commit -m "feat(web): crear componente Calculator base"

git add src/components/Calculator.tsx
git commit -m "feat(web): agregar lógica cálculo ROI"

git add src/app/calculadora/page.tsx
git commit -m "feat(web): crear página /calculadora"

git add src/components/Calculator.tsx src/app/calculadora/page.tsx
git commit -m "style(web): aplicar Tailwind a calculadora"
```

### ❌ MALA PRÁCTICA

```bash
# Todo en un commit gigante
git add .
git commit -m "agregar calculadora completa con estilos y tests"
```

---

## Footer: Referencias

```bash
# Cerrar issue
Closes #23

# Múltiples issues
Closes #23, #24, #25

# Referencia sin cerrar
Refs #45

# Breaking change
BREAKING CHANGE: API endpoint /old-analytics eliminado, usar /analytics/v2
```

---

## Ejemplos Completos Reales

### Ejemplo 1: Nueva Feature Web

```bash
feat(web): agregar sección "Cómo Funciona" en homepage

Incluye:
- 4 pasos del proceso ModulorIA
- Iconos animados con Framer Motion
- Timeline visual con progreso
- CTA al final: "Empieza tu Auditoría Gratuita"

Diseño: Carolina (UX)
Copy: Marco (Copywriter)

Closes #34
```

### Ejemplo 2: Bug Fix con Contexto

```bash
fix(agents): corregir error en orchestrator al delegar múltiples tareas

Error: Cuando se delegaban >3 tareas simultáneas, el orquestador
no esperaba respuesta del primer agente antes de iniciar el segundo.

Solución:
- Agregar queue con promesas
- Implementar retry logic (3 intentos)
- Mejorar logs de delegación

Reproducido en: task 2.3, 2.4
Reportado por: Nicolás

Fixes #89
```

### Ejemplo 3: Contenido LinkedIn

```bash
content(linkedin): agregar 5 posts enero sobre construcción modular

POST 1: "5 señales que tu constructora necesita IA"
- Evitado "PYME" (feedback Nicolás)
- Tono: directo, ejemplos reales
- Engagement esperado: >200 impresiones

POST 2: "IA vs Automatización"
POST 3: "Caso real: Ahorro €45K/año"
POST 4: "3 mitos sobre IA en construcción"
POST 5: "Cómo elegir tu primer Quick Win de IA"

Todos:
- Formato: hook + 3-5 bullets + CTA
- CTA: Link auditoría o calculadora ROI
- Hashtags: #IAconstrucción #construcciónmodular

Guardados en: docs/contenido-linkedin/posts-enero-2026.md
Creados por: isabella-social-media (agent)
Revisados por: Nicolás
```

### Ejemplo 4: Documentación Mayor

```bash
docs(plan-infraestructura): crear guía mejora continua

Nuevo documento: PLAN-MEJORA-INFRAESTRUCTURA.md

Incluye:
- Estructura carpetas optimizada
- Sistema commits convencional
- Templates PRD, commits, agent tasks
- Workflow Git completo
- Métricas de documentación
- Checklist antes de commit

Motivación:
- Facilitar onboarding futuros colaboradores (<4h)
- Mejorar context para IA
- Profesionalizar gestión proyecto

Refs: #12 (issue mejora docs)
```

### Ejemplo 5: Actualización Configuración

```bash
config(mcp): agregar servidor Notion para sincronización

Cambios en .mcp.json:
- Agregar servidor Notion con API key
- Configurar env variables

Cambios en settings.local.json:
- Habilitar "notion" en enabledMcpjsonServers

Uso:
- Acceder a workspace ModulorIA
- Sincronizar tareas Task Master ↔ Notion
- Leer investigaciones almacenadas

Nota: Requiere reinicio de Claude Code para cargar MCP.

API Key proporcionada por: Nicolás
```

---

## Generación con AI

Si usas Claude/GPT para generar commits, usa este prompt:

```
Genera un commit message convencional para estos cambios:
[pega output de git diff o descripción]

Formato:
<tipo>(<scope>): <descripción corta>

[cuerpo con bullets si necesario]

[footer si aplica]

Tipos: feat, fix, docs, style, refactor, test, chore, content, config
Scopes: web, agents, docs, taskmaster, api, content, config, tests
```

---

**Última actualización:** 8 Enero 2026
**Versión:** 1.0
