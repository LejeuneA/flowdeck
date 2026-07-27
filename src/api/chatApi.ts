import type { Project } from "../types/Project";

export type BackendChatEntry = {
    user_message: string;
    intent: string;
    bot_response: string;
    timestamp?: string;
};

type ChatApiResponse = {
    success: boolean;
    data?: {
        chat_entry?: BackendChatEntry;
        chat_history?: BackendChatEntry[];
    };
    error?: {
        message?: string;
    };
};

export type SendChatMessageResult = {
    botReply: string;
    chatEntry: BackendChatEntry;
    chatHistory: BackendChatEntry[];
};

const DEFAULT_API_BASE_URL = "http://127.0.0.1:5000";
const REQUEST_TIMEOUT_MS = 10_000;

const API_BASE_URL = (
    import.meta.env.VITE_API_BASE_URL || DEFAULT_API_BASE_URL
).replace(/\/+$/, "");

function getErrorMessage(data: ChatApiResponse | null): string {
    return (
        data?.error?.message ||
        "The Flowdeck assistant could not process your request."
    );
}

export async function sendChatMessage(
    message: string,
    chatHistory: BackendChatEntry[],
    projects: Project[]
): Promise<SendChatMessageResult> {
    const controller = new AbortController();

    const timeoutId = window.setTimeout(() => {
        controller.abort();
    }, REQUEST_TIMEOUT_MS);

    try {
        const response = await fetch(`${API_BASE_URL}/chat`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                message,
                chat_history: chatHistory,
                projects,
            }),
            signal: controller.signal,
        });

        let data: ChatApiResponse | null = null;

        try {
            data = (await response.json()) as ChatApiResponse;
        } catch {
            data = null;
        }

        if (!response.ok) {
            throw new Error(getErrorMessage(data));
        }

        if (!data?.success) {
            throw new Error(getErrorMessage(data));
        }

        const chatEntry = data.data?.chat_entry;
        const updatedChatHistory = data.data?.chat_history;

        if (!chatEntry || !updatedChatHistory) {
            throw new Error(
                "The Flowdeck assistant returned an incomplete response."
            );
        }

        return {
            botReply: chatEntry.bot_response,
            chatEntry,
            chatHistory: updatedChatHistory,
        };
    } catch (error) {
        if (
            error instanceof DOMException &&
            error.name === "AbortError"
        ) {
            throw new Error(
                "The Flowdeck assistant took too long to respond. Please try again."
            );
        }

        if (error instanceof TypeError) {
            throw new Error(
                "The Flowdeck assistant is temporarily unavailable."
            );
        }

        if (error instanceof Error) {
            throw error;
        }

        throw new Error(
            "The Flowdeck assistant is temporarily unavailable."
        );
    } finally {
        window.clearTimeout(timeoutId);
    }
}
