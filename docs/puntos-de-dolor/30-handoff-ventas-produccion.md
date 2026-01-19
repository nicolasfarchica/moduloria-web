# 🔄 Handoff Ventas-Producción

**TIER**: 🚀 Alto Impacto | **Implementación**: 2-3 semanas | **Complejidad**: Media | **ROI**: ~800%

---

## 🎯 DESCRIPCIÓN DEL PROBLEMA

### El Dolor Diario
El momento más crítico en el ciclo de vida de un proyecto modular es la transferencia del equipo de ventas al equipo de operaciones/producción. Aquí se produce la **mayor pérdida de información** y se siembran las semillas del retrabajo futuro.

### Manifestación Específica
- Ventas habla en "características y deseos del cliente"
- Producción habla en "códigos de parte, planos CAD, listas de corte"
- **Traducción manual** por Project Manager: lee contrato y notas para rellenar formularios
- Si una personalización no se transcribe → el módulo se fabrica estándar
- Información fragmentada: contrato en servidor legal, emails en bandeja del vendedor, planos en carpeta de diseño

### Contexto en Construcción Modular
Una empresa modular actúa como fábrica + logística + diseño + contratista. El flujo de información debe atravesar silos que tradicionalmente no se comunican. La brecha de alcance (Scope Gap) entre lo prometido y lo producido es donde se destruyen márgenes.

---

## 💰 IMPACTO CUANTIFICADO

### Costos Directos
- **Retrabajo por info perdida**: 5-10% de proyectos con errores = €5,000-20,000/proyecto
- **Tiempo PM traduciendo**: 4-8 horas/proyecto × €40/hora = €160-320/proyecto
- **Paradas de producción** por clarificaciones: 2-4 horas × €200/hora = €400-800/proyecto
- **Cambios tardíos**: Si el error se detecta después de fabricar, costo 10x mayor

### Ejemplo Real
Una constructora modular detectó que el **15% de sus módulos requerían modificaciones** post-fabricación porque especificaciones del cliente (como refuerzo de pared para TV montada) no llegaron a producción. Costo promedio de corrección: €2,000/módulo. Con 50 módulos/año: **€15,000 en retrabajos evitables**.

**PÉRDIDA POTENCIAL**: €20,000-50,000/año

---

## ⚙️ SOLUCIÓN TÉCNICA

### Stack Tecnológico
1. **N8N** - Orquestación del handoff
2. **Airtable** - Base de datos de proyectos
3. **OpenAI GPT-4** - Extracción y traducción de requerimientos
4. **Google Drive** - Carpetas estructuradas automáticas
5. **Slack/WhatsApp** - Notificaciones

### Flujo de Handoff Automatizado

```
┌─────────────────────────────────────────────────────┐
│              TRIGGER: Contrato Firmado              │
└─────────────────────────────────────────────────────┘
                          │
                          ▼
               ┌─────────────────┐
               │     N8N         │
               │  Detecta firma  │
               │  en Airtable    │
               └────────┬────────┘
                        │
         ┌──────────────┼──────────────┐
         │              │              │
         ▼              ▼              ▼
┌─────────────┐  ┌─────────────┐  ┌─────────────┐
│   CREAR     │  │  EXTRAER    │  │  NOTIFICAR  │
│  Proyecto   │  │    SCOPE    │  │   Equipos   │
│  en PM tool │  │  del contrato│ │             │
└──────┬──────┘  └──────┬──────┘  └──────┬──────┘
       │                │                │
       ▼                ▼                ▼
┌─────────────┐  ┌─────────────┐  ┌─────────────┐
│ClickUp/     │  │   GPT-4     │  │   Slack     │
│ Monday      │  │  Genera:    │  │  #nuevo-    │
│ Estructura  │  │ - Specs     │  │  proyecto   │
│ de proyecto │  │ - Checklist │  │             │
│ estándar    │  │ - Alertas   │  │  WhatsApp   │
│             │  │   especiales│  │  a PM       │
└──────┬──────┘  └──────┬──────┘  └─────────────┘
       │                │
       └────────┬───────┘
                │
                ▼
       ┌─────────────────┐
       │   CARPETA       │
       │   GOOGLE DRIVE  │
       │   Estructura:   │
       │   /Contrato     │
       │   /Planos       │
       │   /Especificaciones
       │   /Comunicaciones
       │   /Fotos        │
       └────────┬────────┘
                │
                ▼
       ┌─────────────────┐
       │   FICHA DE      │
       │   LANZAMIENTO   │
       │   Automática    │
       │   para Producción│
       └─────────────────┘
```

### Extracción Automática de Scope

