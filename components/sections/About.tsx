'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SkillTag from '@/components/ui/SkillTag';
import { fadeInUp, slideInLeft, staggerContainer } from '@/lib/animations';
import { skills } from '@/data/skills';

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left: Image */}
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative aspect-square max-w-md mx-auto lg:mx-0"
        >
          <div className="absolute inset-0 bg-apple-blue/20 rounded-2xl blur-3xl" />
          <Image
            src="https://placehold.co/600x600/1d1d1f/f5f5f7?text=Profile+Photo"
            alt="Profile"
            width={600}
            height={600}
            className="object-cover rounded-2xl relative z-10"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </motion.div>

        {/* Right: Content */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-section-title mb-6"
          >
            About Me
          </motion.h2>

          <motion.div
            variants={fadeInUp}
            className="space-y-4 text-apple-gray text-lg mb-8"
          >
            <p>
              I&apos;m a Computer Science student at the University of Oklahoma with a
              Minor in Mathematics, expected to graduate in May 2027 with a 3.88 GPA.
              I have hands-on experience in software development, test automation, and
              full-stack engineering through my internship at Paycom and various academic projects.
            </p>
            <p>
              My work spans from building AI-powered web applications with Java and Docker
              to designing complex database systems. I&apos;m also passionate about education,
              serving as a teaching assistant for Discrete Structures and tutoring students
              in mathematics and computer science.
            </p>
          </motion.div>

          {/* Skills */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-xl font-semibold mb-4">Technologies I work with</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <SkillTag key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
