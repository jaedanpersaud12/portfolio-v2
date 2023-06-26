"use client";
import useAnimateIn from "@/app/hooks/useAnimateIn";
import { motion } from "framer-motion";
import Link from "next/link";
import SafiaBanner from "../atoms/SafiaBanner";
import Wordmark from "../atoms/Wordmark";

const HomeProject = ({ delay }: { delay: number }) => {
  const {
    ref: introRef,
    ctrls: introCtrls,
    vars: introVars,
  } = useAnimateIn({ delay: delay, threshold: 0.25 });
  return (
    <motion.div
      ref={introRef}
      initial="hidden"
      animate={introCtrls}
      variants={introVars}
      className="relative w-full h-full mx-auto"
    >
      <Link href="https://safia.vercel.app/">
        <div className="flex items-center justify-center w-full h-full rounded-xl bg-accent">
          {/* <SafiaBanner />/ */}
          <Wordmark />
        </div>
      </Link>
    </motion.div>
  );
};

export default HomeProject;
