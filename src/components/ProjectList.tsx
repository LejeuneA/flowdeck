import ProjectCard from "./ProjectCard";
import type { Project } from "../types/Project";

type ProjectListProps = {
    projects: Project[];
};

function ProjectList({ projects }: ProjectListProps) {
    return (
        <div className="project-grid">
            {projects.map((project) => (
                <ProjectCard
                    key={project.id}
                    title={project.title}
                    client={project.client}
                    status={project.status}
                    priority={project.priority}
                    deadline={project.deadline}
                    category={project.category}
                    progress={project.progress}
                    completed={project.completed}
                />
            ))}
        </div>
    );
}

export default ProjectList;
