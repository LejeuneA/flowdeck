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

export async function sendChatMessage(
    message: string,
    chatHistory: BackendChatEntry[]
): Promise<SendChatMessageResult> {
    const response = await fetch("http://127.0.0.1:5000/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            message,
            chat_history: chatHistory,
        }),
    });

    if (!response.ok) {
        throw new Error("Could not connect to Flowdeck backend.");
    }

    const data: ChatApiResponse = await response.json();

    const chatEntry = data.data?.chat_entry;
    const updatedChatHistory = data.data?.chat_history;

    if (!chatEntry || !updatedChatHistory) {
        throw new Error("Backend response did not include chat data.");
    }

    return {
        botReply: chatEntry.bot_response,
        chatEntry,
        chatHistory: updatedChatHistory,
    };
}
