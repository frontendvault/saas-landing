"use client";

import {  FaUserCircle } from "react-icons/fa";
import Slider from "react-slick";
const testimonials = [
  {
    name: "John Doe",
    role: "Web Developer",
    message: "This platform has transformed my career with excellent learning resources!",
    icon: <FaUserCircle/>
  },
  {
    name: "Jane Smith",
    role: "Graphic Designer",
    message: "The courses are top-notch and easy to follow. Highly recommend!",
    icon: <FaUserCircle/>
  },
  {
    name: "Alice Brown",
    role: "Digital Marketer",
    message: "I've learned so much in such a short time. The best online learning experience!",
    icon: <FaUserCircle/>
  }
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Tablets and below
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1024, // Medium screens and up
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1280, // Large screens
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="container mx-auto px-4 py-40">
      <h2 className="text-4xl font-bold text-center text-green-600 mb-20">
        What Our Students Say 
      </h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="px-3">
            <div className="bg-white p-6 shadow-lg rounded-xl text-center">
              <span 
                className="text-center flex justify-center rounded-full mb-4 text-gray-300 text-5xl">
                  {testimonial.icon}
                  </span>
              <p className="text-gray-700 italic">"{testimonial.message}"</p>
              <h4 className="font-semibold text-lg mt-4">{testimonial.name}</h4>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
