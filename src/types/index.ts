// Types for JSON data structures

export interface HeroData {
  name: string;
  title: string;
  subtitle: string;
  description: string;
  currentPosition: {
    title: string;
    company: string;
    description: string;
  };
  profileImage: {
    src: string;
    alt: string;
  };
}

export interface Stat {
  value: string;
  label: string;
}

export interface SocialLink {
  name: string;
  url: string;
  external?: boolean;
}

export interface NavigationItem {
  name: string;
  href: string;
}

export interface ProfileData {
  stats: Stat[];
  socialLinks: SocialLink[];
  contact: {
    email: string;
    resumePath: string;
    availability: {
      status: string;
      description: string;
    };
  };
  navigation: NavigationItem[];
}

export interface Skill {
  id: string;
  icon: string;
  title: string;
  description: string;
  technologies: string[];
}

export type EmploymentType = 'Full-time' | 'Contract' | 'Part-time' | 'Freelance' | 'leadership' | string;
export type BorderStyle = 'current' | 'recent' | 'early' | string;

export interface EmploymentTypeConfig {
  label: string;
  color: string;
}

export interface Position {
  title: string;
  company: string;
  type: EmploymentType;
  period: string;
  description?: string;
}

export interface Experience {
  id: string;
  title: string;
  company?: string;
  location?: string;
  startDate?: string;
  endDate?: string;
  type?: EmploymentType;
  description: string;
  borderStyle?: BorderStyle;
  isCurrent?: boolean;
  isConsolidated?: boolean;
  period?: string;
  positions?: Position[];
}

export interface EmploymentConfig {
  employmentTypes: Record<EmploymentType | string, EmploymentTypeConfig>;
  borderColors: Record<BorderStyle, string>;
}

// Project types
export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  tags: string[];
  category: string;
  links: {
    github?: string;
    demo?: string;
    docs?: string;
  };
  featured: boolean;
  stats: {
    stars: number;
    forks: number;
  };
}

export interface ExperiencesData {
  employmentConfig: EmploymentConfig;
  experiences: Experience[];
}
