import { Project } from "../../../../shared/types";

interface ProjectProps {
    projects: Project[] | undefined;
}

export const Projects = ({ projects }: ProjectProps) => {
    if (!projects) return null;

    return (
        <section id="projects">
            <div className="section-label">Work</div>
            <h2 className="section-title fade-in">Projects</h2>
            <div className="projects-grid fade-in">
                {projects.map(project => (
                    <a key={project._id} className="project-card" href={project.repo} target="_blank" rel="noreferrer" id={project._id}>
                        <div className="card-body">
                            <div className="card-title">{project.title}</div>
                            <div className="card-desc">
                                {project.description}
                                <br /><br />
                                <i>Learned: {project.learned}</i>
                            </div>
                        </div>
                        <div className="card-footer">
                        <div className="card-link">View Repo</div>
                        </div>
                    </a>                    
                ))}
            </div>
        </section>
    );
};