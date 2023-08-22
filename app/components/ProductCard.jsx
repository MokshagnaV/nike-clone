import { star } from "@/public/assets/icons";
import Image from "next/image";
import React from "react";

function ProductCard({ imgURL, name, price }) {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <Image src={imgURL} alt="shoe" />
      <div className="flex gap-2.5 mt-8 text-xl  font-montserrat text-slate-gray">
        <Image src={star} alt="rating" width={24} />
        <p>(4.5)</p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      <p className="mt-2 text-coral-red font-semibold font-montserrat">
        {price}
      </p>
    </div>
  );
}

export default ProductCard;
