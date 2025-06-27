import { HoverEffect } from "@/components/ui/card-hover-effect";
import { TextGenerate } from "@/components/text-generate";
import { IconBrain, IconBrandNextjs, IconBrandNodejs, IconBrandPython, IconBrandReact, IconBrandSass } from "@tabler/icons-react";

export function CardHover() {
  const subjectProf = [
    {
      title: "Database Management System",
      image: "",
      description:
        "",
      link: "",
    },
    {
      title: "Data Structure & Algorithm",
      image: "",
      description:
        "",
      link: "",
    },
    {
      title: "Object-Oriented Programming System",
      image: "",
      description:
        "",
      link: "",
    },
    {
      title: "MERN Stack",
      image: "",
      description:
        "",
      link: "",
    },
  ];

  const softSkills = [
    {
      title: "Leadership",
      image: "",
      description:
        "Led a team of 10 developers, designers, and QA engineers in creating innovative web solutions.",
      link: "",
    },
    {
      title: "Time management",
      image: "",
      description:
        "Managed project timelines, delegated tasks, and ensured the team met all project deadlines.",
      link: "",
    },
    {
      title: "Good communication skills",
      image: "",
      description:
        "Acted as the primary liaison between the development team and non-technical stakeholders, ensuring clear and effective communication.",
      link: "",
    },
    {
      title: "Teamwork",
      image: "",
      description:
        "Fostered a collaborative team environment, encouraging open communication and idea-sharing.",
      link: "",
    },
    {
      title: "Technical contribution",
      image: "",
      description:
        "Implemented best practices for coding, testing, and deployment, resulting in a 25% reduction in bugs.",
      link: "",
    },
    {
      title: "Adaptability skill",
      image: "",
      description:
        "Quickly adapted to new technologies and frameworks, staying up-to-date with industry trends and best practices.",
      link: "",
    },
    {
      title: "Problem solving skill",
      image: "",
      description:
        "Diagnosed and resolved complex technical issues, reducing downtime and improving user experience.",
      link: "",
    },
    {
      title: "Design",
      image: "",
      description:
        "Designed and developed user-friendly, responsive web pages using HTML, CSS, JavaScript, and modern frameworks.",
      link: "",
    },
  ];

  const js = [
    {
      title: "NodeJS",
      image: <IconBrandNodejs />,
      description:
        "",
      link: "https://nodejs.org/docs/latest/api/",
    },
    {
      title: "ReactJS",
      image: <IconBrandReact />,
      description:
        "",
      link: "https://react.dev/learn",
    },
    {
      title: "NextJS",
      image: <IconBrandNextjs />,
      description:
        "",
      link: "https://nextjs.org/docs",
    },
    {
      title: "SCSS",
      image: <IconBrandSass />,
      description:
        "",
      link: "https://sass-lang.com/guide/",
    },
  ];

  const python = [
    {
      title: "Basic Python",
      image: <IconBrandPython />,
      description:
        "",
      link: "https://docs.python.org/3/",
    },
    {
      title: "Machine learning",
      image: <IconBrain />,
      description:
        "",
      link: "https://ml-cheatsheet.readthedocs.io/en/latest/",
    },
  ];


  return (
    <div className="w-full flex flex-wrap items-center justify-center">
      <div className="w-full text-center text-2xl">
        <TextGenerate words="Subject proficiency" />
      </div>
      <HoverEffect items={subjectProf} />
      <div className="w-full text-center text-2xl">
        <TextGenerate words="Soft Skills" />
      </div>
      <HoverEffect items={softSkills} />
      <div className="w-full text-center text-2xl">
        <TextGenerate words="Technical Skills" />
      </div>
      <div className="w-full bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 rounded-2xl text-center flex items-center flex-col mt-16">
      <TextGenerate words="Javascript" />
        <HoverEffect items={js} />
      </div>
      <div className="w-full bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 rounded-2xl text-center flex items-center flex-col mt-16">
      <TextGenerate words="Python" />
        <HoverEffect items={python} />
      </div>
    </div>
  );
}