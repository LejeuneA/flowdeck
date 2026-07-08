import type { Project } from "../types/Project";

type ProjectCardProps = Omit<Project, "id">;

function ProjectCard({
    title,
    client,
    status,
    priority,
    deadline,
    category,
    progress,
    completed,
}: ProjectCardProps) {
    return (
        <article className="project-card">
            <div className="project-card__top">
                <div>
                    <h2 className="project-card__title">{title}</h2>
                    <p className="project-card__client">{client}</p>
                </div>

                <span className="project-card__badge">{status}</span>
            </div>

            <div className="project-card__meta">
                <div className="project-card__meta-row">
                    <span>Priority</span>
                    <strong>{priority}</strong>
                </div>

                <div className="project-card__meta-row">
                    <span>Deadline</span>
                    <strong>{deadline}</strong>
                </div>

                <div className="project-card__meta-row">
                    <span>Category</span>
                    <strong>{category}</strong>
                </div>

                <div className="project-card__meta-row">
                    <span>Completed</span>
                    <strong>{completed ? "Yes" : "No"}</strong>
                </div>
            </div>

            <div className="project-card__progress">
                <div className="project-card__progress-label">
                    <span>Progress</span>
                    <strong>{progress}%</strong>
                </div>

                <div className="project-card__progress-track">
                    <div
                        className="project-card__progress-fill"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>
        </article>
    );
}

export default ProjectCard;
