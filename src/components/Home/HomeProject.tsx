"use client";
import { motion } from "framer-motion";
import useAnimateIn from "@/app/hooks/useAnimateIn";
import Image from "next/image";
import SafiaBanner from "../atoms/SafiaBanner";
import Link from "next/link";

const HomeProject = () => {
  const {
    ref: introRef,
    ctrls: introCtrls,
    vars: introVars,
  } = useAnimateIn({ delay: 0.25, threshold: 0.25 });
  return (
    <motion.div
      ref={introRef}
      initial="hidden"
      animate={introCtrls}
      variants={introVars}
      className="relative w-full min-h-screen px-20 py-10 mx-auto"
    >
      <Link href="https://safia.vercel.app/">
        <div className="rounded-xl bg-accent max-w-[1000px] h-[600px] flex items-center justify-center">
          <SafiaBanner />
        </div>
      </Link>
    </motion.div>
  );
};

export default HomeProject;
