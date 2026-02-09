'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { SITE_CONFIG } from '@/lib/constants';

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <motion.div
        className="section-container text-center z-10"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Greeting */}
        <motion.p
          variants={fadeInUp}
          className="text-apple-gray text-sm md:text-base mb-4 tracking-wider uppercase"
        >
          Hello, I&apos;m
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={fadeInUp}
          className="text-hero font-bold mb-6 gradient-text"
        >
          {SITE_CONFIG.name}
        </motion.h1>

        {/* Title */}
        <motion.p
          variants={fadeInUp}
          className="text-2xl md:text-4xl text-apple-gray mb-8 max-w-3xl mx-auto text-balance"
        >
          {SITE_CONFIG.title}
        </motion.p>

        {/* CTA Button */}
        <motion.div variants={fadeInUp}>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-8 py-4 bg-apple-blue hover:bg-blue-600 text-white rounded-full transition-all duration-300 hover:scale-105"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            View My Work
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-apple-gray hover:text-apple-white transition-colors"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        aria-label="Scroll to about section"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.button>

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-apple-black/50 to-apple-black pointer-events-none" />
    </section>
  );
}
