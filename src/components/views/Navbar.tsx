"use client";
import useMouse from "@react-hook/mouse-position";
import { animate, stagger, motion } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useState } from "react";
const staggerMenuItems = stagger(0.15, { startDelay: 0.2 });

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState("default");

  const ref = React.useRef(null);
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  });

  let mouseXPosition: number = 0;
  let mouseYPosition: number = 0;

  if (mouse.x !== null) {
    mouseXPosition = mouse.clientX;
  }

  if (mouse.y !== null) {
    mouseYPosition = mouse.clientY;
  }

  const variants = {
    default: {
      opacity: 1,
      height: 14,
      width: 14,
      zIndex: 999,
      border: `1px solid ${navOpen ? "black" : "white"}`,
      borderRadius: "100%",
      fontSize: "16px",
      x: mouseXPosition,
      y: mouseYPosition,
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
    project: {
      opacity: 1,
      // backgroundColor: "rgba(255, 255, 255, 0.6)",
      backgroundColor: "#fff",
      color: "#000",
      height: 80,
      width: 80,
      fontSize: "18px",
      x: mouseXPosition - 32,
      y: mouseYPosition - 32,
    },
    contact: {
      opacity: 1,
      backgroundColor: "#FFBCBC",
      color: "#000",
      height: 64,
      width: 64,
      fontSize: "32px",
      x: mouseXPosition - 48,
      y: mouseYPosition - 48,
    },
  };

  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 28,
  };

  useEffect(() => {
    animate(
      "li",
      navOpen ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.3 },
      {
        duration: 0.2,
        delay: navOpen ? staggerMenuItems : 0,
      }
    );
  }, [navOpen]);

  return (
    <nav className="nav" ref={ref}>
      <motion.div
        variants={variants}
        className="circle"
        animate={cursorVariant}
        transition={spring}
      >
        <span className="cursorText">{cursorText}</span>
      </motion.div>
      <div className="nav-container">
        <div className="navbar">
          <Link href={"/"} onClick={() => setNavOpen(false)}>
            <div
              className={`${
                navOpen ? "bg-background text-text" : "bg-text text-background"
              } flex items-center justify-center pt-2 text-3xl transition-all duration-200 rounded-full w-14 h-14 hover:scale-110 cursor-pointer font-alchadera`}
            >
              JP
            </div>
          </Link>
          <div
            className="cursor-pointer menu-toggle"
            onClick={() => setNavOpen(!navOpen)}
          >
            <div
              className={navOpen ? "hamBox hamBoxOpen" : "hamBox hamBoxClosed"}
            >
              <span className={navOpen ? "lineTop spin" : "lineTop"}></span>
              <span
                className={navOpen ? "lineBottom spin" : "lineBottom"}
              ></span>
            </div>
          </div>
        </div>
        <div
          className="nav-overlay"
          style={{
            top: navOpen ? "0" : "-100%",
            transitionDelay: navOpen ? "0s" : "0s",
          }}
        >
          <ul className="nav-links">
            <NavLink href="/" navOpen={navOpen}>
              Home
            </NavLink>
            <NavLink href="/" navOpen={navOpen}>
              Projects
            </NavLink>
            <NavLink href="/" navOpen={navOpen}>
              About Us
            </NavLink>
            <NavLink href="/" navOpen={navOpen}>
              Contact
            </NavLink>
          </ul>
          <div className="nav-footer">
            <div className="location">
              <span>Port of Spain, Trinidad</span>
            </div>
            <div className="nav-social-media">
              <ul>
                <li>
                  <a href="#">Instagram</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

type NavLinkProps = {
  children: React.ReactNode;
  href: string;
  navOpen: boolean;
};

const NavLink = ({ children, href, navOpen }: NavLinkProps) => {
  return (
    <li className="font-alchadera text-[6em]">
      <Link href={href}>{children}</Link>
      <div className="nav-item-wrapper"></div>
    </li>
  );
};
