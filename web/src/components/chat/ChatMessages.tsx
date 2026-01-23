'use client';

import { useEffect, useRef } from 'react';
import type { UIMessage } from 'ai';

interface ChatMessagesProps {
  messages: UIMessage[];
}

const WELCOME_MESSAGE = `Hola! Soy el asistente de ModulorIA. Puedo ayudarte con:\n\n- Nuestros servicios de IA para construccion modular\n- Precios y plazos de implementacion\n- Como funciona la Auditoria Diagnostica gratuita\n\nEn que puedo ayudarte?`;

export default function ChatMessages({ messages }: ChatMessagesProps) {
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent" role="log" aria-live="polite" style={{ scrollbarColor: 'rgba(255,255,255,0.1) transparent', scrollbarWidth: 'thin' }}>
      {/* Welcome message */}
      <div className="flex justify-start">
        <div className="max-w-[85%] px-4 py-3 rounded-2xl bg-white/5 text-white/90 text-sm whitespace-pre-line">
          {WELCOME_MESSAGE}
        </div>
      </div>

      {/* Conversation messages */}
      {messages.map((message) => {
        const text = message.parts
          .filter((part): part is { type: 'text'; text: string } => part.type === 'text')
          .map((part) => part.text)
          .join('');
        if (!text) return null;
        return (
          <div
            key={message.id}
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm whitespace-pre-line ${
                message.role === 'user'
                  ? 'bg-accent-copper/20 text-white'
                  : 'bg-white/5 text-white/90'
              }`}
            >
              {text}
            </div>
          </div>
        );
      })}
      <div ref={endRef} />
    </div>
  );
}
