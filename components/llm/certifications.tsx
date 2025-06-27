import { LinkPreviewComponent } from "@/components/link-preview-component";
import { TextGenerate } from "@/components/text-generate";
import React from "react";

const Certifications = () => {
  const certificates = [
    {
      title:
        "Introduction to scripting in python specialization - Rice University",
      description: "",
      link: "https://coursera.org/share/1c414d60092cc4cc38167c29333298a6",
    },
    {
      title: "Web Design for Everybody: Basics of Web Development & Coding",
      description: "",
      link: "https://coursera.org/share/7c360241676c18f04159df3cda4bd972",
    },
    {
      title: "Java Programming: Solving Problems with Software",
      description: "",
      link: "https://coursera.org/share/5008383a262e7cb43d9a36b077a1d13f",
    },
  ];

  return (
    <div className="md:w-[100%] w-full rounded-md relative overflow-hidden mx-auto py-10 md:py-0 flex">
      <div className="md:mt-36 max-w-6xl mx-auto p-4 w-full flex flex-col md:gap-0 gap-8 items-center justify-center space-x-4">
        <TextGenerate words="Certification" />
        <LinkPreviewComponent style="text-xl" achievements={certificates} />
      </div>
      <div className="h-24"></div>
    </div>
  );
};

export default Certifications;
