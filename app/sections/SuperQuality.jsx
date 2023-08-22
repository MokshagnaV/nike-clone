import { arrowRight } from "@/public/assets/icons";
import Button from "../components/Button";
import Image from "next/image";
import { shoe8 } from "@/public/assets/images";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex flex-row max-lg:flex-col items-center justify-between gap-10 max-container w-full"
    >
      <div className="flex flex1 flex-col items-start">
        <h2 className="text-4xl font-bold font-palanquin lg:max-w-lg">
          We Provide You <span className="text-coral-red">Super Quality</span>{" "}
          Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11">
          <Button label="View Details" />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <Image src={shoe8} alt="SuperQuality shoe" />
      </div>
    </section>
  );
};

export default SuperQuality;
