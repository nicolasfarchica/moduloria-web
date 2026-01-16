# 🚀 LINKEDIN MASTER MODULORIA - Sistema Multi-Agente

**Fecha creación**: 15 Enero 2026
**Versión**: 1.0
**Estado**: ✅ Operativo

---

## 📋 ÍNDICE

1. [¿Qué es LinkedIn Master?](#qué-es-linkedin-master)
2. [Arquitectura del Sistema](#arquitectura-del-sistema)
3. [Agentes Disponibles](#agentes-disponibles)
4. [Cómo Usar el Sistema](#cómo-usar-el-sistema)
5. [Comandos Rápidos](#comandos-rápidos)
6. [Flujo de Trabajo Típico](#flujo-de-trabajo-típico)
7. [Archivos y Estructura](#archivos-y-estructura)
8. [Mantenimiento y Actualizaciones](#mantenimiento-y-actualizaciones)
9. [Troubleshooting](#troubleshooting)

---

## 🎯 ¿Qué es LinkedIn Master?

**LinkedIn Master ModulorIA** es un sistema multi-agente completo para gestionar tu presencia en LinkedIn de forma profesional, consistente y efectiva.

### Reemplaza a:
- ❌ **Isabella** (agente simple anterior)

### Incluye:
- ✅ **1 Orquestador LinkedIn** (cerebro del sistema)
- ✅ **4 Sub-agentes especializados** (expertos en su área)
- ✅ **Memoria persistente** (evita repetir contenido)
- ✅ **Playbook LinkedIn 2025** (algoritmo optimizado)
- ✅ **Voice Document** (mantiene tu voz auténtica)

### Resultados Esperados:
- 📈 **Primeras leads inbound**: 30-60 días
- 💬 **35+ leads orgánicos/mes**: 3-4 meses
- 👑 **Autoridad establecida**: 12-18 meses
- 🎯 **Sistema sostenible**: 3 posts/semana sin burnout

---

## 🏗️ Arquitectura del Sistema

```
LINKEDIN MASTER MODULORIA (Orquestador)
│
├── 🎨 CAROUSEL CREATOR
│   └── Carruseles 8 slides para Gamma.app
│
├── 🎯 CONTENT STRATEGIST
│   └── Estrategia, pilares, calendarios 30-90 días
│
├── ✍️ COPYWRITING EXPERT
│   └── Posts optimizados, hooks, frameworks PAS/BAB
│
└── 💬 OUTBOUND SEQUENCER
    └── Mensajes LinkedIn DM, secuencias warm
```

### Archivos de Soporte:
```
📂 content_repository/
├── memory.json (Memoria del sistema)
├── linkedin_playbook.json (Algoritmo 2025, frameworks)
├── posts/ (Posts generados)
└── carousels/ (Carruseles generados)
```

---

## 👥 Agentes Disponibles

### 1. 🎯 LinkedIn Master (Orquestador)
**Archivo**: `.claude/agents/linkedin-master-moduloria.md`

**Rol**: Coordinador central del sistema LinkedIn

**Qué hace**:
- Decide qué sub-agente usar según la tarea
- Mantiene memoria de contenido creado
- Aplica tu Voice Document
- Coordina los 4 sub-agentes

**Cuándo usarlo**:
```
"Necesito contenido para esta semana"
"Dame ideas de posts sobre automatización"
"Crea una estrategia LinkedIn"
"/memoria" (ver historial)
"/analizar" (revisar métricas)
```

**Comandos principales**:
- `/estrategia` → Crear plan 90 días
- `/calendario` → Generar calendario semanal
- `/carrusel [tema]` → Crear carrusel
- `/post [tema]` → Crear post
- `/memoria` → Ver contenido previo
- `/analizar` → Analizar métricas

---

### 2. 🎨 Carousel Creator
**Archivo**: `.claude/agents/carousel-creator-moduloria.md`

**Rol**: Especialista en carruseles visuales

**Qué hace**:
- Crea carruseles de 8 slides
- Output listo para Gamma.app
- Aplica regla 7x7 (legibilidad mobile)
- Usa colores de marca ModulorIA

**Cuándo usarlo**:
```
"Crea un carrusel sobre Quick Wins"
"/carrusel ROI de IA en construcción"
"Diseña un carrusel del framework 3-Step"
```

**Output típico**:
- Markdown con 8 slides
- Instrucciones Gamma.app paso a paso
- Copy para post que acompaña carrusel
- Hashtags relevantes

---

### 3. 🎯 Content Strategist
**Archivo**: `.claude/agents/content-strategist-moduloria.md`

**Rol**: Estratega de contenido

**Qué hace**:
- Define 3-5 pilares de contenido
- Crea calendarios 30-90 días
- Planifica temas por objetivo
- Define KPIs y métricas

**Cuándo usarlo**:
```
"Necesito una estrategia LinkedIn"
"/pilares" (definir pilares)
"/calendario" (generar calendario mes)
"Plan de contenido 90 días"
```

**Output típico**:
- 3-5 pilares definidos
- Calendario 30-90 días detallado
- Temas específicos por día
- KPIs a trackear

---

### 4. ✍️ Copywriting Expert
**Archivo**: `.claude/agents/copywriting-expert-moduloria.md`

**Rol**: Especialista en copy LinkedIn

**Qué hace**:
- Escribe posts optimizados algoritmo 2025
- Aplica frameworks (PAS, BAB, Story)
- Genera hooks irresistibles
- Mantiene voz de Nicolás

**Cuándo usarlo**:
```
"Escribe un post sobre [tema]"
"/hook [tema]" (generar 10 hooks)
"/post caso de éxito OCR"
"Mejora este copy: [texto]"
```

**Output típico**:
- Copy completo (800-1,300 caracteres)
- Hook primera línea
- Bullets key points
- CTA claro
- Hashtags relevantes

---

### 5. 💬 Outbound Sequencer
**Archivo**: `.claude/agents/outbound-sequencer-moduloria.md`

**Rol**: Especialista en outbound LinkedIn

**Qué hace**:
- Crea secuencias de 4 mensajes DM
- Personaliza basado en investigación
- Warm-up estratégico (no spam)
- Tono consultor (no vendedor)

**Cuándo usarlo**:
```
"Crea secuencia para [prospecto]"
"/outbound director PYME construcción"
"Mensajes para prospectar [vertical]"
```

**Output típico**:
- 4 mensajes secuencia (14 días)
- Investigación previa del prospecto
- Personalización real
- Timing y frecuencia

---

## 🚀 Cómo Usar el Sistema

### Opción 1: Hablar con el Orquestador (Recomendado)

```
Tú → LinkedIn Master (orquestador)
     ↓
LinkedIn Master analiza y delega
     ↓
Sub-agente especializado ejecuta
     ↓
LinkedIn Master entrega resultado
```

**Ejemplo**:
```
Tú: "Necesito un carrusel sobre automatización de facturas"

LinkedIn Master: "Voy a crear un carrusel 8 slides optimizado"
  ↓ (delega a Carousel Creator)

Carousel Creator: [Genera carrusel completo]
  ↓ (devuelve a LinkedIn Master)

LinkedIn Master: [Entrega carrusel + instrucciones Gamma]
```

---

### Opción 2: Hablar Directamente con Sub-agente

```
Tú → @carousel-creator-moduloria [instrucciones]
     ↓
Carousel Creator ejecuta directamente
     ↓
Te entrega resultado
```

**Ejemplo**:
```
Tú: "@carousel-creator-moduloria crea un carrusel sobre Quick Wins"

Carousel Creator: [Genera carrusel completo directamente]
```

---

## ⚡ Comandos Rápidos

### Comandos Principales:

| Comando | Qué hace | Agente |
|---------|----------|--------|
| `/estrategia` | Crea/revisa estrategia contenido | ContentStrategist |
| `/calendario` | Genera calendario semanal/mensual | ContentStrategist |
| `/carrusel [tema]` | Crea carrusel 8 slides | CarouselCreator |
| `/post [tema]` | Crea post optimizado | CopywritingExpert |
| `/hook [tema]` | Genera 10 hooks variados | CopywritingExpert |
| `/outbound` | Secuencia mensajes LinkedIn | OutboundSequencer |
| `/memoria` | Ver resumen contenido creado | Orquestador |
| `/analizar` | Analizar métricas y mejoras | Orquestador |

### Comandos Avanzados:

| Comando | Qué hace |
|---------|----------|
| `/pilares` | Definir pilares de contenido |
| `/perfil` | Optimizar perfil LinkedIn |
| `/batch` | Crear 4 semanas de contenido |
| `/humanizar [texto]` | Reescribir para evitar detección IA |

---

## 🔄 Flujo de Trabajo Típico

### Semana 1: Estrategia Inicial

```
1. Tú: "/estrategia"
   ↓
2. ContentStrategist define:
   - 3-5 pilares contenido
   - Calendario 30 días
   - KPIs a trackear
   ↓
3. Revisas y apruebas estrategia
```

---

### Semanas 2-4: Creación de Contenido

#### Lunes: Post Thought Leadership
```
1. Tú: "/post opinión sobre IA en construcción"
   ↓
2. CopywritingExpert genera post completo
   ↓
3. Revisas, ajustas si necesario
   ↓
4. Publicas en LinkedIn
   ↓
5. LinkedIn Master registra en memoria
```

#### Miércoles: Carrusel Case Study
```
1. Tú: "/carrusel caso éxito chatbot WhatsApp"
   ↓
2. CarouselCreator genera 8 slides
   ↓
3. Copias a Gamma.app
   ↓
4. Ajustas colores marca
   ↓
5. Exportas PDF y publicas
```

#### Viernes: Post Quick Win
```
1. Tú: "/post tips automatización"
   ↓
2. CopywritingExpert genera post
   ↓
3. Publicas
```

---

### Mensual: Análisis y Ajuste

```
1. Tú: "/analizar"
   ↓
2. LinkedIn Master revisa:
   - Qué contenido funcionó mejor
   - Métricas vs benchmarks
   - Ajustes recomendados
   ↓
3. Ajustas estrategia según data
```

---

## 📂 Archivos y Estructura

### Ubicación Archivos:

```
ModulorIA/
├── .claude/agents/
│   ├── linkedin-master-moduloria.md ✅ Orquestador
│   ├── carousel-creator-moduloria.md ✅ Carruseles
│   ├── content-strategist-moduloria.md ✅ Estrategia
│   ├── copywriting-expert-moduloria.md ✅ Copy
│   └── outbound-sequencer-moduloria.md ✅ Outbound
│
├── content_repository/
│   ├── memory.json ✅ Memoria sistema
│   ├── linkedin_playbook.json ✅ Playbook 2025
│   ├── posts/ (posts generados)
│   └── carousels/ (carruseles generados)
│
└── docs/
    └── README-LINKEDIN-MASTER.md ✅ Este archivo
```

---

### memory.json (Memoria del Sistema)

**Qué contiene**:
- Tu perfil y Voice Document
- Historial de contenido creado
- Estrategia y pilares definidos
- Métricas de performance
- Topics cubiertos últimos 30 días

**Por qué importa**:
- Evita repetir temas
- Mantiene voz consistente
- Registra qué funciona
- Permite mejora continua

**Actualización**:
- Automática después de cada post/carrusel
- Revisar mensualmente

---

### linkedin_playbook.json (Algoritmo 2025)

**Qué contiene**:
- Algoritmo LinkedIn 2025 (Dwell Time, Golden Hour)
- Frameworks de copywriting (PAS, BAB, Story)
- 50+ hooks probados
- 30+ CTAs de alta conversión
- Benchmarks por etapa

**Por qué importa**:
- Agentes consultan esto para optimizar contenido
- Garantiza aplicación de mejores prácticas
- Mantiene contenido alineado con algoritmo

---

## 🔧 Mantenimiento y Actualizaciones

### Semanal:
- ✅ Revisar engagement posts publicados
- ✅ Responder comentarios/DMs
- ✅ Ajustar calendario según necesidad

### Mensual:
```
1. Revisar memory.json:
   - Actualizar métricas performance
   - Identificar topics más efectivos

2. Analizar data:
   - ¿Qué tipo contenido funcionó mejor?
   - ¿Qué pilares resonaron más?
   - ¿Qué generó más leads/DMs?

3. Ajustar estrategia:
   - Modificar % distribución pilares
   - Cambiar formatos si underperforming
   - Introducir nuevos temas
```

### Trimestral:
- ✅ Revisar y actualizar Voice Document
- ✅ Evaluar cumplimiento objetivos
- ✅ Ajustar benchmarks según crecimiento

---

## 🚨 Troubleshooting

### Problema 1: "El contenido suena genérico, no como yo"

**Solución**:
```
1. Revisar memory.json → voice_document
2. Agregar más características específicas tuyas
3. Incluir frases exactas que usas
4. Especificar frases que NUNCA usarías
5. Comando: "/voz" para recalibrar
```

---

### Problema 2: "Está repitiendo temas"

**Solución**:
```
1. Revisar memory.json → topics_covered_last_30_days
2. Verificar que se esté actualizando post-publicación
3. Pedir temas específicos diferentes
4. Comando: "/memoria" para ver historial
```

---

### Problema 3: "Engagement bajo (<2%)"

**Solución**:
```
1. Revisar si hooks son específicos (no genéricos)
2. Aumentar % Quick Wins (valor accionable)
3. Más casos de éxito con números
4. CTAs más claros
5. Publicar en horarios óptimos (Mar-Jue 9-11am)
6. Comando: "/analizar" para diagnóstico
```

---

### Problema 4: "No sé qué contenido crear"

**Solución**:
```
1. Comando: "/calendario"
   → Te da temas para toda la semana

2. Comando: "/pilares"
   → Revisa pilares definidos

3. Consultar linkedin_playbook.json
   → Lista de evergreen topics
```

---

### Problema 5: "Necesito contenido urgente"

**Solución**:
```
1. Comando: "/batch"
   → Crea 4 semanas de contenido

2. Comando: "/post [tema quick win]"
   → Post listo en 2 minutos

3. Usa templates del playbook
   → Listicle topics (5 procesos que...)
```

---

## 📊 Benchmarks y Expectativas

### Mes 1-3 (Construcción):
```
Objetivo: Establecer presencia
Contenido: 70% Educación + Quick Wins

Métricas:
- Impresiones/post: 500 → 3K
- Engagement rate: 2% → 6%
- Seguidores: +50-100/mes
- DMs: 0-2 → 4-8/mes
```

### Mes 4-6 (Pipeline):
```
Objetivo: Leads inbound
Contenido: 40% Quick Wins + 40% Casos éxito

Métricas:
- Impresiones/post: 5K → 15K
- DMs inbound: 8-25/mes
- Meetings: 2-8/mes
- Leads calificados: 10-35/mes
```

### Mes 7-12 (Autoridad):
```
Objetivo: Referente reconocido
Contenido: 30% Thought Leadership + 30% Casos

Métricas:
- Impresiones/post: 10K-30K
- Leads calificados: 35-70/mes
- Reconocimiento: Menciones, invitaciones
```

---

## 🎯 Checklist Primera Sesión

Cuando uses el sistema por primera vez:

- [ ] Leer este README completo
- [ ] Comando: `/estrategia` (definir pilares y calendario)
- [ ] Revisar memory.json (verificar tu perfil está correcto)
- [ ] Comando: `/calendario` (obtener temas semana 1)
- [ ] Crear primer post: `/post [tema del calendario]`
- [ ] Publicar en LinkedIn (horario óptimo)
- [ ] Verificar que memory.json se actualizó

---

## 📞 Soporte

Si tienes dudas sobre el sistema:

1. **Consulta este README** (90% de dudas resueltas aquí)
2. **Comando `/ayuda`** dentro del sistema
3. **Revisa memory.json y playbook.json** (contexto completo)

---

## 🎓 Recursos Adicionales

### Archivos Relacionados:
- [PRD Lanzamiento ModulorIA](../.taskmaster/docs/prd-lanzamiento-moduloria.md)
- [Propuesta de Valor](../docs/estrategia/Propuesta-Valor-Elevator-Pitch.md)
- [Arquetipos Cliente](../docs/estrategia/Arquetipos-Cliente.md)
- [Tono de Voz](../docs/estrategia/Tono-de-Voz-Personalidad-Marca.md)

### Herramientas Externas:
- **Gamma.app**: https://gamma.app (carruseles visuales)
- **LinkedIn Analytics**: Panel nativo LinkedIn
- **MXToolbox**: Verificar DNS (si usas email corporativo)

---

## 📝 Changelog

### v1.0 (15 Enero 2026)
- ✅ Sistema LinkedIn Master creado
- ✅ 4 sub-agentes especializados implementados
- ✅ Memoria y playbook inicializados
- ✅ Documentación completa creada
- ✅ Isabella reemplazada por sistema completo

---

**Última actualización**: 15 Enero 2026
**Próxima revisión**: 15 Febrero 2026

---

*LinkedIn Master ModulorIA v1.0 - Sistema Multi-Agente para Construcción Modular + IA*
*Creado con ❤️ para transformar tu presencia LinkedIn*
