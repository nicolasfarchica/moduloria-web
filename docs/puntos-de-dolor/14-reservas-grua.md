# 🏗️ Coordinación Inteligente de Grúa y Recursos Críticos

**TIER**: 🚀 Alto Impacto | **Implementación**: 1-2 semanas | **Complejidad**: Baja | **ROI**: 550%

---

## 🎯 DESCRIPCIÓN DEL PROBLEMA

### El Dolor Diario
Grúa reservada 9am para instalar módulos, llega → módulos no están listos (retraso fábrica 2hrs) → grúa parada facturando €150/hora sin trabajar → cuando módulos llegan, grúa debe irse a otro trabajo → reprogramar = €200 extra + 3 días espera. WhatsApp caótico entre encargado/grúa/fábrica/gerente intentando coordinar, nadie tiene visibilidad completa, decisiones reactive no proactive.

### Manifestación Específica Construcción Modular
- Grúa = Recurso más caro (€800-1,500/día) y escaso
- Requiere coordinación perfecta: Módulo listo + espacio despejado + equipo presente + clima OK
- Ventana temporal estrecha (2-4 horas típica)
- Cancelar <24hrs = Cobro 50-100% igual
- Compartida entre 3-5 obras empresa

---

## 💰 IMPACTO CUANTIFICADO

**Costos evitables (PYME 3-4 obras)**:
- Grúa parada sin trabajar: 4-6 hrs/mes × €150 = **€600-900/mes**
- Cancelaciones tardías (50% costo): 2/mes × €500 = **€1,000/mes**
- Reprogramaciones urgentes (+30%): €200 × 3 = **€600/mes**
- Retrasos obra por mala coordinación: **€1,000-3,000/mes**

**Oportunidad perdida**:
- Mejor uso grúa = 15% más eficiencia = **€500-1,500/mes**

**AHORRO CON COORDINACIÓN DIGITAL**: €3,200-9,600/mes

---

## ⚙️ SOLUCIÓN TÉCNICA

**Stack**: Airtable (€20/mes) + WhatsApp Bot (€0) + Google Calendar (€0) + N8N (€24/mes)

### Flujo Automatizado

```
DÍA -3: Módulos pedidos a fábrica
→ Sistema crea "slot tentativo" grúa

DÍA -2: Fábrica confirma "listos mañana 8am"
→ Sistema reserva grúa automático 10am

DÍA -1 (6pm): Confirmaciones automáticas
→ WhatsApp Fábrica: "Módulos listos mañana?"
→ WhatsApp Encargado: "Espacio despejado?"
→ WhatsApp Grúa: "Confirmado 10am?"

SI alguno responde NO:
→ Cancelación automática grúa
→ Reprogramación sin cargos

DÍA 0 (9am): Recordatorios finales
→ WhatsApp todos: "Grúa llega en 1 hora"
→ Clima check: Si lluvia prevista, alertar

DÍA 0 (10am): Grúa trabajando
→ Tracking tiempo real
→ Si demora >30min, alertar gerente
```

---

## 💡 CASOS REALES

**Caso 1: Evitó €1,200 pérdida**
Sistema detectó fábrica no tendría módulo listo → Canceló grúa 36hrs antes → Sin cargos. Antes: Grúa llegaba, esperaba 3hrs, cobraba €450 + reprogramación €300.

**Caso 2: Optimización multi-obra**
IA sugirió: "Grúa en Obra A termina 11am. Obra B necesita grúa 2pm. Mismo día = -30% descuento proveedor." Ahorro: €240/uso × 4 veces/mes = €960/mes.

---

**Última actualización**: 2025-01-05
**Categoría**: Coordinación Equipos
**Dificultad**: ⭐⭐ (2/5)
**ROI**: ⭐⭐⭐⭐⭐ (5/5)
