# 🗂️ CRM Centralizado Multicanal

**TIER**: 🚀 Alto Impacto | **Implementación**: 2-3 semanas | **Complejidad**: Media | **ROI**: ~600%

---

## 🎯 DESCRIPCIÓN DEL PROBLEMA

### El Dolor Diario
Las consultas y datos de potenciales clientes llegan por diversos canales (correo, formularios web, llamadas, WhatsApp, redes sociales) y **no existe un repositorio unificado**. Cada vendedor gestiona "a mano" sus leads: Excel, WhatsApp personal, tarjetas de visita, correos marcados con estrella.

### Manifestación Específica
- Cliente escribe por Instagram y luego llama → dos empleados lo atienden sin saber que es la misma persona
- Leads menos "ruidosos" se olvidan en la bandeja de entrada
- Un contacto puede estar registrado diferente en varias listas (Juan Pérez vs Juan P.)
- **41% de empresas construcción** no usan CRM
- **10-15% de leads** nunca se registran (quedan "en el aire")

### Contexto en Construcción Modular
Las constructoras modulares dependen de redes sociales, ferias y webs para generar leads. Esto implica **múltiples puntos de entrada**. Sin centralización, la empresa parece desorganizada ante un cliente omnicanal que pide info por Facebook y luego amplía por email.

---

## 💰 IMPACTO CUANTIFICADO

### Costos Directos
- **Tiempo buscando info**: 4 vendedores × 5-10h/semana = **30h/semana** = €2,400/mes
- **Leads olvidados/duplicados**: 5% de ventas perdidas = **€15,000/mes**
- **Datos inconsistentes**: Errores en contratos, comunicaciones fallidas

### Ejemplo Real
Una empresa modular descubrió que en 1 año habían acumulado >5,000 contactos entre ferias, web y WhatsApp, pero **~30% estaban duplicados o perdidos** en distintas listas. Tras centralizar, identificaron ~200 leads "olvidados" y reactivarlos, generando **3 ventas adicionales (~€45k)**.

**AHORRO POTENCIAL**: €9,500/mes (tiempo + oportunidades)

---

## ⚙️ SOLUCIÓN TÉCNICA

### Stack Tecnológico
1. **Airtable** (€0-20/mes) - CRM ligero central
2. **N8N** (€0-24/mes) - Orquestación multicanal
3. **APIs**: Gmail, WhatsApp Business, Facebook/Instagram
4. **OpenAI** (€20-50/mes) - Normalización y deduplicación

### Flujo de Trabajo Automatizado

```
┌─────────────┐  ┌─────────────┐  ┌─────────────┐
│  Formulario │  │   WhatsApp  │  │  Instagram  │
│     Web     │  │   Business  │  │  /Facebook  │
└──────┬──────┘  └──────┬──────┘  └──────┬──────┘
       │                │                │
       └────────────────┼────────────────┘
                        │
                        ▼
              ┌─────────────────┐
              │   N8N Webhook   │
              │  Unifica fuentes│
              └────────┬────────┘
                       │
                       ▼
              ┌─────────────────┐
              │   OpenAI API    │
              │ - Normaliza nombre
              │ - Detecta duplicados
              │ - Extrae datos clave
              └────────┬────────┘
                       │
            ┌──────────┴──────────┐
            │                     │
            ▼                     ▼
     ┌────────────┐        ┌────────────┐
     │  ¿Existe?  │   NO   │ Crear nuevo│
     │  Búsqueda  │───────▶│  registro  │
     │  por email/│        │ en Airtable│
     │  teléfono  │        └────────────┘
     └─────┬──────┘
           │ SÍ
           ▼
     ┌────────────┐
     │  Actualizar│
     │  registro  │
     │  existente │
     └────────────┘
                       │
                       ▼
              ┌─────────────────┐
              │   Notificación  │
              │   Slack/WhatsApp│
              │   #nuevos-leads │
              └─────────────────┘
```

### Campos del CRM Unificado

