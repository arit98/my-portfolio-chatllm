"use client"
import { useEffect, useState } from "react";

interface TypewriterProps {
  text: string;
  speed?: number;
  onComplete?: () => void;
  scroll?: () => void;
}

export function Typewriter({ text, speed = 50, onComplete, scroll }: TypewriterProps) {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    scroll?.();
    
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
        if (text[currentIndex] === '\n') {
          scroll?.();
        }
      }, speed);

      return () => clearTimeout(timeout);
    } else {
      onComplete?.();
      setTimeout(() => {
        scroll?.();
      }, 100);
    }
  }, [currentIndex, speed, text, scroll, onComplete]);

  return (
    <span className="inline-flex items-center">
      {currentText}
      {currentIndex < text.length && (
        <span className="typing-cursor ml-0.5 h-4 w-0.5 bg-current animate-pulse" />
      )}
    </span>
  );
} 