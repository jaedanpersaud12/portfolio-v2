"use client";
import React from "react";
import HomeProject from "../Home/HomeProject";
import PortfolioDescription from "../atoms/PortfolioDescription";
import TitleAnimation from "../atoms/TitleAnimation";
import { Parallax } from "react-scroll-parallax";
import BentoGrid from "./Bento";

type Props = {};

const HomePortfolioItem = (props: Props) => {
  return (
    <div className="relative w-full py-20">
      <BentoGrid />
    </div>
  );
};

export default HomePortfolioItem;
