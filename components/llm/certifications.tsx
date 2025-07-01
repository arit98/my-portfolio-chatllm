import { LinkPreviewComponent } from "@/components/ui/link-preview-component";
import { TextGenerate } from "@/components/text-generate";
import React from "react";

const Certifications = () => {
  const certificates = [
    {
      title:
        "Introduction to scripting in python specialization",
      description: "This course was issued by Rise University. I learned many things here, including basic Python and OOP concepts.",
      link: "https://coursera.org/share/1c414d60092cc4cc38167c29333298a6",
    },
    {
      title: "Elements of AI",
      description: "This course was issued by University of Helsinki. I learned many things here, likes building AI and building LLMs.",
      link: "https://certificates.mooc.fi/validate/tutkp36mvso",
    },
    {
      title: "Web Design for Everybody: Basics of Web Development & Coding",
      description: "This course was issued by the University of Michigan. I learned many things here, including modern design and full-stack application development.",
      link: "https://coursera.org/share/7c360241676c18f04159df3cda4bd972",
    },
    {
      title: "The Bits and Bytes of Computer Networking",
      description: "This course was issued by Google LLC. I learned many things here, including phisical IPs, Physical Layer(bits accorss wire, twisted pair, cable duplexing etc), DataLink Layer(unicast, multicast and broadcast, ethernet frame etc), Network Devices(cables, hubs, routers etc)",
      link: "https://www.coursera.org/account/accomplishments/verify/6U7AV29LV2MN",
    },
  ];

  return (
    <div className="max-h-full w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <div className="md:mt-32 mb:mb-0 mb-32 max-w-6xl mx-auto p-4 w-full flex flex-col md:gap-0 gap-8 items-center justify-center space-x-4">
        <TextGenerate words="Certification" />
        <LinkPreviewComponent style="text-xl" achievements={certificates} />
      </div>
      <div className="h-24"></div>
    </div>
  );
};

export default Certifications;
