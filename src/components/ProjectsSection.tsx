import ProjectFilters from "./ProjectFilters";
import ProjectList from "./ProjectList";
import type { Project } from "../types/Project";

type FilterStatus = "All" | Project["status"];

type ProjectsSectionProps = {
    selectedStatus: FilterStatus;
    onStatusChange: (status: FilterStatus) => void;
    filteredProjects: Project[];
};

function ProjectsSection({
    selectedStatus,
    onStatusChange,
    filteredProjects,
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

            <ProjectList projects={filteredProjects} />
        </section>
    );
}

export default ProjectsSection;
