'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '@/components/ui/SectionWrapper';
import ExperienceItem from '@/components/ui/ExperienceItem';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { experiences } from '@/data/experience';

export default function Experience() {
  return (
    <SectionWrapper id="experience" className="bg-apple-gray-dark/50">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2
          variants={fadeInUp}
          className="text-section-title mb-16 text-center"
        >
          Experience
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <ExperienceItem key={exp.id} experience={exp} index={index} />
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
