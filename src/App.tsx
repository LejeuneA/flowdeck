import { useState } from "react";
import ProjectList from "./components/ProjectList";
import type { Project } from "./types/Project";

function App() {
    const projects: Project[] = [
        {
            id: 1,
            title: "Website Redesign",
            client: "Northstar Studio",
            status: "In Progress",
            priority: "Low",
            deadline: "30 June 2026",
            category: "Web design",
            progress: 90,
            completed: false,
        },
        {
            id: 2,
            title: "Mobile App Design",
            client: "Greenbox",
            status: "To Do",
            priority: "Medium",
            deadline: "15 July 2026",
            category: "App design",
            progress: 50,
            completed: false,
        },
        {
            id: 3,
            title: "Brand Identity",
            client: "Luma Studio",
            status: "Completed",
            priority: "High",
            deadline: "20 July 2026",
            category: "Brand design",
            progress: 100,
            completed: true,
        },
        {
            id: 4,
            title: "Social Media Campaign",
            client: "Brightside Agency",
            status: "To Do",
            priority: "Medium",
            deadline: "18 August 2026",
            category: "Campaign",
            progress: 0,
            completed: false,
        },
    ];

    const totalProjects = projects.length;

    const [selectedStatus, setSelectedStatus] = useState<
        "All" | "To Do" | "In Progress" | "Completed"
    >("All");

    const inProgressProjects = projects.filter(
        (project) => project.status === "In Progress"
    ).length;

    const completedProjects = projects.filter(
        (project) => project.status === "Completed"
    ).length;

    const highPriorityProjects = projects.filter(
        (project) => project.priority === "High"
    ).length;

    const filteredProjects =
        selectedStatus === "All"
            ? projects
            : projects.filter((project) => project.status === selectedStatus);

    return (
        <div className="flowdeck">
            <aside className="flowdeck__sidebar">
                <div>
                    <div className="flowdeck__brand">
                        <h1 className="flowdeck__logo">Flowdeck</h1>
                        <p className="flowdeck__tagline">Creative command center</p>
                    </div>

                    <nav className="flowdeck__nav">
                        <button className="flowdeck__nav-button flowdeck__nav-button--active">
                            Dashboard
                        </button>
                        <button className="flowdeck__nav-button">Projects</button>
                        <button className="flowdeck__nav-button">Tasks</button>
                        <button className="flowdeck__nav-button">Assistant</button>
                    </nav>
                </div>

                <div className="flowdeck__profile">
                    <p className="flowdeck__profile-name">Açelya Lejeune</p>
                    <p className="flowdeck__profile-role">
                        UX/UI · Frontend · AI Apps
                    </p>
                </div>
            </aside>

            <main className="flowdeck__main">
                <header className="flowdeck__header">
                    <div>
                        <p className="flowdeck__eyebrow">Project Dashboard</p>
                        <h2 className="flowdeck__title">Flowdeck</h2>
                        <p className="flowdeck__description">
                            Creative project management, without the chaos.
                        </p>
                    </div>

                    <button className="flowdeck__primary-button">Add project</button>
                </header>

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

                <section>
                    <div className="flowdeck__toolbar">
                        <h3 className="flowdeck__section-title">
                            Projects <span className="flowdeck__section-count">{filteredProjects.length}</span>
                        </h3>

                        <div className="flowdeck__filters">
                            <button
                                className={`filter-button ${selectedStatus === "All" ? "filter-button--active" : ""
                                    }`}
                                onClick={() => setSelectedStatus("All")}
                            >
                                All
                            </button>

                            <button
                                className={`filter-button ${selectedStatus === "To Do" ? "filter-button--active" : ""
                                    }`}
                                onClick={() => setSelectedStatus("To Do")}
                            >
                                To Do
                            </button>

                            <button
                                className={`filter-button ${selectedStatus === "In Progress" ? "filter-button--active" : ""
                                    }`}
                                onClick={() => setSelectedStatus("In Progress")}
                            >
                                In Progress
                            </button>

                            <button
                                className={`filter-button ${selectedStatus === "Completed" ? "filter-button--active" : ""
                                    }`}
                                onClick={() => setSelectedStatus("Completed")}
                            >
                                Completed
                            </button>
                        </div>
                    </div>

                    <ProjectList projects={filteredProjects} />
                </section>
            </main>

            <aside className="flowdeck__assistant">
                <div className="assistant-panel__header">
                    <h2 className="assistant-panel__title">Flowdeck Assistant</h2>
                    <p className="assistant-panel__subtitle">
                        Your future AI project assistant will help summarize projects,
                        detect risks, and suggest next steps.
                    </p>
                </div>

                <div className="assistant-panel__messages">
                    <div className="chat-message chat-message--bot">
                        Hi Açelya. I can help you understand your project status.
                    </div>

                    <div className="chat-message chat-message--user">
                        Which projects need attention?
                    </div>

                    <div className="chat-message chat-message--bot">
                        Social Media Campaign has 0% progress and may need a next action.
                    </div>
                </div>

                <form className="assistant-panel__form">
                    <input
                        className="assistant-panel__input"
                        type="text"
                        placeholder="Ask Flowdeck..."
                    />
                    <button className="assistant-panel__send" type="button">
                        Send
                    </button>
                </form>
            </aside>
        </div>
    );
}

export default App;
