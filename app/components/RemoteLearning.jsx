// In your Next.js component file (e.g., `HomePage.js`)

import React from 'react';

const RemoteLearning = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* First Grid - Heading, Paragraph, and Button */}
        <div className="flex flex-col justify-center space-y-4">
          <h2 className="text-5xl font-semibold text-green-600">Online Classes For Remote Learning</h2>
          <p className="text-lg text-gray-700">
            Online learning offers a flexible, convenient, and efficient way to enhance your skills from the comfort of your home. With a wide range of courses available, remote learning opens up numerous opportunities for personal and professional growth.
          </p>
          <button className="px-6 py-2 text-white bg-green-600 hover:bg-green-700 rounded-lg">
            Explore Courses
          </button>
        </div>

        {/* Second Grid - 4 Sections with 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className='border border-gray-500 rounded-xl p-5 shadow-xl'>
            <h3 className="text-xl font-semibold text-gray-800">Arts & Design</h3>
            <p className="text-gray-600">
              Explore creative courses that allow you to express your artistic side and develop design skills.
            </p>
          </div>
          <div className='border border-gray-500 rounded-xl p-5 shadow-xl'>
            <h3 className="text-xl font-semibold text-gray-800">Health & Fitness</h3>
            <p className="text-gray-600">
              Improve your physical and mental well-being with a variety of health and fitness programs.
            </p>
          </div>
          <div className='border border-gray-500 rounded-xl p-5 shadow-xl'>
            <h3 className="text-xl font-semibold text-gray-800">Health & Fitness</h3>
            <p className="text-gray-600">
              From yoga to strength training, enhance your lifestyle with expert-led fitness classes.
            </p>
          </div>
          <div className='border border-gray-500 rounded-xl p-5 shadow-xl'>
            <h3 className="text-xl font-semibold text-gray-800">Digital Marketing</h3>
            <p className="text-gray-600">
              Learn the latest techniques in digital marketing to boost your career and business growth.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default RemoteLearning;
