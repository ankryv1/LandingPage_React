import React from "react";
import { REVIEWS } from "../constants";

const Reviews = () => {
  return (
    <section className="max-w-7xl mx-auto border-b-2" id="reviews">
      <div className="my-20 px-4">
        <h2 className="text-xl lg:text-3xl tracking-tight text-center uppercase mb-6">
          Reviews
        </h2>

        <p className="max-w-2xl text-lg mb-12 text-center mx-auto text-gray-600">
          {REVIEWS.text}
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {REVIEWS.reviews.map((review, index) => (
            <div
              key={index}
              className="flex flex-col items-center border p-8 max-w-xs rounded-lg shadow-sm"
            >
              <p className="mb-4 text-center text-gray-700">
                "{review.review}"
              </p>

              <div className="flex flex-col items-center mt-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full mb-2"
                />
                <p className="font-medium">{review.name}</p>
                <p className="text-sm text-gray-500">{review.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
