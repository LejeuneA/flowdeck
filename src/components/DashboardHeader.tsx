function DashboardHeader() {
    return (
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
    );
}

export default DashboardHeader;
