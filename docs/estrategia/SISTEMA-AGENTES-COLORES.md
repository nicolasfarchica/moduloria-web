# Sistema de Agentes ModulorIA - Identificación por Colores

**Fecha:** 2026-01-04
**Sistema:** 15 Agentes + 1 Orquestador
**Método:** Identificación visual por color + emoji

---

## 🎨 SISTEMA DE COLORES

Cada agente tiene asignado:
- 🎨 **Color único** (para identificación visual)
- 🏷️ **Emoji distintivo** (quick reference)
- 📋 **ID corto** (ejemplo: WEB-SEO, CONT-SM)

---

## 👑 ORQUESTADOR PRINCIPAL

### 🟣 ORQUESTADOR (Purple)
**Emoji:** 👑
**ID:** ORCH-MAIN
**Nombre:** Nicolás Farchica (CEO)

**Función:**
- Coordina los 15 agentes
- Asigna prioridades semanales
- Resuelve bloqueos
- Toma decisiones estratégicas
- Reporta progreso

**Tools:**
- Task Master (opcional)
- Notion dashboard
- Claude Code (este chat)
- Weekly reviews

**Cuando actúa:**
- Daily: Revisar progreso agentes
- Weekly: Planning + priorización
- Ad-hoc: Resolver bloqueos urgentes

---

## 🌐 EQUIPO WEB (Azules)

