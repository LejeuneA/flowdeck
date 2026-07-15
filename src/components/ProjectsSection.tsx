import ProjectFilters from "./ProjectFilters";
import ProjectList from "./ProjectList";
import type { Project, ProjectStatusFilter } from "../types/Project";

type ProjectsSectionProps = {
    selectedStatus: ProjectStatusFilter;
    onStatusChange: (status: ProjectStatusFilter) => void;
    filteredProjects: Project[];
    onDeleteProject: (projectId: number) => void;
};

function ProjectsSection({
    selectedStatus,
    onStatusChange,
    filteredProjects,
    onDeleteProject,
}: ProjectsSectionProps) {
    return (
        <section>
            <div className="flowdeck__toolbar">
                <h3 className="flowdeck__section-title">
                    Projects{" "}
                    <span className="flowdeck__section-count">
                        {filteredProjects.length}
                    </span>
                </h3>

                <ProjectFilters
                    selectedStatus={selectedStatus}
                    onStatusChange={onStatusChange}
                />
            </div>

            <ProjectList
                projects={filteredProjects}
                onDeleteProject={onDeleteProject}
            />
        </section>
    );
}

export default ProjectsSection;
