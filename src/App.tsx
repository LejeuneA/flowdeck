import { useState } from "react";
import ChatPanel from "./components/ChatPanel";
import DashboardHeader from "./components/DashboardHeader";
import DashboardStats from "./components/DashboardStats";
import ProjectsSection from "./components/ProjectsSection";
import Sidebar from "./components/Sidebar";
import { projects } from "./data/projects";
import type { ProjectStatusFilter } from "./types/Project";
import { getProjectStats } from "./utils/projectStats";
import { createDefaultProject } from "./utils/createProject";

function App() {
    const [selectedStatus, setSelectedStatus] =
        useState<ProjectStatusFilter>("All");

    const [projectList, setProjectList] = useState(projects);

    function handleAddProject() {
        const newProject = createDefaultProject();

        setProjectList((currentProjects) => [...currentProjects, newProject]);
    }

    const {
        totalProjects,
        inProgressProjects,
        completedProjects,
        highPriorityProjects,
    } = getProjectStats(projectList);

    const filteredProjects =
        selectedStatus === "All"
            ? projectList
            : projectList.filter((project) => project.status === selectedStatus);

    return (
        <div className="flowdeck">
            <Sidebar />

            <main className="flowdeck__main">
                <DashboardHeader onAddProject={handleAddProject} />

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
