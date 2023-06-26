"use client";
import React from "react";
import HomeProject from "../Home/HomeProject";
import PortfolioDescription from "../atoms/PortfolioDescription";
import TitleAnimation from "../atoms/TitleAnimation";
import { Parallax } from "react-scroll-parallax";

type Props = {};

const HomePortfolioItem = (props: Props) => {
  return (
    <div className="relative w-full py-20">
      <div className="grid grid-cols-2 gap-4 px-20" style={{ zIndex: 10 }}>
        <div className="grid gap-4 h-[600px]">
          <HomeProject delay={0} />
          <HomeProject delay={0.2} />
        </div>
        <HomeProject delay={0.4} />
      </div>
      {/* <Parallax speed={10} style={{ zIndex: 11 }}>
        <TitleAnimation text="SAFIA ELENA" />
        <TitleAnimation text="PORTFOLIO" />
        <PortfolioDescription
          className="max-w-[450px]"
          text="Portfolio website for SAFIA-ELENA, a fashion consultancy company based here in T&T"
        />
      </Parallax> */}
    </div>
  );
};

export default HomePortfolioItem;
