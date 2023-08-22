import Image from "next/image";
import Button from "../components/Button";
import { offer } from "@/public/assets/images";
import { arrowRight } from "@/public/assets/icons";

function SpecialOffer() {
  return (
    <section className="flex max-lg:flex-col-reverse justify-wrap items-center gap-10 max-container">
      <div className="flex-1">
        <Image
          src={offer}
          alt="Offer"
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex1 flex-col lg:min-w-[564px]">
        <h2 className="text-4xl capitalize font-bold font-palanquin lg:max-w-lg">
          <span className="text-coral-red">Special</span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop Now" imgURL={arrowRight} />
          <Button
            label="View Details"
            backgroundColor="bg-white"
            textColor="text-slate-gray"
            borderColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
}

export default SpecialOffer;
