"use client"
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Img from "@/assets/profile.png";

const ImageSVG = () => {
  return (
    <div className="w-full h-full relative md:mt-16 md:-mb-8 -mb-16 flex md:justify-end justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.4, delay: 2, ease: "easeIn" },
        }}
      >
        {/* image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.4, delay: 2.4, ease: "easeInOut" },
          }}
          className="absolute w-[288px] h-[288px] xl:w-[288px] xl:h-[288px]"
        >
          <Image
            src={Img.src}
            priority
            quality={100}
            fill
            alt="Profile Picture"
            className="object-contain"
          />
        </motion.div>
        {/* svg */}
        <motion.svg
          className="w-[290px] h-[290px] xl:w-[290px] xl:h-[290px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#3A77DB"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default ImageSVG;
