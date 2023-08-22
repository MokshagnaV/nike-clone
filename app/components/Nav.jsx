import { hamburger } from "@/public/assets/icons";
import { headerLogo } from "@/public/assets/images";
import Image from "next/image";
import React from "react";
import { navLinks } from "../constants";

function Nav() {
  return (
    <header className=" padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <Image src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="max-lg:hidden flex justify-center items-center gap-16 flex-1">
          {navLinks.map((navLink, index) => (
            <li
              key={index}
              className="font-montserrat leading-normal text-lg text-slate-gray"
            >
              <a href={navLink.href} alt={navLink.label}>
                {navLink.label}
              </a>
            </li>
          ))}
        </ul>
        <Image className="lg:hidden" src={hamburger} alt="Menu" width={25} />
      </nav>
    </header>
  );
}

export default Nav;
