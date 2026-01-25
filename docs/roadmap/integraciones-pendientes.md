# Integraciones Pendientes - ModulorIA

## Objetivo
Centralizar todo el conocimiento del proyecto en Claude Code para toma de decisiones informada.

---

## Integraciones a Configurar

### 1. Google Analytics 4
- **Estado:** Pendiente
- **Prioridad:** Media (cuando haya tráfico real)
- **Qué permitiría:**
  - Ver visitantes, páginas vistas, tiempo en sitio
  - Fuentes de tráfico (de dónde vienen los visitantes)
  - Comportamiento de usuarios (qué páginas ven, dónde abandonan)
- **Requisitos técnicos:**
  - Crear proyecto en Google Cloud Console
  - Habilitar Google Analytics Data API
  - Generar credenciales de servicio
  - Configurar MCP o script de conexión

### 2. Google Search Console
- **Estado:** Pendiente
- **Prioridad:** Media-Alta (importante para SEO)
- **Qué permitiría:**
  - Ver qué keywords posicionan en Google
  - Detectar errores de indexación
  - Ver CTR y posiciones promedio
  - Identificar oportunidades de mejora SEO
- **Requisitos técnicos:**
  - Verificar propiedad del dominio (ya hecho)
  - Habilitar Search Console API
  - Configurar credenciales

### 3. Notion (Leads/CRM)
- **Estado:** ✅ Conectado
- **Funciona:** Puedo leer la base de datos de leads

---

## Cuándo implementar

| Integración | Trigger para implementar |
|-------------|-------------------------|
| Google Analytics | Cuando haya >100 visitas/semana |
| Search Console | Cuando haya >10 artículos de blog |
| Dashboard unificado | Cuando llegue el primer cliente |

---

## Visión: Claude como Copiloto

El objetivo es que Claude tenga acceso a:
- [x] Código del proyecto
- [x] Documentación
- [x] Tareas (TaskMaster)
- [x] Leads (Notion)
- [ ] Métricas web (GA)
- [ ] SEO (GSC)
- [ ] Redes sociales (futuro)

Con esto, Claude puede:
- Dar recomendaciones basadas en datos reales
- Identificar problemas antes de que sean críticos
- Sugerir prioridades basadas en métricas
- Ayudar en decisiones de negocio

---

*Creado: 25 Enero 2026*
*Última actualización: 25 Enero 2026*
