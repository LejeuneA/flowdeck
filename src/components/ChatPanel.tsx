import { useState } from "react";
import { sendChatMessage } from "../api/chatApi";

type ChatMessage = {
    id: number;
    sender: "bot" | "user";
    text: string;
};

const initialMessages: ChatMessage[] = [
    {
        id: 1,
        sender: "bot",
        text: "Hi Açelya. I am connected to your Flowdeck assistant backend.",
    },
    {
        id: 2,
        sender: "bot",
        text: "Ask me about projects, priorities, deadlines, status, or summaries.",
    },
];

function ChatPanel() {
    const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
    const [messageText, setMessageText] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const trimmedMessage = messageText.trim();

        if (!trimmedMessage || isLoading) {
            return;
        }

        const userMessage: ChatMessage = {
            id: Date.now(),
            sender: "user",
            text: trimmedMessage,
        };

        setMessages((currentMessages) => [...currentMessages, userMessage]);
        setMessageText("");
        setIsLoading(true);

        try {
            const botReply = await sendChatMessage(trimmedMessage);

            const botMessage: ChatMessage = {
                id: Date.now() + 1,
                sender: "bot",
                text: botReply,
            };

            setMessages((currentMessages) => [...currentMessages, botMessage]);
        } catch {
            const errorMessage: ChatMessage = {
                id: Date.now() + 1,
                sender: "bot",
                text: "I could not reach the Flowdeck backend. Please make sure the Flask API is running.",
            };

            setMessages((currentMessages) => [...currentMessages, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <aside className="flowdeck__assistant">
            <div className="assistant-panel__header">
                <h2 className="assistant-panel__title">Flowdeck Assistant</h2>
                <p className="assistant-panel__subtitle">
                    Connected to the Flowdeck AI Chatbot Core backend.
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

                {isLoading && (
                    <div className="chat-message chat-message--bot">Thinking...</div>
                )}
            </div>

            <form className="assistant-panel__form" onSubmit={handleSubmit}>
                <input
                    className="assistant-panel__input"
                    type="text"
                    placeholder="Ask Flowdeck..."
                    value={messageText}
                    onChange={(event) => setMessageText(event.target.value)}
                />

                <button
                    className="assistant-panel__send"
                    type="submit"
                    disabled={isLoading}
                >
                    {isLoading ? "..." : "Send"}
                </button>
            </form>
        </aside>
    );
}

export default ChatPanel;
