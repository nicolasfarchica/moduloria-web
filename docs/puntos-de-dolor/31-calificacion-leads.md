# 🎯 Calificación y Scoring de Leads

**TIER**: 🚀 Alto Impacto | **Implementación**: 2-3 semanas | **Complejidad**: Media | **ROI**: ~700%

---

## 🎯 DESCRIPCIÓN DEL PROBLEMA

### El Dolor Diario
Todos los leads se tratan igual, sin importar su potencial de conversión. El vendedor dedica el mismo tiempo a un curioso sin presupuesto que a un cliente listo para comprar. **60-80% del tiempo de ventas se pierde en "tire kickers"** (curiosos que nunca comprarán).

### Manifestación Específica
- Lead sin terreno recibe misma atención que lead con terreno + financiación
- No hay criterios claros de priorización
- Vendedores "sienten" quién es bueno, pero sin datos
- Se pierden leads calientes mientras atienden fríos
- **78% de los clientes eligen al primero que responde** → pero respondemos a todos igual

### Contexto en Construcción Modular
La construcción modular atrae muchos curiosos atraídos por la percepción (a menudo errónea) de que es "más barato". Estos inundan los canales de venta sin tener terreno, financiación ni viabilidad normativa. **Un estudio de zonificación manual cuesta €300+ en tiempo** → hacerlo para leads no cualificados es tirar dinero.

---

## 💰 IMPACTO CUANTIFICADO

### Costos Directos
- **Tiempo en leads no cualificados**: 60-80% del tiempo de vendedor = €4,000-6,000/mes desperdiciado
- **Oportunidades perdidas**: Leads calientes no priorizados = €15,000-30,000/mes potencial
- **Costo de cualificación manual**: €300+/lead en investigación de zonificación
- **Moral del equipo**: Vendedores frustrados por "perder tiempo"

### Estadísticas Clave
- Solo **25% de leads** están listos para comprar
- **50% de leads** nunca comprarán (sin importar el seguimiento)
- El **25% restante** necesita nurturing pero puede convertir

**AHORRO POTENCIAL**: €5,000-10,000/mes (eficiencia + ventas)

---

## ⚙️ SOLUCIÓN TÉCNICA

### Stack Tecnológico
1. **N8N** - Orquestación del scoring
2. **Airtable** - Base de datos de leads con score
3. **OpenAI GPT-4** - Análisis de conversaciones
4. **Typeform/Tally** - Formularios de pre-cualificación
5. **WhatsApp Bot** - Preguntas automáticas

### Sistema de Lead Scoring

```
┌─────────────────────────────────────────────────────┐
│                 LEAD SCORING ENGINE                 │
└─────────────────────────────────────────────────────┘

CRITERIO                           PUNTOS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TERRENO
├─ Tiene terreno propio            +30
├─ En proceso de compra            +15
└─ No tiene / buscando              +0

PRESUPUESTO
├─ Confirmado y disponible         +30
├─ Pre-aprobado financiación       +20
├─ "Aproximado" / aspiracional     +5
└─ No sabe / no dice                +0

TIMELINE
├─ Quiere empezar <3 meses         +20
├─ 3-6 meses                       +15
├─ 6-12 meses                      +10
└─ >12 meses / "algún día"          +0

ENGAGEMENT
├─ Respondió preguntas completo    +10
├─ Pidió reunión/llamada           +10
├─ Descargó catálogo               +5
├─ Solo visitó web                  +0

PERFIL
├─ Empresa/promotor                +15
├─ Particular con proyecto claro   +10
├─ Curioso general                  +0
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CLASIFICACIÓN:
🔥 HOT (70-100):    Atender en <1 hora
🟡 WARM (40-69):    Atender en <24 horas
🔵 COLD (20-39):    Nurturing automático
❄️ ICE (<20):       Solo contenido educativo
```

### Flujo de Pre-Cualificación Automático

```
┌─────────────────┐
│  Lead Entrante  │
│    (cualquier   │
│     canal)      │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Respuesta      │
│  Automática +   │
│  Link Formulario│
│  Cualificación  │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   FORMULARIO    │
│   5 preguntas:  │
│   1. ¿Terreno?  │
│   2. ¿Presupuesto?
│   3. ¿Timeline? │
│   4. ¿Tipo proyecto?
│   5. ¿Contacto? │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   N8N calcula   │
│     SCORE       │
└────────┬────────┘
         │
    ┌────┴────┐────────┐
    │         │        │
    ▼         ▼        ▼
┌───────┐ ┌───────┐ ┌───────┐
│  HOT  │ │ WARM  │ │ COLD  │
│ 70+   │ │ 40-69 │ │ <40   │
└───┬───┘ └───┬───┘ └───┬───┘
    │         │        │
    ▼         ▼        ▼
┌───────┐ ┌───────┐ ┌───────┐
│WhatsApp│ │ Email │ │Email  │
│inmediato│ │ 24h  │ │nurturing│
│a vendedor│ │     │ │mensual │
└─────────┘ └───────┘ └───────┘
```

