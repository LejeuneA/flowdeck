type DashboardHeaderProps = {
    onAddProject: () => void;
};

function DashboardHeader({ onAddProject }: DashboardHeaderProps) {
    return (
        <header className="flowdeck__header">
            <div>
                <p className="flowdeck__eyebrow">Creative project dashboard</p>
                <h1 className="flowdeck__title">Flowdeck</h1>
                <p className="flowdeck__subtitle">
                    Track creative projects, priorities, deadlines, and progress in one
                    calm workspace.
                </p>
            </div>

            <button
                className="flowdeck__primary-button"
                type="button"
                onClick={onAddProject}
            >
                Add Project
            </button>
        </header>
    );
}

export default DashboardHeader;
