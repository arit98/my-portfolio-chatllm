import React from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { TextGenerate } from "@/components/text-generate";

const Education = () => {
  const education = [
    {
      title: "Future Institute of engineering and management",
      image: "",
      description:
        "Computer science & engineering (84%)",
      link: "",
    },
    {
      title: "BPC Institute of Technology",
      image: "",
      description:
        "Computer science of Technology (71.5%)",
      link: "",
    },
    {
      title: "Gangnapur High School (XII)",
      image: "",
      description:
        "Fine Arts (66%)",
      link: "",
    },
    {
      title: "Gangnapur High School (X)",
      image: "",
      description:
        "Preliminary education (45%)",
      link: "",
    },
  ]
  return (
    <div className="h-full bg-transparent w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0 overflow-y-scroll">
      <div className="md:mt-32 max-w-4xl mx-auto p-4 w-full flex items-center justify-center flex-col">
      <TextGenerate words="Education" />
        <HoverEffect items={education} />
      </div>
      <div className="h-16"></div>
    </div>
  );
};

export default Education;