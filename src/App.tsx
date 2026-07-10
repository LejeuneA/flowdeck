import { useState } from "react";
import ProjectList from "./components/ProjectList";
import { projects } from "./data/projects";
import ProjectFilters from "./components/ProjectFilters";
import DashboardStats from "./components/DashboardStats";
import ChatPanel from "./components/ChatPanel";

function App() {
    const [selectedStatus, setSelectedStatus] = useState<
        "All" | "To Do" | "In Progress" | "Completed"
    >("All");

    const totalProjects = projects.length;

    const inProgressProjects = projects.filter(
        (project) => project.status === "In Progress"
    ).length;

    const completedProjects = projects.filter(
        (project) => project.status === "Completed"
    ).length;

    const highPriorityProjects = projects.filter(
        (project) => project.priority === "High"
    ).length;

    const filteredProjects =
        selectedStatus === "All"
            ? projects
            : projects.filter((project) => project.status === selectedStatus);

    return (
        <div className="flowdeck">
            <aside className="flowdeck__sidebar">
                <div>
                    <div className="flowdeck__brand">
                        <h1 className="flowdeck__logo">Flowdeck</h1>
                        <p className="flowdeck__tagline">Creative command center</p>
                    </div>

                    <nav className="flowdeck__nav">
                        <button className="flowdeck__nav-button flowdeck__nav-button--active">
                            Dashboard
                        </button>
                        <button className="flowdeck__nav-button">Projects</button>
                        <button className="flowdeck__nav-button">Tasks</button>
                        <button className="flowdeck__nav-button">Assistant</button>
                    </nav>
                </div>

                <div className="flowdeck__profile">
                    <p className="flowdeck__profile-name">Açelya Lejeune</p>
                    <p className="flowdeck__profile-role">
                        UX/UI · Frontend · AI Apps
                    </p>
                </div>
            </aside>

            <main className="flowdeck__main">
                <header className="flowdeck__header">
                    <div>
                        <p className="flowdeck__eyebrow">Project Dashboard</p>
                        <h2 className="flowdeck__title">Flowdeck</h2>
                        <p className="flowdeck__description">
                            Creative project management, without the chaos.
                        </p>
                    </div>

                    <button className="flowdeck__primary-button">Add project</button>
                </header>

                <DashboardStats
                    totalProjects={totalProjects}
                    inProgressProjects={inProgressProjects}
                    completedProjects={completedProjects}
                    highPriorityProjects={highPriorityProjects}
                />

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
                            onStatusChange={setSelectedStatus}
                        />
                    </div>

                    <ProjectList projects={filteredProjects} />
                </section>
            </main>

            <ChatPanel />
        </div>
    );
}

export default App;
