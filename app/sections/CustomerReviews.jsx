import CustomerReviewCard from "../components/CustomerReviewCard";
import { reviews } from "../constants";

function CustomerReviews() {
  return (
    <section className="max-container flex flex-col items-center text-center">
      <h2 className="text-4xl capitalize font-bold font-palanquin ">
        What Our <span className="text-coral-red">Customers</span> Say?
      </h2>
      <p className="mt-4 lg:max-w-lg info-text">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div className="flex flex-1 justify-evenly items-center w-full max-lg:flex-col gap-14 mt-24">
        {reviews.map((review, index) => (
          <CustomerReviewCard key={index} {...review} />
        ))}
      </div>
    </section>
  );
}

export default CustomerReviews;
