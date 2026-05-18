//-----------------------------------------------------
// Logic processing for API end points related to portfolio data
//-----------------------------------------------------
import { Project, ContactItem, AboutMe, PortfolioData } from '../../../shared/types';
import { projects } from '../data/projects.data';
import { AppError } from '../middlewares/error.middleware';
import { contactInfo } from '../data/contact.data';
import { about } from '../data/about.data';

//------------------------------------------------------
// Portfolio Service Definitions
//------------------------------------------------------
export class PortfolioService {
  getPortfolio(): PortfolioData{
    return {
      about: this.getAbout(),
      projects: this.getProjects(),
      contact: this.getContact(),
    }
  }
  
  getAbout(): AboutMe {
    return about;
  }

  getContact(): ContactItem[] {
    return contactInfo;
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
