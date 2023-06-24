"use client";
import React from "react";
import { motion } from "framer-motion";
import { AiOutlineArrowDown } from "react-icons/ai";
import useAnimateIn from "@/app/hooks/useAnimateIn";
import useMediaQuery from "@/app/hooks/useMediaQuery";
import { Parallax } from "react-scroll-parallax";

const Introduction = () => {
  const {
    ref: introRef,
    ctrls: introCtrls,
    vars: introVars,
  } = useAnimateIn({
    delay: 0,
    threshold: 0.5,
  });
  return (
    <motion.div className="max-w-3xl py-10 px-44 text-text">
      <Parallax speed={8} easing={"easeOutQuad"}>
        <motion.div
          ref={introRef}
          initial="hidden"
          animate={introCtrls}
          variants={introVars}
        >
          <h1 className="pb-4 text-3xl font-bold font-alchadera">
            Hi! I&apos;m Jaedan.
          </h1>
          <p className="pb-4">
            a web developer and designer with a passion for creating slick
            digital experiences.
          </p>
          <div className="flex items-center font-semibold transition-all duration-300 ease-in-out cursor-pointer opacity-60 hover:opacity-100 rounded-xl font">
            <motion.span initial={{ y: 0 }} className="px-2">
              <AiOutlineArrowDown size={20} />
            </motion.span>
            Explore my work
          </div>
        </motion.div>
      </Parallax>
    </motion.div>
  );
};

export default Introduction;
