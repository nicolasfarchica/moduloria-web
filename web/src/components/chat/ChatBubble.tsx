'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface ChatBubbleProps {
  onClick: () => void;
  isOpen: boolean;
}

export default function ChatBubble({ onClick, isOpen }: ChatBubbleProps) {
  const t = useTranslations('chat.aria');

  if (isOpen) return null;

  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-14 md:h-14 bg-accent-copper hover:bg-accent-copper/90 text-white rounded-full shadow-copper-glow flex items-center justify-center transition-colors"
      aria-label={t('openChat')}
      aria-expanded={isOpen}
    >
      <MessageCircle className="w-6 h-6" />
    </motion.button>
  );
}
