//------------------------------------------------------
// Shared client and server side types
//------------------------------------------------------
export interface Cache<T> {
  data: T;
  timestamp: number;
}

export interface Project {
  _id: string;
  title: string;
  description: string;
  learned: string;
  repo: string;
  src?: string;
}

export interface ContactItem {
  icon: string;
  label: string;
  value: string;
  href?: string;
}

export interface AboutMe {
  name: string;
  bio: string;
  description: string;
  skills: Record<string, string[]>;
}

export interface PortfolioData {
  about: AboutMe;
  projects: Project[];
  contact: ContactItem[];
}