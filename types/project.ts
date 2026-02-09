import { ProjectStatus, FilterType } from './index';

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  status: ProjectStatus;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  order: number;
}

export interface ProjectCardProps {
  project: Project;
  index: number;
}

export interface ProjectsFilterProps {
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}
