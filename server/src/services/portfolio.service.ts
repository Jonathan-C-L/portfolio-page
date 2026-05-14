//-----------------------------------------------------
// This is where the actual work happens, completely decoupled from HTTP. 
// Services don't know about req or res — they receive plain data and return plain data. 
// This makes them independently testable (no need to mock HTTP), and when you add a 
// database, only this layer changes.
//-----------------------------------------------------
import { Project, MyContact, AboutMe, TechnicalSkills, PortfolioData } from '../../../shared/types';
import { projects } from '../data/projects.data';
import { AppError } from '../middlewares/error.middleware';
import { contact } from '../data/contact.data';
import { about } from '../data/about.data';
import { skills } from '../data/skills.data';

//------------------------------------------------------
// Portfolio Service Definitions
//------------------------------------------------------
export class PortfolioService {
  getPortfolio(): PortfolioData{
    return {
      about: this.getAbout(),
      projects: this.getProjects(),
      contact: this.getContact(),
      skills: this.getSkills()
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
    const project = projects.find((p) => p._id === id);
    if (!project) throw new AppError(`Project with id "${id}" not found`, 404);
    return project;
  }

  // Placeholder: wire up an email service (Nodemailer, Resend, etc.) here
  // sendContact(payload: ContactPayload): { received: boolean } {
  //   console.warn('Contact form submission received:', payload);
  //   return { received: true };
  // }
}
