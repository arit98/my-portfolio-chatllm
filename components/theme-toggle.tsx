"use client";
import { Moon, MoonStarIcon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className="flex items-center justify-end bg-background dark:bg-background border shadow-sm max-w-5xl h-10 m-auto rounded-b-lg">
      <div className="flex items-center justify-center h-full pr-2">
        <Sun className={`${isDarkMode ? 'text-red-500' : 'text-yellow-500' }`} />
        <div className="relative inline-block w-12 h-7 ml-2 pr-1">
          <input
            type="checkbox"
            id="color_mode"
            name="color_mode"
            className="absolute opacity-0 w-full h-full cursor-pointer z-10"
            checked={isDarkMode}
            onChange={handleToggle}
          />
          <label
            htmlFor="color_mode"
            className={`block h-full rounded-full overflow-hidden transition-all duration-300 ${
              isDarkMode ? "bg-gray-900 text-white" : "bg-gray-300 text-gray-800"
            }`}
          >
            <span
              className={`absolute h-5 w-5 top-1 left-1 rounded-full bg-white shadow-md transform transition-all duration-300 ${
                isDarkMode ? "translate-x-[16px] bg-gray-600" : "translate-x-0"
              }`}
            >
              <p className="sr-only">{isDarkMode ? "Dark" : "Light"}</p>
            </span>
          </label>
        </div>
        <MoonStarIcon className={`${isDarkMode ? 'text-yellow-500' : 'text-red-500' }`} />
      </div>
    </div>
  );
}
