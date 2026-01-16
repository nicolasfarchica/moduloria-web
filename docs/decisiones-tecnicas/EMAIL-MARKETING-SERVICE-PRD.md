# PRD: Servicio de Email Marketing - Resend

**Fecha**: 16 Enero 2026
**Autor**: Claude Code
**Estado**: Aprobado e Implementando
**Versión**: 2.0
**Servicio seleccionado**: Resend

---

## 1. Resumen Ejecutivo

### Contexto del Negocio

ModulorIA es una consultora B2B especializada en automatización con IA para el sector de construcción modular. El modelo de negocio se caracteriza por:

| Factor | Valor |
|--------|-------|
| Modelo de negocio | B2B |
| Sector | Construccion modular + IA |
| Volumen esperado | 50-200 contactos activos |
| Emails estimados | 500-2,000/mes |
| Valor por cliente | Alto (3K-25K por proyecto) |
| Prioridad | Calidad y profesionalismo sobre volumen |

### Necesidades de Email

1. **Comunicaciones con clientes y prospectos** - Seguimiento personalizado
2. **Nurturing de leads B2B** - Secuencias de educacion
3. **Newsletters y actualizaciones** - Contenido de valor mensual
4. **Emails transaccionales** - Confirmaciones, notificaciones, recordatorios

### Decision Final

**Resend** fue seleccionado como servicio de email marketing por:
- Deliverability superior (infraestructura moderna)
- Integracion nativa con Next.js (stack actual)
- Sin branding forzado en plan gratuito
- API-first (ideal para N8N)
- Costo optimo para B2B bajo volumen

---

## 2. Resend - Informacion Completa

### 2.1 Que es Resend

Resend es un servicio moderno de email para desarrolladores, fundado por ex-ingenieros de Vercel. Se enfoca en:
- **Deliverability excepcional** - Emails que llegan a inbox, no spam
- **Developer experience** - SDKs modernos, API REST limpia
- **React Email** - Templates con React components
- **Simplicidad** - Hace una cosa y la hace muy bien

