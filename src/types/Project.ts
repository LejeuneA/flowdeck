export type ProjectStatus = "To Do" | "In Progress" | "Completed";

export type ProjectPriority = "Low" | "Medium" | "High";

export type ISODateString = string;

export type Project = {
    id: number;
    title: string;
    client: string;
    status: ProjectStatus;
    priority: ProjectPriority;
    deadline: ISODateString;
    category: string;
    progress: number;
    completed: boolean;
};

export type ProjectStatusFilter = "All" | ProjectStatus;
