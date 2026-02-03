'use client';

import { Send } from 'lucide-react';
import { useTranslations } from 'next-intl';
import type { FormEvent, Dispatch, SetStateAction } from 'react';

interface ChatInputProps {
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
  handleSubmit: (e?: FormEvent) => void;
  isLoading: boolean;
}

export default function ChatInput({ input, setInput, handleSubmit, isLoading }: ChatInputProps) {
  const t = useTranslations('chat');

  return (
    <form onSubmit={handleSubmit} className="p-3 border-t border-white/10">
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={t('widget.placeholder')}
          className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-accent-copper/50 transition-colors"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          className="p-2.5 bg-accent-copper hover:bg-accent-copper/90 disabled:opacity-40 disabled:cursor-not-allowed text-white rounded-xl transition-colors"
          aria-label={t('aria.sendMessage')}
        >
          <Send className="w-4 h-4" />
        </button>
      </div>
    </form>
  );
}
