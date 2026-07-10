import type { Project } from "../types/Project";

export function getProjectStats(projects: Project[]) {
  return {
    totalProjects: projects.length,
    inProgressProjects: projects.filter(
      (project) => project.status === "In Progress"
    ).length,
    completedProjects: projects.filter(
      (project) => project.status === "Completed"
    ).length,
    highPriorityProjects: projects.filter(
      (project) => project.priority === "High"
    ).length,
  };
}
