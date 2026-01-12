# 📊 Registro Consumo de Materiales Fin de Día

**TIER**: 🚀 Alto Impacto | **Implementación**: 2-3 semanas | **Complejidad**: Media | **ROI**: 510%

---

## 🎯 EL PROBLEMA

Imposible saber consumo real diario materiales → Admin estima "a ojo" basado en facturas mes pasado → Presupuesto obra descontrolado (consumo real 15-25% diferente vs estimado), descubren sobrecostos semana antes terminar obra cuando ya tarde corregir, imposible identificar desperdicios o hurtos pequeños sistemáticos.

**Impacto**: €6,250-9,300/mes sobrecostos no detectados + €2,000-4,000/mes desperdicios

---

## ⚙️ SOLUCIÓN

**Stack**: WhatsApp logging (€0) + OCR facturas (€15/mes) + Airtable (€50/mes) + Analytics IA (€30/mes)

### Logging Consumo Diario (2 min/día)

```
Encargado 6pm:
WhatsApp bot: "Consumo hoy?"

Responde:
"Cemento 18 sacos
Varilla 25 metros
Arena 1.5 m3"

Bot: "✅ Registrado

HOY vs PROMEDIO:
• Cemento: 18 vs 15 usual (+20%) ⚠️
  ¿Razón? [Más avance][Desperdicio][Otro]

• Varilla: 25 vs 24 usual (normal) ✓
• Arena: 1.5 vs 1.8 usual (bien) ✓

Presupuesto obra:
Consumo mes: 42% presupuesto
Avance obra: 38%
→ 4% sobre-consumo (monitorear)

[Ver detalle] [Reportar problema]"
```

### Analytics Automático

```
Dashboard semanal gerente:

OBRA POLANCO - Consumo Semana 1-7 Ene

🔴 ALERTAS:
• Cemento: +22% vs presupuestado
  Consumo: 126 sacos (presup: 105)
  Sobrecosto: €378
  Tendencia: ↗️ (revisar con encargado)

🟡 ATENCIÓN:
• Varilla: +8% vs presupuesto (tolerable)

🟢 OK:
• Arena, selladores, tornillería

📊 PROYECCIÓN FINAL:
Si tendencia continúa:
Presupuesto material: €52,000
Gasto real proyectado: €58,400 (+12%)
⚠️ Acción correctiva requerida YA
```

---

## 💡 CASOS REALES

**Caso 1: Detectó hurto sistemático**
Análisis 8 semanas mostró: "Tornillería desaparece 15-20% más rápido vs consumo lógico proyecto. Patrón: Faltantes viernes tarde." → Investigación → Empleado vendiendo material sobrante. Ahorro: €800/mes recuperado.

**Caso 2: Optimizó mezclas concreto**
IA detectó: "Consumo cemento 18% superior proyectos similares. Análisis: Mezcla ratio agua-cemento ineficiente." → Capacitación equipo → Reducción 12% consumo = €1,200/mes ahorro.

---

**Última actualización**: 2025-01-05
**Categoría**: Materiales e Inventario
**Dificultad**: ⭐⭐⭐ (3/5)
**ROI**: ⭐⭐⭐⭐⭐ (5/5)