### Formulario de Cualificación (5 preguntas)

```
FORMULARIO PRE-CUALIFICACIÓN MODULORIA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Para darte la mejor atención, necesitamos conocer
tu proyecto. Solo toma 2 minutos:

1. ¿Ya tienes terreno o solar? *
   ○ Sí, es mío
   ○ Estoy en proceso de compra
   ○ Todavía no, estoy buscando

2. ¿Cuál es tu presupuesto aproximado? *
   ○ <€100,000
   ○ €100,000 - €200,000
   ○ €200,000 - €400,000
   ○ >€400,000
   ○ Prefiero no decir

3. ¿Cuándo te gustaría comenzar el proyecto? *
   ○ Lo antes posible (próximos 3 meses)
   ○ En 3-6 meses
   ○ En 6-12 meses
   ○ Solo estoy explorando opciones

4. ¿Qué tipo de proyecto es? *
   ○ Vivienda unifamiliar
   ○ Casa de vacaciones / segunda residencia
   ○ Promoción (varias unidades)
   ○ Comercial / oficinas
   ○ Otro: _______

5. ¿Cómo prefieres que te contactemos? *
   ○ WhatsApp
   ○ Email
   ○ Llamada telefónica

[ENVIAR]
```

---

## 📋 PLAN DE IMPLEMENTACIÓN

### Fase 1: Definir Criterios (Semana 1)
1. **Validar scoring** con histórico de ventas cerradas
2. **Crear formulario** de cualificación
3. **Definir SLAs** por tipo de lead
4. **Configurar Airtable** con campo Score

### Fase 2: Automatización (Semana 2)
1. **N8N workflow**: Formulario → Score → Ruteo
2. **Integrar con respuesta automática** (#26)
3. **Notificaciones diferenciadas** por score
4. **Vista de priorización** para vendedores

### Fase 3: Optimización (Semana 3+)
1. **Medir conversión** por rango de score
2. **Ajustar pesos** según resultados reales
3. **A/B test** preguntas del formulario
4. **Feedback loop** con vendedores

---

## 💡 CASOS DE USO REALES

### Antes
Llegan 50 leads en una semana. Vendedor los atiende por orden de llegada. Dedica 2 horas a un curioso que "solo quería info general" mientras un cliente con terreno, presupuesto y urgencia espera 3 días por respuesta. Ese cliente ya avanzó con la competencia.

### Después
Los 50 leads completan formulario de cualificación:
- **5 leads HOT** (score 70+): WhatsApp inmediato al vendedor senior
- **15 leads WARM** (score 40-69): Email personalizado, cita en 24h
- **20 leads COLD** (score 20-39): Secuencia de nurturing automático
- **10 leads ICE** (score <20): Solo newsletter educativo

Vendedor atiende primero a los 5 HOT, cierra 2 ventas esa semana. Los WARM se trabajan sistemáticamente. Los COLD maduran solos con contenido.

**Resultado**: Mismos leads, **2x más conversiones**.

---

## ⚠️ ERRORES COMUNES A EVITAR

### ❌ NO Hacer
1. **Scoring demasiado complejo** → Máximo 5-7 criterios
2. **Ignorar leads fríos completamente** → Nurturing automático
3. **No validar con datos históricos** → Ajustar con ventas reales
4. **Preguntas invasivas en formulario** → Mantener simple

### ✅ SÍ Hacer
1. **Comunicar valor** al completar formulario ("Para darte mejor servicio")
2. **Revisar scores** semanalmente con equipo
3. **Actualizar score** según interacciones (engagement sube puntos)
4. **Dar opción "no sé"** en presupuesto (mejor que abandono)

---

## 📊 MÉTRICAS DE ÉXITO

| Métrica | Actual | Objetivo Mes 1 | Objetivo Mes 3 |
|---------|--------|----------------|----------------|
| **Leads cualificados** | 0% | 70% | 90% |
| **Tiempo en leads no cualificados** | 60% | 30% | 15% |
| **Tasa conversión HOT leads** | - | 20% | 30% |
| **Tiempo respuesta HOT** | 8h | <1h | <30min |

---

## 💵 ROI CALCULADO

- **Inversión**: ~€3,000 (3 semanas configuración)
- **Ahorro mensual**: €4,000 (tiempo eficiente) + €10,000 (más conversiones)
- **Payback**: ~2 meses
- **ROI**: ~**700%**

---

**Última actualización**: 2026-01-19
**Categoría**: Ventas y Comercial
**Dificultad**: ⭐⭐⭐ (3/5)
**ROI**: ⭐⭐⭐⭐⭐ (5/5)
