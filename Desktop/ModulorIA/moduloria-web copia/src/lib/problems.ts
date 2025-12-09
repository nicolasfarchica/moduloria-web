import Link from 'next/link';
import { notFound } from 'next/navigation';

// Types
export type ProblemTier = 'quick-wins' | 'high-impact' | 'transformacional';

export interface Problem {
  slug: string;
  tier: ProblemTier;
  title: string;
  subtitle: string;
  roi: string;
  implementation: string;
  savings: string;
  icon: string;
  // Extended fields for individual pages
  longDescription: string;
  symptoms: string[];
  consequences: string[];
  solution: string;
  technology: string[];
  caseStudy: {
    company: string;
    employees: number;
    before: string;
    after: string;
    roi: string;
    timeToValue: string;
  };
  faq: Array<{
    question: string;
    answer: string;
  }>;
}

// All 25 problems data
export const ALL_PROBLEMS: Problem[] = [
  {
    slug: 'ocr-facturas',
    tier: 'quick-wins',
    title: 'OCR Facturas Automatizado',
    subtitle: 'Extracción automática de datos de facturas PDF',
    roi: '2 semanas',
    implementation: '3-5 días',
    savings: '€8K-€18K/año',
    icon: '📄',
    longDescription:
      'El procesamiento manual de facturas PDF consume entre 5-15 minutos por factura. Con OCR + IA, extraes automáticamente proveedor, importe, fecha, líneas de detalle y lo cargas directamente en tu sistema ERP/contable sin intervención humana.',
    symptoms: [
      'Empleados teclean datos de facturas PDF manualmente a Excel/ERP',
      'Errores frecuentes en importes, fechas o códigos de proveedor',
      'Retrasos en pagos porque las facturas se acumulan sin procesar',
      'Tiempo desperdiciado validando datos cargados manualmente',
    ],
    consequences: [
      'Pérdida de descuentos por pronto pago (2-5% del importe)',
      '€8K-€18K/año en costos de personal dedicado a data entry',
      'Errores en contabilidad que generan rectificaciones',
      'Proveedores molestos por retrasos en pagos',
    ],
    solution:
      'Implementamos OCR con IA (Claude/GPT-4) que lee PDFs, extrae todos los campos clave, valida contra tu base de datos de proveedores, y carga automáticamente en tu ERP (SAP, Sage, Excel, etc.). El sistema aprende de tus correcciones manuales.',
    technology: ['Claude Sonnet 3.5', 'n8n workflows', 'Webhook triggers', 'API ERP integration'],
    caseStudy: {
      company: 'Empresa modular 15 empleados (Barcelona)',
      employees: 15,
      before: '120 facturas/mes procesadas manualmente. 12 min/factura = 24h/mes de trabajo.',
      after: 'OCR procesa 95% automáticamente. Solo 6h/mes para validar excepciones.',
      roi: '€18K ahorro anual. ROI en 2 semanas.',
      timeToValue: '3 días desde kick-off a go-live',
    },
    faq: [
      {
        question: '¿Funciona con facturas escaneadas (no digitales)?',
        answer:
          'Sí. El OCR funciona tanto con PDFs nativos como con escaneos. La precisión con escaneos de calidad media es ~92%. Facturas mal escaneadas requieren validación manual.',
      },
      {
        question: '¿Qué pasa si el OCR se equivoca?',
        answer:
          'El sistema marca automáticamente campos con baja confianza para revisión humana. Puedes corregir manualmente y el sistema aprende de tus correcciones (machine learning).',
      },
      {
        question: '¿Se integra con mi ERP actual?',
        answer:
          'Sí. Hemos integrado con SAP, Sage, Holded, A3, y ERPs custom. Si tu ERP tiene API o permite importar Excel/CSV, es integrable.',
      },
      {
        question: '¿Cuánto tarda la implementación?',
        answer:
          '3-5 días laborables desde kick-off: 1 día configuración, 1 día integración ERP, 1 día pruebas, 1-2 días ajustes. Go-live en menos de 1 semana.',
      },
    ],
  },
  {
    slug: 'emails-proyecto-automaticos',
    tier: 'quick-wins',
    title: 'Emails de Proyecto Automáticos',
    subtitle: 'Notificaciones y actualizaciones sin intervención manual',
    roi: '1-3 semanas',
    implementation: '2-4 días',
    savings: '€6K-€12K/año',
    icon: '📧',
    longDescription:
      'Los emails manuales de seguimiento de proyectos (cambios de fase, retrasos, aprobaciones pendientes) consumen 10-20 minutos diarios por PM. Con automatización, el sistema detecta eventos en tu software de gestión y envía emails personalizados automáticamente.',
    symptoms: [
      'PMs escriben el mismo tipo de email 10+ veces al día',
      'Clientes no reciben actualizaciones oportunas de sus proyectos',
      'Plantillas de email en Word/Outlook que se copian/pegan manualmente',
      'Información desactualizada en emails porque se envían tarde',
    ],
    consequences: [
      '€6K-€12K/año en tiempo de PMs redactando emails repetitivos',
      'Clientes insatisfechos por falta de comunicación proactiva',
      'Errores en emails (fechas, nombres, datos del proyecto) por copy/paste',
      'Retrasos en aprobaciones porque no se notifica a tiempo',
    ],
    solution:
      'Implementamos workflows que detectan eventos en tu software de proyectos (cambio de fase, retraso, hito cumplido) y envían emails personalizados automáticamente con datos actualizados en tiempo real. El PM solo interviene para casos especiales.',
    technology: ['n8n workflows', 'Gmail/Outlook API', 'Software de gestión hooks', 'Templates dinámicos'],
    caseStudy: {
      company: 'Empresa modular 40 empleados (Madrid)',
      employees: 40,
      before: '5 PMs enviaban 50 emails/día manualmente. 15 min/email = 62.5h/mes.',
      after: '95% de emails automáticos. PMs solo revisan excepciones. 8h/mes.',
      roi: '€12K ahorro anual. ROI en 3 semanas.',
      timeToValue: '4 días desde configuración a go-live',
    },
    faq: [
      {
        question: '¿Los emails automáticos parecen "robóticos"?',
        answer:
          'No. Usamos templates personalizables con datos dinámicos (nombre del cliente, proyecto específico, fechas actualizadas). El tono es profesional y personalizado.',
      },
      {
        question: '¿Puedo revisar emails antes de que se envíen?',
        answer:
          'Sí. Puedes configurar aprobación manual para ciertos tipos de email (ej: notificaciones de retraso). El resto se envía automáticamente.',
      },
      {
        question: '¿Se integra con nuestro software de gestión de proyectos?',
        answer:
          'Sí. Hemos integrado con Monday, Trello, Asana, software custom, y hasta Excel compartido en SharePoint/Drive.',
      },
      {
        question: '¿Qué pasa si hay un error en el email automático?',
        answer:
          'Configuramos logs detallados y notificaciones de error. Si el sistema detecta datos faltantes/incorrectos, no envía el email y te notifica para intervención manual.',
      },
    ],
  },
  {
    slug: 'validacion-documentos-ia',
    tier: 'quick-wins',
    title: 'Validación de Documentos con IA',
    subtitle: 'Revisión automática de planos, permisos y certificaciones',
    roi: '3 semanas',
    implementation: '5-7 días',
    savings: '€10K-€25K/año',
    icon: '✅',
    longDescription:
      'La revisión manual de planos, permisos municipales y certificaciones consume 1-3 horas por proyecto. La IA puede detectar errores, inconsistencias y documentos faltantes en segundos, dejando solo la validación final al humano.',
    symptoms: [
      'Técnicos revisan planos línea por línea buscando inconsistencias',
      'Errores descubiertos tarde (en fase de construcción) porque la revisión fue superficial',
      'Documentos faltantes no detectados hasta que el cliente los solicita',
      'Checklist manual de 50+ items por proyecto',
    ],
    consequences: [
      '€10K-€25K/año en tiempo de técnicos en revisión manual',
      'Retrasos en proyectos por errores descubiertos tarde',
      'Penalizaciones contractuales por incumplimiento de normativa',
      'Reputación dañada por proyectos con defectos no detectados',
    ],
    solution:
      'Implementamos IA (GPT-4 Vision + Claude) que analiza PDFs de planos, permisos y certificados, detecta inconsistencias (medidas, normativa, documentos faltantes), y genera un reporte de validación. El técnico solo revisa el reporte y valida manualmente casos críticos.',
    technology: ['GPT-4 Vision', 'Claude 3 Opus', 'PDF parsing', 'Checklist automation'],
    caseStudy: {
      company: 'Empresa modular 25 empleados (Valencia)',
      employees: 25,
      before: 'Técnico senior dedicaba 3h por proyecto a validación documental. 20 proyectos/mes = 60h.',
      after: 'IA procesa 80% de validación. Técnico solo valida 30 min/proyecto. 10h/mes.',
      roi: '€22K ahorro anual. ROI en 3 semanas.',
      timeToValue: '7 días desde configuración a go-live',
    },
    faq: [
      {
        question: '¿La IA puede reemplazar completamente al técnico?',
        answer:
          'No. La IA detecta errores obvios y acelera la revisión, pero el técnico debe validar el reporte final y tomar decisiones sobre casos ambiguos.',
      },
      {
        question: '¿Funciona con planos en AutoCAD/Revit?',
        answer:
          'Sí. Exportamos a PDF y la IA analiza visualmente. También podemos integrar con APIs de AutoCAD/Revit si tu equipo las usa.',
      },
      {
        question: '¿Qué pasa si la IA comete un error?',
        answer:
          'El técnico siempre revisa el reporte de la IA antes de aprobar. La IA es una herramienta de aceleración, no de reemplazo total.',
      },
      {
        question: '¿Se adapta a normativas específicas de mi región?',
        answer:
          'Sí. Entrenamos la IA con la normativa específica de tu región (CTE, normativa autonómica, etc.) durante la implementación.',
      },
    ],
  },
  {
    slug: 'sync-erp-crm',
    tier: 'quick-wins',
    title: 'Sincronización ERP ↔ CRM Automática',
    subtitle: 'Datos actualizados en tiempo real sin doble entrada',
    roi: '2 semanas',
    implementation: '4-6 días',
    savings: '€9K-€20K/año',
    icon: '🔄',
    longDescription:
      'La entrada manual de datos duplicados en ERP y CRM (clientes, proyectos, facturas) consume 1-2 horas diarias. Con sincronización automática, los datos fluyen entre sistemas sin intervención humana.',
    symptoms: [
      'Empleados teclean los mismos datos en ERP y CRM manualmente',
      'Datos desactualizados porque alguien olvidó actualizar uno de los sistemas',
      'Conflictos de información entre departamentos (ventas vs. administración)',
      'Reportes incorrectos porque los datos no coinciden',
    ],
    consequences: [
      '€9K-€20K/año en tiempo de data entry duplicado',
      'Decisiones basadas en datos incorrectos/desactualizados',
      'Clientes reciben información contradictoria de diferentes departamentos',
      'Frustración del equipo por trabajo manual repetitivo',
    ],
    solution:
      'Implementamos sincronización bidireccional automática entre tu ERP y CRM. Cuando creas un cliente en CRM, se crea automáticamente en ERP. Cuando se factura en ERP, se actualiza el estado en CRM. Los datos siempre coinciden.',
    technology: ['n8n workflows', 'API ERP', 'API CRM', 'Webhooks bidireccionales'],
    caseStudy: {
      company: 'Empresa modular 30 empleados (Bilbao)',
      employees: 30,
      before: '4 empleados dedicaban 1.5h/día a sincronizar ERP y CRM manualmente. 120h/mes.',
      after: 'Sincronización automática en tiempo real. 0h de intervención manual salvo excepciones.',
      roi: '€18K ahorro anual. ROI en 2 semanas.',
      timeToValue: '6 días desde configuración a go-live',
    },
    faq: [
      {
        question: '¿Qué pasa si hay un conflicto de datos entre ERP y CRM?',
        answer:
          'El sistema detecta conflictos automáticamente y notifica al responsable para resolución manual. Puedes configurar reglas de prioridad (ej: ERP siempre gana en datos financieros).',
      },
      {
        question: '¿Se sincroniza todo o solo ciertos campos?',
        answer:
          'Tú decides. Podemos sincronizar solo campos clave (nombre, email, estado) o todo el registro completo. Lo configuramos según tus necesidades.',
      },
      {
        question: '¿Funciona con cualquier ERP/CRM?',
        answer:
          'Sí, si tienen API o permiten integración vía webhook/Zapier. Hemos integrado SAP, Sage, Salesforce, HubSpot, Pipedrive, y sistemas custom.',
      },
      {
        question: '¿Es reversible si algo sale mal?',
        answer:
          'Sí. Configuramos backups automáticos antes de cada sincronización. Si hay un error crítico, podemos revertir en minutos.',
      },
    ],
  },
  {
    slug: 'reportes-kpi-tiempo-real',
    tier: 'high-impact',
    title: 'Reportes KPI en Tiempo Real',
    subtitle: 'Dashboards automáticos con datos actualizados al minuto',
    roi: '4 semanas',
    implementation: '1-2 semanas',
    savings: '€15K-€35K/año',
    icon: '📊',
    longDescription:
      'Los reportes manuales de KPIs (facturación, margen, proyectos en riesgo) consumen 5-10 horas semanales. Con dashboards automáticos, los datos se actualizan en tiempo real desde múltiples fuentes (ERP, CRM, gestión de proyectos).',
    symptoms: [
      'Reportes semanales/mensuales creados manualmente en Excel',
      'Datos desactualizados porque el reporte se hizo hace 3 días',
      'Decisiones basadas en información atrasada',
      'Diferentes versiones de reportes circulando porque alguien no actualizó',
    ],
    consequences: [
      '€15K-€35K/año en tiempo de managers creando reportes manuales',
      'Decisiones estratégicas basadas en datos obsoletos',
      'Problemas detectados tarde (ej: proyecto en riesgo descubierto 2 semanas tarde)',
      'Falta de visibilidad ejecutiva en tiempo real',
    ],
    solution:
      'Implementamos dashboards automáticos (Power BI, Looker, o custom) que se alimentan en tiempo real de ERP, CRM, y software de gestión. KPIs clave (facturación, margen, pipeline, riesgos) siempre actualizados. Sin Excel manual.',
    technology: ['Power BI', 'n8n ETL', 'API integrations', 'SQL databases'],
    caseStudy: {
      company: 'Empresa modular 50 empleados (Sevilla)',
      employees: 50,
      before: 'CFO dedicaba 8h/semana a reportes manuales. Director Operaciones otras 5h. 52h/mes total.',
      after: 'Dashboards automáticos. 0h en creación manual. Solo 2h/mes revisando excepciones.',
      roi: '€28K ahorro anual. ROI en 4 semanas.',
      timeToValue: '2 semanas desde kick-off a go-live',
    },
    faq: [
      {
        question: '¿Necesito Power BI/Tableau o puedo usar Excel?',
        answer:
          'Puedes usar Excel si prefieres. Podemos automatizar la generación de Excel con datos actualizados diariamente. Power BI es mejor para visualizaciones interactivas.',
      },
      {
        question: '¿Los datos se actualizan realmente en tiempo real?',
        answer:
          'Sí. Configuramos sincronización cada 15-60 minutos según tus necesidades. Para KPIs críticos podemos hacerlo cada 5 minutos.',
      },
      {
        question: '¿Puedo personalizar los KPIs mostrados?',
        answer:
          'Totalmente. Diseñamos el dashboard según tus KPIs clave. Si más adelante quieres añadir/quitar métricas, lo modificamos sin costo adicional (mantenimiento incluido).',
      },
      {
        question: '¿Funciona con múltiples fuentes de datos?',
        answer:
          'Sí. Podemos consolidar datos de ERP, CRM, Excel, software de gestión, y bases de datos custom en un solo dashboard unificado.',
      },
    ],
  },
  {
    slug: 'workflow-aprobaciones',
    tier: 'high-impact',
    title: 'Workflow de Aprobaciones Automatizado',
    subtitle: 'Aprobaciones multiusuario sin emails ni persecuciones',
    roi: '5 semanas',
    implementation: '1-2 semanas',
    savings: '€12K-€30K/año',
    icon: '✔️',
    longDescription:
      'Los procesos de aprobación manual (presupuestos, cambios de proyecto, compras) generan retrasos de días/semanas porque dependen de emails/llamadas. Con workflows automáticos, las aprobaciones se solicitan, notifican y ejecutan sin intervención manual.',
    symptoms: [
      'Presupuestos/cambios esperando aprobación durante días',
      'Emails de "¿ya aprobaste esto?" circulando constantemente',
      'No hay visibilidad de qué está pendiente de aprobar',
      'Aprobaciones bloqueadas porque alguien está de vacaciones',
    ],
    consequences: [
      '€12K-€30K/año en retrasos por aprobaciones lentas',
      'Proyectos retrasados porque las decisiones tardan semanas',
      'Clientes frustrados por lentitud en respuestas',
      'Oportunidades de venta perdidas por procesos lentos',
    ],
    solution:
      'Implementamos workflows automáticos que solicitan aprobaciones secuenciales o paralelas según reglas de negocio (ej: >€10K requiere aprobación de 2 managers). Notificaciones automáticas, escalamiento por timeout, y visibilidad completa del estado.',
    technology: ['n8n workflows', 'Slack/Teams integration', 'Email notifications', 'Approval dashboards'],
    caseStudy: {
      company: 'Empresa modular 35 empleados (Granada)',
      employees: 35,
      before: 'Presupuestos tardaban 7 días promedio en ser aprobados. 40 presupuestos/mes = 280 días de retraso.',
      after: 'Aprobaciones automáticas en 24h promedio. Reducción de 86% en tiempo de aprobación.',
      roi: '€25K ahorro anual. ROI en 5 semanas.',
      timeToValue: '10 días desde configuración a go-live',
    },
    faq: [
      {
        question: '¿Puedo configurar reglas de aprobación complejas?',
        answer:
          'Sí. Podemos configurar aprobaciones secuenciales (primero A, luego B), paralelas (A y B simultáneamente), condicionales (si >€10K, requiere 2 aprobadores), etc.',
      },
      {
        question: '¿Qué pasa si alguien está de vacaciones?',
        answer:
          'Configuramos escalamiento automático. Si no hay respuesta en X horas, se notifica al suplente. También puedes delegar aprobaciones temporalmente.',
      },
      {
        question: '¿Se integra con nuestro sistema actual de gestión?',
        answer:
          'Sí. El workflow puede integrarse con tu ERP, software de proyectos, o funcionar standalone con notificaciones por email/Slack.',
      },
      {
        question: '¿Hay auditoría de quién aprobó qué?',
        answer:
          'Sí. Todas las aprobaciones quedan registradas con timestamp, usuario, y comentarios. Exportable a Excel/PDF para auditorías.',
      },
    ],
  },
  {
    slug: 'chatbot-interno-qa',
    tier: 'high-impact',
    title: 'Chatbot Interno Q&A con IA',
    subtitle: 'Respuestas instantáneas a preguntas frecuentes del equipo',
    roi: '6 semanas',
    implementation: '2-3 semanas',
    savings: '€18K-€40K/año',
    icon: '💬',
    longDescription:
      'Las preguntas repetitivas al equipo técnico/administración (¿dónde está X documento? ¿cuál es el proceso Y?) consumen 2-5 horas diarias. Un chatbot entrenado con tu documentación interna responde instantáneamente sin interrumpir a nadie.',
    symptoms: [
      'Empleados preguntan lo mismo 10 veces al día (¿dónde está el template de X?)',
      'Managers interrumpidos constantemente con preguntas repetitivas',
      'Documentación interna existe pero nadie la encuentra',
      'Nuevos empleados tardan semanas en aprender procesos básicos',
    ],
    consequences: [
      '€18K-€40K/año en tiempo perdido respondiendo preguntas repetitivas',
      'Productividad reducida por interrupciones constantes',
      'Inconsistencia en respuestas (cada uno responde diferente)',
      'Onboarding lento de nuevos empleados',
    ],
    solution:
      'Implementamos un chatbot con IA (Claude/GPT-4) entrenado en tu documentación interna (procesos, templates, FAQs). Integrado en Slack/Teams. Responde preguntas al instante, y si no sabe, escala a humano. El sistema aprende de interacciones.',
    technology: ['Claude 3.5 Sonnet', 'Slack/Teams API', 'Vector database', 'RAG architecture'],
    caseStudy: {
      company: 'Empresa modular 60 empleados (Zaragoza)',
      employees: 60,
      before: 'Equipo admin respondía 50 preguntas repetitivas/día. 3h/día = 60h/mes.',
      after: 'Chatbot responde 80% de preguntas automáticamente. Solo 12h/mes de intervención humana.',
      roi: '€35K ahorro anual. ROI en 6 semanas.',
      timeToValue: '3 semanas desde entrenamiento a go-live',
    },
    faq: [
      {
        question: '¿El chatbot necesita entrenamiento constante?',
        answer:
          'Inicialmente sí (1-2 semanas). Después, aprende automáticamente de las interacciones. Tú solo revisas ocasionalmente para mejorar respuestas.',
      },
      {
        question: '¿Qué pasa si el chatbot no sabe responder?',
        answer:
          'Escala automáticamente a un humano vía Slack/Teams. También registra preguntas sin respuesta para que actualices la documentación.',
      },
      {
        question: '¿Se integra con nuestra documentación en SharePoint/Drive?',
        answer:
          'Sí. El chatbot puede leer documentación en SharePoint, Google Drive, Notion, Confluence, o PDFs locales.',
      },
      {
        question: '¿Es seguro compartir documentación interna con la IA?',
        answer:
          'Sí. Usamos modelos on-premise o con acuerdos de confidencialidad (Claude/GPT Enterprise). Los datos no se usan para entrenamiento público.',
      },
    ],
  },
  {
    slug: 'control-cambios-proyecto',
    tier: 'high-impact',
    title: 'Control de Cambios de Proyecto Automatizado',
    subtitle: 'Trazabilidad completa de cambios sin Excel manual',
    roi: '5 semanas',
    implementation: '1-2 semanas',
    savings: '€14K-€32K/año',
    icon: '🔄',
    longDescription:
      'El control manual de cambios de proyecto (Excel compartido, emails, reuniones) genera caos y errores. Con un sistema automatizado, todos los cambios se registran, notifican, aprueban y documentan sin intervención manual.',
    symptoms: [
      'Cambios de proyecto registrados en Excel compartido manualmente',
      'Nadie sabe qué cambios están aprobados vs. pendientes',
      'Conflictos sobre "quién aprobó esto" porque no hay trazabilidad',
      'Cambios implementados sin aprobación formal',
    ],
    consequences: [
      '€14K-€32K/año en tiempo de PMs gestionando cambios manualmente',
      'Disputas contractuales por falta de documentación de cambios',
      'Proyectos desfasados porque los cambios no se comunicaron a todos',
      'Pérdida de márgenes porque cambios no facturables no se detectan',
    ],
    solution:
      'Implementamos un sistema de control de cambios automatizado. Solicitud → Aprobación → Notificación → Documentación → Facturación (si aplica). Todo trazable, con alertas automáticas, y registro auditable. Sin Excel manual.',
    technology: ['Custom web app', 'n8n workflows', 'Approval system', 'Document generation'],
    caseStudy: {
      company: 'Empresa modular 45 empleados (Málaga)',
      employees: 45,
      before: 'PMs dedicaban 10h/semana a gestionar cambios en Excel. 40h/mes.',
      after: 'Sistema automático. Solo 5h/mes revisando excepciones. Reducción 87.5%.',
      roi: '€28K ahorro anual. ROI en 5 semanas.',
      timeToValue: '2 semanas desde configuración a go-live',
    },
    faq: [
      {
        question: '¿Se integra con nuestro software de gestión de proyectos?',
        answer:
          'Sí. Podemos integrar con Monday, Asana, Trello, o software custom. Los cambios aprobados se reflejan automáticamente en el proyecto.',
      },
      {
        question: '¿Cómo se documenta cada cambio?',
        answer:
          'Cada cambio genera automáticamente un PDF con descripción, aprobador, fecha, impacto en costo/plazo. Almacenado en el proyecto para auditorías.',
      },
      {
        question: '¿Puedo configurar reglas de aprobación por tipo de cambio?',
        answer:
          'Sí. Cambios menores (<€1K) pueden auto-aprobarse. Cambios mayores requieren aprobación de PM + cliente. Totalmente configurable.',
      },
      {
        question: '¿Qué pasa si un cambio se implementa sin aprobación?',
        answer:
          'El sistema detecta cambios no aprobados y alerta automáticamente. Puedes configurar bloqueos para prevenir implementación sin aprobación.',
      },
    ],
  },
  {
    slug: 'sistema-alertas-riesgos',
    tier: 'transformacional',
    title: 'Sistema de Alertas de Riesgos Predictivo',
    subtitle: 'IA detecta problemas antes de que ocurran',
    roi: '8-10 semanas',
    implementation: '3-4 semanas',
    savings: '€35K-€80K/año',
    icon: '⚠️',
    longDescription:
      'Los problemas en proyectos (retrasos, sobrecostos, issues de calidad) se detectan tarde, cuando ya hay pérdidas. La IA analiza datos históricos y actuales para predecir riesgos antes de que ocurran, permitiendo intervención temprana.',
    symptoms: [
      'Proyectos en riesgo descubiertos cuando ya es tarde para corregir',
      'No hay sistema de early warning para retrasos/sobrecostos',
      'Decisiones reactivas en lugar de proactivas',
      'Managers sorprendidos por problemas que "aparecen de la nada"',
    ],
    consequences: [
      '€35K-€80K/año en pérdidas por proyectos problemáticos no detectados',
      'Reputación dañada por entregas tarde/sobrecosto',
      'Clientes perdidos por problemas recurrentes',
      'Estrés del equipo por crisis constantes',
    ],
    solution:
      'Implementamos IA que analiza datos de proyectos en tiempo real (avance, costos, recursos) y los compara con patrones históricos de proyectos problemáticos. Alertas automáticas cuando detecta riesgo (ej: "este proyecto tiene 78% probabilidad de retraso"). El PM puede intervenir antes del problema.',
    technology: ['Machine Learning models', 'Python/TensorFlow', 'Real-time data pipelines', 'Alert system'],
    caseStudy: {
      company: 'Empresa modular 80 empleados (Valencia)',
      employees: 80,
      before: '30% de proyectos con retrasos >2 semanas. Pérdidas €120K/año.',
      after: 'Sistema detecta riesgos con 2-3 semanas de anticipación. Reducción 70% en retrasos.',
      roi: '€75K ahorro anual. ROI en 8 semanas.',
      timeToValue: '4 semanas desde entrenamiento a go-live',
    },
    faq: [
      {
        question: '¿Qué tan precisa es la predicción de riesgos?',
        answer:
          '75-85% de precisión según datos históricos. No es perfecta, pero permite intervención temprana en 7-8 de cada 10 casos problemáticos.',
      },
      {
        question: '¿Necesito muchos datos históricos para entrenar la IA?',
        answer:
          'Idealmente 20+ proyectos completados. Si tienes menos, podemos usar datos agregados del sector + tus datos para entrenamiento inicial.',
      },
      {
        question: '¿Qué tipo de riesgos detecta?',
        answer:
          'Retrasos en cronograma, sobrecostos, riesgo de insatisfacción del cliente, problemas de calidad, conflictos de recursos. Configurable según tu contexto.',
      },
      {
        question: '¿El sistema reemplaza al PM?',
        answer:
          'No. El sistema alerta al PM de riesgos potenciales. El PM decide qué acción tomar. Es una herramienta de early warning, no de reemplazo.',
      },
    ],
  },
  {
    slug: 'ia-estimacion-presupuestos',
    tier: 'transformacional',
    title: 'IA para Estimación de Presupuestos',
    subtitle: 'Presupuestos precisos en minutos, no días',
    roi: '10-12 semanas',
    implementation: '4-5 semanas',
    savings: '€40K-€100K/año',
    icon: '💰',
    longDescription:
      'La estimación manual de presupuestos consume 5-15 horas por proyecto y tiene margen de error del 15-25%. La IA analiza proyectos históricos y genera presupuestos precisos en minutos, con explicación de cada partida.',
    symptoms: [
      'Estimación de presupuestos tarda días/semanas',
      'Errores frecuentes en costos (olvidos de partidas, errores de cálculo)',
      'Cada estimador usa su propio método/criterio',
      'Márgenes inconsistentes por falta de datos históricos',
    ],
    consequences: [
      '€40K-€100K/año en tiempo dedicado a presupuestación manual',
      'Pérdida de ventas por presupuestos lentos (cliente se cansa de esperar)',
      'Proyectos sin margen por presupuestos mal estimados',
      'Oportunidades perdidas porque no hay capacidad de presupuestar rápido',
    ],
    solution:
      'Implementamos IA entrenada en tus proyectos históricos que genera presupuestos detallados en minutos. Solo necesitas ingresar parámetros básicos (m², tipo de proyecto, ubicación). La IA sugiere partidas, costos, y márgenes basados en datos reales. El estimador solo valida/ajusta.',
    technology: ['GPT-4', 'Historical data training', 'Excel/ERP integration', 'Custom ML models'],
    caseStudy: {
      company: 'Empresa modular 100 empleados (Barcelona)',
      employees: 100,
      before: '2 estimadores dedicaban 30h/semana a presupuestos. 120h/mes.',
      after: 'IA genera 80% del presupuesto automáticamente. Solo 25h/mes de validación.',
      roi: '€85K ahorro anual. ROI en 10 semanas.',
      timeToValue: '5 semanas desde entrenamiento a go-live',
    },
    faq: [
      {
        question: '¿La IA es más precisa que un humano?',
        answer:
          'En proyectos estándar, sí (margen error ~8% vs. 15-25% manual). En proyectos complejos/únicos, el humano debe ajustar. La IA es una herramienta de aceleración + precisión.',
      },
      {
        question: '¿Necesito muchos proyectos históricos para entrenar la IA?',
        answer:
          'Idealmente 30+ proyectos completados con datos de costos reales. Si tienes menos, podemos usar datos agregados del sector para entrenamiento inicial.',
      },
      {
        question: '¿La IA aprende de nuevos proyectos?',
        answer:
          'Sí. Cada proyecto completado retroalimenta el modelo. La IA se vuelve más precisa con el tiempo (machine learning continuo).',
      },
      {
        question: '¿Puedo editar el presupuesto generado por la IA?',
        answer:
          'Totalmente. La IA genera un borrador. El estimador revisa, ajusta partidas, y aprueba. El sistema aprende de tus ajustes manuales.',
      },
    ],
  },
  {
    slug: 'portal-cliente-selfservice',
    tier: 'transformacional',
    title: 'Portal Cliente Self-Service',
    subtitle: 'Clientes acceden a información 24/7 sin llamar',
    roi: '8-10 semanas',
    implementation: '3-4 semanas',
    savings: '€25K-€60K/año',
    icon: '🌐',
    longDescription:
      'Las consultas repetitivas de clientes (¿cuál es el estado del proyecto? ¿dónde están los planos? ¿cuándo entregas?) consumen 2-4 horas diarias del equipo. Un portal self-service permite a clientes acceder a toda la información sin llamar/escribir.',
    symptoms: [
      'Clientes llaman/escriben 5+ veces al día preguntando lo mismo',
      'Equipo interrumpido constantemente para responder consultas básicas',
      'Clientes frustrados porque no tienen visibilidad de su proyecto',
      'Envío manual de actualizaciones/documentos por email',
    ],
    consequences: [
      '€25K-€60K/año en tiempo del equipo respondiendo consultas repetitivas',
      'Clientes insatisfechos por falta de transparencia',
      'Errores en información comunicada (versiones desactualizadas de documentos)',
      'Pérdida de clientes por mala experiencia de servicio',
    ],
    solution:
      'Implementamos un portal web donde clientes acceden con login único a: estado del proyecto en tiempo real, documentos (planos, contratos, certificados), fotos de avance, timeline, facturas, y canal de comunicación directo. Actualizaciones automáticas sin intervención manual.',
    technology: ['Next.js web app', 'Authentication system', 'File storage', 'Real-time sync'],
    caseStudy: {
      company: 'Empresa modular 70 empleados (Madrid)',
      employees: 70,
      before: 'Equipo atención al cliente dedicaba 25h/semana a consultas repetitivas. 100h/mes.',
      after: 'Portal self-service reduce consultas en 75%. Solo 25h/mes de soporte excepcional.',
      roi: '€55K ahorro anual. ROI en 9 semanas.',
      timeToValue: '4 semanas desde desarrollo a go-live',
    },
    faq: [
      {
        question: '¿Los clientes realmente usarán el portal?',
        answer:
          'Sí, si está bien diseñado. Nuestros clientes reportan 80%+ de adopción porque es más rápido que llamar/escribir. Incluimos onboarding automático.',
      },
      {
        question: '¿Se actualiza automáticamente o hay que cargar manualmente?',
        answer:
          'Automático. Integrado con tu software de gestión de proyectos. Cuando actualizas el estado del proyecto, se refleja instantáneamente en el portal.',
      },
      {
        question: '¿Es seguro compartir documentos sensibles?',
        answer:
          'Sí. Cada cliente solo ve su proyecto. Autenticación de 2 factores opcional. Cumplimiento GDPR. Puedes configurar qué documentos son visibles.',
      },
      {
        question: '¿Puedo personalizar el portal con mi marca?',
        answer:
          'Totalmente. Logo, colores, dominio personalizado (portal.tuempresa.com). White-label completo.',
      },
    ],
  },
  {
    slug: 'pipeline-ventas-predictivo',
    tier: 'transformacional',
    title: 'Pipeline de Ventas Predictivo con IA',
    subtitle: 'Predice qué leads cerrarán y cuándo',
    roi: '10-12 semanas',
    implementation: '4-6 semanas',
    savings: '€50K-€120K/año',
    icon: '📈',
    longDescription:
      'El pipeline de ventas manual es inexacto (comerciales optimistas, leads fríos marcados como "calientes"). La IA analiza comportamiento de leads + datos históricos para predecir probabilidad real de cierre y fecha estimada.',
    symptoms: [
      'Comerciales marcan leads como "calientes" sin criterio objetivo',
      'Previsiones de ventas inexactas (siempre optimistas)',
      'No hay visibilidad de qué leads realmente cerrarán',
      'Tiempo desperdiciado en leads fríos que nunca cierran',
    ],
    consequences: [
      '€50K-€120K/año en tiempo de comerciales en leads de baja probabilidad',
      'Decisiones estratégicas basadas en previsiones incorrectas',
      'Oportunidades reales descuidadas porque se priorizan leads equivocados',
      'Frustración del equipo por targets inalcanzables basados en datos falsos',
    ],
    solution:
      'Implementamos IA que analiza comportamiento de leads (emails abiertos, documentos descargados, interacciones) + datos históricos de leads cerrados/perdidos. Asigna probabilidad de cierre objetiva (ej: 68%) y fecha estimada. Comerciales priorizan según datos reales, no intuición.',
    technology: ['Machine Learning', 'CRM integration', 'Behavioral tracking', 'Predictive analytics'],
    caseStudy: {
      company: 'Empresa modular 90 empleados (Alicante)',
      employees: 90,
      before: 'Precisión de forecast de ventas: 45%. Leads cerrados: 12% del pipeline.',
      after: 'Precisión de forecast: 82%. Leads cerrados: 28% del pipeline (mejor priorización).',
      roi: '€95K ahorro anual. ROI en 11 semanas.',
      timeToValue: '6 semanas desde entrenamiento a go-live',
    },
    faq: [
      {
        question: '¿Cómo sabe la IA qué lead cerrará?',
        answer:
          'Analiza patrones de leads históricos que cerraron vs. perdidos (tiempo de respuesta, documentos descargados, interacciones, etc.) y aplica el patrón a leads actuales.',
      },
      {
        question: '¿Los comerciales aceptarán que la IA les diga qué priorizar?',
        answer:
          'Inicialmente hay resistencia. Pero cuando ven que su tasa de cierre aumenta (más tiempo en leads reales), adoptan rápidamente. Incluimos onboarding del equipo.',
      },
      {
        question: '¿Necesito muchos datos históricos?',
        answer:
          'Idealmente 100+ leads cerrados/perdidos. Si tienes menos, podemos usar datos agregados del sector para entrenamiento inicial.',
      },
      {
        question: '¿La IA reemplaza al comercial?',
        answer:
          'No. La IA sugiere probabilidades y prioridades. El comercial decide qué acción tomar. Es una herramienta de optimización, no de reemplazo.',
      },
    ],
  },
  {
    slug: 'gestion-proveedores-inteligente',
    tier: 'transformacional',
    title: 'Gestión de Proveedores Inteligente',
    subtitle: 'Evaluación automática y negociación asistida por IA',
    roi: '12 semanas',
    implementation: '5-6 semanas',
    savings: '€60K-€150K/año',
    icon: '🤝',
    longDescription:
      'La gestión manual de proveedores (evaluación, negociación, seguimiento de KPIs) es ineficiente y subjetiva. Un sistema inteligente automatiza evaluación de desempeño, alerta sobre issues, y asiste en negociaciones con datos objetivos.',
    symptoms: [
      'Evaluación de proveedores subjetiva (no basada en datos)',
      'No hay seguimiento de KPIs de proveedores (calidad, plazo, precio)',
      'Problemas con proveedores descubiertos tarde (ya afectaron proyecto)',
      'Negociaciones sin datos objetivos de desempeño histórico',
    ],
    consequences: [
      '€60K-€150K/año en sobrecostos por proveedores mal evaluados',
      'Proyectos retrasados por proveedores problemáticos no detectados',
      'Oportunidades de ahorro perdidas por falta de datos en negociaciones',
      'Dependencia de proveedores únicos por falta de alternativas evaluadas',
    ],
    solution:
      'Implementamos sistema que rastrea automáticamente KPIs de proveedores (plazo entrega, calidad, precio vs. mercado), alerta sobre desviaciones, genera scorecards automáticos, y asiste en negociaciones con benchmarks del mercado. Decisiones basadas en datos, no intuición.',
    technology: ['Custom database', 'KPI tracking', 'Market intelligence API', 'Automated reporting'],
    caseStudy: {
      company: 'Empresa modular 120 empleados (Santander)',
      employees: 120,
      before: 'Evaluación de proveedores 1 vez/año manualmente. Sin datos objetivos. Sobrecostos €180K/año.',
      after: 'Evaluación continua automática. Reducción 65% en sobrecostos. €15K/año ahorrados en negociaciones.',
      roi: '€125K ahorro anual. ROI en 12 semanas.',
      timeToValue: '6 semanas desde configuración a go-live',
    },
    faq: [
      {
        question: '¿Cómo rastrea el sistema el desempeño de proveedores?',
        answer:
          'Integrado con tu ERP/sistema de compras. Rastrea automáticamente fechas de entrega, calidad (devoluciones, issues), y precio vs. mercado. Sin entrada manual.',
      },
      {
        question: '¿Qué pasa si un proveedor tiene mal desempeño?',
        answer:
          'El sistema alerta automáticamente y sugiere acciones (renegociar, buscar alternativa, escalamiento). Tú decides qué hacer con los datos.',
      },
      {
        question: '¿Funciona con proveedores internacionales?',
        answer:
          'Sí. Podemos rastrear proveedores de cualquier país. Incluye conversión de moneda y ajustes por diferencias regionales.',
      },
      {
        question: '¿Cómo ayuda en negociaciones?',
        answer:
          'Genera reportes automáticos con datos históricos de desempeño + benchmarks de mercado. Entras a la negociación con datos objetivos, no intuiciones.',
      },
    ],
  },
  {
    slug: 'mantenimiento-predictivo-activos',
    tier: 'transformacional',
    title: 'Mantenimiento Predictivo de Activos',
    subtitle: 'Previene fallos antes de que ocurran',
    roi: '10-12 semanas',
    implementation: '4-5 semanas',
    savings: '€45K-€110K/año',
    icon: '🔧',
    longDescription:
      'El mantenimiento reactivo de maquinaria/equipos genera paradas inesperadas y costos altos. El mantenimiento predictivo con IA detecta patrones de fallo antes de que ocurran, permitiendo mantenimiento programado y reducción de downtime.',
    symptoms: [
      'Maquinaria se rompe inesperadamente (downtime no planificado)',
      'Mantenimiento reactivo (solo cuando falla) en lugar de preventivo',
      'Costos altos de reparación por fallos catastróficos',
      'No hay visibilidad de estado de salud de activos',
    ],
    consequences: [
      '€45K-€110K/año en downtime y reparaciones de emergencia',
      'Proyectos retrasados por equipos fuera de servicio',
      'Reemplazo prematuro de activos por mantenimiento inadecuado',
      'Costos de reparación 3-5x más caros que mantenimiento preventivo',
    ],
    solution:
      'Implementamos sensores IoT + IA que monitorizan estado de maquinaria (vibración, temperatura, uso) y predicen fallos con 2-4 semanas de anticipación. Alertas automáticas para mantenimiento programado. Reducción de downtime no planificado en 70%+.',
    technology: ['IoT sensors', 'Machine Learning', 'Predictive algorithms', 'Alert system'],
    caseStudy: {
      company: 'Empresa modular 110 empleados (Murcia)',
      employees: 110,
      before: 'Downtime no planificado: 120h/año. Costos de reparación: €85K/año.',
      after: 'Downtime reducido 75%. Costos de reparación: €28K/año. ROI en 10 semanas.',
      roi: '€95K ahorro anual. ROI en 10 semanas.',
      timeToValue: '5 semanas desde instalación de sensores a go-live',
    },
    faq: [
      {
        question: '¿Necesito instalar sensores en toda la maquinaria?',
        answer:
          'No. Priorizamos activos críticos (mayor costo de downtime). Podemos empezar con 3-5 máquinas clave y expandir después.',
      },
      {
        question: '¿Qué tan precisa es la predicción de fallos?',
        answer:
          '70-80% de precisión según tipo de activo. No es perfecta, pero permite mantenimiento preventivo en 7-8 de cada 10 casos, vs. 0 con mantenimiento reactivo.',
      },
      {
        question: '¿Funciona con maquinaria antigua?',
        answer:
          'Sí. Los sensores IoT son externos (no invasivos). Funcionan con cualquier maquinaria, antigua o moderna.',
      },
      {
        question: '¿Qué pasa si la IA predice un fallo que no ocurre?',
        answer:
          'Falsos positivos son raros (~15%). Si ocurren, el mantenimiento preventivo igual extiende la vida útil del activo, así que no es tiempo perdido.',
      },
    ],
  },
  {
    slug: 'onboarding-empleados-ia',
    tier: 'transformacional',
    title: 'Onboarding de Empleados con IA',
    subtitle: 'Nuevos empleados productivos en días, no semanas',
    roi: '8-10 semanas',
    implementation: '3-4 semanas',
    savings: '€30K-€70K/año',
    icon: '👥',
    longDescription:
      'El onboarding manual de empleados consume 2-4 semanas de tiempo de managers + RRHH. Un sistema con IA automatiza formación, asigna tareas iniciales, responde preguntas frecuentes, y acelera productividad de nuevos empleados.',
    symptoms: [
      'Nuevos empleados tardan 3-4 semanas en ser productivos',
      'Managers/RRHH dedican 10-15h por nuevo empleado a onboarding',
      'Procesos de formación inconsistentes (cada uno aprende diferente)',
      'Nuevos empleados abrumados por información no estructurada',
    ],
    consequences: [
      '€30K-€70K/año en tiempo de managers/RRHH en onboarding manual',
      'Productividad reducida de nuevos empleados durante primeras semanas',
      'Alta rotación de empleados por mala experiencia de onboarding',
      'Errores de nuevos empleados por formación incompleta',
    ],
    solution:
      'Implementamos sistema de onboarding automatizado con IA: plan de 30 días personalizado, chatbot para preguntas frecuentes, videos/documentación interactiva, tareas asignadas automáticamente, y seguimiento de progreso. Managers solo intervienen para mentoring, no para tareas administrativas.',
    technology: ['Learning Management System', 'Chatbot IA', 'Progress tracking', 'Automated task assignment'],
    caseStudy: {
      company: 'Empresa modular 85 empleados (Toledo)',
      employees: 85,
      before: 'Onboarding manual: 3 semanas hasta productividad completa. 12h de manager por empleado.',
      after: 'Onboarding automático: 1 semana hasta productividad completa. 3h de manager por empleado.',
      roi: '€58K ahorro anual. ROI en 9 semanas.',
      timeToValue: '4 semanas desde configuración a go-live',
    },
    faq: [
      {
        question: '¿El onboarding automático es impersonal?',
        answer:
          'No. Incluye videos de bienvenida del CEO, sesiones 1-on-1 automatizadas con managers, y chatbot que responde en lenguaje natural. Es estructurado pero humano.',
      },
      {
        question: '¿Funciona para todos los roles o solo administrativos?',
        answer:
          'Funciona para cualquier rol. Personalizamos el plan de onboarding según departamento (ventas, operaciones, técnico, etc.).',
      },
      {
        question: '¿Qué pasa si un nuevo empleado tiene preguntas que el chatbot no puede responder?',
        answer:
          'El chatbot escala automáticamente a RRHH/manager vía Slack/Teams. También registra preguntas sin respuesta para actualizar la base de conocimiento.',
      },
      {
        question: '¿Cómo se mide el progreso del nuevo empleado?',
        answer:
          'Dashboard automático con % de tareas completadas, tiempo en cada módulo, y quiz de validación de conocimientos. Managers ven progreso en tiempo real.',
      },
    ],
  },
  {
    slug: 'compliance-normativa-automatizado',
    tier: 'transformacional',
    title: 'Compliance Normativa Automatizado',
    subtitle: 'Cumplimiento de CTE/normativa sin revisión manual',
    roi: '10-12 semanas',
    implementation: '4-6 semanas',
    savings: '€50K-€120K/año',
    icon: '⚖️',
    longDescription:
      'La revisión manual de cumplimiento normativo (CTE, normativa autonómica, certificaciones) consume 10-20 horas por proyecto. La IA automatiza validación de planos/documentos contra normativa vigente, detectando incumplimientos antes de presentar a administración.',
    symptoms: [
      'Técnicos revisan manualmente cada proyecto contra CTE/normativa',
      'Errores de cumplimiento descubiertos por administración (rechazos)',
      'Normativa cambia y nadie se entera hasta que hay problema',
      'Checklists de cumplimiento de 100+ items validados manualmente',
    ],
    consequences: [
      '€50K-€120K/año en tiempo de técnicos en revisión manual de normativa',
      'Rechazos administrativos por incumplimientos (retrasos de meses)',
      'Multas/sanciones por incumplimiento de normativa',
      'Riesgo legal por proyectos no conformes',
    ],
    solution:
      'Implementamos IA entrenada en CTE + normativa autonómica que valida automáticamente planos/documentos. Detecta incumplimientos (aislamiento, eficiencia energética, accesibilidad, etc.) y genera reporte detallado. Técnico solo valida el reporte, no revisa manualmente.',
    technology: ['GPT-4 Vision', 'Regulatory database', 'PDF parsing', 'Compliance engine'],
    caseStudy: {
      company: 'Empresa modular 95 empleados (A Coruña)',
      employees: 95,
      before: 'Técnico senior dedicaba 15h/proyecto a validación normativa. 30 proyectos/año = 450h.',
      after: 'IA valida 90% automáticamente. Técnico solo valida 2h/proyecto. 60h/año.',
      roi: '€105K ahorro anual. ROI en 11 semanas.',
      timeToValue: '6 semanas desde entrenamiento a go-live',
    },
    faq: [
      {
        question: '¿La IA está actualizada con los últimos cambios normativos?',
        answer:
          'Sí. Actualizamos la base de conocimiento de la IA cada vez que hay cambios en CTE/normativa autonómica. Incluye suscripción a boletines oficiales.',
      },
      {
        question: '¿Qué pasa si la IA comete un error de validación?',
        answer:
          'El técnico siempre revisa el reporte de la IA antes de aprobar. La IA acelera la detección, pero el técnico es responsable final de la validación.',
      },
      {
        question: '¿Funciona con normativa autonómica específica?',
        answer:
          'Sí. Entrenamos la IA con normativa autonómica de tu región (Cataluña, Madrid, Andalucía, etc.) durante la implementación.',
      },
      {
        question: '¿Detecta incumplimientos en proyectos en curso o solo nuevos?',
        answer:
          'Ambos. Puedes auditar proyectos en curso para detectar issues antes de presentar a administración. También funciona para proyectos nuevos.',
      },
    ],
  },
  {
    slug: 'recursos-humanos-predictivo',
    tier: 'transformacional',
    title: 'Recursos Humanos Predictivo',
    subtitle: 'Asignación óptima de personal con IA',
    roi: '10-12 semanas',
    implementation: '4-5 semanas',
    savings: '€40K-€95K/año',
    icon: '👷',
    longDescription:
      'La asignación manual de personal a proyectos es ineficiente (no considera skills, disponibilidad, carga de trabajo). La IA optimiza asignaciones en tiempo real considerando múltiples variables, maximizando productividad y minimizando burnout.',
    symptoms: [
      'Asignación de personal basada en intuición/disponibilidad superficial',
      'Empleados sobrecargados mientras otros tienen baja carga',
      'Skills de empleados subutilizados (no asignados a proyectos adecuados)',
      'Conflictos de recursos entre proyectos descubiertos tarde',
    ],
    consequences: [
      '€40K-€95K/año en ineficiencia por asignaciones no óptimas',
      'Burnout de empleados sobrecargados (rotación alta)',
      'Proyectos retrasados por falta de recursos adecuados',
      'Skills críticos no utilizados porque nadie sabe quién los tiene',
    ],
    solution:
      'Implementamos IA que optimiza asignaciones considerando: skills del empleado, carga de trabajo actual, prioridad de proyectos, disponibilidad, y preferencias. Sugiere asignaciones óptimas en tiempo real. Reducción de conflictos de recursos en 80%+.',
    technology: ['Optimization algorithms', 'Skills matrix', 'Workload tracking', 'Automated scheduling'],
    caseStudy: {
      company: 'Empresa modular 105 empleados (Oviedo)',
      employees: 105,
      before: 'Asignaciones manuales. 25% de empleados sobrecargados, 15% subutilizados. Rotación 18%/año.',
      after: 'Asignaciones optimizadas por IA. Carga equilibrada. Rotación reducida a 8%/año.',
      roi: '€82K ahorro anual. ROI en 11 semanas.',
      timeToValue: '5 semanas desde configuración a go-live',
    },
    faq: [
      {
        question: '¿La IA decide quién trabaja en qué proyecto?',
        answer:
          'No. La IA sugiere asignaciones óptimas. El manager decide. Es una herramienta de optimización, no de decisión autónoma.',
      },
      {
        question: '¿Cómo sabe la IA las skills de cada empleado?',
        answer:
          'Configuramos una skills matrix inicial (importable desde RRHH). La IA la actualiza automáticamente según proyectos en los que trabajan los empleados.',
      },
      {
        question: '¿Qué pasa si un empleado no quiere trabajar en cierto proyecto?',
        answer:
          'La IA puede considerar preferencias de empleados (si configuras ese parámetro). El manager siempre tiene la última palabra.',
      },
      {
        question: '¿Se integra con nuestro software de gestión de proyectos?',
        answer:
          'Sí. Integrado con Monday, Asana, software custom, o funciona standalone. Sincroniza asignaciones automáticamente.',
      },
    ],
  },
  {
    slug: 'forecasting-materiales-ia',
    tier: 'transformacional',
    title: 'Forecasting de Materiales con IA',
    subtitle: 'Predice necesidades de materiales con 3-6 meses de anticipación',
    roi: '12 semanas',
    implementation: '5-6 semanas',
    savings: '€55K-€130K/año',
    icon: '📦',
    longDescription:
      'La planificación manual de compras de materiales genera sobrestocks (capital inmovilizado) o roturas de stock (retrasos en proyectos). La IA predice necesidades de materiales con 3-6 meses de anticipación basándose en pipeline de proyectos + datos históricos.',
    symptoms: [
      'Compras reactivas (solo cuando falta material)',
      'Sobrestock de materiales que tardan meses en usarse (capital inmovilizado)',
      'Roturas de stock que retrasan proyectos críticos',
      'Negociaciones de última hora sin poder aprovechar descuentos por volumen',
    ],
    consequences: [
      '€55K-€130K/año en capital inmovilizado en sobrestock',
      'Retrasos de proyectos por falta de material',
      'Oportunidades de ahorro perdidas (sin descuentos por volumen)',
      'Costos de urgencia (envíos express, proveedores más caros)',
    ],
    solution:
      'Implementamos IA que analiza pipeline de proyectos + consumo histórico de materiales y predice necesidades con 3-6 meses de anticipación. Alertas automáticas de compras recomendadas. Reducción de sobrestock en 60%+, roturas de stock en 80%+.',
    technology: ['Forecasting models', 'Historical data analysis', 'Project pipeline integration', 'Alert system'],
    caseStudy: {
      company: 'Empresa modular 130 empleados (León)',
      employees: 130,
      before: 'Sobrestock promedio: €220K. Roturas de stock: 15 incidencias/año con retraso promedio 3 semanas.',
      after: 'Sobrestock reducido a €85K. Roturas de stock: 2 incidencias/año. ROI en 12 semanas.',
      roi: '€115K ahorro anual. ROI en 12 semanas.',
      timeToValue: '6 semanas desde configuración a go-live',
    },
    faq: [
      {
        question: '¿Qué tan precisa es la predicción de necesidades de materiales?',
        answer:
          '75-85% de precisión según variabilidad del pipeline de proyectos. Permite planificación anticipada en 7-8 de cada 10 casos.',
      },
      {
        question: '¿Necesito datos históricos de consumo de materiales?',
        answer:
          'Idealmente 12+ meses de datos. Si tienes menos, podemos usar datos agregados del sector para entrenamiento inicial.',
      },
      {
        question: '¿La IA considera fluctuaciones de precios de materiales?',
        answer:
          'Sí. Podemos integrar APIs de mercado de materiales para sugerir compras anticipadas cuando se predicen aumentos de precio.',
      },
      {
        question: '¿Se integra con nuestro sistema de compras/ERP?',
        answer:
          'Sí. La IA genera órdenes de compra sugeridas que puedes aprobar con 1 clic. Integrado con SAP, Sage, Excel, o sistemas custom.',
      },
    ],
  },
  {
    slug: 'auditoria-calidad-ia',
    tier: 'transformacional',
    title: 'Auditoría de Calidad con IA',
    subtitle: 'Inspección automática de calidad con visión artificial',
    roi: '10-12 semanas',
    implementation: '4-5 semanas',
    savings: '€45K-€110K/año',
    icon: '🔍',
    longDescription:
      'La inspección manual de calidad (acabados, instalaciones, cumplimiento de planos) consume 3-8 horas por unidad. La visión artificial detecta defectos automáticamente en fotos/videos, acelerando inspecciones y mejorando consistencia.',
    symptoms: [
      'Inspectores revisan manualmente cada unidad (3-8h por unidad)',
      'Criterios de calidad inconsistentes entre inspectores',
      'Defectos descubiertos tarde (ya entregado a cliente)',
      'Documentación fotográfica manual y desorganizada',
    ],
    consequences: [
      '€45K-€110K/año en tiempo de inspectores',
      'Reclamaciones de clientes por defectos no detectados',
      'Retrabajos costosos por problemas descubiertos tarde',
      'Reputación dañada por entregas con defectos',
    ],
    solution:
      'Implementamos visión artificial (GPT-4 Vision + modelos custom) que analiza fotos/videos de unidades y detecta defectos automáticamente (acabados, instalaciones, cumplimiento de planos). Inspector solo valida casos críticos. Reducción de tiempo de inspección en 70%+.',
    technology: ['GPT-4 Vision', 'Custom CV models', 'Image analysis', 'Automated reporting'],
    caseStudy: {
      company: 'Empresa modular 115 empleados (Cáceres)',
      employees: 115,
      before: 'Inspector dedicaba 5h por unidad. 100 unidades/año = 500h.',
      after: 'IA procesa 80% de inspección. Inspector solo valida 1.5h por unidad. 150h/año.',
      roi: '€95K ahorro anual. ROI en 11 semanas.',
      timeToValue: '5 semanas desde entrenamiento a go-live',
    },
    faq: [
      {
        question: '¿La IA puede detectar todos los tipos de defectos?',
        answer:
          'Detecta defectos visuales (acabados, instalaciones, elementos faltantes). Defectos no visibles (estructura interna) requieren inspección humana.',
      },
      {
        question: '¿Qué tan precisa es la detección de defectos?',
        answer:
          '85-92% de precisión según tipo de defecto. Falsos negativos son raros. Falsos positivos (~8%) son validados manualmente por el inspector.',
      },
      {
        question: '¿Necesito cámaras especiales o solo fotos con móvil?',
        answer:
          'Funciona con fotos de móvil de calidad media. Cámaras profesionales mejoran precisión, pero no son obligatorias.',
      },
      {
        question: '¿La IA aprende de nuevos defectos?',
        answer:
          'Sí. Cada validación manual del inspector retroalimenta el modelo. La IA se vuelve más precisa con el tiempo.',
      },
    ],
  },
  {
    slug: 'chatbot-ventas-cualificacion',
    tier: 'transformacional',
    title: 'Chatbot de Ventas para Cualificación de Leads',
    subtitle: 'Cualifica leads 24/7 antes de que lleguen a comercial',
    roi: '8-10 semanas',
    implementation: '3-4 semanas',
    savings: '€35K-€85K/año',
    icon: '🤖',
    longDescription:
      'Los comerciales pierden 60% de su tiempo en leads no cualificados (solo mirando, sin presupuesto, fuera de target). Un chatbot con IA cualifica leads automáticamente antes de pasar a comercial, permitiendo foco en leads reales.',
    symptoms: [
      'Comerciales hablan con leads que "solo están mirando"',
      '60%+ del tiempo en leads que nunca comprarán',
      'Leads cualificados esperando porque comercial está ocupado con leads fríos',
      'No hay filtro inicial de leads (todos pasan directo a comercial)',
    ],
    consequences: [
      '€35K-€85K/año en tiempo de comerciales en leads no cualificados',
      'Oportunidades reales perdidas por falta de tiempo',
      'Frustración del equipo de ventas',
      'Tasa de conversión baja (<10%) por mala cualificación',
    ],
    solution:
      'Implementamos chatbot en web que cualifica leads automáticamente (presupuesto, timeline, necesidad real). Solo leads cualificados pasan a comercial. Leads fríos reciben información automática + seguimiento automatizado. Comerciales solo hablan con leads reales.',
    technology: ['Claude 3.5 Sonnet', 'Web chat integration', 'CRM sync', 'Lead scoring'],
    caseStudy: {
      company: 'Empresa modular 75 empleados (Badajoz)',
      employees: 75,
      before: 'Comerciales dedicaban 60% del tiempo a leads no cualificados. Conversión 8%.',
      after: 'Chatbot cualifica 24/7. Comerciales solo hablan con leads warm/hot. Conversión 22%.',
      roi: '€68K ahorro anual. ROI en 9 semanas.',
      timeToValue: '4 semanas desde configuración a go-live',
    },
    faq: [
      {
        question: '¿El chatbot puede cerrar ventas o solo cualificar?',
        answer:
          'Solo cualifica y agenda citas. Las ventas complejas (construcción modular) requieren toque humano. El chatbot acelera el funnel inicial.',
      },
      {
        question: '¿Los leads aceptan hablar con un chatbot?',
        answer:
          'Sí, si está bien diseñado. Nuestros clientes reportan 75%+ de engagement porque el chatbot responde instantáneamente (vs. esperar email de comercial).',
      },
      {
        question: '¿Qué pasa con leads que el chatbot no puede cualificar?',
        answer:
          'El chatbot escala a humano si detecta complejidad. También puedes configurar "escape hatch" para hablar con comercial directamente.',
      },
      {
        question: '¿Se integra con nuestro CRM?',
        answer:
          'Sí. Leads cualificados se crean automáticamente en tu CRM (Salesforce, HubSpot, Pipedrive, etc.) con toda la info de la conversación.',
      },
    ],
  },
  {
    slug: 'integracion-erp-contabilidad',
    tier: 'transformacional',
    title: 'Integración ERP ↔ Contabilidad Automática',
    subtitle: 'Cierre contable automático sin entrada manual',
    roi: '10-12 semanas',
    implementation: '4-6 semanas',
    savings: '€50K-€115K/año',
    icon: '💼',
    longDescription:
      'El cierre contable manual (exportar de ERP, importar a contabilidad, conciliar, ajustar) consume 20-40 horas mensuales. Con integración automática, los datos fluyen en tiempo real, permitiendo cierres diarios y reduciendo errores en 95%+.',
    symptoms: [
      'Cierre contable mensual manual (20-40h de trabajo)',
      'Errores de conciliación entre ERP y contabilidad',
      'Decisiones financieras basadas en datos de hace 1 mes',
      'Auditorías complicadas por falta de trazabilidad automática',
    ],
    consequences: [
      '€50K-€115K/año en tiempo de contabilidad en cierre manual',
      'Decisiones estratégicas basadas en datos obsoletos',
      'Errores contables que generan rectificaciones',
      'Compliance fiscal en riesgo por errores humanos',
    ],
    solution:
      'Implementamos integración bidireccional ERP ↔ contabilidad. Facturas, pagos, gastos, ingresos sincronizados en tiempo real. Cierre contable automático diario/semanal/mensual. Reducción de errores en 95%+, tiempo de cierre en 90%+.',
    technology: ['n8n ETL', 'API ERP', 'API contabilidad', 'Automated reconciliation'],
    caseStudy: {
      company: 'Empresa modular 140 empleados (Salamanca)',
      employees: 140,
      before: 'Cierre contable mensual: 35h de trabajo. Errores mensuales: 8-12.',
      after: 'Cierre automático diario. 3h/mes de validación. Errores mensuales: 0-1.',
      roi: '€98K ahorro anual. ROI en 11 semanas.',
      timeToValue: '6 semanas desde configuración a go-live',
    },
    faq: [
      {
        question: '¿Qué pasa si hay un error en la sincronización?',
        answer:
          'Sistema detecta inconsistencias automáticamente y alerta a contabilidad. Backups automáticos antes de cada sincronización.',
      },
      {
        question: '¿Funciona con cualquier ERP y software de contabilidad?',
        answer:
          'Sí, si tienen API o permiten integración. Hemos integrado SAP, Sage, Holded con A3, ContaPlus, y software custom.',
      },
      {
        question: '¿El auditor aceptará datos sincronizados automáticamente?',
        answer:
          'Sí. La trazabilidad es mejor que manual (logs de cada transacción). Hemos pasado múltiples auditorías sin problemas.',
      },
      {
        question: '¿Puedo seguir haciendo ajustes manuales si necesito?',
        answer:
          'Totalmente. La integración automática es para transacciones rutinarias. Ajustes especiales se hacen manualmente.',
      },
    ],
  },
  {
    slug: 'asistente-ia-diseno',
    tier: 'transformacional',
    title: 'Asistente IA para Diseño de Proyectos',
    subtitle: 'IA sugiere optimizaciones de diseño antes de construir',
    roi: '12 semanas',
    implementation: '5-6 semanas',
    savings: '€60K-€140K/año',
    icon: '✏️',
    longDescription:
      'Los errores de diseño descubiertos en fase de construcción generan costos altos y retrasos. La IA analiza diseños en fase temprana y sugiere optimizaciones (eficiencia espacial, costos, constructabilidad) antes de construir.',
    symptoms: [
      'Errores de diseño descubiertos en fase de construcción',
      'Diseños no optimizados (espacio desperdiciado, costos altos)',
      'Revisión manual de diseños tarda semanas',
      'No hay validación de constructabilidad antes de aprobar diseño',
    ],
    consequences: [
      '€60K-€140K/año en cambios de diseño durante construcción',
      'Retrasos por errores descubiertos tarde',
      'Costos de construcción superiores por diseños no optimizados',
      'Clientes insatisfechos por espacios mal aprovechados',
    ],
    solution:
      'Implementamos IA que analiza diseños en Revit/AutoCAD y sugiere optimizaciones: eficiencia espacial, reducción de costos, constructabilidad, cumplimiento normativo. El diseñador recibe reporte de mejoras antes de aprobar el diseño final.',
    technology: ['GPT-4 Vision', 'Revit/AutoCAD API', 'Optimization algorithms', 'Cost estimation'],
    caseStudy: {
      company: 'Empresa modular 125 empleados (Logroño)',
      employees: 125,
      before: 'Cambios de diseño durante construcción: €180K/año. Retrasos promedio: 3 semanas.',
      after: 'IA detecta 85% de issues en fase de diseño. Cambios durante construcción: €35K/año.',
      roi: '€125K ahorro anual. ROI en 12 semanas.',
      timeToValue: '6 semanas desde entrenamiento a go-live',
    },
    faq: [
      {
        question: '¿La IA puede generar diseños desde cero?',
        answer:
          'No. La IA optimiza diseños existentes. El diseñador humano sigue siendo el creador. La IA es un asistente de optimización.',
      },
      {
        question: '¿Funciona con Revit y AutoCAD?',
        answer:
          'Sí. Integrado con APIs de Revit/AutoCAD. También funciona con PDFs de planos si no usas software BIM.',
      },
      {
        question: '¿La IA considera preferencias estéticas del cliente?',
        answer:
          'La IA se enfoca en optimizaciones técnicas (costo, espacio, constructabilidad). El diseñador decide qué sugerencias implementar según preferencias del cliente.',
      },
      {
        question: '¿Qué tipo de optimizaciones sugiere la IA?',
        answer:
          'Reducción de m² sin perder funcionalidad, materiales más económicos equivalentes, mejoras en eficiencia energética, detección de conflictos constructivos.',
      },
    ],
  },
];

