import { Project } from "../../types";

interface ProjectProps {
    projects: Project[] | undefined;
}

const Projects = ({ projects }: ProjectProps) => {
    if (!projects) return null;

    return (
        <section id="projects">
        <h2>Projects</h2>
        {projects.map((project) => (
            <div key={project._id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul>
                {project.techStack.map((tech) => (
                <li key={tech}>{tech}</li>
                ))}
            </ul>
            {project.repoUrl && <a href={project.repoUrl}>Repository</a>}
            {project.liveUrl && <a href={project.liveUrl}>Live Site</a>}
            </div>
        ))}
        </section>
    );
};

export default Projects;