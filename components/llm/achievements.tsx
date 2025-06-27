"use client";
import { LinkPreviewComponent } from "@/components/link-preview-component";
import { TextGenerate } from "@/components/text-generate";
import React from "react";

const Achievements = () => {
  const achievement = [
    {
      title:
        "3rd International conference on emerging technologies in data mining and information security - Springer (Feb 2022)",
      link: "https://www.google.co.in/books/edition/Emerging_Technologies_in_Data_Mining_and/w6iJEAAAQBAJ?hl=en&gbpv=1&pg=PA131&printsec=frontcover",
      description:
        "Awarded to Prithish Sarkar, Ahana Mittra, Aritra Das Chowdhury, and Monoj Kumar Sur for the paper entitled to Covid-19 Prediction Analysis using Machine Learning Approach in the ssesion Technical Session 1.4/ Data Science and Data Analytics I in International Conference on Emerging Technologies in Data Mining and Information Security(IEMIS) 2022.",
    },
  ];

  return (
    <div className="max-h-full w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <div className="max-w-4xl md:mt-32 md:mb-0 mb-32 mx-auto p-4 w-full flex flex-col md:gap-0 gap-8 items-center justify-center">
        <TextGenerate words="Achievements" />
        <LinkPreviewComponent achievements={achievement} />
      </div>
    </div>
  );
};

export default Achievements;
