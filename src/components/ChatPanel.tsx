import { useEffect, useRef, useState } from "react";
import { sendChatMessage, type BackendChatEntry } from "../api/chatApi";
import type { Project } from "../types/Project";

type ChatPanelProps = {
    projects: Project[];
};

type ChatMessage = {
    id: number;
    sender: "bot" | "user";
    text: string;
};

type QuickCommand = {
    label: string;
    command: string;
};

const MAX_MESSAGE_LENGTH = 300;

const initialMessages: ChatMessage[] = [
    {
        id: 1,
        sender: "bot",
        text: "Hi Açelya. I am connected to your Flowdeck assistant backend.",
    },
    {
        id: 2,
        sender: "bot",
        text: "Ask me about projects, tasks, priorities, deadlines, status, summaries, or what to focus on first.",
    },
];

const quickCommands: QuickCommand[] = [
    {
        label: "All projects",
        command: "p",
    },
    {
        label: "Tasks",
        command: "t",
    },
    {
        label: "Priorities",
        command: "u",
    },
    {
        label: "Deadlines",
        command: "d",
    },
    {
        label: "Status",
        command: "s",
    },
    {
        label: "Summary",
        command: "sm",
    },
    {
        label: "Focus first",
        command: "Which project should I focus on first and why?",
    },
];

function ChatPanel({ projects }: ChatPanelProps) {
    const [messages, setMessages] =
        useState<ChatMessage[]>(initialMessages);

    const [backendChatHistory, setBackendChatHistory] = useState<
        BackendChatEntry[]
    >([]);

    const [messageText, setMessageText] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    const trimmedMessage = messageText.trim();

    const canSendMessage =
        trimmedMessage.length > 0 &&
        trimmedMessage.length <= MAX_MESSAGE_LENGTH &&
        !isLoading;

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({
            behavior: "smooth",
        });
    }, [messages, isLoading]);

    async function sendMessageToBackend(message: string) {
        const normalizedMessage = message.trim();

        if (
            !normalizedMessage ||
            normalizedMessage.length > MAX_MESSAGE_LENGTH ||
            isLoading
        ) {
            return;
        }

        const userMessage: ChatMessage = {
            id: Date.now(),
            sender: "user",
            text: normalizedMessage,
        };

        setMessages((currentMessages) => [
            ...currentMessages,
            userMessage,
        ]);

        setMessageText("");
        setIsLoading(true);

        try {
            const result = await sendChatMessage(
                normalizedMessage,
                backendChatHistory,
                projects
            );

            const botMessage: ChatMessage = {
                id: Date.now() + 1,
                sender: "bot",
                text: result.botReply,
            };

            setMessages((currentMessages) => [
                ...currentMessages,
                botMessage,
            ]);

            setBackendChatHistory(result.chatHistory);
        } catch (error) {
            const errorMessage =
                error instanceof Error
                    ? error.message
                    : "The Flowdeck assistant is temporarily unavailable.";

            const botErrorMessage: ChatMessage = {
                id: Date.now() + 1,
                sender: "bot",
                text: errorMessage,
            };

            setMessages((currentMessages) => [
                ...currentMessages,
                botErrorMessage,
            ]);
        } finally {
            setIsLoading(false);
        }
    }

    function handleSubmit(
        event: React.FormEvent<HTMLFormElement>
    ) {
        event.preventDefault();

        if (!canSendMessage) {
            return;
        }

        void sendMessageToBackend(messageText);
    }

    function handleClearChat() {
        if (isLoading) {
            return;
        }

        setMessages(initialMessages);
        setBackendChatHistory([]);
        setMessageText("");
    }

    return (
        <aside className="flowdeck__assistant">
            <div className="assistant-panel__header">
                <h2 className="assistant-panel__title">
                    Flowdeck Assistant
                </h2>

                <p className="assistant-panel__subtitle">
                    Connected to the Flowdeck AI Chatbot Core backend.
                </p>

                <div className="assistant-panel__hint">
                    Ask Flowdeck to list projects, check deadlines,
                    review priorities, or recommend what to focus on
                    first.
                </div>

                <div className="assistant-panel__quick-actions">
                    {quickCommands.map((command) => (
                        <button
                            key={command.command}
                            className="assistant-panel__quick-action"
                            type="button"
                            disabled={isLoading}
                            onClick={() =>
                                void sendMessageToBackend(
                                    command.command
                                )
                            }
                        >
                            {command.label}
                        </button>
                    ))}
                </div>

                <button
                    className="assistant-panel__clear"
                    type="button"
                    disabled={isLoading}
                    onClick={handleClearChat}
                >
                    Clear chat
                </button>
            </div>

            <div
                className="assistant-panel__messages"
                aria-live="polite"
            >
                {messages.map((message) => (
                    <div
                        key={message.id}
                        className={`chat-message chat-message--${message.sender}`}
                    >
                        {message.text}
                    </div>
                ))}

                {isLoading && (
                    <div className="chat-message chat-message--bot chat-message--loading">
                        Flowdeck is thinking...
                    </div>
                )}

                <div ref={messagesEndRef} />
            </div>

            <form
                className="assistant-panel__form"
                onSubmit={handleSubmit}
            >
                <input
                    className="assistant-panel__input"
                    type="text"
                    placeholder="Ask about projects, deadlines, or focus..."
                    value={messageText}
                    maxLength={MAX_MESSAGE_LENGTH}
                    disabled={isLoading}
                    aria-label="Message Flowdeck Assistant"
                    onChange={(event) =>
                        setMessageText(event.target.value)
                    }
                />

                <button
                    className="assistant-panel__send"
                    type="submit"
                    disabled={!canSendMessage}
                >
                    {isLoading ? "..." : "Send"}
                </button>
            </form>
        </aside>
    );
}

export default ChatPanel;
