'use client';

import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { socialLinks } from '@/data/social';
import { SITE_CONFIG } from '@/lib/constants';

export default function Contact() {
  return (
    <SectionWrapper id="contact" className="bg-apple-gray-dark/50">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-3xl mx-auto text-center"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-section-title mb-6"
        >
          Let&apos;s Work Together
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          className="text-apple-gray text-lg mb-12 max-w-2xl mx-auto"
        >
          I&apos;m always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision. Feel free to reach out!
        </motion.p>

        {/* Email CTA */}
        <motion.div variants={fadeInUp} className="mb-12">
          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-apple-blue hover:bg-blue-600 text-white rounded-full transition-all duration-300 hover:scale-105 text-lg font-medium"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={fadeInUp}
          className="flex justify-center gap-6"
        >
          {socialLinks.map((link, index) => {
            const Icon = Icons[link.icon as keyof typeof Icons] as any;
            return (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-apple-gray-dark border border-white/10 flex items-center justify-center text-apple-gray hover:text-apple-white hover:border-apple-blue hover:bg-apple-blue/10 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -4 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                aria-label={link.name}
              >
                {Icon && <Icon size={20} />}
              </motion.a>
            );
          })}
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
