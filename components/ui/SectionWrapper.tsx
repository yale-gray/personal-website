'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';
import { ANIMATION_CONFIG } from '@/lib/constants';
import { cn } from '@/lib/utils';

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
}

export default function SectionWrapper({
  children,
  id,
  className,
  containerClassName,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn('section-spacing', className)}
    >
      <motion.div
        className={cn('section-container', containerClassName)}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: ANIMATION_CONFIG.whileInViewOnce,
          amount: ANIMATION_CONFIG.whileInViewAmount
        }}
        variants={fadeInUp}
      >
        {children}
      </motion.div>
    </section>
  );
}
