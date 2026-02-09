'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '@/components/ui/SectionWrapper';
import ProjectCard from '@/components/ui/ProjectCard';
import FilterButton from '@/components/ui/FilterButton';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { projects } from '@/data/projects';
import { FilterType } from '@/types';

const filters: { label: string; value: FilterType }[] = [
  { label: 'All', value: 'all' },
  { label: 'Completed', value: 'completed' },
  { label: 'In Progress', value: 'in-progress' },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const filteredProjects = projects.filter(
    (project) => activeFilter === 'all' || project.status === activeFilter
  );

  return (
    <SectionWrapper id="projects">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2
          variants={fadeInUp}
          className="text-section-title mb-8 text-center"
        >
          Featured Projects
        </motion.h2>

        {/* Filters */}
        <motion.div
          variants={fadeInUp}
          className="flex justify-center gap-4 mb-12 flex-wrap"
        >
          {filters.map((filter) => (
            <FilterButton
              key={filter.value}
              label={filter.label}
              active={activeFilter === filter.value}
              onClick={() => setActiveFilter(filter.value)}
            />
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          layout
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.p
            variants={fadeInUp}
            className="text-center text-apple-gray text-lg py-12"
          >
            No projects found in this category.
          </motion.p>
        )}
      </motion.div>
    </SectionWrapper>
  );
}
