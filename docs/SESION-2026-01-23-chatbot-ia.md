# Sesion 2026-01-23: Implementacion Chatbot IA

## Resumen

Se implemento un chatbot de IA integrado en moduloria.com que responde preguntas sobre los servicios de ModulorIA, guia usuarios hacia la Auditoria Diagnostica gratuita, y NO menciona precios especificos.

## Stack Tecnico

| Componente | Tecnologia | Version |
|-----------|-----------|---------|
| Frontend Hook | @ai-sdk/react | useChat() |
| API Route | Vercel AI SDK | ai v6.0.49 |
| Proveedor IA | @ai-sdk/openai | gpt-4o-mini |
| Runtime | Edge (Vercel) | - |
| Animaciones | Framer Motion | existente |
| Iconos | Lucide React | existente |

## Archivos Creados

| Archivo | Funcion |
|---------|---------|
| `src/lib/chatbot-system-prompt.ts` | System prompt con contexto de negocio |
| `src/app/api/chat/route.ts` | API route edge con streaming |
| `src/components/Chatbot.tsx` | Orquestador (useChat + estado open/close) |
| `src/components/chat/ChatBubble.tsx` | Boton flotante inferior derecho |
| `src/components/chat/ChatWindow.tsx` | Ventana de chat con header |
| `src/components/chat/ChatMessages.tsx` | Lista de mensajes + auto-scroll |
| `src/components/chat/ChatInput.tsx` | Input + boton enviar |

## Archivos Modificados

| Archivo | Cambio |
|---------|--------|
| `src/app/layout.tsx` | Agregado `<Chatbot />` con dynamic import (SSR: false) |
| `src/components/ScrollToTop.tsx` | Movido a esquina inferior izquierda (`left-8`) |
| `package.json` | Agregados: `ai`, `@ai-sdk/openai`, `@ai-sdk/react` |

## Arquitectura

```
Usuario click bubble --> ChatWindow se abre
                              |
                    ChatMessages + ChatInput
                              |
                    useChat() --> sendMessage({ text })
                              |
                      POST /api/chat (edge runtime)
                              |
                    convertToModelMessages()
                              |
                    streamText(gpt-4o-mini) + SYSTEM_PROMPT
                              |
                    toUIMessageStreamResponse() --> streaming al cliente
```

## Configuracion

### Variables de Entorno

| Variable | Donde | Valor |
|----------|-------|-------|
| `OPENAI_API_KEY` | `.env.local` | sk-proj-40c...tYA |
| `OPENAI_API_KEY` | Vercel Production | Mismo valor |
| `OPENAI_API_KEY` | Vercel Preview | Mismo valor |

### API Key OpenAI

- **Nombre:** `moduloria-chatbot-web`
- **Proyecto OpenAI:** `n8n nico`
- **Permisos:** Restricted (Model capabilities: Request, Responses: Write)
- **Dashboard:** https://platform.openai.com/api-keys

## System Prompt - Reglas Clave

1. Responde SIEMPRE en espanol
2. Conciso: 2-4 frases maximo
3. **NUNCA menciona precios** (el presupuesto se define en la auditoria)
4. Guia hacia /auditoria cuando detecta interes
5. No inventa datos ni cifras
6. Admite cuando no sabe algo

## Diseno UI

- **Bubble:** `fixed bottom-6 right-6`, color `bg-accent-copper`, icono MessageCircle
- **Window Desktop:** `w-[380px] h-[520px]`, glass card con backdrop-blur
- **Window Mobile:** fullscreen (`max-md:inset-0`)
- **Scrollbar:** semi-transparente oscuro (no blanco)
- **ScrollToTop:** movido a `fixed bottom-8 left-8` para no superponerse

## Costo Estimado

- Modelo: gpt-4o-mini
- Costo por conversacion: ~$0.002 USD
- 1000 conversaciones/mes: ~$2 USD
- maxOutputTokens: 500 (respuestas concisas)

## Problemas Resueltos en la Implementacion

1. **AI SDK v6 breaking changes:** `useChat` ya no devuelve `input`/`handleInputChange`/`handleSubmit`. Se maneja estado de input manualmente + `sendMessage({ text })`.
2. **UIMessage vs Message:** En v6 los mensajes usan `parts[]` en vez de `content`. Se usa `convertToModelMessages()` (async) para convertir antes de pasar a `streamText`.
3. **toDataStreamResponse no existe:** Reemplazado por `toUIMessageStreamResponse()`.
4. **maxTokens renombrado:** Ahora es `maxOutputTokens`.
5. **Dominio no apuntaba al deploy correcto:** Se uso `vercel alias` para vincular moduloria.com al deploy mas reciente.

## Como Modificar el Chatbot

### Cambiar comportamiento del bot
Editar `src/lib/chatbot-system-prompt.ts` - ahi esta todo el contexto de negocio.

### Cambiar modelo
Editar `src/app/api/chat/route.ts` linea 11:
```ts
model: openai('gpt-4o-mini'),  // cambiar a 'gpt-4o' para respuestas mas inteligentes (~10x mas caro)
```

### Cambiar limites de respuesta
Editar `maxOutputTokens` en `route.ts` (500 = ~375 palabras max).

### Cambiar estilo visual
- Bubble: `src/components/chat/ChatBubble.tsx`
- Window: `src/components/chat/ChatWindow.tsx`
- Mensajes: `src/components/chat/ChatMessages.tsx`

## Deploy

```bash
# Desarrollo
cd /Users/nicolasfarchica/Desktop/ModulorIA/web
npm run dev

# Produccion
git add . && git commit -m "mensaje" && git push origin main

# Si el dominio no actualiza, vincular manualmente:
npx vercel alias <deployment-url> moduloria.com
```

## Mejoras Futuras Posibles

- [ ] Renderizar markdown en respuestas (negritas, links clickeables)
- [ ] Agregar indicador "escribiendo..." mientras el bot genera
- [ ] Guardar conversaciones en analytics para entender que preguntan los usuarios
- [ ] Rate limiting para evitar abuso del endpoint
- [ ] Agregar boton "Solicitar Auditoria" dentro del chat cuando el bot lo sugiere
