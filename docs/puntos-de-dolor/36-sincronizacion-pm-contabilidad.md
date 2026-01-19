# 🔄 Sincronización PM-Contabilidad (Doble Entrada)

**TIER**: 🚀 Alto Impacto | **Implementación**: 2-3 semanas | **Complejidad**: Media | **ROI**: ~800%

---

## 🎯 DESCRIPCIÓN DEL PROBLEMA

### El Dolor Diario
Las PYMES de construcción operan con una "pila tecnológica" fragmentada: un software para **Gestión de Proyectos** (Procore, BuilderTrend, Monday) y otro para **Contabilidad** (QuickBooks, Sage, Xero). Estos sistemas **no hablan el mismo idioma**, obligando a una doble entrada manual de datos.

### Manifestación Específica
- Factura de proveedor se ingresa en PM para que gerente de proyecto la apruebe
- Luego se re-ingresa manualmente en contabilidad para procesar el pago
- **Duplicación de esfuerzo** en cada transacción
- Riesgo de errores de digitación (pagar €10,000 en lugar de €1,000)
- Discrepancias entre lo que PM cree que ha gastado y lo que contabilidad registra
- **La gerencia "vuela a ciegas"** sobre rentabilidad real del proyecto

### Contexto en Construcción Modular
Con cientos de líneas de material, decenas de subcontratistas y órdenes de cambio frecuentes, la cantidad de transacciones es masiva. Sin sincronización automática, los datos financieros tienen 30+ días de retraso, haciendo imposible detectar sobrecostos a tiempo.

---

## 💰 IMPACTO CUANTIFICADO

### Costos Directos
- **Tiempo de doble entrada**: 15-20h/semana × €20/hora = €300-400/semana
- **Errores de digitación**: 2-5% de transacciones con errores
- **Costo de errores**: €500-5,000/mes (pagos incorrectos, reconciliaciones)
- **Decisiones tardías**: Sobrecostos detectados 30+ días tarde = sin tiempo de reacción

### El Problema de "Volar a Ciegas"

```
REALIDAD (Día 15 del mes):
┌────────────────────────────────────────┐
│ Proyecto García - Costos REALES       │
│ ──────────────────────────────────────│
│ Materiales: €52,000 (presupuesto €45k)│
│ MO Fábrica: €18,500 (presupuesto €15k)│
│ Transporte: €4,200 (presupuesto €3k)  │
│ ──────────────────────────────────────│
│ TOTAL: €74,700 (presupuesto €63k)     │
│ ⚠️ SOBRECOSTO: €11,700 (18.5%)        │
└────────────────────────────────────────┘

LO QUE VE GERENCIA (reporte fin de mes):
┌────────────────────────────────────────┐
│ Proyecto García - Costos REPORTADOS   │
│ ──────────────────────────────────────│
│ Materiales: €45,000 ✅                 │
│ MO Fábrica: €12,000 (falta ingresar)  │
│ Transporte: Pendiente                 │
│ ──────────────────────────────────────│
│ TOTAL: €57,000 (¡Parece bien!)        │
│ ❌ REALIDAD OCULTA: -€17,700          │
└────────────────────────────────────────┘
```

**PÉRDIDA POTENCIAL**: €20,000-50,000/año (errores + decisiones tardías)

---

## ⚙️ SOLUCIÓN TÉCNICA

### Stack Tecnológico
1. **N8N** - Puente de sincronización entre sistemas
2. **APIs de PM** (Monday, ClickUp, Procore)
3. **APIs de Contabilidad** (QuickBooks, Xero, Holded)
4. **Airtable** - Capa intermedia para mapeo de códigos
5. **Slack/WhatsApp** - Alertas de discrepancias

### Flujo de Sincronización Bidireccional

