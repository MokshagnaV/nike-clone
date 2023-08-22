"use client";

import Image from "next/image";
import React from "react";

function ShoeCard({ imgURL, changeBigShoeImage, bigShoeImage }) {
  const handleClick = () => {
    if (imgURL.bigShoe !== bigShoeImage) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };
  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImage === imgURL.bigShoe
          ? "border-coral-red"
          : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div
        className="flex justify-center items-center 
      bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl 
      max-sm:p-4 bg-primary"
      >
        <Image
          src={imgURL.thumbnail}
          height={103}
          alt="displaying shoe thumbnail"
        />
      </div>
    </div>
  );
}

export default ShoeCard;
