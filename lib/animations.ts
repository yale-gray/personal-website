import { Variants } from 'framer-motion';

// Apple easing function
const appleEasing = [0.4, 0, 0.2, 1] as const;

// Fade in from bottom
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: appleEasing,
    }
  },
};

// Fade in with no movement
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: appleEasing,
    }
  },
};

// Stagger children animation
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// Scale in animation
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: appleEasing,
    },
  },
};

// Slide in from left
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: appleEasing,
    },
  },
};

// Slide in from right
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: appleEasing,
    },
  },
};

// Parallax effect
export const parallaxVariants = {
  hidden: { y: 0 },
  visible: (custom: number) => ({
    y: custom,
    transition: {
      duration: 0,
    },
  }),
};

// Text reveal (for animated text)
export const textReveal: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
      ease: appleEasing,
    },
  }),
};

// Navigation blur animation
export const navBlur = {
  initial: {
    backdropFilter: 'blur(0px)',
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  scrolled: {
    backdropFilter: 'blur(20px)',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    transition: {
      duration: 0.3,
      ease: appleEasing,
    },
  },
};
