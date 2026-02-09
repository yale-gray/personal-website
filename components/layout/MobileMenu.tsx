'use client';

import { motion } from 'framer-motion';
import { NavItem } from '@/types';

interface MobileMenuProps {
  items: NavItem[];
  onItemClick: (href: string) => void;
  onClose: () => void;
}

const menuVariants = {
  closed: {
    opacity: 0,
    x: '100%',
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
  open: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
};

const itemVariants = {
  closed: { opacity: 0, x: 20 },
  open: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  }),
};

export default function MobileMenu({ items, onItemClick, onClose }: MobileMenuProps) {
  return (
    <>
      {/* Backdrop */}
      <motion.div
        className="fixed inset-0 bg-black/50 z-40 md:hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      {/* Menu */}
      <motion.div
        className="fixed top-0 right-0 bottom-0 w-64 bg-apple-gray-dark border-l border-white/10 z-50 md:hidden"
        variants={menuVariants}
        initial="closed"
        animate="open"
        exit="closed"
      >
        <div className="flex flex-col gap-6 p-8 pt-24">
          {items.map((item, i) => (
            <motion.a
              key={item.href}
              href={item.href}
              custom={i}
              variants={itemVariants}
              onClick={(e) => {
                e.preventDefault();
                onItemClick(item.href);
              }}
              className="text-apple-white hover:text-apple-blue transition-colors text-lg"
            >
              {item.label}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </>
  );
}
