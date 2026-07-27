export type AppView = "dashboard" | "projects";

type SidebarProps = {
    activeView: AppView;
    onNavigate: (view: AppView) => void;
    onOpenAssistant: () => void;
};

function Sidebar({
    activeView,
    onNavigate,
    onOpenAssistant,
}: SidebarProps) {
    return (
        <aside className="flowdeck__sidebar">
            <div>
                <div className="flowdeck__brand">
                    <h1 className="flowdeck__logo">
                        Flowdeck
                    </h1>

                    <p className="flowdeck__tagline">
                        Creative command center
                    </p>
                </div>

                <nav
                    className="flowdeck__nav"
                    aria-label="Flowdeck navigation"
                >
                    <button
                        className={`flowdeck__nav-button ${activeView === "dashboard"
                            ? "flowdeck__nav-button--active"
                            : ""
                            }`}
                        type="button"
                        aria-current={
                            activeView === "dashboard"
                                ? "page"
                                : undefined
                        }
                        onClick={() =>
                            onNavigate("dashboard")
                        }
                    >
                        Dashboard
                    </button>

                    <button
                        className={`flowdeck__nav-button ${activeView === "projects"
                            ? "flowdeck__nav-button--active"
                            : ""
                            }`}
                        type="button"
                        aria-current={
                            activeView === "projects"
                                ? "page"
                                : undefined
                        }
                        onClick={() =>
                            onNavigate("projects")
                        }
                    >
                        Projects
                    </button>

                    <button
                        className="flowdeck__nav-button"
                        type="button"
                        disabled
                        title="Task management is not included in this demo version."
                    >
                        Tasks
                        <span className="flowdeck__nav-label">
                            Soon
                        </span>
                    </button>

                    <button
                        className="flowdeck__nav-button"
                        type="button"
                        onClick={onOpenAssistant}
                    >
                        Assistant
                    </button>
                </nav>
            </div>

            <div className="flowdeck__profile">
                <p className="flowdeck__profile-name">
                    Açelya Lejeune
                </p>

                <p className="flowdeck__profile-role">
                    UX/UI · Frontend · AI Apps
                </p>
            </div>
        </aside>
    );
}

export default Sidebar;
