import { footerLogo } from "@/public/assets/images";
import Image from "next/image";
import Link from "next/link";
import { footerLinks, socialMedia } from "../constants";
import { copyrightSign } from "@/public/assets/icons";

function Footer() {
  return (
    <footer className="max-container">
      <div
        className="flex flex-wrap gap-20 
      justify-between items-start max-lg:flex-col"
      >
        <div className="flex flex-col items-start">
          <Link href="/">
            <Image src={footerLogo} alt="nike logo" width={150} />
          </Link>
          <p className="text-base mt-6 leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((media, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center justify-center
                 bg-white w-12 h-12 rounded-full"
                >
                  <Image src={media.src} alt={media.alt} width={24} />
                </div>
              );
            })}
          </div>
        </div>
        <div
          className="flex flex-1 justify-between 
          lg:gap-10 gap-20 flex-wrap"
        >
          {footerLinks.map((section, index) => {
            return (
              <div key={index}>
                <h4
                  className="text-white font-montserrat text-2xl 
                  leading-normal font-medium mb-6"
                >
                  {section.title}
                </h4>
                <ul>
                  {section.links.map((link, index) => {
                    return (
                      <li
                        key={index}
                        className="text-white-400 leading-normal font-montserrat mt-3 text-base
                         hover:text-slate-gray cursor-pointer"
                      >
                        <Link href={link.link}>{link.name}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <div
        className="flex justify-between max-sm:items-center text-white-400 mt-24 
      max-sm:flex-col "
      >
        <div
          className="flex flex1 justify-start items-center
         gap-2 font-montserrat cursor-pointer"
        >
          <Image
            src={copyrightSign}
            alt="copyrights sign"
            className="rounded-full m-0"
            width={20}
          />
          Copyright. All rights reserved.
        </div>
        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  );
}

export default Footer;