```
┌─────────────────────────────────────────────────────┐
│           ESPEJO FINANCIERO PM ↔ CONTABILIDAD       │
└─────────────────────────────────────────────────────┘

     ┌──────────────┐              ┌──────────────┐
     │   GESTIÓN    │              │ CONTABILIDAD │
     │  PROYECTOS   │              │              │
     │   (Monday)   │              │ (QuickBooks) │
     └──────┬───────┘              └──────┬───────┘
            │                             │
            │    ┌─────────────────┐      │
            │    │                 │      │
            ▼    │                 ▼      │
     ┌──────────────────────────────────────────┐
     │                  N8N                      │
     │                                          │
     │  ┌─────────────────────────────────────┐ │
     │  │       MAPEO DE CÓDIGOS              │ │
     │  │  Proyecto PM → Centro de Costo      │ │
     │  │  Proveedor PM → Proveedor Contab    │ │
     │  │  Categoría PM → Cuenta Contable     │ │
     │  └─────────────────────────────────────┘ │
     │                                          │
     └────────────────┬─────────────────────────┘
                      │
         ┌────────────┼────────────┐
         │            │            │
         ▼            ▼            ▼
    ┌─────────┐  ┌─────────┐  ┌─────────┐
    │FACTURAS │  │ PAGOS   │  │RECONCIL.│
    │ AUTO    │  │ AUTO    │  │ DIARIA  │
    │ SYNC    │  │ SYNC    │  │         │
    └─────────┘  └─────────┘  └─────────┘
```

### Sincronización de Facturas

```
┌─────────────────────────────────────────────────────┐
│           FLUJO: FACTURA PROVEEDOR                  │
└─────────────────────────────────────────────────────┘

1. RECEPCIÓN
   Factura llega por email
          │
          ▼
   N8N la procesa automáticamente
          │
          ▼
2. REGISTRO EN PM
   Se crea entrada en Monday/ClickUp
   - Proyecto: Casa García
   - Proveedor: Aceros Valencia
   - Monto: €8,500
   - Estado: Pendiente aprobación
          │
          ▼
3. APROBACIÓN
   PM recibe notificación
   Revisa y aprueba en la app
          │
          ▼
4. SINCRONIZACIÓN
   N8N detecta aprobación
          │
          ▼
   Crea automáticamente en QuickBooks:
   - Factura #FAC-2026-0127
   - Proveedor: Aceros Valencia SL
   - Cuenta: 600-Compras materiales
   - Centro costo: PRJ-GARCIA
   - Monto: €8,500
          │
          ▼
5. PAGO
   Contabilidad procesa pago
          │
          ▼
   N8N sincroniza estado a PM:
   "Factura PAGADA - 2026-01-19"
```

### Mapeo de Códigos

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TABLA DE MAPEO PM ↔ CONTABILIDAD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PROYECTOS
PM (Monday)          │ Contabilidad (QB)
─────────────────────┼───────────────────
Casa García          │ CC-2026-0127
Casa Martínez        │ CC-2026-0089
Promoción Norte      │ CC-2026-0056

CATEGORÍAS
PM (Monday)          │ Cuenta Contable
─────────────────────┼───────────────────
Materiales           │ 600 - Compras mat.
Mano de Obra         │ 640 - Sueldos
Transporte           │ 624 - Transportes
Subcontratas         │ 607 - Subcontrat.

PROVEEDORES
PM (Monday)          │ Contabilidad (QB)
─────────────────────┼───────────────────
Aceros Valencia      │ PROV-00127
TransModular SL      │ PROV-00089
ElectroInstal        │ PROV-00156

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### Dashboard de Rentabilidad en Tiempo Real

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DASHBOARD RENTABILIDAD - TIEMPO REAL
Actualizado: 2026-01-19 14:30
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PROYECTO CASA GARCÍA

📊 PRESUPUESTO vs REAL
┌─────────────────┬──────────┬──────────┬────────┐
│ Categoría       │ Presup.  │ Real     │ Var.   │
├─────────────────┼──────────┼──────────┼────────┤
│ Materiales      │ €45,000  │ €47,200  │ +4.9%  │
│ Mano de Obra    │ €15,000  │ €14,800  │ -1.3%  │
│ Transporte      │ €3,000   │ €3,200   │ +6.7%  │
│ Subcontratas    │ €8,000   │ €7,500   │ -6.3%  │
├─────────────────┼──────────┼──────────┼────────┤
│ TOTAL           │ €71,000  │ €72,700  │ +2.4%  │
└─────────────────┴──────────┴──────────┴────────┘

