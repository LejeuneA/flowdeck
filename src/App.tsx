import { useState } from "react";
import ChatPanel from "./components/ChatPanel";
import DashboardHeader from "./components/DashboardHeader";
import DashboardStats from "./components/DashboardStats";
import ProjectForm from "./components/ProjectForm";
import ProjectsSection from "./components/ProjectsSection";
import Sidebar from "./components/Sidebar";
import { projects } from "./data/projects";
import type { ProjectStatusFilter } from "./types/Project";
import { getProjectStats } from "./utils/projectStats";

function App() {
    const [selectedStatus, setSelectedStatus] =
        useState<ProjectStatusFilter>("All");

    const [projectList, setProjectList] = useState(projects);
    const [isProjectFormOpen, setIsProjectFormOpen] = useState(false);

    function handleAddProject() {
        setIsProjectFormOpen(true);
    }

    function handleCreateProject(project: (typeof projects)[number]) {
        setProjectList((currentProjects) => [...currentProjects, project]);
        setIsProjectFormOpen(false);
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

                {isProjectFormOpen && (
                    <ProjectForm
                        onCancel={() => setIsProjectFormOpen(false)}
                        onCreateProject={handleCreateProject}
                    />
                )}

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
