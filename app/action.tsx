"use server";
import { createAI, getMutableAIState, streamUI } from "ai/rsc";
import { google } from "@ai-sdk/google";
import { z } from "zod";
import type { ReactNode } from "react";
import { CoreMessage, ToolInvocation } from "ai";
import { BotCard, BotMessage } from "@/components/message";
import { Profile } from "@/components/llm/profile";
import { Hello } from "@/components/llm/hello";
import { Skills } from "@/components/llm/skills";
import Project from "@/components/llm/project";
import Education from "@/components/llm/education";
import Certifications from "@/components/llm/certifications";
import Achievements from "@/components/llm/achievements";
import CardComponent from "@/components/3d-card-components";
import Experience from "@/components/llm/experience";

const askedQuestions = new Map();

export const sendMessage = async (
  message: string,
  messageId: string
): Promise<{
  id: string;
  role: "user" | "assistant";
  display: ReactNode;
}> => {
  const history = getMutableAIState();
  if (askedQuestions.has(message)) {
    const previousResponse = askedQuestions.get(message);
    return {
      id: messageId,
      role: "assistant",
      display: previousResponse,
    };
  }

  history.update([
    ...history.get(),
    {
      id: messageId,
      role: "user",
      content: message,
    },
  ]);

  const reply = await streamUI({
    model: google("gemini-2.5-flash"),
    messages: [
      {
        id: 0,
        role: "system",
        content: `\
					You are bot and you can help users get the my portfolio, and besides that you can also chat with users.
					Messages inside [] means that it's a UI element or a user event. For example:
					If the user send help, call \`get_hello_component\` to show you the component.
					If the user wants the profile or portfolio, call \`get_profile\` to show you the component.
					If the user wants the skills, call \`get_skills_component\` to show you the component.
          If the user wants the project, call \`get_project_component\` to show you the component.
          If the user wants the education, call \`get_education_component\` to show you the component.
          If the user wants the certificates, call \`get_certificates_component\` to show you the component.
          If the user wants the experience, call \`get_experience_component\` to show you the component.
          If the user wants the achievements, call \`get_achievements_component\` to show you the component.
          If the user wants the hire, call \`get_hire_component\` to show you the component.
					you should chat with the user and answer any questions they may have. If someone need to see that component don't put any messages like "are you sure" or something instead of simple show that component.
					`,
        toolInvocations: [],
      },
      ...history.get(),
    ] as CoreMessage[],
    initial: (
      <BotMessage className="items-center flex shrink-0 select-none justify-center">
        <div
          className="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-primary rounded-full dark:text-background"
          role="status"
          aria-label="loading"
        />
      </BotMessage>
    ),
    text: ({ content, done }) => {
      if (done) {
        history.done([...history.get(), { role: "assistant", content }]);
        askedQuestions.set(message, <BotMessage>{content}</BotMessage>);
      }
      return <BotMessage>{content}</BotMessage>;
    },
    temperature: 0,
    tools: {
      get_profile: {
        description: "Get profile",
        parameters: z.object({
          confirm: z.string().describe("Conform getting profile"),
        }),
        generate: async function* () {
          yield (
            <BotCard showAvatar={true}>
              <div
                className="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-primary rounded-full dark:text-background"
                role="status"
                aria-label="loading"
              />
            </BotCard>
          );

          return (
            <BotCard showAvatar={true}>
              <Profile />
            </BotCard>
          );
        },
      },
      get_hello_component: {
        description: "Get Hello Component",
        parameters: z.object({
          confirm: z.string().describe("Conform getting hello component"),
        }),
        generate: async function* () {
          yield (
            <BotCard showAvatar={true}>
              <div
                className="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-primary rounded-full dark:text-background"
                role="status"
                aria-label="loading"
              />
            </BotCard>
          );

          return (
            <BotCard showAvatar={true}>
              <Hello />
            </BotCard>
          );
        },
      },
      get_skills_component: {
        description: "Get Hello Component",
        parameters: z.object({
          confirm: z.string().describe("Conform getting hello component"),
        }),
        generate: async function* () {
          yield (
            <BotCard showAvatar={true}>
              <div
                className="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-primary rounded-full dark:text-background"
                role="status"
                aria-label="loading"
              />
            </BotCard>
          );

          return (
            <BotCard showAvatar={true}>
              <Skills />
            </BotCard>
          );
        },
      },
      get_projects_component: {
        description: "Get Hello Component",
        parameters: z.object({
          confirm: z.string().describe("Conform getting project component"),
        }),
        generate: async function* () {
          yield (
            <BotCard showAvatar={true}>
              <div
                className="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-primary rounded-full dark:text-background"
                role="status"
                aria-label="loading"
              />
            </BotCard>
          );

          return (
            <BotCard showAvatar={true}>
              <Project />
            </BotCard>
          );
        },
      },
      get_education_component: {
        description: "Get Hello Component",
        parameters: z.object({
          confirm: z.string().describe("Conform getting project component"),
        }),
        generate: async function* () {
          yield (
            <BotCard showAvatar={true}>
              <div
                className="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-primary rounded-full dark:text-background"
                role="status"
                aria-label="loading"
              />
            </BotCard>
          );

          return (
            <BotCard showAvatar={true}>
              <Education />
            </BotCard>
          );
        },
      },
      get_certificates_component: {
        description: "Get Hello Component",
        parameters: z.object({
          confirm: z.string().describe("Conform getting project component"),
        }),
        generate: async function* () {
          yield (
            <BotCard showAvatar={true}>
              <div
                className="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-primary rounded-full dark:text-background"
                role="status"
                aria-label="loading"
              />
            </BotCard>
          );

          return (
            <BotCard showAvatar={true}>
              <Certifications />
            </BotCard>
          );
        },
      },
      get_experience_component: {
        description: "Get Hello Component",
        parameters: z.object({
          confirm: z.string().describe("Conform getting project component"),
        }),
        generate: async function* () {
          yield (
            <BotCard showAvatar={true}>
              <div
                className="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-primary rounded-full dark:text-background"
                role="status"
                aria-label="loading"
              />
            </BotCard>
          );

          return (
            <BotCard showAvatar={true}>
              <Experience />
            </BotCard>
          );
        },
      },
      get_achievements_component: {
        description: "Get Hello Component",
        parameters: z.object({
          confirm: z.string().describe("Conform getting project component"),
        }),
        generate: async function* () {
          yield (
            <BotCard showAvatar={true}>
              <div
                className="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-primary rounded-full dark:text-background"
                role="status"
                aria-label="loading"
              />
            </BotCard>
          );

          return (
            <BotCard showAvatar={true}>
              <Achievements />
            </BotCard>
          );
        },
      },
      get_hire_component: {
        description: "Get Hello Component",
        parameters: z.object({
          confirm: z.string().describe("Conform getting project component"),
        }),
        generate: async function* () {
          yield (
            <BotCard showAvatar={true}>
              <div
                className="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-primary rounded-full dark:text-background"
                role="status"
                aria-label="loading"
              />
            </BotCard>
          );

          return (
            <BotCard showAvatar={true}>
              <CardComponent />
            </BotCard>
          );
        },
      },
    },
  });

  return {
    id: messageId,
    role: "assistant",
    display: reply.value,
  };
};

export type AIState = Array<{
  id?: string;
  name?:
    | "get_profile"
    | "get_hello_component"
    | "get_skills_component"
    | "get_project_component"
    | "get_education_component"
    | "get_certificates_component"
    | "get_experience_component"
    | "get_achievements_component"
    | "get_hire_component";
  role: "user" | "assistant" | "system";
  content: string;
}>;

export type UIState = Array<{
  id?: string;
  role: "user" | "assistant";
  display: ReactNode;
  toolInvocations?: ToolInvocation[];
}>;

export const AI = createAI({
  initialAIState: [] as AIState,
  initialUIState: [] as UIState,
  actions: {
    sendMessage,
  },
});
