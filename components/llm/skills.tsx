"use client";
import { Typewriter } from "../ui/typewriter";

export const Skills = () => {
  return (
    <>
      <div className="w-full flex justify-center flex-col items-center gap-8 my-16">
        <p className="text-3xl">
          <Typewriter text="Technical Skills" speed={70} />
        </p>
        <div className="flex items-center justify-center flex-wrap gap-8">
          {/* Data Structure - Mars */}
          <div className="planet-skill w-48 h-48 flex items-center justify-center py-10 px-4 rounded-full border-2 shadow-[inset_0_0_20px_rgba(0,0,0,0.6)] relative overflow-hidden">
            <p className="text-white/90 font-medium z-10">
              <Typewriter text="Data Structure & Algorithm" speed={70} />
            </p>
          </div>
          {/* OOPS - Saturn */}
          <div className="planet-skill w-48 h-48 flex items-center justify-center py-10 px-4 rounded-full border-2 shadow-[inset_0_0_20px_rgba(0,0,0,0.6)] relative overflow-hidden saturn-rings">
            <p className="text-white/90 font-medium z-10">
              <Typewriter text="Object-Oriented Programming" speed={70} />
            </p>
          </div>
          {/* AI - Neptune */}
          <div className="planet-skill w-48 h-48 flex items-center justify-center py-10 px-4 rounded-full border-2 shadow-[inset_0_0_20px_rgba(0,0,0,0.6)] relative overflow-hidden">
            <p className="text-white/90 font-medium z-10">
              <Typewriter text="Artificial Intelligence" speed={70} />
            </p>
          </div>
          {/* MERN - Jupiter */}
          <div className="planet-skill w-48 h-48 flex items-center justify-center py-10 px-4 rounded-full border-2 shadow-[inset_0_0_20px_rgba(0,0,0,0.6)] relative overflow-hidden">
            <p className="text-white/90 font-medium z-10">
              <Typewriter text="MERN Stack" speed={70} />
            </p>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center flex-col items-center gap-8">
        <p className="text-3xl">
          <Typewriter text="Soft Skills" speed={70} />
        </p>
        <div className="flex items-center justify-center flex-wrap gap-8">
          {/* Leadership - Venus */}
          <div className="planet-skill w-48 h-48 flex items-center justify-center py-10 px-4 rounded-full border-2 shadow-[inset_0_0_20px_rgba(0,0,0,0.6)] relative overflow-hidden">
            <p className="text-white/90 font-medium z-10">
              <Typewriter text="Leadership" speed={70} />
            </p>
          </div>

          {/* Time Management - Uranus */}
          <div className="planet-skill w-48 h-48 flex items-center justify-center py-10 px-4 rounded-full border-2 shadow-[inset_0_0_20px_rgba(0,0,0,0.6)] relative overflow-hidden">
            <p className="text-white/90 font-medium z-10">
              <Typewriter text="Time Management" speed={70} />
            </p>
          </div>

          {/* Communication - Earth */}
          <div className="planet-skill w-48 h-48 flex items-center justify-center py-10 px-4 rounded-full border-2 shadow-[inset_0_0_20px_rgba(0,0,0,0.6)] relative overflow-hidden">
            <p className="text-white/90 font-medium z-10">
              <Typewriter text="Communication Skills" speed={70} />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
