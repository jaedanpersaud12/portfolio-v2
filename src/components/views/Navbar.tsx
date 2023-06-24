"use client";
import useMouse from "@react-hook/mouse-position";
import { animate, stagger, motion } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useState } from "react";
const staggerMenuItems = stagger(0.15, { startDelay: 0.2 });

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    animate(
      "li",
      navOpen ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1 },
      {
        duration: 0.2,
        delay: navOpen ? staggerMenuItems : 0,
      }
    );
  }, [navOpen]);

  return (
    <nav className="nav">
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
          <div className="absolute bottom-0 pb-[.5em] px-[1em] font-semibold left-0 flex items-center justify-between w-full text-black uppercase">
            <div className="list-none">
              <li className="">Port of Spain, Trinidad</li>
            </div>
            <ul className="flex gap-x-6">
              <li className="transition-all duration-200 hover:underline underline-offset-4">
                <Link href="https://twitter.com/ja3danp">Twitter</Link>
              </li>
              <li className="transition-all duration-200 hover:underline underline-offset-4">
                <Link href="https://github.com/jaedanpersaud12">Github</Link>
              </li>
            </ul>
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
