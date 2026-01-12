# ⚡ Sistema Prevención de Faltantes de Material

**TIER**: 🚀 Alto Impacto | **Implementación**: 2-3 semanas | **Complejidad**: Media | **ROI**: 580%

---

## 🎯 EL PROBLEMA

Obra para 4-8 horas porque faltó material crítico que nadie detectó a tiempo: tornillos especiales módulo, cable eléctrico calibre específico, sellador juntas. "Pánico faltantes" = orden urgente proveedor (sobreprecio 20-30%), alquiler herramienta sustituta, equipo 6-8 personas parado medio día facturando sin producir.

**Frecuencia**: 2-4 veces/mes
**Costo por incidente**: €1,200-3,000 (tiempo + urgencias + retrasos)
**TOTAL MENSUAL**: €5,000-20,000 pérdidas evitables

---

## ⚙️ SOLUCIÓN: Inventario Perpetuo + Predictivo

**Stack**: QR codes (€10) + Airtable (€50/mes) + WhatsApp bot (€0) + IA predictiva (€30/mes)

### Inventario Perpetuo Digital

```
CADA consumo material:
Operario: WhatsApp bot "Usé 12 tornillos M8"
Sistema: Stock 145 → 133 (update tiempo real)

CADA llegada material:
Foto albarán → OCR → Stock auto-actualizado

CADA fin día:
IA calcula consumo promedio:
• Semana pasada: 18 tornillos/día
• Hoy: 12 tornillos/día
• Stock actual: 133
• Predicción: Durará 7.4 días

Días < 3 → Alerta automática pedido
```

### IA Predictiva Avanzada

```python
# Con 3+ meses datos históricos

Sistema aprende:
- Fase cimentación: Cemento 25 sacos/día
- Fase montaje módulos: Cemento 8 sacos/día
- Fase acabados: Cemento 3 sacos/día

Hoy: Terminando cimentación, entrando montaje mañana
Stock: 80 sacos

IA predice:
"Consumo próximos 7 días: ~56 sacos
Stock suficiente ✓

PERO: En 10 días fase acabados requiere
selladores especiales (actualmente 0 stock)

⚠️ PEDIDO PROACTIVO SUGERIDO:
Sellador juntas × 15 tubos
Lead time proveedor: 7 días
→ Pedir HOY evita faltante día 17"
```

---

## 💡 CASOS REALES

**Caso 1: Evitó paro obra €8,000**
IA detectó 5 días antes: "Cables eléctrico calibre 12 AWG se agotarán jueves próxima semana. Proveedor habitual sin stock actualmente, lead time 10 días." → Pedido proveedor alternativo inmediato → Obra continuó sin interrupción.

**Caso 2: Reducción inventario inmovilizado**
Análisis IA mostró: "Sellador tipo B comprado 40 tubos enero, usado solo 8 en 3 meses. Típico uso: 3 tubos/mes. Sobra 32 tubos = €480 capital inmovilizado." → Ajuste pedidos futuros → Capital liberado €1,200/trimestre.

---

**Última actualización**: 2025-01-05
**Categoría**: Materiales e Inventario
**Dificultad**: ⭐⭐⭐ (3/5)
**ROI**: ⭐⭐⭐⭐⭐ (5/5)
