"use client"

import { useActions, useUIState } from "ai/rsc";
import { useEffect, useState } from "react";
import { UserMessage } from "../message";
import { Typewriter } from "../ui/typewriter";

export const Hello = () => {
    const [_, setMessages] = useUIState();
	const { sendMessage } = useActions();
	const [popup, setPopup] = useState<boolean>()

	const handleClick = async (message: string) => {
		setMessages((currentMessages: string[]) => [
			...currentMessages,
			{
				id: Date.now(),
				role: "user",
				display: <UserMessage>{message}</UserMessage>,
			},
		]);

		try {
			const responseMessage = await sendMessage(message);
			setMessages((currentMessage: string[]) => [
				...currentMessage,
				responseMessage,
			]);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (popup && !(event.target as Element).closest('.settings-popup')) {
				setPopup(false);
			}
		};

		document.addEventListener('click', handleClickOutside);

		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	}, [popup]);
    return (
        <div className="w-2/3 flex items-start justify-center flex-col space-y-2">
            <p>
                <Typewriter text="Hello! 👏 What can I do for you today? 🙂" />
            </p>
            <div className="flex items-center flex-wrap gap-4">
                {[
                    "profile",
                    "skills",
                    "projects",
                    "education",
                    "certifications",
                    "experience",
                    "achievements",
                    "hire Me Today!!!"
                ].map((action, index) => (
                    <button 
                        key={index}
                        onClick={() => handleClick(action)} 
                        className="border p-2 rounded"
                    >
                        <Typewriter text={action.charAt(0).toUpperCase() + action.slice(1)} speed={30} />
                    </button>
                ))}
            </div>
        </div>
    )
}