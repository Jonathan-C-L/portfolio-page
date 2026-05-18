//-----------------------------------------------------
// Logic processing for API end points related to portfolio data
//-----------------------------------------------------
import { Project, ContactItem, AboutMe, PortfolioData } from '../../../shared/types';
import { projects } from '../data/projects.data';
import { AppError } from '../middlewares/error.middleware';
import { contactInfo } from '../data/contact.data';
import { about } from '../data/about.data';

interface Cache<T> {
  data: T;
  timestamp: number;
}

const CACHE_TTL = 24 * 60 * 60 * 1000; // 24 hour in ms

//------------------------------------------------------
// Portfolio Service Definitions
//------------------------------------------------------
export class PortfolioService {
  private cache: Cache<PortfolioData> | null = null;

  getPortfolio(): PortfolioData{
    // Return cached data if it is still within the 24 hour window of the previous fetch
    if (this.cache && Date.now() - this.cache.timestamp < CACHE_TTL) {
      return this.cache.data;
    }

    const projects: Project[] = this.getProjects();
    const about: AboutMe = this.getAbout();
    const contact: ContactItem[] = this.getContact();

    const data: PortfolioData = { projects, about, contact };
    return data;
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
}
