"use client";
import { motion } from "motion/react";

export interface AnimatedLetter {
  svg: {
    key: string;
  };
  animate: {
    delay: number;
  };
  path: {
    key: string;
    animate: {
      delay: number;
    };
    d: string;
  };
}

interface LetterProps {
  letter: AnimatedLetter;
}

export const Letter = ({ letter }: LetterProps) => {
  return (
    <motion.svg
      key={letter.svg.key}
      initial={{ opacity: 1 }}
      animate={{
        opacity: [1, 0, 1],
        transition: {
          delay: letter.animate.delay,
          duration: 1,
          repeat: Infinity,
          repeatDelay: 4,
        },
      }}
      width="180"
      height="180"
      viewBox="0 0 212 212"
      fill="none"
    >
      <motion.path
        key={letter.path.key}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1.2 }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          delay: letter.path.animate.delay,
        }}
        strokeWidth={1.5}
        strokeDasharray="0 1"
        d={letter.path.d}
        className="stroke-text"
      />
    </motion.svg>
  );
};
