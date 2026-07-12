import type { Project } from "../types/Project";

export function createDefaultProject(): Project {
    return {
        id: Date.now(),
        title: "New Project",
        client: "New Client",
        status: "To Do",
        priority: "Medium",
        deadline: "2026-09-01",
        category: "New category",
        progress: 0,
        completed: false,
    };
}
