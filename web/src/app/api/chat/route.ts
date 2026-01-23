import { streamText, convertToModelMessages } from 'ai';
import { openai } from '@ai-sdk/openai';
import { MODULORIA_SYSTEM_PROMPT } from '@/lib/chatbot-system-prompt';

export const runtime = 'edge';

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: openai('gpt-4o-mini'),
    system: MODULORIA_SYSTEM_PROMPT,
    messages: await convertToModelMessages(messages),
    maxOutputTokens: 500,
  });

  return result.toUIMessageStreamResponse();
}