```
PROMPT GPT-4:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Analiza este contrato de construcción modular y extrae:

1. ESPECIFICACIONES TÉCNICAS
   - Metros cuadrados
   - Número de módulos
   - Acabados seleccionados
   - Personalizaciones especiales

2. ALERTAS PARA PRODUCCIÓN
   - ¿Hay requisitos fuera de estándar?
   - ¿Refuerzos estructurales especiales?
   - ¿Instalaciones no típicas?

3. FECHAS CRÍTICAS
   - Fecha compromiso entrega
   - Hitos de pago
   - Ventana de instalación

4. NOTAS DEL CLIENTE
   - Preocupaciones mencionadas
   - Preferencias específicas
   - Contacto principal

Devuelve en formato estructurado para ficha de producción.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### Ficha de Lanzamiento Automática

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FICHA DE LANZAMIENTO - PROYECTO #2026-0127
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 DATOS GENERALES
Cliente: Familia García
Ubicación: Valencia
PM Asignado: [Auto o manual]
Fecha firma: 2026-01-19
Fecha entrega compromiso: 2026-05-15

📐 ESPECIFICACIONES
Modelo base: Casa Modular T3
M2 totales: 120m2
Módulos: 4 unidades
Acabados: Premium Plus

⚠️ PERSONALIZACIONES (ATENCIÓN PRODUCCIÓN)
□ Refuerzo pared salón para TV 75"
□ Ventana extra en habitación 3
□ Instalación split AA en todas las habitaciones
□ Suelo vinílico en lugar de cerámico

📅 HITOS
- Diseño final: 2026-02-01
- Inicio producción: 2026-02-15
- Fin producción: 2026-04-01
- Transporte: 2026-04-10
- Instalación: 2026-04-15-20
- Entrega: 2026-05-01

📁 DOCUMENTOS
[Link carpeta Drive del proyecto]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## 📋 PLAN DE IMPLEMENTACIÓN

### Fase 1: Estructura Base (Semana 1)
1. **Definir campos obligatorios** de ficha de lanzamiento
2. **Crear template carpeta** en Google Drive
3. **Configurar Airtable** con estados de proyecto
4. **Mapear flujo actual** ventas → producción

### Fase 2: Automatización (Semana 2)
1. **N8N workflow**: Detectar contrato firmado
2. **Crear proyecto** automático en PM tool
3. **Generar carpeta Drive** con estructura
4. **Notificaciones** a PM y producción

### Fase 3: Inteligencia (Semana 3)
1. **Integrar GPT-4** para extracción de scope
2. **Checklist automático** de personalizaciones
3. **Alertas especiales** para items no estándar
4. **Dashboard de proyectos** en curso

---

## 💡 CASOS DE USO REALES

### Antes
Vendedor cierra proyecto con varias personalizaciones (ventana extra, refuerzos, acabados especiales). Envía email largo a PM con "los detalles". PM lee entre 50 emails, transcribe a su Excel, olvida mencionar el refuerzo de TV. Producción fabrica módulo estándar. Al instalar, cliente pregunta "¿y el soporte para mi TV de 75 pulgadas?". Costo de corrección in-situ: €2,500 + cliente molesto.

### Después
Al firmarse contrato, N8N automáticamente:
1. Crea proyecto en Monday.com
2. Genera carpeta Drive con estructura
3. GPT-4 extrae personalizaciones y las lista como checklist
4. Alerta a producción: "⚠️ ATENCIÓN: Refuerzo TV pared salón"
5. PM recibe ficha completa, solo revisa y aprueba

Cliente recibe exactamente lo que se prometió. **Cero sorpresas**.

---

## ⚠️ ERRORES COMUNES A EVITAR

### ❌ NO Hacer
1. **Confiar en "ya se lo dije"** → Todo documentado
2. **Emails como fuente de verdad** → CRM/Sistema es la fuente
3. **Handoff verbal** → Siempre ficha escrita
4. **Asumir que producción "ya sabe"** → Explicitar todo

### ✅ SÍ Hacer
1. **Checklist de personalizaciones** visible para todos
2. **Reunión de kickoff** de 15 min con ficha en mano
3. **Foto/evidencia** de cada requerimiento especial
4. **Confirmación** de producción que recibió y entendió

---

## 📊 MÉTRICAS DE ÉXITO

| Métrica | Actual | Objetivo Mes 1 | Objetivo Mes 3 |
|---------|--------|----------------|----------------|
| **Proyectos con ficha completa** | 30% | 80% | 100% |
| **Errores por info perdida** | 15% | 5% | <2% |
| **Tiempo PM en handoff** | 8h | 2h | 30min |
| **Retrabajo post-producción** | €15k/año | €5k/año | <€2k/año |

---

## 💵 ROI CALCULADO

- **Inversión**: ~€2,500 (3 semanas configuración)
- **Ahorro anual**: €15,000 (retrabajo) + €5,000 (tiempo PM)
- **Payback**: ~3 meses
- **ROI**: ~**800%**

---

**Última actualización**: 2026-01-19
**Categoría**: Operaciones
**Dificultad**: ⭐⭐⭐ (3/5)
**ROI**: ⭐⭐⭐⭐⭐ (5/5)
