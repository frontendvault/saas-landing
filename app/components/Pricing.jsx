// PricingSection.js

import React from "react";

const pricingPlans = [
  {
    title: "Basic",
    price: "$19",
    features: [
        "Access to select courses",
        "Limited community support",
        "Certificate of completion",
        "Top label arrangement",
        "Priority support",
        "Priority support & response",
    ],
  },
  {
    title: "Standard",
    price: "$49",
    features: [
        "Access to select courses",
        "Limited community support",
        "Certificate of completion",
        "Top label arrangement",
        "Priority support",
        "Priority support & response",
    ],
  },
  {
    title: "Premium",
    price: "$99",
    features: [
      "Access to select courses",
      "Limited community support",
      "Certificate of completion",
      "Top label arrangement",
      "Priority support",
      "Priority support & response",
    ],
  },
];

const Pricing = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-5xl font-bold text-center text-gray-800 mb-16">
      Select a Plan  That Suits You
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className="border border-gray-600 rounded-3xl shadow-lg p-6 flex flex-col items-center"
          >
            <h3 className="text-xl font-semibold text-gray-900">{plan.title}</h3>
            <p className="text-2xl font-bold text-green-600 mt-2"> <span className="text-5xl">{plan.price}</span> <span className="text-xl text-gray-500"> / month</span> </p>
            <ul className="mt-4 w-full text-xl">
              {plan.features.map((feature, i) => (
                <li key={i} className="text-gray-700 flex items-center border-b border-gray-400 py-3 ">
                   {feature}
                </li>
              ))}
            </ul>
            <button className="mt-6 px-6 py-3 bg-gray-500 text-white rounded-full hover:bg-gray-700">
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
