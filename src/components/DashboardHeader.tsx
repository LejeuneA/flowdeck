type DashboardHeaderProps = {
    onAddProject: () => void;
    projectCount: number;
    projectLimit: number;
    hasReachedProjectLimit: boolean;
};

function DashboardHeader({
    onAddProject,
    projectCount,
    projectLimit,
    hasReachedProjectLimit,
}: DashboardHeaderProps) {
    return (
        <header className="flowdeck__header">
            <div>
                <p className="flowdeck__eyebrow">
                    Creative project dashboard
                </p>

                <h1 className="flowdeck__title">
                    Flowdeck
                </h1>

                <p className="flowdeck__subtitle">
                    Track creative projects, priorities,
                    deadlines, and progress in one calm
                    workspace.
                </p>
            </div>

            <div className="flowdeck__header-actions">
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
                    title={
                        hasReachedProjectLimit
                            ? `Demo limit reached. Maximum ${projectLimit} projects.`
                            : "Add a new project"
                    }
                    onClick={onAddProject}
                >
                    {hasReachedProjectLimit
                        ? "Project limit reached"
                        : "Add Project"}
                </button>
            </div>
        </header>
    );
}

export default DashboardHeader;
