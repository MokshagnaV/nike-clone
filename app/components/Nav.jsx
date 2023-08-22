"use client";

import { cross, hamburger } from "@/public/assets/icons";
import { headerLogo } from "@/public/assets/images";
import Image from "next/image";
import React, { useState } from "react";
import { navLinks } from "../constants";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className=" padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <Image src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul
          className={`flex justify-center items-center gap-16 flex-1
         responsive-navbar ${
           isMenuOpen ? "translate-y-0 pb-10" : "max-lg:-translate-y-[500px]"
         }`}
        >
          {navLinks.map((navLink, index) => (
            <li
              key={index}
              className="font-montserrat leading-normal text-lg text-slate-gray"
              onClick={() => setIsMenuOpen(false)}
            >
              <a href={navLink.href} alt={navLink.label}>
                {navLink.label}
              </a>
            </li>
          ))}
        </ul>
        <div
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="cursor-pointer lg:hidden"
        >
          {isMenuOpen ? (
            <Image src={cross} alt="close" width={25} />
          ) : (
            <Image src={hamburger} alt="Menu" width={25} />
          )}
        </div>
      </nav>
    </header>
  );
}

export default Nav;
