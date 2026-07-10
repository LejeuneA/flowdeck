function Sidebar() {
    return (
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
                <p className="flowdeck__profile-role">UX/UI · Frontend · AI Apps</p>
            </div>
        </aside>
    );
}

export default Sidebar;
