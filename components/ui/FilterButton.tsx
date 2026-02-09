'use client';

import { motion } from 'framer-motion';

interface FilterButtonProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

export default function FilterButton({ label, active, onClick }: FilterButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
        active
          ? 'bg-apple-blue text-white'
          : 'bg-apple-gray-dark text-apple-gray hover:text-apple-white border border-white/10'
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {label}
    </motion.button>
  );
}