| Campo | Descripción | Auto-completado |
|-------|-------------|-----------------|
| **ID único** | Identificador | Sí |
| **Nombre completo** | Normalizado | IA |
| **Email** | Principal | Sí |
| **Teléfono** | Con prefijo país | Sí |
| **Fuentes** | Lista de canales de contacto | Sí |
| **Primera interacción** | Fecha y canal | Sí |
| **Última interacción** | Fecha y canal | Sí |
| **Estado** | Nuevo/Contactado/Propuesta/Ganado/Perdido | Manual |
| **Responsable** | Vendedor asignado | Manual/Auto |
| **Notas** | Historial conversaciones | IA resumen |
| **Valor potencial** | €€€ | Manual |

---

## 📋 PLAN DE IMPLEMENTACIÓN

### Fase 1: Setup Airtable (Semana 1)
1. **Crear base Airtable** con campos definidos
2. **Importar leads existentes** de Excel/hojas actuales
3. **Deduplicar manualmente** registros críticos
4. **Definir vistas**: Por estado, por vendedor, por fuente

### Fase 2: Conectar Canales (Semana 2)
1. **Formulario web** → Webhook → N8N → Airtable
2. **Gmail** → N8N → Parsear emails de contacto → Airtable
3. **WhatsApp Business** → API → N8N → Airtable
4. **Facebook/Instagram** → Lead Ads API → N8N → Airtable

### Fase 3: Inteligencia (Semana 3)
1. **Deduplicación automática** con OpenAI (comparar nombres similares)
2. **Notificaciones** por Slack/WhatsApp interno
3. **Dashboard semanal** de leads por fuente
4. **Capacitación equipo** (1 hora)

---

## 💡 CASOS DE USO REALES

### Antes
Lead A envía email a info@empresa.com y también escribe por Facebook Messenger. Sin sistema, el email lo ve Ana (lo anota en Excel local), el mensaje lo responde Jorge vía la página de Facebook. Dos personas diferentes terminan con los datos de A separados; Ana nunca supo del Messenger y Jorge desconocía el email previo con detalles importantes. A recibe respuestas incoherentes y percibe desorden, retirándose.

### Después
Lead A por email y Messenger se registran automáticamente en Airtable como un único lead (el sistema detectó el mismo nombre "Juan Perez" y unifica). Sale alerta: "Nuevo lead – Juan Perez – 2 canales: Email, Facebook". El jefe de ventas asigna a Ana. Cuando Jorge responde en Facebook, ve nota "Asignado a Ana" y evita duplicar gestión. Ana llama a Juan bien informada de ambas interacciones. El cliente recibe atención fluida y consistente.

---

## ⚠️ ERRORES COMUNES A EVITAR

### ❌ NO Hacer
1. **Importar datos sucios** → Limpiar antes de migrar
2. **No definir responsables** → Leads huérfanos
3. **Sobre-complicar el CRM** → Empezar simple, 10 campos máximo
4. **No capacitar al equipo** → Vuelven a Excel

### ✅ SÍ Hacer
1. **Piloto con 1 vendedor** primero
2. **Medir adopción** (¿están actualizando estados?)
3. **Revisar duplicados semanalmente** al inicio
4. **Celebrar quick wins** (primera venta rastreada end-to-end)

---

## 📊 MÉTRICAS DE ÉXITO

| Métrica | Actual | Objetivo Mes 1 | Objetivo Mes 3 |
|---------|--------|----------------|----------------|
| **Leads en CRM único** | 40% | 85% | 98% |
| **Tiempo buscando info** | 10h/sem | 3h/sem | 1h/sem |
| **Duplicados detectados** | 0% | 20% | 5% (residual) |
| **Visibilidad pipeline** | Baja | Alta | Total |

---

## 💵 ROI CALCULADO

- **Inversión**: ~€2,000 (3 semanas configuración)
- **Ahorro anual**: €24,000 (tiempo) + €90,000 (6 ventas recuperadas)
- **Payback**: 2-3 meses
- **ROI**: ~**600%**

---

**Última actualización**: 2026-01-19
**Categoría**: Ventas y CRM
**Dificultad**: ⭐⭐⭐ (3/5)
**ROI**: ⭐⭐⭐⭐⭐ (5/5)
