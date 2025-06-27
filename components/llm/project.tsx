import { TextGenerate } from "@/components/text-generate";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import React from "react";

const Project = () => {
  const education = [
    {
      title: "Covid-19 Prediction Analysis Using Machine Learning Approach",
      image: "",
      description:
        "The machine learning project has been developed to detect individuals infected with the COVID-19 virus, and accurate outputs are generated with the help of respective algorithms. Technologies are used: Python and certain libraries such as NumPy, Pandas, Seaborn, Scikit Learn.",
      link: "https://github.com/arit98/MachineLearning",
    },
    {
      title: "Formalin Fish Detection",
      image: "",
      description:
        "This is a deep learning project that can detect the presence of formalin in fish bought from the market, and the algorithm works very well accordingly. Technologies: Python, OpenCV, NumPy.",
      link: "",
    },
    {
      title: "Real Time Language Translation Tool",
      image: "",
      description:
        "A web application is used to translate any word. Its best feature is that Sanskrit translation has been added to it.Technologies: React JS, Tailwind CSS",
      link: "https://github.com/arit98/translator",
    },
    {
      title: "Movie Rating Web Application",
      image: "",
      description:
        "This is a web application is used to rate favorite movies and also can watch trailer or official videos.Technologies: React JS, Redux Toolkit, Tailwind CSS",
      link: "https://github.com/arit98/TheatreX",
    },
    {
      title: "Tour Booking Web Application",
      image: "",
      description:
        "This is a web application used to book tours across India.Technologies: MERN Stack",
      link: "https://github.com/arit98/tour-frontend",
    },
    {
      title: "Pharmaceutical Web Application",
      image: "",
      description:
        "This is a web application used to book medicine from nearest store and book a doctor appointment also.Technologies: MERN Stack",
      link: "https://github.com/arit98/sanjeevani-client",
    },
  ];
  
  return (
      <div className="max-h-full w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0 overflow-y-scroll">
        <div className="md:mt-32 max-w-4xl mx-auto p-4 w-full flex items-center justify-center flex-col">
        <TextGenerate words="Projects" />
          <HoverEffect items={education} />
        </div>
      </div>
  );
};

export default Project;