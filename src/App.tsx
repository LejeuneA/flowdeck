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

const DEMO_PROJECT_LIMIT = 10;
const SESSION_STORAGE_KEY = "flowdeck-demo-projects";

function getInitialProjects(): Project[] {
    const savedProjects = sessionStorage.getItem(
        SESSION_STORAGE_KEY
    );

    if (!savedProjects) {
        return projects;
    }

    try {
        const parsedProjects = JSON.parse(savedProjects);

        if (!Array.isArray(parsedProjects)) {
            return projects;
        }

        return parsedProjects.slice(0, DEMO_PROJECT_LIMIT) as Project[];
    } catch {
        return projects;
    }
}

function App() {
    const [selectedStatus, setSelectedStatus] =
        useState<ProjectStatusFilter>("All");

    const [projectList, setProjectList] =
        useState<Project[]>(getInitialProjects);

    const [isProjectFormOpen, setIsProjectFormOpen] =
        useState(false);

    const hasReachedProjectLimit =
        projectList.length >= DEMO_PROJECT_LIMIT;

    useEffect(() => {
        sessionStorage.setItem(
            SESSION_STORAGE_KEY,
            JSON.stringify(projectList)
        );
    }, [projectList]);

    function handleAddProject() {
        if (hasReachedProjectLimit) {
            return;
        }

        setIsProjectFormOpen(true);
    }

    function handleCreateProject(project: Project) {
        setProjectList((currentProjects) => {
            if (
                currentProjects.length >= DEMO_PROJECT_LIMIT
            ) {
                return currentProjects;
            }

            return [...currentProjects, project];
        });

        setIsProjectFormOpen(false);
    }

    function handleDeleteProject(projectId: number) {
        setProjectList((currentProjects) =>
            currentProjects.filter(
                (project) => project.id !== projectId
            )
        );
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
            : projectList.filter(
                (project) =>
                    project.status === selectedStatus
            );

    return (
        <div className="flowdeck">
            <Sidebar />

            <main className="flowdeck__main">
                <DashboardHeader
                    onAddProject={handleAddProject}
                />

                <DashboardStats
                    totalProjects={totalProjects}
                    inProgressProjects={inProgressProjects}
                    completedProjects={completedProjects}
                    highPriorityProjects={highPriorityProjects}
                />

                {isProjectFormOpen && (
                    <ProjectForm
                        onCancel={() =>
                            setIsProjectFormOpen(false)
                        }
                        onCreateProject={
                            handleCreateProject
                        }
                    />
                )}

                <ProjectsSection
                    selectedStatus={selectedStatus}
                    onStatusChange={setSelectedStatus}
                    filteredProjects={filteredProjects}
                    onDeleteProject={handleDeleteProject}
                />
            </main>

            <ChatPanel projects={projectList} />
        </div>
    );
}

export default App;
