import { MdOutlineDesignServices } from "react-icons/md";
import { IoFitness } from "react-icons/io5";
import { PiSpeakerHighBold } from "react-icons/pi";



import React from 'react';
import { FaLaptopCode } from "react-icons/fa";

const Services = () => {
  return (
    <div className="container mx-auto p-4 md:h-screen flex items-center mt-20 md:mt-0" id="services">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* First Grid - Heading, Paragraph, and Button */}
        <div className="flex flex-col justify-center space-y-4">
          <h2 className="text-4xl font-extrabold text-gray-600">Online Classes For Remote Learning</h2>
          <p className="text-lg text-gray-500 ">
            Online learning offers a flexible, convenient, and efficient way to enhance your skills from the comfort of your home. With a wide range of courses available, remote learning opens up numerous opportunities for personal and professional growth.
          </p>
          <button className="px-6 py-3 text-white bg-green-600 hover:bg-green-700 w-[200px] rounded-full font-medium flex mt-4 justify-center">
            Explore Courses
          </button>
        </div>

        {/* Second Grid - 4 Sections with 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className='shadow-2xl rounded-xl p-5'>
            <span className="text-6xl text-orange-400 flex ">{<MdOutlineDesignServices/>}</span>
            <h3 className="text-xl font-bold text-gray-800 my-4">Arts &amp; Design</h3>
            <p className="text-gray-600">
              Explore creative courses that allow you to express your artistic side and develop design skills.
            </p>
          </div>
          <div className='shadow-2xl rounded-xl p-5'>
          
          <span className="text-6xl text-orange-400 flex ">{<IoFitness />}</span>
            <h3 className="text-xl font-bold text-gray-800 my-4">Health &amp; Fitness</h3>
            <p className="text-gray-600">
              Improve your physical and mental well-being with a variety of health and fitness programs.
            </p>
          </div>
          <div className='shadow-2xl rounded-xl p-5'>
          <span className="text-6xl text-orange-400 flex ">{<FaLaptopCode/>}</span>
            <h3 className="text-xl font-bold text-gray-800 my-4">Technology &amp; Learning            </h3>
            <p className="text-gray-600">
            Stay ahead in the digital world with cutting-edge courses in programming, AI, and data science—designed to enhance your skills and fuel innovation.
            </p>
          </div>
          <div className='shadow-2xl rounded-xl p-5'>
          <span className="text-6xl text-orange-400 flex ">{<PiSpeakerHighBold /> }</span>
            <h3 className="text-xl font-bold text-gray-800 my-4">Digital Marketing</h3>
            <p className="text-gray-600">
              Learn the latest techniques in digital marketing to boost your career and business growth.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Services;
