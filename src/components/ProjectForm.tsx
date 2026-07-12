type ProjectFormProps = {
    onCancel: () => void;
};

function ProjectForm({ onCancel }: ProjectFormProps) {
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

            <form className="project-form__grid">
                <label className="project-form__field">
                    <span>Project title</span>
                    <input type="text" placeholder="Website redesign" />
                </label>

                <label className="project-form__field">
                    <span>Client</span>
                    <input type="text" placeholder="Northstar Studio" />
                </label>

                <label className="project-form__field">
                    <span>Status</span>
                    <select defaultValue="To Do">
                        <option>To Do</option>
                        <option>In Progress</option>
                        <option>Completed</option>
                    </select>
                </label>

                <label className="project-form__field">
                    <span>Priority</span>
                    <select defaultValue="Medium">
                        <option>Low</option>
                        <option>Medium</option>
                        <option>High</option>
                    </select>
                </label>

                <label className="project-form__field">
                    <span>Deadline</span>
                    <input type="date" />
                </label>

                <label className="project-form__field">
                    <span>Category</span>
                    <input type="text" placeholder="Web design" />
                </label>

                <div className="project-form__actions">
                    <button type="button" className="project-form__secondary" onClick={onCancel}>
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
