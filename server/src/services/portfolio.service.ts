//-----------------------------------------------------
// This is where the actual work happens, completely decoupled from HTTP. 
// Services don't know about req or res — they receive plain data and return plain data. 
// This makes them independently testable (no need to mock HTTP), and when you add a 
// database, only this layer changes.
//-----------------------------------------------------
import { Project, MyContact, AboutMe, TechnicalSkills } from '../types';
import { AppError } from '../middlewares/error.middleware';

// Placeholder data — replace with DB queries when ready
//------------------------------------------------------
// Placeholder Data
//------------------------------------------------------
const projects: Project[] = [
  {
    id: '1',
    title: 'Portfolio Site',
    description: 'Personal portfolio built with React and Express.',
    techStack: ['React', 'TypeScript', 'Express', 'Node.js'],
    repoUrl: 'https://github.com/yourusername/portfolio',
    liveUrl: 'https://yourportfolio.com',
    createdAt: new Date().toISOString(),
  },
];

const contact: MyContact = {
  cell: "780-655-6719",
  email: "jonathanlemain@gmail.com",
  github: "https://github.com/Jonathan-C-L"
}

const about: AboutMe = {
  description: `I am a Computer Engineering Technology (CNT) graduate from the Northern Alberta Institute of Technology (NAIT). I have approxmiately 2 years of programming experience, with proficiencies in full-stack application development and embedded systems. My primary interest is in data, as I find it genuinely engaging and fulfilling to solve problems related to obtaining, transforming, transmitting, and storing data in an efficient and scalable manner.`
}

const skills: TechnicalSkills = {
  languages: ["C#", "Python", "TypeScript", "JavaScript", "C", "SQL","PHP"],
  databases: ["MySQL", "SQL Server", "MongoDB"],
  frameworks: ["Express.js", "ASP.NET (8.0)","jQuery", "ADO.NET", "Entity Framework"],
  tooling: ["Git", "Github", "AI Agents", "Node.js", "VSCode", "Azure"]
}
//------------------------------------------------------
// Portfolio Service Definitions
//------------------------------------------------------
export class PortfolioService {
  getPortfolio(){
    return {
      about: this.getAbout(),
      skills: this.getSkills(),
      contact: this.getContact(),
      projects: this.getProjects()
    }
  }
  
  getAbout(): AboutMe {
    return about;
  }

  getContact(): MyContact {
    return contact;
  }

  getSkills(): TechnicalSkills {
    return skills;
  }

  getProjects(): Project[] {
    return projects;
  }

  getProjectById(id: string): Project {
    const project = projects.find((p) => p.id === id);
    if (!project) throw new AppError(`Project with id "${id}" not found`, 404);
    return project;
  }

  // Placeholder: wire up an email service (Nodemailer, Resend, etc.) here
  // sendContact(payload: ContactPayload): { received: boolean } {
  //   console.warn('Contact form submission received:', payload);
  //   return { received: true };
  // }
}
