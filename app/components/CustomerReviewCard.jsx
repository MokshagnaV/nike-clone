import { star } from "@/public/assets/icons";
import Image from "next/image";

function CustomerReviewCard({ imgURL, customerName, rating, feedback }) {
  return (
    <div className="flex flex-col items-center max-w-sm text-center gap-4">
      <Image
        src={imgURL}
        height={120}
        className="rounded-full object-contain"
        alt="reviewer"
      />
      <p className="info-text">{feedback}</p>
      <div className="flex gap-2.5 text-xl  font-montserrat text-slate-gray">
        <Image src={star} alt="rating" width={24} />
        <p>(4.5)</p>
      </div>
      <p className="text-2xl font-bold font-montserrat">{customerName}</p>
    </div>
  );
}

export default CustomerReviewCard;
