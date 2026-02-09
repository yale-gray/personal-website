'use client';

import { motion } from 'framer-motion';
import { Skill } from '@/types';
import { cn } from '@/lib/utils';

interface SkillTagProps {
  skill: Skill;
  index: number;
}

const categoryColors = {
  frontend: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  backend: 'bg-green-500/10 text-green-400 border-green-500/20',
  design: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  tools: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
};

export default function SkillTag({ skill, index }: SkillTagProps) {
  return (
    <motion.span
      className={cn(
        'px-4 py-2 rounded-full border text-sm font-medium',
        categoryColors[skill.category]
      )}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.05,
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
      }}
      whileHover={{ scale: 1.05 }}
    >
      {skill.name}
    </motion.span>
  );
}
