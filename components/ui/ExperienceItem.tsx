'use client';

import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { ExperienceItemProps } from '@/types/experience';
import { fadeInUp } from '@/lib/animations';

export default function ExperienceItem({ experience, index }: ExperienceItemProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.2 }}
      className="relative pl-8 pb-12 last:pb-0 border-l-2 border-apple-gray-dark hover:border-apple-blue transition-colors duration-300"
    >
      {/* Timeline dot */}
      <div className="absolute left-0 -translate-x-1/2 w-4 h-4 rounded-full bg-apple-blue border-4 border-apple-black" />

      {/* Icon */}
      <div className="absolute left-0 -translate-x-1/2 w-10 h-10 rounded-full bg-apple-blue/10 flex items-center justify-center -top-3">
        <Briefcase size={20} className="text-apple-blue" />
      </div>

      {/* Content */}
      <div className="ml-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
          <h3 className="text-xl font-semibold text-apple-white">
            {experience.role}
          </h3>
          <span className="text-apple-gray text-sm">{experience.period}</span>
        </div>

        <p className="text-apple-blue mb-4">{experience.company}</p>

        <ul className="space-y-2 mb-4">
          {experience.description.map((item, i) => (
            <li key={i} className="text-apple-gray flex items-start gap-2">
              <span className="text-apple-blue mt-2">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-apple-gray-dark text-apple-gray text-xs rounded-full border border-white/10"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
