import ProjectCard from "./ProjectCard";
import type { Project } from "../types/Project";

type ProjectListProps = {
    projects: Project[];
    onDeleteProject: (projectId: number) => void;
};

function ProjectList({
    projects,
    onDeleteProject,
}: ProjectListProps) {
    if (projects.length === 0) {
        return (
            <div className="project-list__empty">
                <h3>No projects found</h3>

                <p>
                    There are no projects matching the selected
                    status.
                </p>
            </div>
        );
    }

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
