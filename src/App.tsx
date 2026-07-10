import { useState } from "react";
import ProjectList from "./components/ProjectList";
import { projects } from "./data/projects";
import ProjectFilters from "./components/ProjectFilters";
import DashboardStats from "./components/DashboardStats";
import ChatPanel from "./components/ChatPanel";
import Sidebar from "./components/Sidebar";

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
            <Sidebar />

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
