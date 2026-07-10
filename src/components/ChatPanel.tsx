import { useState } from "react";

type ChatMessage = {
    id: number;
    sender: "bot" | "user";
    text: string;
};

const initialMessages: ChatMessage[] = [
    {
        id: 1,
        sender: "bot",
        text: "Hi Açelya. I can help you understand your project status.",
    },
    {
        id: 2,
        sender: "user",
        text: "Which projects need attention?",
    },
    {
        id: 3,
        sender: "bot",
        text: "Social Media Campaign has 0% progress and may need a next action.",
    },
];

function ChatPanel() {
    const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
    const [messageText, setMessageText] = useState("");

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const trimmedMessage = messageText.trim();

        if (!trimmedMessage) {
            return;
        }

        const userMessage: ChatMessage = {
            id: Date.now(),
            sender: "user",
            text: trimmedMessage,
        };

        const botMessage: ChatMessage = {
            id: Date.now() + 1,
            sender: "bot",
            text: "I am not connected to the backend yet, but soon I will analyze your Flowdeck projects.",
        };

        setMessages((currentMessages) => [
            ...currentMessages,
            userMessage,
            botMessage,
        ]);

        setMessageText("");
    }

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
                {messages.map((message) => (
                    <div
                        key={message.id}
                        className={`chat-message chat-message--${message.sender}`}
                    >
                        {message.text}
                    </div>
                ))}
            </div>

            <form className="assistant-panel__form" onSubmit={handleSubmit}>
                <input
                    className="assistant-panel__input"
                    type="text"
                    placeholder="Ask Flowdeck..."
                    value={messageText}
                    onChange={(event) => setMessageText(event.target.value)}
                />

                <button className="assistant-panel__send" type="submit">
                    Send
                </button>
            </form>
        </aside>
    );
}

export default ChatPanel;
