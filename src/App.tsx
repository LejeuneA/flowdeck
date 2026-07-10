import { useState } from "react";
import ChatPanel from "./components/ChatPanel";
import DashboardHeader from "./components/DashboardHeader";
import DashboardStats from "./components/DashboardStats";
import ProjectsSection from "./components/ProjectsSection";
import Sidebar from "./components/Sidebar";
import { projects } from "./data/projects";

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
                <DashboardHeader />

                <DashboardStats
                    totalProjects={totalProjects}
                    inProgressProjects={inProgressProjects}
                    completedProjects={completedProjects}
                    highPriorityProjects={highPriorityProjects}
                />

                <ProjectsSection
                    selectedStatus={selectedStatus}
                    onStatusChange={setSelectedStatus}
                    filteredProjects={filteredProjects}
                />
            </main>

            <ChatPanel />
        </div>
    );
}

export default App;
