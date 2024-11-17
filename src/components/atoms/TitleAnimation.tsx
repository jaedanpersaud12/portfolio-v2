"use client";
import { motion, useAnimation } from "motion/react";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

type Props = {
  text: string;
};

const TitleAnimation = ({ text }: Props) => {
  // This would normally be passed into this component as a prop!

  const ctrls = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      ctrls.start("visible");
    }
    if (!inView) {
      ctrls.start("hidden");
    }
  }, [ctrls, inView]);

  const wordAnimation = {
    hidden: {},
    visible: {},
  };

  const characterAnimation = {
    hidden: {
      opacity: 0,
      y: `0.25em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  return (
    <h2 aria-label={text} role="heading" className="">
      {text.split(" ").map((word, index) => {
        return (
          <motion.span
            className="inline-block mr-[.25em] text-[50pt] font-bold text-text font-alchadera whitespace-nowrap"
            ref={ref}
            aria-hidden="true"
            key={index}
            initial="hidden"
            animate={ctrls}
            variants={wordAnimation}
            transition={{
              delayChildren: index * 0.25,
              staggerChildren: 0.05,
            }}
          >
            {word.split("").map((character, index) => {
              return (
                <motion.span
                  className="inline-block"
                  aria-hidden="true"
                  key={index}
                  variants={characterAnimation}
                >
                  {character}
                </motion.span>
              );
            })}
          </motion.span>
        );
      })}
    </h2>
  );
};

export default TitleAnimation;
