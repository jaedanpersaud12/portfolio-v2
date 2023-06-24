"use client";
import useAnimateIn from "@/app/hooks/useAnimateIn";
import { motion } from "framer-motion";
import React from "react";

const PortfolioDescription = ({
  text,
  className,
}: {
  text: string;
  className: string;
}) => {
  const {
    ref: introRef,
    ctrls: introCtrls,
    vars: introVars,
  } = useAnimateIn({
    delay: 0,
    threshold: 0.5,
  });
  return (
    <motion.div
      ref={introRef}
      initial="hidden"
      animate={introCtrls}
      variants={introVars}
      className={`${className} text-text`}
    >
      {text}
    </motion.div>
  );
};

export default PortfolioDescription;
