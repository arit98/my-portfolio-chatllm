"use client";
import { ChatList } from "@/components/chat-list";
import ChatScrollAnchor from "@/components/chat-scroll-anchor";
import { useEnterSubmit } from "@/components/use-enter-submit";
import { type SubmitHandler, useForm } from "react-hook-form";
import TextAreaAutoSize from "react-textarea-autosize";
import { Mic, PlusIcon } from "lucide-react";
import { z } from "zod";
import { useActions, useUIState } from "ai/rsc";
import { UserMessage } from "@/components/message";
import type { AI } from "./action";
import { useState, useId, useEffect } from "react";

const chatSchema = z.object({
  message: z.string().min(1, "Message is required"),
});

export type ChatInput = z.infer<typeof chatSchema>;

export default function Home() {
  const form = useForm<ChatInput>();
  const { formRef, onKeyDown } = useEnterSubmit();
  const [messages, setMessages] = useUIState<typeof AI>();
  const { sendMessage } = useActions<typeof AI>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const messageId = useId();

  const onSubmit: SubmitHandler<ChatInput> = async (data: any) => {
    const value = data.message.trim();
    formRef.current?.reset();
    if (!value) return;
    setIsLoading(true);

    setMessages((currentMessages) => [
      ...currentMessages,
      {
        id: messageId,
        role: "user",
        display: <UserMessage>{value}</UserMessage>,
      },
    ]);

    try {
      const responseMessage = await sendMessage(value, messageId);
      setMessages((currentMessage) => [...currentMessage, responseMessage]);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };

  useEffect(() => {
    if (messages.length > 0) {
      setIsLoading(true);
      const timeout = setTimeout(() => {
        setIsLoading(false);
      }, 1000); // 1 second delay
      return () => clearTimeout(timeout);
    }
  }, [messages.length]);

  return (
    <main className="select-none">
      <div className="pb-[200px] pt-4 md:pb-10 h-4">
        <div className="w-full h-[80vh] m-auto overflow-y-auto overflow-x-auto">
          <div className="w-full max-w-6xl mx-auto">
            <ChatList messages={messages} />
            <ChatScrollAnchor />
          </div>
        </div>
      </div>
      <form
        ref={formRef}
        onSubmit={form.handleSubmit(onSubmit)}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 fixed inset-x-0 bottom-0 w-full rounded-t-lg"
      >
        <div className="flex justify-between items-center mb-3">
          <button
            type="button"
            className="inline-flex justify-center items-center gap-x-2 rounded-lg font-medium text-xs bg-white px-2 py-1 text-gray-800 sm:text-sm dark:text-neutral-200"
            onClick={() => {
              setMessages([]);
            }}
          >
            <PlusIcon />
            New chat
          </button>

          {!isLoading ? (
            <button
              type="button"
              className="py-1.5 px-2 inline-flex items-center gap-x-2 text-xs font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
              onClick={() => setIsLoading(false)}
            >
              <svg
                className="h-3 w-3"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M5 3.5h6A1.5 1.5 0 0 1 12.5 5v6a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 11V5A1.5 1.5 0 0 1 5 3.5z" />
              </svg>
              Generated
            </button>
          ) : (
            <button
              type="button"
              className="py-1.5 px-2 inline-flex items-center gap-x-2 text-xs font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
            >
              <svg
                className="h-3 w-3"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M5 3.5h6A1.5 1.5 0 0 1 12.5 5v6a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 11V5A1.5 1.5 0 0 1 5 3.5z" />
              </svg>
              Stop generating
            </button>
          )}
        </div>

        <div className="relative">
          <TextAreaAutoSize
            autoFocus
            tabIndex={0}
            onKeyDown={onKeyDown}
            placeholder="Send a message"
            className="outline-none border mb-2 p-6 pb-12 block w-full rounded-lg text-sm focus:outline-blue-500 focus:border-none disabled:opacity-50 disabled:pointer-events-none border-slate-600 text-neutral-400 placeholder-neutral-500 focus:ring-neutral-600 overflow-hidden"
            style={{
              background:
                "radial-gradient(ellipse at top, #1B2735 0%, #121822 90%)",
            }}
            spellCheck={false}
            autoComplete="off"
            autoCorrect="off"
            rows={1}
            {...form.register("message")}
          />

          <div className="absolute bottom-px inset-x-px p-2 rounded-b-lg">
            <div className="flex justify-between items-center">
              <div className="flex items-center"></div>

              <div className="flex items-center gap-x-1">
                {/* <button
                  type="button"
                  className="inline-flex shrink-0 justify-center items-center h-8 w-8 rounded-lg text-gray-500 hover:bg-gray-100 focus:z-10 focus:outline-none focus:bg-gray-100 dark:text-neutral-500 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                >
                  <Mic />
                </button> */}

                <button
                  type="submit"
                  className="inline-flex shrink-0 justify-center items-center h-8 w-8 rounded-lg text-white bg-blue-600 hover:bg-blue-500 focus:z-10 focus:outline-none focus:bg-blue-500"
                >
                  <svg
                    className="shrink-0 h-3.5 w-3.5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
}
