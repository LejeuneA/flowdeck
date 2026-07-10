function ChatPanel() {
    return (
        <aside className="flowdeck__assistant">
            <div className="assistant-panel__header">
                <h2 className="assistant-panel__title">Flowdeck Assistant</h2>
                <p className="assistant-panel__subtitle">
                    Your future AI project assistant will help summarize projects, detect
                    risks, and suggest next steps.
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
    );
}

export default ChatPanel;
