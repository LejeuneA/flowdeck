import ProjectForm from "./ProjectForm";
import ProjectsSection from "./ProjectsSection";
import type {
    Project,
    ProjectStatusFilter,
} from "../types/Project";

type ProjectsPageProps = {
    projects: Project[];
    selectedStatus: ProjectStatusFilter;
    onStatusChange: (
        status: ProjectStatusFilter
    ) => void;
    onDeleteProject: (projectId: number) => void;
    onAddProject: () => void;
    onCreateProject: (project: Project) => void;
    onCancelProjectForm: () => void;
    isProjectFormOpen: boolean;
    projectCount: number;
    projectLimit: number;
    hasReachedProjectLimit: boolean;
};

function ProjectsPage({
    projects,
    selectedStatus,
    onStatusChange,
    onDeleteProject,
    onAddProject,
    onCreateProject,
    onCancelProjectForm,
    isProjectFormOpen,
    projectCount,
    projectLimit,
    hasReachedProjectLimit,
}: ProjectsPageProps) {
    return (
        <section className="projects-page">
            <header className="projects-page__header">
                <div>
                    <p className="flowdeck__eyebrow">
                        Demo workspace
                    </p>

                    <h1 className="projects-page__title">
                        Projects
                    </h1>

                    <p className="projects-page__description">
                        Review and manage the projects in your
                        temporary Flowdeck demo session.
                    </p>

                    <p className="projects-page__notice">
                        Changes are stored only for this browser
                        session and do not affect other visitors.
                    </p>
                </div>

                <div className="projects-page__actions">
                    <div className="flowdeck__demo-limit">
                        <span>
                            Demo projects
                        </span>

                        <strong>
                            {projectCount}/{projectLimit}
                        </strong>
                    </div>

                    <button
                        className="flowdeck__primary-button"
                        type="button"
                        disabled={hasReachedProjectLimit}
                        onClick={onAddProject}
                    >
                        {hasReachedProjectLimit
                            ? "Project limit reached"
                            : "Add Project"}
                    </button>
                </div>
            </header>

            {isProjectFormOpen && (
                <ProjectForm
                    onCancel={onCancelProjectForm}
                    onCreateProject={onCreateProject}
                />
            )}

            <ProjectsSection
                selectedStatus={selectedStatus}
                onStatusChange={onStatusChange}
                filteredProjects={projects}
                onDeleteProject={onDeleteProject}
            />
        </section>
    );
}

export default ProjectsPage;
