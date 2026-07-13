import { useState } from "react";
import type { Project, ProjectPriority, ProjectStatus } from "../types/Project";

type ProjectFormProps = {
    onCancel: () => void;
    onCreateProject: (project: Project) => void;
};

function ProjectForm({ onCancel, onCreateProject }: ProjectFormProps) {
    const [title, setTitle] = useState("");
    const [client, setClient] = useState("");
    const [status, setStatus] = useState<ProjectStatus>("To Do");
    const [priority, setPriority] = useState<ProjectPriority>("Medium");
    const [deadline, setDeadline] = useState("");
    const [category, setCategory] = useState("");


    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const newProject: Project = {
            id: Date.now(),
            title: title.trim(),
            client: client.trim(),
            status,
            priority,
            deadline,
            category: category.trim(),
            progress: status === "Completed" ? 100 : 0,
            completed: status === "Completed",
        };

        onCreateProject(newProject);
    }


    return (
        <section className="project-form">
            <div className="project-form__header">
                <div>
                    <p className="project-form__eyebrow">New project</p>
                    <h2 className="project-form__title">Add a project</h2>
                </div>

                <button
                    className="project-form__close"
                    type="button"
                    onClick={onCancel}
                >
                    Close
                </button>
            </div>

            <form className="project-form__grid" onSubmit={handleSubmit}>
                <label className="project-form__field">
                    <span>Project title</span>
                    <input
                        type="text"
                        placeholder="Website redesign"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                    />
                </label>

                <label className="project-form__field">
                    <span>Client</span>
                    <input
                        type="text"
                        placeholder="Northstar Studio"
                        value={client}
                        onChange={(event) => setClient(event.target.value)}
                    />
                </label>

                <label className="project-form__field">
                    <span>Status</span>
                    <select
                        value={status}
                        onChange={(event) => setStatus(event.target.value as ProjectStatus)}
                    >
                        <option>To Do</option>
                        <option>In Progress</option>
                        <option>Completed</option>
                    </select>
                </label>

                <label className="project-form__field">
                    <span>Priority</span>
                    <select
                        value={priority}
                        onChange={(event) =>
                            setPriority(event.target.value as ProjectPriority)
                        }
                    >
                        <option>Low</option>
                        <option>Medium</option>
                        <option>High</option>
                    </select>
                </label>

                <label className="project-form__field">
                    <span>Deadline</span>
                    <input
                        type="date"
                        value={deadline}
                        onChange={(event) => setDeadline(event.target.value)}
                    />
                </label>

                <label className="project-form__field">
                    <span>Category</span>
                    <input
                        type="text"
                        placeholder="Web design"
                        value={category}
                        onChange={(event) => setCategory(event.target.value)}
                    />
                </label>

                <div className="project-form__actions">
                    <button
                        type="button"
                        className="project-form__secondary"
                        onClick={onCancel}
                    >
                        Cancel
                    </button>

                    <button type="submit" className="project-form__primary">
                        Create project
                    </button>
                </div>
            </form>
        </section>
    );
}

export default ProjectForm;
