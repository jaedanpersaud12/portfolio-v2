"use client";
import React from "react";
import HomeProject from "../Home/HomeProject";
import PortfolioDescription from "../atoms/PortfolioDescription";
import TitleAnimation from "../atoms/TitleAnimation";
import { Parallax } from "react-scroll-parallax";

type Props = {};

const HomePortfolioItem = (props: Props) => {
  return (
    <div className="relative w-full">
      <Parallax
        speed={10}
        className="absolute right-[6em] top-[30%]"
        style={{ zIndex: 11 }}
      >
        <TitleAnimation text="SAFIA ELENA" />
        <TitleAnimation text="PORTFOLIO" />
        <PortfolioDescription
          className="max-w-[450px]"
          text="Portfolio website for SAFIA-ELENA, a fashion consultancy company based here in T&T"
        />
      </Parallax>
      <div style={{ zIndex: 10 }}>
        <HomeProject />
      </div>
    </div>
  );
};

export default HomePortfolioItem;
