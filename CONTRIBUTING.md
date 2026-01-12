# 🤝 Guía de Contribución - ModulorIA

**Bienvenido al sistema de desarrollo de ModulorIA**

Esta guía establece las convenciones y workflows para trabajar eficientemente en el proyecto, ya sea tú mismo, colaboradores futuros, o agentes IA.

---

## 📝 Sistema de Commits Convencional

### Formato Estándar

```
<tipo>(<scope>): <descripción corta imperativo>

[cuerpo opcional: explicación detallada]

[footer opcional: referencias, breaking changes]
```

### Tipos de Commit

| Tipo | Uso | Ejemplo |
|------|-----|---------|
| `feat` | Nueva funcionalidad | `feat(web): agregar calculadora ROI interactiva` |
| `fix` | Corrección de bug | `fix(agents): corregir error en orchestrator delegation` |
| `docs` | Documentación | `docs(readme): actualizar estructura proyecto` |
| `style` | Formato código | `style(web): aplicar prettier a components` |
| `refactor` | Refactorización | `refactor(api): simplificar lógica autenticación` |
| `test` | Tests | `test(web): agregar tests unitarios calculadora` |
| `chore` | Mantenimiento | `chore(deps): actualizar Next.js a 14.2.18` |
| `content` | Contenido | `content(linkedin): agregar 2 posts enero` |
| `config` | Configuración | `config(taskmaster): actualizar modelos IA` |

### Scopes Comunes

- `web` - Aplicación Next.js
- `agents` - Sistema multi-agente
- `docs` - Documentación
- `taskmaster` - Task Master configuración
- `api` - Backend/APIs
- `content` - Marketing y contenido

### Ejemplos de Commits Buenos ✅

```bash
feat(web): agregar calculadora ROI interactiva con 3 tiers

- Input: horas/mes tareas manuales
- Output: ahorro anual proyectado
- CTA: link auditoría gratuita

Refs: #23

---

fix(agents): corregir error delegación orquestador

El orquestador no pasaba contexto completo a isabella-social-media.
Ahora incluye target audience y tone of voice.

---

docs(plan-infraestructura): crear guía mejora continua

- Templates PRD
- Sistema commits
- Workflow Git
- Estructura carpetas

---

content(linkedin): agregar posts enero sobre IA construcción

POST 1: 5 señales constructora necesita IA (evitado "PYME")
POST 2: IA vs Automatización con ejemplos sector

Saved to: docs/contenido-linkedin/posts-enero-2026.md
```

### Ejemplos de Commits Malos ❌

```bash
# ❌ Muy vago
fix: arreglar bug

# ❌ Sin scope
agregar nueva funcionalidad

# ❌ No imperativo
Fixed the bug in orchestrator

# ❌ Demasiado largo en descripción corta
feat(web): agregar calculadora ROI interactiva con inputs de horas mensuales, outputs de ahorro anual y CTA

# ✅ MEJOR
feat(web): agregar calculadora ROI interactiva
```

---

## 🔄 Git Workflow

### 1. Branches

**Estructura:**
```
main                    # Producción estable
├── feat/calculadora-roi      # Nueva funcionalidad
├── fix/orchestrator-bug      # Bug fix
├── content/posts-linkedin    # Contenido
└── docs/improve-readme       # Documentación
```

**Nomenclatura:**
- `feat/nombre-descriptivo` - Nuevas features
- `fix/nombre-bug` - Bug fixes
- `content/tipo-contenido` - Contenido marketing
- `docs/tipo-doc` - Documentación
- `refactor/componente` - Refactorizaciones

**Crear branch:**
```bash
git checkout -b feat/calculadora-roi
```

### 2. Desarrollo

**Flujo típico:**
```bash
# 1. Crear branch
git checkout -b feat/nueva-feature

# 2. Desarrollar + commits frecuentes
git add src/components/Calculator.tsx
git commit -m "feat(web): agregar componente Calculator base"

git add src/components/Calculator.tsx
git commit -m "feat(web): agregar lógica cálculo ROI"

git add src/app/calculadora/page.tsx
git commit -m "feat(web): crear página calculadora"

# 3. Push a remoto
git push -u origin feat/nueva-feature

# 4. Crear PR (si aplica)
gh pr create --title "feat: Calculadora ROI interactiva" --body "..."

# 5. Merge a main
git checkout main
git merge feat/nueva-feature
git push origin main

# 6. Limpiar branch
git branch -d feat/nueva-feature
```

### 3. Commits Frecuentes

**Cuándo hacer commit:**
- ✅ Cada milestone completado (componente funcionando)
- ✅ Antes de cambiar de tarea
- ✅ Al final del día de trabajo
- ✅ Antes de hacer pull de cambios remotos
- ❌ NO después de semanas sin commits
- ❌ NO con "work in progress" sin describir

