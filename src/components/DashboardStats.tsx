type DashboardStatsProps = {
    totalProjects: number;
    inProgressProjects: number;
    completedProjects: number;
    highPriorityProjects: number;
};

function DashboardStats({
    totalProjects,
    inProgressProjects,
    completedProjects,
    highPriorityProjects,
}: DashboardStatsProps) {
    return (
        <section className="flowdeck__stats">
            <article className="stat-card">
                <p className="stat-card__label">Total Projects</p>
                <p className="stat-card__value">{totalProjects}</p>
            </article>

            <article className="stat-card">
                <p className="stat-card__label">In Progress</p>
                <p className="stat-card__value">{inProgressProjects}</p>
            </article>

            <article className="stat-card">
                <p className="stat-card__label">Completed</p>
                <p className="stat-card__value">{completedProjects}</p>
            </article>

            <article className="stat-card">
                <p className="stat-card__label">High Priority</p>
                <p className="stat-card__value">{highPriorityProjects}</p>
            </article>
        </section>
    );
}

export default DashboardStats;
