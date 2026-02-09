import { Skill } from '@/types';

export const skills: Skill[] = [
  // Languages
  { name: 'Java', category: 'frontend' },
  { name: 'C++', category: 'frontend' },
  { name: 'C#', category: 'frontend' },
  { name: 'Python', category: 'frontend' },
  { name: 'JavaScript', category: 'frontend' },
  { name: 'R', category: 'frontend' },
  { name: 'HTML', category: 'frontend' },
  { name: 'CSS', category: 'frontend' },

  // Backend & Database
  { name: 'SQL', category: 'backend' },
  { name: 'JDBC', category: 'backend' },
  { name: 'MariaDB', category: 'backend' },
  { name: 'T-SQL', category: 'backend' },

  // Tools & Technologies
  { name: 'Git', category: 'tools' },
  { name: 'Docker', category: 'tools' },
  { name: 'Selenium', category: 'tools' },
  { name: 'Jira', category: 'tools' },
  { name: 'Office 365', category: 'tools' },
  { name: 'OpenAI API', category: 'tools' },
];

export const getSkillsByCategory = (category: Skill['category']) =>
  skills.filter(s => s.category === category);
