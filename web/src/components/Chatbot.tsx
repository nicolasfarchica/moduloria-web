'use client';

import { useState, useEffect, useCallback, FormEvent } from 'react';
import { useChat } from '@ai-sdk/react';
import { AnimatePresence } from 'framer-motion';
import ChatBubble from './chat/ChatBubble';
import ChatWindow from './chat/ChatWindow';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const { messages, sendMessage, status } = useChat();

  const isLoading = status === 'streaming' || status === 'submitted';

  const handleSubmit = useCallback(async (e?: FormEvent) => {
    e?.preventDefault();
    const text = input.trim();
    if (!text || isLoading) return;
    setInput('');
    await sendMessage({ text });
  }, [input, isLoading, sendMessage]);

  const handleClose = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleClose]);

  return (
    <>
      <AnimatePresence>
        {!isOpen && <ChatBubble onClick={() => setIsOpen(true)} isOpen={isOpen} />}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <ChatWindow
            messages={messages}
            input={input}
            setInput={setInput}
            handleSubmit={handleSubmit}
            isLoading={isLoading}
            onClose={handleClose}
          />
        )}
      </AnimatePresence>
    </>
  );
}
