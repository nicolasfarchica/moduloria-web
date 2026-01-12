# 💰 Presupuestos Automáticos con IA

**TIER**: 🚀 Alto Impacto | **Implementación**: 2-3 semanas | **Complejidad**: Media | **ROI**: 480%

---

## 🎯 EL PROBLEMA

Gerente tarda 3-8 horas crear presupuesto construcción modular: revisar planos, calcular materiales, consultar precios proveedores actualizados, estimar mano obra, añadir márgenes, formatear documento presentable. Cliente urgente pide presupuesto "para mañana" → imposible → cliente va con competidor que responde en 24hrs.

**Señales**: 50% presupuestos entregados >5 días tarde, 30% errores cálculo (sub o sobre-estimación), gerente dedica 25% semana a presupuestos.

---

## 💰 IMPACTO

**Costos**:
- Tiempo gerente: 40 hrs/mes × €40/hora = **€1,600/mes**
- Oportunidades perdidas (respuesta lenta): 2-3 clientes/mes × €35K × 18% margen = **€12,600-18,900/mes** potencial
- Errores presupuesto: €800-2,000/mes (márgenes mal calculados)

**AHORRO CON IA**: €3,000-8,000/mes + captura 40% más clientes

---

## ⚙️ SOLUCIÓN

**Stack**: GPT-4 API (€40/mes) + Base precios Airtable (€20/mes) + Plantillas (€0) + N8N (€24/mes)

### Workflow

```
Cliente solicita presupuesto:
"Casa modular 150m², 3 habitaciones, Sevilla"

↓

GPT-4 + Base de datos:
1. Extrae requisitos (m², habitaciones, ubicación)
2. Busca proyectos similares históricos
3. Calcula materiales base (módulos, acabados)
4. Consulta precios actualizados proveedores
5. Estima mano obra (días × tarifa)
6. Aplica factor ubicación (+12% Sevilla vs Madrid)
7. Añade margen empresa (18%)
8. Genera documento PDF profesional

↓

Presupuesto listo: 8 minutos
vs. 5 horas manualmente
```

### Precisión

**Entrenamiento con 50+ presupuestos históricos**:
- Accuracy: 92-96% (vs presupuestos reales finales)
- Gerente revisa 10 min, ajusta si necesario
- Envía mismo día cliente

---

## 💡 CASOS REALES

**Caso 1: Convertir lead urgente**
Cliente WhatsApp viernes 3pm: "Presupuesto casa 120m² para lunes reunión banco."
Sistema → Presupuesto profesional enviado viernes 4pm.
Resultado: Cliente aprobó €220K proyecto. Competidores enviaron presupuesto martes (tarde).

**Caso 2: Optimización margen**
IA detectó: "Presupuesto original €180K con 15% margen. Análisis histórico similar: Riesgo sobrecostos 85%. Sugerencia: Aumentar a 22% margen o reducir alcance." Evitó proyecto €8K pérdida.

---

**Última actualización**: 2025-01-05
**Categoría**: Financiero y Facturación
**Dificultad**: ⭐⭐⭐ (3/5)
**ROI**: ⭐⭐⭐⭐ (4/5)
