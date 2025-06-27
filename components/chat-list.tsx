import type { UIState } from "@/app/action";
import { useEffect, useState } from "react";

interface MessagesProps {
    messages: UIState;
}

const welcomeMessages = [
    "Welcome To The Portfolio Chat Of Aritra",
    "Please Type Help First"
];

export function ChatList({messages}: MessagesProps) {
    const [welcomeIndex, setWelcomeIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [displayedText, setDisplayedText] = useState('');
    const [isTyping, setIsTyping] = useState(false);

    // Update welcomeIndex to cycle through welcomeMessages
    useEffect(() => {
        if (!messages.length) {
            const interval = setInterval(() => {
                setWelcomeIndex((prevIndex) => (prevIndex + 1) % welcomeMessages.length);
            }, 2000);
            return () => clearInterval(interval);
        }
    }, [messages.length]);

    // Text generation effect
    useEffect(() => {
        if (messages.length > 0) {
            const lastMessage = messages[messages.length - 1];
            const text = lastMessage.display as string;
            let index = 0;
            setIsTyping(true);

            const interval = setInterval(() => {
                if (index < text.length) {
                    setDisplayedText((prev) => prev + text.charAt(index));
                    index++;
                } else {
                    setIsTyping(false);
                    clearInterval(interval);
                }
            }, 50); // Adjust speed here (lower = faster)

            return () => clearInterval(interval);
        }
    }, [messages]);

    // Simulate loading state when new messages are added
    useEffect(() => {
        if (messages.length > 0) {
            setIsLoading(true);
            const timeout = setTimeout(() => {
                setIsLoading(false);
            }, 1000); // 1 second delay
            return () => clearTimeout(timeout);
        }
    }, [messages.length]);

    if (!Array.isArray(messages) || !messages.length) {
        return (
            <div className="w-full h-[60vh] text-center py-8 flex items-center justify-center mt-24">
                <p className="md:text-5xl text-2xl font-semibold transition-opacity duration-100000 animate-pulse bg-gradient-to-r from-blue-500 via-pink-500 to-red-400 bg-clip-text text-transparent">
                    {welcomeMessages[welcomeIndex]}
                </p>
            </div>
        );
    }

    return(
        <div className="relative mx-auto max-w-6xl">
            {messages.slice(0, -1).map((message) => (
                <div key={message.id} className="pb-4">
                    {message.display}
                </div>
            ))}
            {messages.length > 0 && (
                <div className="pb-4">
                    {isTyping ? displayedText : messages[messages.length - 1].display}
                </div>
            )}
            {isLoading && (
                <div className="flex items-center justify-center py-4">
                    <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce [animation-delay:-0.3s] opacity-60"></div>
                        <div className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce [animation-delay:-0.15s] opacity-60"></div>
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce opacity-60"></div>
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce opacity-60"></div>
                        <span className="ml-2 text-sm text-gray-500">Generating response...</span>
                    </div>
                </div>
            )}
        </div>
    );
}