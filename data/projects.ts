import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Pantry Pilot Web App',
    description: 'Full-stack, AI-assisted web application for generating personalized recipes and managing pantry inventory',
    longDescription: 'Built a full-stack, AI-assisted web application enabling users to generate personalized recipes and grocery lists, track nutritional macros, and manage pantry inventory based on budget, dietary preferences, and available ingredients. Collaborated with a team of developers using GitHub for version control, issue tracking, and CI/CD integration to streamline deployment and maintain code quality. Designed modular architecture with a Java backend, Dockerized deployment, and MariaDB for persistent data storage, and integrated OpenAI API for recipe generation.',
    image: 'https://placehold.co/800x600/1d1d1f/f5f5f7?text=Pantry+Pilot',
    tags: ['Java', 'Docker', 'MariaDB', 'OpenAI API', 'CI/CD'],
    status: 'completed',
    githubUrl: 'https://github.com/yale-gray',
    featured: true,
    order: 1,
  },
  {
    id: 'project-2',
    title: 'Park Database System',
    description: 'Multi-entity relational database system for National Park Service management with Java JDBC interface',
    longDescription: 'Designed a multi-entity relational database for a National Park Service style system, implementing normalized schemas, referential integrity, and efficient indexing strategies to support high volume queries. Developed robust stored procedures in T-SQL for inserting, updating, and retrieving ranger teams, visitors, researchers, donations, and permit records, ensuring consistent data validation and error handling across the system. Built a full Java JDBC interface that connects to the database, executes parameterized queries, and displays structured results, providing a functional prototype for a complete CRUD-based administrative management tool.',
    image: 'https://placehold.co/800x600/1d1d1f/f5f5f7?text=Park+Database',
    tags: ['Java', 'SQL', 'JDBC', 'T-SQL', 'Database Design'],
    status: 'completed',
    githubUrl: 'https://github.com/yale-gray',
    featured: true,
    order: 2,
  },
];

export const getFeaturedProjects = () => projects.filter(p => p.featured);
export const getProjectsByStatus = (status: Project['status']) =>
  projects.filter(p => p.status === status);
