export type Project = {
  id: number;
  title: string;
  client: string;
  status: "To Do" | "In Progress" | "Completed";
  priority: "Low" | "Medium" | "High";
  deadline: string;
  category: string;
  progress: number;
  completed: boolean;
};

export type ProjectStatusFilter = "All" | Project["status"];