**Commits atómicos:**
```bash
# ✅ BIEN: Commits separados por responsabilidad
git commit -m "feat(web): agregar formulario calculadora"
git commit -m "feat(web): agregar lógica cálculo ROI"
git commit -m "style(web): aplicar Tailwind a calculadora"

# ❌ MAL: Todo en un commit
git commit -m "agregar calculadora completa con estilos"
```

### 4. Pull Requests (si trabajas en equipo)

**Estructura PR:**
```markdown
## 🎯 Objetivo
[Descripción clara del cambio]

## 🔧 Cambios Realizados
- Cambio 1
- Cambio 2
- Cambio 3

## 🧪 Cómo Probar
1. Paso 1
2. Paso 2
3. Resultado esperado

## 📸 Screenshots (si aplica)
[Capturas de pantalla]

## ⚠️ Breaking Changes
[Si rompe compatibilidad]

## 📋 Checklist
- [ ] Tests pasan
- [ ] Documentación actualizada
- [ ] README actualizado (si aplica)
- [ ] Sin console.logs
```

**Comandos PR:**
```bash
# Crear PR con gh CLI
gh pr create \
  --title "feat(web): Calculadora ROI interactiva" \
  --body "..."

# Ver PRs abiertas
gh pr list

# Mergear PR
gh pr merge <numero> --squash
```

---

## 🤖 Trabajar con Agentes

### Usar Orquestador

**Para tareas complejas que requieren múltiples agentes:**

```bash
# Activar orquestador
[Describir tarea compleja al orquestador]

# Ejemplo:
"Necesito crear 5 posts LinkedIn sobre IA en construcción,
optimizarlos para SEO, y diseñar visuales para cada uno.
Coordina los agentes necesarios."
```

**El orquestador delegará a:**
1. `isabella-social-media` → Crear posts
2. `david-seo-specialist` → Optimizar SEO
3. `carolina-ux-designer` → Diseñar visuales

### Delegar a Agente Específico

**Cuando sabes exactamente qué agente necesitas:**

```bash
# Ejemplo: Crear contenido LinkedIn
[Usar agent: isabella-social-media]
"Crea 2 posts LinkedIn sobre [tema] para [target]"

# Ejemplo: Desarrollar feature
[Usar agent: alex-frontend-developer]
"Implementa calculadora ROI en /calculadora con [specs]"

# Ejemplo: Optimizar SEO
[Usar agent: david-seo-specialist]
"Audita SEO de la página /servicios y optimiza"
```

### Documentar Resultados de Agentes

**Después de que un agente complete tarea:**

```bash
# 1. Review resultado
# 2. Hacer commit con contexto
git add docs/contenido-linkedin/posts-enero-2026.md
git commit -m "content(linkedin): agregar 2 posts creados por isabella

POST 1: 5 señales constructora necesita IA
POST 2: IA vs Automatización

Agent: isabella-social-media (acce223)"

# 3. Actualizar Task Master si aplica
task-master set-status --id=2.3 --status=done

# 4. Actualizar documentación si es relevante
```

---

## 📋 PRD Process

### 1. Crear PRD

```bash
# Copiar template
cp docs/templates/prd-template.md docs/prd-nueva-feature.md

# Completar secciones
# - Objetivo
# - Problema
# - Usuarios
# - Funcionalidades
# - Timeline
# - Métricas
```

### 2. Parsear con Task Master

```bash
cd /Users/nicolasfarchica/Desktop/ModulorIA

task-master parse-prd docs/prd-nueva-feature.md --research --force
```

### 3. Ejecutar Tareas

```bash
# Ver tareas generadas
task-master list

# Obtener siguiente
task-master next

# Marcar en progreso
task-master set-status --id=1.1 --status=in-progress

# Completar
task-master set-status --id=1.1 --status=done
```

### 4. Documentar Resultados

```bash
# Actualizar README si es feature grande
# Crear caso de estudio si es para cliente
# Commit con contexto claro
```

### 5. Sincronizar Notion

```bash
# Exportar tareas a Notion (cuando MCP esté configurado)
# O manual: copiar tareas completadas a Notion
```

---

## ✅ Checklist Antes de Commit

### Desarrollo Web

- [ ] Código compila sin errores (`npm run build`)
- [ ] No hay console.logs olvidados
- [ ] Componentes tienen props con TypeScript
- [ ] Estilos aplicados correctamente
- [ ] Funcionalidad testeada manualmente
- [ ] README actualizado si es feature nueva

### Contenido

- [ ] Ortografía revisada
- [ ] Tono de voz consistente (ver `docs/estrategia/Tono-de-Voz-Personalidad-Marca.md`)
- [ ] SEO keywords incluidas (si aplica)
- [ ] Formato markdown correcto
- [ ] Links funcionan

