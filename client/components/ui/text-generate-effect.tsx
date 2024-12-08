"use client";
import { useEffect, useState } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGeneratePanel = ({
  wordsArray,
  className,
  filter = true,
  duration = 0.5,
}: {
  wordsArray: string[];
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [wordNumber, setWordNumber] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordNumber((prev) => (prev + 1) % wordsArray.length); // Loop through wordsArray
    }, 6000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [wordsArray.length]);

  return (
    <div className={cn("text-center", className)}>
      {wordsArray.map((words, idx) => (
        <TextGenerateEffect
          key={idx} // Use index since wordsArray order won't change
          words={words}
          className={cn(wordNumber === idx ? "" : "hidden")} // Show only the active word
          filter={filter}
          duration={duration}
        />
      )).filter((_, idx) => idx === wordNumber)}
    </div>
  );
};

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.2),
      }
    );
  }, [animate, duration, filter]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="dark:text-white text-black opacity-0"
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className=" dark:text-white text-black text-2xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
