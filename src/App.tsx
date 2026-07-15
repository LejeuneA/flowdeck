import { useEffect, useState } from "react";
import ChatPanel from "./components/ChatPanel";
import DashboardHeader from "./components/DashboardHeader";
import DashboardStats from "./components/DashboardStats";
import ProjectForm from "./components/ProjectForm";
import ProjectsSection from "./components/ProjectsSection";
import Sidebar from "./components/Sidebar";
import { projects } from "./data/projects";
import type { Project, ProjectStatusFilter } from "./types/Project";
import { getProjectStats } from "./utils/projectStats";

const STORAGE_KEY = "flowdeck-projects";

function getInitialProjects(): Project[] {
    const savedProjects = localStorage.getItem(STORAGE_KEY);

    if (!savedProjects) {
        return projects;
    }

    try {
        return JSON.parse(savedProjects) as Project[];
    } catch {
        return projects;
    }
}

function App() {
    const [selectedStatus, setSelectedStatus] =
        useState<ProjectStatusFilter>("All");

    const [projectList, setProjectList] =
        useState<Project[]>(getInitialProjects);

    const [isProjectFormOpen, setIsProjectFormOpen] = useState(false);

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(projectList));
    }, [projectList]);

    function handleAddProject() {
        setIsProjectFormOpen(true);
    }

    function handleCreateProject(project: Project) {
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

            <ChatPanel projects={projectList} />
        </div>
    );
}

export default App;