### Documentación

- [ ] Información precisa
- [ ] Ejemplos claros
- [ ] Sin información desactualizada
- [ ] Links internos funcionan
- [ ] Estructura lógica

### Commits

- [ ] Mensaje claro e imperativo
- [ ] Scope correcto
- [ ] Tipo adecuado
- [ ] Descripción < 72 caracteres
- [ ] Cuerpo si es necesario

---

## 🔄 Workflow Completo Semanal

### Lunes 9:00 - Planificación

```bash
# 1. Review Task Master
task-master list --status=pending

# 2. Priorizar top 3-5 tareas
task-master next

# 3. Crear issues/tareas si faltan
task-master add-task --prompt="descripción tarea"

# 4. Delegar a agentes lo delegable
[Usar orquestador]
```

### Durante la Semana - Ejecución

```bash
# Cada milestone:
1. Desarrollar
2. Commit incremental
3. Actualizar Task Master
4. Documentar si relevante
5. Push a remoto

# Cada día:
1. Morning: task-master next
2. Evening: git push + task-master update
```

### Viernes 18:00 - Review

```bash
# 1. Push all changes
git add .
git commit -m "chore: weekly cleanup"
git push origin main

# 2. Review semanal
task-master status

# 3. Actualizar README si hubo cambios grandes
# 4. Sincronizar Notion
# 5. Planificar próxima semana
```

---

## 📊 Métricas de Calidad

### Objetivos

| Métrica | Target | Actual |
|---------|--------|--------|
| **README actualizado** | Semanal | 🟢 |
| **Commits claros** | 100% | - |
| **PRDs completados** | Antes implementar | - |
| **Notion sincronizado** | Diario | 🔴 |
| **Casos estudio** | Por cliente | 0 |

### KPIs

- **Tiempo onboarding nuevo colaborador:** <4h
- **Preguntas repetitivas sobre proyecto:** 0
- **Commits sin mensaje claro:** 0%
- **Documentación desactualizada:** 0%

---

## 🚨 Errores Comunes

### ❌ NO HACER

```bash
# ❌ Commits genéricos
git commit -m "update"
git commit -m "fix stuff"
git commit -m "wip"

# ❌ Commits gigantes
git add .
git commit -m "implement everything"

# ❌ No actualizar docs
# [Hacer cambios grandes sin actualizar README]

# ❌ Branches sin borrar
# [Dejar 50 branches viejas]
```

### ✅ HACER

```bash
# ✅ Commits específicos
git commit -m "feat(web): agregar campo email a calculadora"

# ✅ Commits atómicos
[Un commit por cambio lógico]

# ✅ Docs actualizados
# Cambio grande → Actualizar README mismo día

# ✅ Limpiar branches
git branch -d feat/ya-mergeada
```

---

## 🆘 Solución de Problemas

### Conflicto en Main

```bash
# 1. Backup local
git stash

# 2. Pull cambios
git pull origin main

# 3. Aplicar cambios
git stash pop

# 4. Resolver conflictos
# 5. Commit merge
git commit -m "chore: resolve merge conflict"
```

### Commit Incorrecto

```bash
# Si NO has hecho push:
git reset --soft HEAD~1  # Deshace último commit, mantiene cambios
git reset --hard HEAD~1  # Deshace último commit, BORRA cambios

# Si YA hiciste push:
# NO uses git push --force en main
# Mejor: hacer commit correctivo
git commit -m "fix: corregir error commit anterior"
```

### Branch Desactualizada

```bash
# En tu branch:
git checkout feat/mi-branch
git rebase main  # O: git merge main

# Resolver conflictos si hay
git push -f origin feat/mi-branch  # Solo en tu branch, NO en main
```

---

## 📚 Recursos Adicionales

### Documentos Clave

- [Plan Mejora Infraestructura](docs/PLAN-MEJORA-INFRAESTRUCTURA.md)
- [README Principal](README.md)
- [Tono de Voz](docs/estrategia/Tono-de-Voz-Personalidad-Marca.md)

### Herramientas

- **Git:** [git-scm.com/docs](https://git-scm.com/docs)
- **Conventional Commits:** [conventionalcommits.org](https://www.conventionalcommits.org/)
- **gh CLI:** [cli.github.com](https://cli.github.com/)
- **Task Master:** [github.com/anthropics/task-master](https://github.com/anthropics/task-master)

---

**Autor:** Claude Sonnet 4.5 + Nicolás Farchica
**Última actualización:** 8 Enero 2026

---

**¿Dudas?** Consulta [PLAN-MEJORA-INFRAESTRUCTURA.md](docs/PLAN-MEJORA-INFRAESTRUCTURA.md) o pregunta directamente.
