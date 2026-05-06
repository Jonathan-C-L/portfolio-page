//-----------------------------------------------------
// This is where the actual work happens, completely decoupled from HTTP. 
// Services don't know about req or res — they receive plain data and return plain data. 
// This makes them independently testable (no need to mock HTTP), and when you add a 
// database, only this layer changes.
//-----------------------------------------------------
/*
import { Project, ContactPayload } from '../types';
import { AppError } from '../middlewares/error.middleware';

// Placeholder data — replace with DB queries when ready
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

export class PortfolioService {
  getProjects(): Project[] {
    return projects;
  }

  getProjectById(id: string): Project {
    const project = projects.find((p) => p.id === id);
    if (!project) throw new AppError(`Project with id "${id}" not found`, 404);
    return project;
  }

  // Placeholder: wire up an email service (Nodemailer, Resend, etc.) here
  sendContact(payload: ContactPayload): { received: boolean } {
    console.warn('Contact form submission received:', payload);
    return { received: true };
  }
}
*/