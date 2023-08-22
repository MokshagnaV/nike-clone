"use client";

import { arrowRight } from "@/public/assets/icons";
import Button from "../components/Button";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "@/public/assets/images";
import Image from "next/image";
import ShoeCard from "../components/ShoeCard";
import { useState } from "react";

function Hero() {
  const [bigShoeImage, changeBigShoeImage] = useState(bigShoe1);

  return (
    <section
      id="home"
      className="w-full max-container min-h-screen flex xl:flex-row flex-col gap-10 justify-center"
    >
      <div className="relative w-full xl:w-2/5 flex flex-col items-start justify-center max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer collections
        </p>
        <h1
          className="mt-10 font-palanquin text-8xl 
          max-sm:text-[72px] font-bold max-sm:leading-[82px]
        "
        >
          <span className="xl:bg-white xl:whitespace-nowrap relative pr-10 z-[5]">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="text-lg font-montserrat text-slate-gray leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop now" imgURL={arrowRight} />
        <div className="flex flex-row gap-16 justify-start items-start flex-wrap w-full mt-20">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-bold font-palanquin">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div
        className="relative flex-1 flex justify-center
         items-center xl:min-h-screen max-xl:py-40 
         bg-primary bg-hero bg-cover bg-center"
      >
        <Image
          src={bigShoeImage}
          alt="show collections"
          width={610}
          className="object-contain z-2 relative"
        />
        <div className="absolute z-10 flex flex-row sm:gap-6 gap-4 -bottom-[5%] sm:left[50%] max-sm:px-6">
          {shoes.map((shoe, index) => (
            <div key={index}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={changeBigShoeImage}
                bigShoeImage={bigShoeImage}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
