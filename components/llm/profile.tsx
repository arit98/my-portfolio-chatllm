"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { IconBrandGithub } from "@tabler/icons-react";
import { IconBrandLinkedin } from "@tabler/icons-react";
import ImageSVG from "./ImageSVG";
import { Typewriter } from "../ui/typewriter";

export const Profile = () => {
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const handleMouseEnter = () => setHover(true);
    const handleMouseLeave = () => setHover(false);

    document.body.addEventListener("mouseenter", handleMouseEnter);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.body.removeEventListener("mouseenter", handleMouseEnter);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="h-auto w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto">
      <div className="p-4 relative z-10 w-full text-center md:mb-12 mb-32">
        <div className="flex items-center justify-around flex-col-reverse w-full m-auto">
          <div className="w-full flex items-start flex-col gap-1 mt-28">
            <p>
              <Typewriter text="Software Developer" speed={50} />
            </p>
            <p className="md:text-4xl text-2xl font-bold text-start md:w-[500px]">
              <Typewriter text="Hello I'm" speed={50} />
              <br />
              <span className="bg-gradient-to-r from-blue-500 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                <Typewriter text="Aritra Das Chowdhury" speed={50} />
              </span>
            </p>
            <p className="text-start md:w-[500px] w-full">
              <Typewriter
                text="Dynamic web developer adept at crafting user-centric websites and applications to drive competitive advantage and revenue growth. Seeking a challenging full-time position to apply analytical problem-solving skills, technical proficiency, and interpersonal abilities to meet tight schedules and produce impeccable code."
                speed={30}
              />
            </p>
            <div className="mt-8 md:w-[300px] flex items-center justify-between gap-2">
              <Button
                className={`bg-transparent border-2 md:w-48 w-32 md:text-sm text-xs p-4 ${
                  hover ? "border-blue-500" : "dark:border-white/[0.2]"
                }`}
              >
                <Link
                  className="text-blue-500 font-semibold"
                  target="_blank"
                  href={
                    "https://www.mediafire.com/file/adtagrh87fvou9a/Aritra_New_Resume.pdf/file"
                  }
                >
                  <Typewriter text="Download Resume" speed={50} />
                </Link>
              </Button>
              <button
                className={`border-2 text-sm font-medium relative text-black dark:text-white px-2 py-2 rounded-full transition-all ${
                  hover ? "border-blue-500" : "dark:border-white/[0.2]"
                }`}
              >
                <Link href={"https://github.com/arit98"} target="_blank">
                  <IconBrandGithub color="#3A77DB" />
                </Link>
              </button>
              <button
                className={`border-2 text-sm font-medium relative text-black dark:text-white px-2 py-2 rounded-full transition-all ${
                  hover ? "border-blue-500" : "dark:border-white/[0.2]"
                }`}
              >
                <Link
                  href={
                    "https://www.linkedin.com/in/aritra-das-chowdhury-802839140"
                  }
                  target="_blank"
                >
                  <IconBrandLinkedin color="#3A77DB" />
                </Link>
              </button>
            </div>
          </div>
          <div>
            <ImageSVG />
          </div>
        </div>
      </div>
    </div>
  );
};
