"use client";
import React from "react";
import { LinkPreview } from "@/components/ui/link-preview";

export function LinkPreviewComponent({ achievements, style }: any) {
  return (
    <div className="flex flex-wrap justify-center items-center gap-8 px-4 md:mt-20">
      {achievements &&
        achievements.map((item: any) => (
          <div
            key={item.link} // Add a unique key for each item in the list
            className="max-w-2xl border-2 bg-gray-100/10 group-hover:border-slate-700 h-full w-full flex items-center justify-center text-center rounded-2xl p-16"
          >
            <div className="md:w-[80%] w-full text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto">
              <LinkPreview
                url={item.link}
                className={`${style} z-50 font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500`}
              >
                {item.title}
              </LinkPreview>
              <div className="h-8" />
              <p className="text-base mx-auto">{item.description}</p>
            </div>
          </div>
        ))}
    </div>
  );
}
