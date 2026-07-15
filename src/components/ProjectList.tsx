import ProjectCard from "./ProjectCard";
import type { Project } from "../types/Project";

type ProjectListProps = {
    projects: Project[];
    onDeleteProject: (projectId: number) => void;
};

function ProjectList({ projects, onDeleteProject }: ProjectListProps) {
    return (
        <div className="project-grid">
            {projects.map((project) => (
                <ProjectCard
                    key={project.id}
                    {...project}
                    onDeleteProject={onDeleteProject}
                />
            ))}
        </div>
    );
}

export default ProjectList;
