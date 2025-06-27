"use client";
import { LinkPreviewComponent } from "@/components/link-preview-component";
import { TextGenerate } from "@/components/text-generate";
import React from "react";

const Experience = () => {
  const experience = [
    {
      title: "CodeSauna Technologies",
      link: "https://nvelop.ai/",
      description:
        "11 months paid internship with AI & Full Stack Domain(NextJS, Typescript), Worked with many things like Vercel Generative UI, Azure AI, Generative Pre Training, Testing(Jest, Cypress) Presently working...",
    },
    {
      title: "CodeClause",
      link: "https://codeclause.com/Careers",
      description:
      "1 month paid internship with Full Stack Domain(ReactJS), UI Development, API Development, API Integration",
    },
    {
      title: "The Monkeys",
      link: "https://monkeys.com.co/feed",
      description:
        "6 months non paid internship with Web Development Domain(ReactJS). UI Development and API Integration",
    },
  ];

  return (
    <div className="max-h-full w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <div className="max-w-6xl md:mt-32 md:mb-0 mb-32 mx-auto p-4 w-full flex flex-col md:gap-0 gap-8 items-center justify-center">
        <TextGenerate words="Experience" />
        <LinkPreviewComponent achievements={experience} />
      </div>
    </div>
  );
};

export default Experience;
