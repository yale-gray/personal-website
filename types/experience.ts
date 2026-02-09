export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  startDate: string;
  endDate?: string;
  description: string[];
  technologies: string[];
  logo?: string;
  current: boolean;
}

export interface ExperienceItemProps {
  experience: Experience;
  index: number;
}