⚠️ ALERTAS
• Materiales: Sobrecosto €2,200 (panel extra)
  Recomendación: Revisar orden de cambio

📈 MARGEN PROYECTADO
Precio venta: €95,000
Costo actual: €72,700
Margen actual: 23.5% ✅ (objetivo: 20%)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## 📋 PLAN DE IMPLEMENTACIÓN

### Fase 1: Mapeo de Sistemas (Semana 1)
1. **Documentar estructura** de ambos sistemas
2. **Crear tabla de mapeo** proyectos ↔ centros de costo
3. **Mapear proveedores** entre sistemas
4. **Definir categorías** y cuentas contables

### Fase 2: Sincronización Básica (Semana 2)
1. **N8N workflow**: Facturas PM → Contabilidad
2. **Sincronización de estado** de pagos
3. **Alertas de discrepancias** automáticas
4. **Log de todas las sincronizaciones**

### Fase 3: Dashboard y Alertas (Semana 3)
1. **Dashboard de rentabilidad** en tiempo real
2. **Alertas de sobrecosto** por umbral (>5%)
3. **Reconciliación automática** semanal
4. **Reporte ejecutivo** semanal por proyecto

---

## 💡 CASOS DE USO REALES

### Antes
Viernes fin de mes: Gerente pide reporte de rentabilidad del Proyecto García. Contable comienza a cruzar datos: abre Monday, exporta a Excel, abre QuickBooks, exporta a otro Excel, intenta reconciliar. Encuentra 15 facturas en PM que no están en contabilidad, 3 pagos en contabilidad sin factura asociada. Pasa 6 horas reconciliando. El lunes entrega reporte con disclaimer: "Datos aproximados, pendiente de verificación".

### Después
Gerente abre dashboard a las 3pm del día 15. Ve en tiempo real: Proyecto García, costo actual €72,700, presupuesto €71,000, sobrecosto 2.4%. Alerta: "Materiales +4.9% - revisar orden de cambio #CO-015". El gerente llama al PM: "¿Qué pasó con ese panel extra?". Decisión tomada el mismo día, no 30 días después.

**Resultado**: Datos en tiempo real, cero reconciliaciones manuales, decisiones a tiempo.

---

## ⚠️ ERRORES COMUNES A EVITAR

### ❌ NO Hacer
1. **Sincronizar sin mapeo claro** → Errores de asignación
2. **Ignorar discrepancias** → Acumular problemas
3. **No tener log de sincronización** → Imposible debuggear
4. **Sincronización solo unidireccional** → Datos incompletos

### ✅ SÍ Hacer
1. **Mapeo exhaustivo** antes de automatizar
2. **Alertas de discrepancias** en tiempo real
3. **Reconciliación semanal** aunque sea automática
4. **Backup antes de sincronización** masiva inicial

---

## 📊 MÉTRICAS DE ÉXITO

| Métrica | Actual | Objetivo Mes 1 | Objetivo Mes 3 |
|---------|--------|----------------|----------------|
| **Tiempo doble entrada/semana** | 20h | 2h | 0h |
| **Errores de digitación** | 5% | 1% | 0% |
| **Retraso datos financieros** | 30 días | 7 días | Tiempo real |
| **Reconciliaciones manuales** | 8h/mes | 1h/mes | 0h |

---

## 💵 ROI CALCULADO

- **Inversión**: ~€2,500 (3 semanas configuración)
- **Ahorro anual**: €16,000 (tiempo) + €6,000 (errores evitados)
- **Payback**: ~2 meses
- **ROI**: ~**800%**

---

**Última actualización**: 2026-01-19
**Categoría**: Finanzas y Operaciones
**Dificultad**: ⭐⭐⭐ (3/5)
**ROI**: ⭐⭐⭐⭐⭐ (5/5)