### 🔵 AGENTE 1: SEO SPECIALIST
**Emoji:** 🔍
**ID:** WEB-SEO
**Color:** Azul oscuro (#1E3A8A)

**Responsabilidades:**
- Keywords research
- On-page SEO
- Blog strategy
- Link building
- Analytics

**Estado actual:** Pendiente activación

---

### 💙 AGENTE 2: COPYWRITER
**Emoji:** ✍️
**ID:** WEB-COPY
**Color:** Azul medio (#3B82F6)

**Responsabilidades:**
- Contenido web
- Blog posts
- Email sequences
- Social captions
- Propuestas

**Estado actual:** Pendiente activación

---

### 🟦 AGENTE 3: UI/UX DESIGNER
**Emoji:** 🎨
**ID:** WEB-UX
**Color:** Azul claro (#60A5FA)

**Responsabilidades:**
- Componentes web
- Assets visuales
- Mobile UX
- A/B testing
- Accesibilidad

**Estado actual:** Pendiente activación

---

### 🔷 AGENTE 4: FRONTEND DEVELOPER
**Emoji:** 💻
**ID:** WEB-DEV
**Color:** Azul cyan (#06B6D4)

**Responsabilidades:**
- Features nuevas
- Backend formularios
- Performance
- Bugs
- Deploy

**Estado actual:** 🟢 ACTIVO (tarea: backend formulario)

---

## 📢 EQUIPO CONTENIDO & MARKETING (Verdes)

### 🟢 AGENTE 5: CONTENT STRATEGIST
**Emoji:** 📊
**ID:** CONT-STRAT
**Color:** Verde oscuro (#047857)

**Responsabilidades:**
- Calendario contenido
- Ideación temas
- Repurposing
- Métricas
- Coordinación equipo

**Estado actual:** Pendiente activación

---

### 💚 AGENTE 6: SOCIAL MEDIA MANAGER
**Emoji:** 📱
**ID:** CONT-SM
**Color:** Verde medio (#10B981)

**Responsabilidades:**
- LinkedIn posts (3/semana)
- Instagram content
- Community management
- Analytics

**Estado actual:** Pendiente activación

---

### 🟩 AGENTE 7: EMAIL MARKETING
**Emoji:** 📧
**ID:** CONT-EMAIL
**Color:** Verde claro (#34D399)

**Responsabilidades:**
- Nurturing sequences
- Newsletter
- Lead magnets
- Automation

**Estado actual:** Pendiente activación

---

## 🔧 EQUIPO TÉCNICO (Naranjas)

### 🟠 AGENTE 8: N8N AUTOMATION SPECIALIST
**Emoji:** ⚙️
**ID:** TECH-N8N
**Color:** Naranja oscuro (#EA580C)

**Responsabilidades:**
- Workflows N8N
- MVPs (Chatbot, OCR, Reportes)
- APIs integrations
- Testing

**Estado actual:** 🟡 PREPARACIÓN (MVPs semana 1-2)

---

### 🧡 AGENTE 9: BACKEND DEVELOPER
**Emoji:** 🔧
**ID:** TECH-BACK
**Color:** Naranja medio (#F97316)

**Responsabilidades:**
- APIs development
- Database
- Integraciones
- Security

**Estado actual:** Pendiente activación

---

### 🔶 AGENTE 10: QA & TESTING
**Emoji:** 🧪
**ID:** TECH-QA
**Color:** Naranja claro (#FB923C)

**Responsabilidades:**
- Testing MVPs
- Bug tracking
- Performance testing
- UAT

**Estado actual:** Pendiente activación

---

## 🔬 EQUIPO INVESTIGACIÓN (Amarillos)

### 🟡 AGENTE 11: MARKET RESEARCH
**Emoji:** 🔎
**ID:** STRAT-RES
**Color:** Amarillo oscuro (#CA8A04)

**Responsabilidades:**
- Investigación mercado
- Validación problemas
- Competencia
- Tendencias

**Estado actual:** Pendiente activación

---

### 💛 AGENTE 12: BUSINESS STRATEGIST
**Emoji:** 📈
**ID:** STRAT-BIZ
**Color:** Amarillo medio (#EAB308)

**Responsabilidades:**
- Pricing strategy
- GTM plan
- Partnerships
- Financial projections

**Estado actual:** Pendiente activación

---

## 📊 EQUIPO GESTIÓN (Rojos)

### 🔴 AGENTE 13: PROJECT MANAGER
**Emoji:** 📋
**ID:** GEST-PM
**Color:** Rojo oscuro (#B91C1C)

**Responsabilidades:**
- Task Master
- Sprint planning
- Roadmap
- Comunicación

**Estado actual:** 🟢 ACTIVO (gestión diaria)

---

### ❤️ AGENTE 14: DOCUMENTATION SPECIALIST
**Emoji:** 📚
**ID:** GEST-DOC
**Color:** Rojo medio (#EF4444)

**Responsabilidades:**
- Docs actualizadas
- Playbooks
- Knowledge base
- Onboarding

**Estado actual:** 🟢 ACTIVO (documentación proyecto)

---

## 🎭 SUB-AGENTES ESPECIALIZADOS

Cada agente principal puede tener sub-agentes temporales para tareas específicas:

### Ejemplo: WEB-DEV tiene sub-agentes

**🔷 WEB-DEV → 🔹 SUB-FORMS**
- Color: Azul claro tenue
- Tarea: Solo backend formularios
- Duración: Temporal (hasta completar)

**🔷 WEB-DEV → 🔹 SUB-PERF**
- Color: Azul claro tenue
- Tarea: Solo performance optimization
- Duración: Temporal

**Regla:** Sub-agentes usan una versión más clara del color del agente padre + emoji pequeño relacionado.

---

## 📋 FORMATO DE REPORTE DE AGENTE

Cuando un agente trabaja, reporta así:

```
🔵 [WEB-SEO] Keyword Research - 15 keywords identificadas
   ├─ ✅ Completado: Análisis competencia
   ├─ 🔄 En progreso: Long-tail keywords
   └─ ⏳ Pendiente: Schema markup

🟠 [TECH-N8N] MVP Chatbot WhatsApp
   ├─ ✅ Stack decidido: Botpress
   ├─ 🔄 Workflow en desarrollo (70%)
   └─ ⏳ Testing: Pendiente

👑 [ORCH-MAIN] Decisión estratégica
   ├─ Prioridad: MVP Chatbot antes que OCR
   ├─ Razón: ROI más alto (600% vs 800%) pero 1 día vs 3
   └─ Asignado a: TECH-N8N
```

---

## 🎯 SISTEMA DE ESTADOS

**🟢 ACTIVO** - Trabajando ahora
**🟡 PREPARACIÓN** - Listo para activar pronto
**⚪ PENDIENTE** - No activado aún
**🔴 BLOQUEADO** - Tiene impedimento
**✅ COMPLETADO** - Tarea finalizada

---

## 🔄 WORKFLOW ORQUESTADOR → AGENTE

### 1. Orquestador Asigna Tarea

```
👑 [ORCH-MAIN]
│
├─ Prioridad HOY: Backend formulario auditoría
├─ Asigna a: 🔷 WEB-DEV
├─ Deadline: 48h
└─ Recursos: Docs en /gaps-criticos-web.md
```

### 2. Agente Reporta Progreso

```
🔷 [WEB-DEV] Backend Formulario - Update
│
├─ Decisión: N8N webhook + Resend (€35/mes)
├─ Setup N8N: ✅ Completado
├─ Webhook endpoint: 🔄 Creando
├─ Testing: ⏳ Pendiente
└─ ETA: 2h para completar
```

### 3. Orquestador Valida

```
👑 [ORCH-MAIN] Review
│
├─ Backend formulario: ✅ Aprobado
├─ Próxima tarea WEB-DEV: Landing pages problemas
└─ Nuevo agente activado: 🟠 TECH-N8N (MVP Chatbot)
```

---

## 📊 DASHBOARD VISUAL (Notion Template)

```
┌─────────────────────────────────────────────────┐
│  👑 ORQUESTADOR - Nicolás Farchica             │
├─────────────────────────────────────────────────┤
│  🌐 EQUIPO WEB (4 agentes)                     │
│  🔵 SEO        ⚪ Pendiente                     │
│  💙 Copywriter ⚪ Pendiente                     │
│  🟦 UI/UX      ⚪ Pendiente                     │
│  🔷 Frontend   🟢 ACTIVO → Backend formulario  │
├─────────────────────────────────────────────────┤
│  📢 CONTENIDO (3 agentes)                      │
│  🟢 Strategist ⚪ Pendiente                     │
│  💚 Social     ⚪ Pendiente                     │
│  🟩 Email      ⚪ Pendiente                     │
├─────────────────────────────────────────────────┤
│  🔧 TÉCNICO (3 agentes)                        │
│  🟠 N8N        🟡 PREP → MVP Chatbot           │
│  🧡 Backend    ⚪ Pendiente                     │
│  🔶 QA         ⚪ Pendiente                     │
├─────────────────────────────────────────────────┤
│  🔬 INVESTIGACIÓN (2 agentes)                  │
│  🟡 Research   ⚪ Pendiente                     │
│  💛 Strategy   ⚪ Pendiente                     │
├─────────────────────────────────────────────────┤
│  📊 GESTIÓN (2 agentes)                        │
│  🔴 PM         🟢 ACTIVO → Coordinación        │
│  ❤️ Docs       🟢 ACTIVO → Documentación       │
└─────────────────────────────────────────────────┘
```

---

## 🚀 ACTIVACIÓN DE AGENTES (Plan Fases)

### Fase 1: MVP (Semana 1-2) - 4 Agentes Activos

```
👑 ORCH-MAIN     🟢 ACTIVO
🔷 WEB-DEV       🟢 ACTIVO (backend formulario)
🟠 TECH-N8N      🟢 ACTIVO (MVPs)
🔴 GEST-PM       🟢 ACTIVO (coordinación)
```

### Fase 2: Contenido (Semana 3-4) - +3 Agentes

```
💙 WEB-COPY      🟢 Activar (blog posts)
💚 CONT-SM       🟢 Activar (LinkedIn)
🟩 CONT-EMAIL    🟢 Activar (sequences)
```

### Fase 3: Growth (Mes 2) - +4 Agentes

```
🔵 WEB-SEO       🟢 Activar
🟦 WEB-UX        🟢 Activar
🧡 TECH-BACK     🟢 Activar
🔶 TECH-QA       🟢 Activar
```

### Fase 4: Scale (Mes 3+) - Completar Team

```
🟢 CONT-STRAT    🟢 Activar
🟡 STRAT-RES     🟢 Activar
💛 STRAT-BIZ     🟢 Activar
❤️ GEST-DOC      🟢 Mantener
```

---

## 🎨 CÓDIGO DE COLORES HEXADECIMAL

Para uso en Notion/herramientas:

| Agente | Color | Hex |
|--------|-------|-----|
| 👑 Orquestador | Purple | #9333EA |
| 🔵 SEO | Azul oscuro | #1E3A8A |
| 💙 Copywriter | Azul medio | #3B82F6 |
| 🟦 UI/UX | Azul claro | #60A5FA |
| 🔷 Frontend | Cyan | #06B6D4 |
| 🟢 Strategist | Verde oscuro | #047857 |
| 💚 Social | Verde medio | #10B981 |
| 🟩 Email | Verde claro | #34D399 |
| 🟠 N8N | Naranja oscuro | #EA580C |
| 🧡 Backend | Naranja medio | #F97316 |
| 🔶 QA | Naranja claro | #FB923C |
| 🟡 Research | Amarillo oscuro | #CA8A04 |
| 💛 Strategy | Amarillo medio | #EAB308 |
| 🔴 PM | Rojo oscuro | #B91C1C |
| ❤️ Docs | Rojo medio | #EF4444 |

---

## 📋 PRÓXIMA ACCIÓN

1. **Activar Agente 🔷 WEB-DEV** para backend formulario
2. **Orquestador 👑 asigna primera tarea**
3. **Agente reporta progreso** con formato color
4. **Sistema operativo**

---

**SISTEMA LISTO - Comenzar a trabajar con agentes**
