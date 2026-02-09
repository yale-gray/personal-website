export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string; // Lucide icon name
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'design' | 'tools';
}

export type ProjectStatus = 'completed' | 'in-progress' | 'archived';
export type FilterType = 'all' | ProjectStatus;