**Website**: [resend.com](https://resend.com)

### 2.2 Planes y Precios (2026)

#### Transactional Email

| Plan | Precio | Emails/mes | Caracteristicas |
|------|--------|------------|-----------------|
| **Free** | $0 | 3,000 | 1 dominio, 100 emails/dia, logs 1 dia |
| **Pro** | $20/mes | 50,000 | Dominios ilimitados, logs 3 dias, soporte email |
| **Scale** | $90/mes | 100,000 | Logs 7 dias, IP dedicada opcional (+$30) |
| **Enterprise** | Custom | Custom | SLA, soporte dedicado, SSO |

#### Marketing Email

| Plan | Precio | Contactos | Emails |
|------|--------|-----------|--------|
| **Free** | $0 | 1,000 | Ilimitados |
| **Pro** | $20/mes | 10,000 | Ilimitados |
| **Scale** | $90/mes | 50,000 | Ilimitados |

**Nota**: Los planes de transactional y marketing son independientes. Puedes usar uno o ambos.

#### Proyeccion para ModulorIA

- **Ano 1**: Plan gratuito suficiente (3,000 emails/mes + 1,000 contactos)
- **Ano 2+**: Pro $20/mes si escalamos (~$240/ano)

### 2.3 Features Principales

#### Deliverability

- **SPF, DKIM, DMARC** - Configuracion automatica al agregar dominio
- **Blocklist monitoring** - Tracking proactivo de listas negras
- **IP dedicada** - Disponible en Scale (+$30/mes)
- **Infraestructura global** - Baja latencia, alta disponibilidad
- **BIMI support** - Logo de marca en clientes de email compatibles

#### Developer Experience

- **SDKs oficiales**: Node.js, Python, Ruby, PHP, Go, Elixir
- **API REST** - Endpoints claros y bien documentados
- **React Email** - Componentes React para templates
- **Test Mode** - Pruebas sin enviar emails reales
- **Webhooks** - Eventos en tiempo real (delivered, opened, clicked, bounced)

#### Features 2025

- **Receive emails** - Ahora puedes recibir emails (nueva feature)
- **Pay-as-you-go** - Pago por uso si excedes el plan
- **Templates** - Sistema de templates personalizables
- **Multiplayer editor** - Colaboracion en tiempo real
- **Multi-team** - Equipos separados con billing independiente

### 2.4 Integraciones Relevantes

| Herramienta | Tipo de Integracion | Notas |
|-------------|---------------------|-------|
| **Next.js** | SDK nativo | Mismo ecosistema Vercel |
| **N8N** | HTTP Request node | Via API REST |
| **Vercel** | Nativo | Deploy automatico |
| **React** | React Email | Templates con componentes |
| **Notion** | Via API | Webhooks personalizados |

---

## 3. Configuracion DNS Completada

### 3.1 Estado Actual de DNS (moduloria.com)

**Ubicacion**: Vercel DNS (ns1.vercel-dns.com, ns2.vercel-dns.com)

#### Registros de Email (Hostinger) - 7 registros

| Tipo | Nombre | Valor | TTL |
|------|--------|-------|-----|
| MX | @ | mx1.hostinger.com | 60 |
| MX | @ | mx2.hostinger.com | 60 |
| TXT | @ | v=spf1 include:_spf.mail.hostinger.com ~all | 60 |
| CNAME | hostingermail-a._domainkey | hostingermail-a.dkim.mail.hostinger.com | 60 |
| CNAME | hostingermail-b._domainkey | hostingermail-b.dkim.mail.hostinger.com | 60 |
| CNAME | hostingermail-c._domainkey | hostingermail-c.dkim.mail.hostinger.com | 60 |
| **TXT** | **_dmarc** | **v=DMARC1; p=none; rua=mailto:dmarc@moduloria.com** | **60** |

**Nota**: El registro DMARC fue agregado el 16 enero 2026 para mejorar deliverability.

#### Registros Web (Vercel) - 3 registros

| Tipo | Nombre | Valor | TTL |
|------|--------|-------|-----|
| ALIAS | @ | 0195ab6bb2baa0a3.vercel-dns-017.com | 60 |
| ALIAS | * | cname.vercel-dns-017.com | 60 |
| CAA | @ | 0 issue "letsencrypt.org" | 60 |

### 3.2 Verificacion de DNS

Para verificar que los registros estan correctos:

```bash
# Verificar MX
dig MX moduloria.com +short

# Verificar SPF
dig TXT moduloria.com +short

# Verificar DMARC
dig TXT _dmarc.moduloria.com +short

# Verificar DKIM
dig CNAME hostingermail-a._domainkey.moduloria.com +short
```

**Herramientas online**:
- [MXToolbox](https://mxtoolbox.com/) - Verificacion completa
- [Mail Tester](https://www.mail-tester.com/) - Test de deliverability (target: >9/10)
- [DNSChecker](https://dnschecker.org/) - Propagacion global

---

## 4. Plan de Implementacion Resend

### Fase 1: Crear Cuenta y Configurar Dominio (30 min)

#### Paso 1: Registro
1. Ir a [resend.com](https://resend.com)
2. Click en "Get Started"
3. Registrarse con email o GitHub
4. Verificar cuenta via email

#### Paso 2: Agregar Dominio
1. Dashboard → Domains → Add Domain
2. Ingresar: `moduloria.com`
3. Resend mostrara registros DNS necesarios
4. **IMPORTANTE**: Ya tenemos SPF de Hostinger. Agregar Resend al SPF existente:
   ```
   v=spf1 include:_spf.mail.hostinger.com include:amazonses.com ~all
   ```
   (Resend usa Amazon SES como infraestructura)
5. Agregar registro DKIM de Resend (sera diferente al de Hostinger)
6. Verificar dominio en Resend

#### Paso 3: Generar API Key
1. Dashboard → API Keys → Create API Key
2. Nombre: `moduloria-production`
3. Permisos: Full access (o solo sending si prefieres)
4. **Guardar la key** - Solo se muestra una vez

### Fase 2: Integracion con Next.js (1-2 horas)

#### Paso 1: Instalar Dependencias

```bash
cd /Users/nicolasfarchica/Desktop/ModulorIA/web
npm install resend @react-email/components
```

#### Paso 2: Configurar Variables de Entorno

Agregar a `.env.local`:
```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

Agregar a `.env.example`:
```env
RESEND_API_KEY=your_resend_api_key
```

#### Paso 3: Crear Cliente Resend

Crear archivo `web/src/lib/resend.ts`:
```typescript
import { Resend } from 'resend';

if (!process.env.RESEND_API_KEY) {
  throw new Error('RESEND_API_KEY is not defined');
}

export const resend = new Resend(process.env.RESEND_API_KEY);
```

#### Paso 4: Crear API Route para Envio

Crear archivo `web/src/app/api/send-email/route.ts`:
```typescript
import { NextResponse } from 'next/server';
import { resend } from '@/lib/resend';

export async function POST(request: Request) {
  try {
    const { to, subject, html, from } = await request.json();

    const data = await resend.emails.send({
      from: from || 'ModulorIA <hola@moduloria.com>',
      to: [to],
      subject,
      html,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
```

### Fase 3: Crear Templates de Email (2-4 horas)

#### Estructura de Carpetas

```
web/src/emails/
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── Button.tsx
├── templates/
│   ├── WelcomeEmail.tsx
│   ├── AuditFollowUp.tsx
│   ├── ProposalEmail.tsx
│   └── NewsletterEmail.tsx
└── index.ts
```

#### Template Base con React Email

Crear `web/src/emails/components/EmailLayout.tsx`:
```typescript
import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components';

interface EmailLayoutProps {
  preview: string;
  children: React.ReactNode;
}

export const EmailLayout = ({ preview, children }: EmailLayoutProps) => (
  <Html>
    <Head />
    <Preview>{preview}</Preview>
    <Body style={main}>
      <Container style={container}>
        {/* Header */}
        <Section style={header}>
          <Img
            src="https://moduloria.com/logo.png"
            width="150"
            height="40"
            alt="ModulorIA"
          />
        </Section>

        {/* Content */}
        <Section style={content}>
          {children}
        </Section>

        {/* Footer */}
        <Section style={footer}>
          <Text style={footerText}>
            ModulorIA - IA practica para construccion modular
          </Text>
          <Text style={footerText}>
            <Link href="https://moduloria.com">moduloria.com</Link> |
            <Link href="https://linkedin.com/company/moduloria"> LinkedIn</Link>
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
};

const header = {
  padding: '32px 48px',
  borderBottom: '1px solid #e6ebf1',
};

const content = {
  padding: '32px 48px',
};

const footer = {
  padding: '32px 48px',
  borderTop: '1px solid #e6ebf1',
  textAlign: 'center' as const,
};

const footerText = {
  color: '#8898aa',
  fontSize: '12px',
  lineHeight: '16px',
};
```

#### Template: Email de Bienvenida

Crear `web/src/emails/templates/WelcomeEmail.tsx`:
```typescript
import { Text, Link, Button } from '@react-email/components';
import { EmailLayout } from '../components/EmailLayout';

interface WelcomeEmailProps {
  name: string;
  company?: string;
}

export const WelcomeEmail = ({ name, company }: WelcomeEmailProps) => (
  <EmailLayout preview={`Bienvenido a ModulorIA, ${name}`}>
    <Text style={heading}>Hola {name},</Text>

    <Text style={paragraph}>
      Gracias por tu interes en ModulorIA. Estamos encantados de que
      {company ? ` ${company} este` : ' estes'} explorando como la IA
      puede transformar sus operaciones de construccion modular.
    </Text>

    <Text style={paragraph}>
      En los proximos dias te compartire:
    </Text>

    <ul>
      <li>Casos de estudio reales de automatizacion</li>
      <li>Quick wins que puedes implementar hoy</li>
      <li>Invitacion a una auditoria gratuita de 30 minutos</li>
    </ul>

    <Text style={paragraph}>
      Mientras tanto, te invito a explorar los 25 problemas que resolvemos:
    </Text>

    <Button
      href="https://moduloria.com/problemas"
      style={button}
    >
      Ver Problemas y Soluciones
    </Button>

    <Text style={paragraph}>
      Un saludo,
      <br />
      Nicolas
      <br />
      Fundador, ModulorIA
    </Text>
  </EmailLayout>
);

const heading = {
  fontSize: '24px',
  fontWeight: 'bold',
  color: '#1a1f36',
  marginBottom: '24px',
};

const paragraph = {
  fontSize: '16px',
  lineHeight: '24px',
  color: '#525f7f',
  marginBottom: '16px',
};

const button = {
  backgroundColor: '#1a1f36',
  borderRadius: '5px',
  color: '#fff',
  fontSize: '16px',
  fontWeight: 'bold',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
  padding: '12px 24px',
  marginTop: '24px',
  marginBottom: '24px',
};
```

### Fase 4: Integracion con N8N (1-2 horas)

#### Workflow: Formulario Web → Email de Bienvenida

```json
{
  "name": "Web Form → Welcome Email",
  "nodes": [
    {
      "name": "Webhook",
      "type": "n8n-nodes-base.webhook",
      "parameters": {
        "path": "contact-form",
        "method": "POST"
      }
    },
    {
      "name": "Send Welcome Email",
      "type": "n8n-nodes-base.httpRequest",
      "parameters": {
        "method": "POST",
        "url": "https://api.resend.com/emails",
        "authentication": "genericCredentialType",
        "genericAuthType": "httpHeaderAuth",
        "headers": {
          "Authorization": "Bearer {{ $env.RESEND_API_KEY }}"
        },
        "body": {
          "from": "ModulorIA <hola@moduloria.com>",
          "to": "{{ $json.email }}",
          "subject": "Bienvenido a ModulorIA",
          "html": "<h1>Hola {{ $json.name }}</h1><p>Gracias por contactarnos...</p>"
        }
      }
    }
  ]
}
```

#### Configurar Credencial en N8N

1. N8N → Credentials → Add Credential
2. Tipo: Header Auth
3. Name: `Resend API`
4. Header Name: `Authorization`
5. Header Value: `Bearer re_xxxxxxxxxxxx`

### Fase 5: Verificacion y Testing (30 min)

#### Checklist de Verificacion

- [ ] Dominio verificado en Resend dashboard
- [ ] API key guardada en `.env.local`
- [ ] Email de prueba enviado exitosamente
- [ ] Template renderiza correctamente
- [ ] N8N workflow funciona end-to-end
- [ ] Deliverability test >9/10 en mail-tester.com

#### Test de Deliverability

1. Ir a [mail-tester.com](https://www.mail-tester.com/)
2. Copiar la direccion de email temporal
3. Enviar email de prueba desde Resend
4. Verificar puntuacion (objetivo: >9/10)

---

## 5. Uso Diario de Resend

### 5.1 Dashboard

**URL**: [resend.com/emails](https://resend.com/emails)

El dashboard muestra:
- Emails enviados (ultimas 24h, 7d, 30d)
- Delivery rate
- Open rate (si tracking habilitado)
- Click rate
- Bounces y complaints

### 5.2 Enviar Email via API

```typescript
import { resend } from '@/lib/resend';

// Email simple
await resend.emails.send({
  from: 'ModulorIA <hola@moduloria.com>',
  to: ['cliente@empresa.com'],
  subject: 'Seguimiento de nuestra reunion',
  html: '<p>Hola, adjunto la propuesta...</p>',
});

// Email con template React
import { WelcomeEmail } from '@/emails/templates/WelcomeEmail';
import { render } from '@react-email/render';

const html = render(WelcomeEmail({ name: 'Juan', company: 'Constructora ABC' }));

await resend.emails.send({
  from: 'ModulorIA <hola@moduloria.com>',
  to: ['juan@constructora.com'],
  subject: 'Bienvenido a ModulorIA',
  html,
});
```

### 5.3 Webhooks para Tracking

Configurar en Resend Dashboard → Webhooks:

```typescript
// web/src/app/api/resend-webhook/route.ts
export async function POST(request: Request) {
  const payload = await request.json();

  switch (payload.type) {
    case 'email.delivered':
      console.log(`Email delivered to ${payload.data.to}`);
      break;
    case 'email.opened':
      console.log(`Email opened by ${payload.data.to}`);
      break;
    case 'email.clicked':
      console.log(`Link clicked: ${payload.data.click.link}`);
      break;
    case 'email.bounced':
      console.log(`Email bounced: ${payload.data.to}`);
      // Marcar contacto como invalido en CRM
      break;
  }

  return new Response('OK');
}
```

---

## 6. Metricas y KPIs

### 6.1 Benchmarks B2B

| Metrica | Benchmark B2B | Objetivo ModulorIA |
|---------|---------------|-------------------|
| Deliverability | >95% | >98% |
| Open rate | 15-25% | >25% |
| Click rate | 2-5% | >5% |
| Bounce rate | <2% | <1% |
| Spam complaints | <0.1% | <0.05% |

### 6.2 Monitoreo

- **Diario**: Revisar bounces y complaints en dashboard
- **Semanal**: Analizar open/click rates por campana
- **Mensual**: Report de deliverability y ajustes

---

## 7. Troubleshooting

### Problema: Emails van a spam

**Soluciones**:
1. Verificar SPF, DKIM, DMARC con MXToolbox
2. Revisar contenido del email (evitar palabras spam)
3. Calentar dominio enviando gradualmente
4. Verificar que no estemos en blacklists

### Problema: Bounces altos

**Soluciones**:
1. Limpiar lista de contactos
2. Implementar double opt-in
3. Verificar emails antes de enviar (usar servicio de verificacion)

### Problema: Opens no se registran

**Soluciones**:
1. Verificar que tracking pixel esta habilitado
2. Algunos clientes de email bloquean imagenes por defecto
3. Open rate real suele ser mayor al reportado

---

## 8. Costos y Presupuesto

### Ano 1 (Plan Gratuito)

| Concepto | Costo |
|----------|-------|
| Resend Free | $0 |
| Dominio (ya pagado) | $0 |
| **Total Ano 1** | **$0** |

### Ano 2+ (Escenario Crecimiento)

| Concepto | Costo |
|----------|-------|
| Resend Pro | $240/ano |
| IP dedicada (opcional) | $360/ano |
| **Total** | **$240-600/ano** |

---

## 9. Recursos y Documentacion

### Documentacion Oficial
- [Resend Docs](https://resend.com/docs)
- [React Email](https://react.email)
- [Resend + Next.js](https://resend.com/docs/send-with-nextjs)
- [Resend API Reference](https://resend.com/docs/api-reference)

### Fuentes de Investigacion
- [Resend Pricing Guide 2025](https://flexprice.io/blog/detailed-resend-pricing-guide)
- [Resend Pricing 2026 - UserJot](https://userjot.com/blog/resend-pricing-in-2025)
- [Resend Official Pricing](https://resend.com/pricing)

---

## 10. Historial de Cambios

| Fecha | Version | Cambios |
|-------|---------|---------|
| 2026-01-16 | 1.0 | Documento inicial con analisis de 3 servicios |
| 2026-01-16 | 2.0 | Limpieza - Solo Resend con procedimientos completos |

---

## 11. Proximos Pasos

1. [ ] Crear cuenta en Resend
2. [ ] Agregar dominio moduloria.com
3. [ ] Actualizar registro SPF para incluir Resend
4. [ ] Generar API key
5. [ ] Instalar dependencias en proyecto Next.js
6. [ ] Crear templates de email
7. [ ] Configurar webhook para tracking
8. [ ] Integrar con N8N
9. [ ] Test de deliverability
10. [ ] Documentar en Notion/CRM

---

*Documento actualizado: 16 Enero 2026*
*Servicio seleccionado: Resend*
*Estado: Aprobado - Listo para implementacion*
