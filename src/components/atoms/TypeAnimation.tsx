"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";

type Props = {};

const TypeAnimationComponent = (props: Props) => {
  return (
    <TypeAnimation
      className="absolute bottom-0 left-0 p-10 font-semibold uppercase text-text"
      sequence={[
        "IN PROGRESS...",
        1000,

        "I STILL HAVE A LONG WAY TO GO...",
        1000,
        "MAYBE I'LL DO SOME PARALLAX STUFF...",
        1000,
        "OR SOME WACKY ANIMATIONS...",
        1000,
        "YOU SHOULD CHECK OUT THE DARK/LIGHT MODES",
        1000,
        "LET ME KNOW WHAT YOU THINK",
        1000,
        "OBSESSED WITH THAT TITLE ANIMATION...",
        1000,
        "AND THE NAVIGATION ANIMATION...",
        1000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
  );
};

export default TypeAnimationComponent;
