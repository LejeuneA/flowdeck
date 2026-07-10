type ChatApiResponse = {
    success?: boolean;
    response?: string;
    reply?: string;
    answer?: string;
    message?: string;
    data?: {
        response?: string;
        reply?: string;
        answer?: string;
        message?: string;
        chat_entry?: {
            bot_response?: string;
        };
    };
};

export async function sendChatMessage(message: string): Promise<string> {
    const response = await fetch("http://127.0.0.1:5000/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
    });

    if (!response.ok) {
        throw new Error("Could not connect to Flowdeck backend.");
    }

    const data: ChatApiResponse = await response.json();

    const botReply =
        data.response ||
        data.reply ||
        data.answer ||
        data.message ||
        data.data?.response ||
        data.data?.reply ||
        data.data?.answer ||
        data.data?.message ||
        data.data?.chat_entry?.bot_response;

    if (!botReply) {
        throw new Error("Backend response did not include a chatbot message.");
    }

    return botReply;
}
