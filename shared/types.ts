//------------------------------------------------------
// Jonathan Le
// Shared client and server side types
//------------------------------------------------------
export interface Project {
  _id: string;
  title: string;
  description: string;
  techStack: string[];
  repoUrl?: string;
  liveUrl?: string;
  createdAt: string;
}

export interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

export interface MyContact {
  cell: string;
  email: string;
  github: string;
}

export interface AboutMe {
  name: string;
  bio: string;
  description: string;
}

export interface TechnicalSkills {
  languages: string[];
  databases: string[];
  frameworks: string[];
  tooling: string[];
}

export interface PortfolioData {
    about: AboutMe;
    projects: Project[];
    contact: MyContact;
    skills: TechnicalSkills;
}