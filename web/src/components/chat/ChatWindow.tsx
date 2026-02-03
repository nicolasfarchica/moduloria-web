'use client';

import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import type { UIMessage } from 'ai';
import type { FormEvent, Dispatch, SetStateAction } from 'react';
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';

interface ChatWindowProps {
  messages: UIMessage[];
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
  handleSubmit: (e?: FormEvent) => void;
  isLoading: boolean;
  onClose: () => void;
}

export default function ChatWindow({
  messages,
  input,
  setInput,
  handleSubmit,
  isLoading,
  onClose,
}: ChatWindowProps) {
  const t = useTranslations('chat');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className="fixed bottom-24 right-6 z-50 w-[380px] h-[520px] max-md:inset-0 max-md:w-full max-md:h-full max-md:bottom-0 max-md:right-0 max-md:rounded-none bg-primary-dark/95 backdrop-blur-xl border border-white/10 rounded-2xl flex flex-col shadow-2xl"
      role="dialog"
      aria-label={t('aria.chatDialog')}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-400 rounded-full" />
          <span className="text-white font-medium text-sm">{t('widget.title')}</span>
        </div>
        <button
          onClick={onClose}
          className="p-1.5 hover:bg-white/10 rounded-lg transition-colors text-white/70 hover:text-white"
          aria-label={t('aria.closeChat')}
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Messages */}
      <ChatMessages messages={messages} />

      {/* Input */}
      <ChatInput
        input={input}
        setInput={setInput}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
      />
    </motion.div>
  );
}
