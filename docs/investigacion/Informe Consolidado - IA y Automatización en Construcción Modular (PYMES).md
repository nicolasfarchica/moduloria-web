# Informe Consolidado: IA y Automatización en Construcción Modular (PYMES)

Fecha: 2025-11-03
Autor: Consolidación de informes (Gemini, ChatGPT, Claude)

## Resumen Ejecutivo

Las PYMES de construcción modular presentan ineficiencias administrativas, retrabajos y descoordinación que afectan márgenes y plazos. La oportunidad está en automatizaciones específicas, de bajo coste y rápida implementación (2–8 semanas), orquestadas con n8n + APIs (GPT/OCR/WhatsApp/Calendar/Weather) y repositorios simples (Sheets/Airtable/Drive). El ROI típico se logra en 3–6 meses. Las áreas de mayor impacto son: presupuestos inteligentes, compliance/certificaciones/CAE, NCR y gestión de cambios, coordinación fábrica‑obra, documentación as‑built/Libro del Edificio, informes diarios/optimización de rutas y postventa/garantías.

Beneficios esperados:
- Reducción de sobrecostes por retrabajo hasta 20%.
- Evitar multas severas (hasta 819.780 €) y paralizaciones.
- Ahorro de 60–100 h/proyecto en documentación y 1–2 h/día por jefe de obra.
- Aumento de conversión comercial hasta 30% por presupuestos rápidos.
- Mejora de CSAT/NPS mediante postventa y comunicación proactiva.

---

## Matriz Comparativa por Tema e Informe

| Tema | Gemini | ChatGPT | Claude | Métricas/ROI clave |
|---|---|---|---|---|
| Presupuestos inteligentes | — | Automatización de plantillas y atención (WhatsApp/voz) | Configurador+GPT+Sheets, PDF y recálculo instantáneo | 2–5 días → horas; +30% conversión |
| Compliance/Certificaciones/CAE | Riesgo normativo y subcontratas; multas altas | Inventario, alertas 90/60/30, portal subcontratas, OCR | Dashboard, trazabilidad material→certificado | 470–680 h/año; evitar multas; ROI 3–4 sem |
| NCR / Calidad | Centralizar errores y cambios; reducir retrabajo | — | Captura+triaje IA; workflows y evidencia | −25% retrabajo; cierre más rápido |
| Gestión de cambios | Sistema centralizado de órdenes de cambio | — | Intake→aprobación→costeo→factura | 30–50% sobrecoste si tarde; recuperar € no facturados |
| Coordinación fábrica‑obra | Supervisión, planificación de cuadrillas y rutas | — | Sincronizar cronogramas, alertas clima/logística, dashboard | Evitar delays 20–30%; RFI $1.080 evitables |
| Documentación as‑built / Libro | — | Digitalización de papeleo; OCR fotos/albaranes | Recopilación continua, 1‑click Libro LOE | 75–100 h/proyecto ahorradas; cobro final antes |
| Informes diarios y rutas | Agente IA para reportes; optimización rutas | Captura por voz/WhatsApp; elimina doble entrada | — | 1–2 h/día jefe de obra; cuadrillas más productivas |
| Postventa / Garantías | Ticketing inteligente, portal cliente | — | Garantías multi‑plazo, validación automática, SLAs | TTR 24–48h; evitar reparaciones mal atribuidas |
| Gestión subcontratistas | Onboarding digital con IA‑OCR y validaciones | CAE automatizada y repositorio documental | — | −85% tiempo admin; cumplimiento auditado |
| Comunicación cliente | — | Atención proactiva en WhatsApp (plantillas y flujos) | Chatbot+updates semanales+escalado inteligente | −6–8 h/sem técnica; mayor satisfacción |

Notas: “—” indica cobertura indirecta o no prioritaria en ese informe.

---

## Roadmap de Implementación (6–8 meses)

- Fase 1 (Mes 1–2): Presupuestos inteligentes; comunicación proactiva a cliente; diarios de obra por voz/imagen→PDF.
- Fase 2 (Mes 3–4): NCR/calidad y gestión de cambios con aprobación y facturación; compliance/CAE con alertas y portal subcontratas.
- Fase 3 (Mes 5–6): Coordinación fábrica‑obra con sincronización de cronogramas, clima y logística; dashboard visual.
- Fase 4 (Mes 7–8): Libro del Edificio automatizado (recopilación continua) y garantías multi‑plazo con intake IA y validación automática.

Dependencias: catálogo de precios actualizado; calendario recursos y subcontratas centralizado; acceso a WhatsApp Business API; plantillas legales/comerciales.

---

## KPIs por Iniciativa

- Presupuestos: tiempo medio de emisión; tasa de conversión; precisión ±% vs. coste real.
- Compliance/CAE: % documentos vigentes; alertas atendidas a tiempo; multas evitadas; auditorías sin no‑conformidades.
- NCR/Cambios: nº NCR/mes; tiempo de cierre; € retrabajo; % cambios facturados.
- Coordinación: conflictos detectados a tiempo; días de delay evitados; coste RFI por proyecto.
- As‑built/Libro: horas hasta entrega; días hasta cobro final; % documentos faltantes.
- Diarios/rutas: h/día ahorradas; puntualidad; productividad de cuadrillas.
- Postventa/garantías: TTR/TTF; % correctas dentro de garantía; CSAT/NPS; recurrencia.

---

## Recomendaciones Prácticas

- Empezar con n8n + Google Sheets/Airtable + WhatsApp Business API; plantillas de mensajes y PDFs.
- Mantener UX cercana a canales existentes (WhatsApp/voz) para acelerar adopción.
- Definir ownership de datos y versionado (precios, plantillas, cronogramas).
- Añadir dashboards simples (Looker Studio/Metabase) conectados a la base central.

---

## Riesgos y Mitigaciones

- Adopción: formar con ejemplos reales; guías rápidas; plantillas pre‑aprobadas.
- Calidad de datos: gobierno de catálogo de precios y calendarios; validaciones automáticas en flujos.
- Privacidad/GDPR: minimizar datos personales; uso de regiones EU; control de acceso en Drive/Airtable.
- Integraciones: validar límites de WhatsApp API; fallback por email/SMS.

---

## Preguntas Abiertas

- Herramientas actuales (ERP, Drive/BIM, WhatsApp Business, CAE) y restricciones TI.
- Volúmenes: presupuestos/mes, NCR y cambios, tickets postventa.
- Certificaciones/subcontratas más frecuentes y plazos críticos.
- Disponibilidad de BIM/CAD para as‑built; datos de clima/logística.
- Preferencias de hosting (cloud vs. on‑prem) para n8n y datos sensibles.

---

## Fuentes y Atribución

- Gemini: gestión de subcontratistas y cumplimiento; multas hasta 819.780 €; reducción tiempo admin 85%; garantías 1/3/10 años; referencias (Wolly, PlanRadar, Zendesk, etc.).
- ChatGPT: digitalización de papeleo, captura por voz/WhatsApp; CAE con Nalanda; ROI en horas administrativas; flujos no‑code con n8n.
- Claude: 8 soluciones con costes/tiempos/ROI y priorización; casos (Artem/Serhii/Turner); métricas McKinsey/CII; coordinación avanzada.

Informes originales:
- IA Construcción_ Puntos Dolor PYMES gemini.md
- Pain-Points-Construccion-Modular-Soluciones-IA-ChatGPT.md
- Pain-Points-Construccion-Modular-Soluciones-IA-claude.md.   .md
