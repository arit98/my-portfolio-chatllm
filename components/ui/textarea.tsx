"use client";
import * as React from "react";
import { cn } from "@/utils/cn";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    const radius = 100; // change this to increase the radius of the hover effect
    const [visible, setVisible] = React.useState(false);

    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: any) {
      let { left, top } = currentTarget.getBoundingClientRect();

      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    }

    const innerRef = React.useRef<HTMLTextAreaElement>(null);

    React.useImperativeHandle(ref, () => innerRef.current!);

    React.useEffect(() => {
      const textarea = innerRef.current;
      if (textarea) {
        const resizeTextarea = () => {
          textarea.style.height = 'auto';
          textarea.style.height = textarea.scrollHeight + 'px';
        };

        resizeTextarea();

        textarea.addEventListener('input', resizeTextarea);
        return () => textarea.removeEventListener('input', resizeTextarea);
      }
    }, []);

    return (
      <motion.div
        style={{
          background: useMotionTemplate`
        radial-gradient(
          ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
          var(--blue-500),
          transparent 80%
        )
      `,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="p-[2px] rounded-lg transition duration-300 group/textarea"
      >
        <textarea
          className={cn(
            `flex w-full border-none bg-zinc-800 text-gray-300 dark:text-white shadow-input rounded-md px-3 py-2 text-sm file:border-0 file:bg-transparent 
            file:text-sm file:font-medium placeholder:text-neutral-6cl00 dark:placeholder-text-neutral-400
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600
            disabled:cursor-not-allowed disabled:opacity-50
            dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
            group-hover/textarea:shadow-none transition duration-400 opacity-80
            resize-none`,
            className
          )}
          ref={innerRef}
          {...props}
        />
      </motion.div>
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };