import { FaStar, FaUserGraduate } from "react-icons/fa";

const Banner = () => {
    return (
      <section className="text-gray-700 py-16 h-screen flex items-center justify-center bg-orange-100">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Grid 1: Heading */}
          <div className="text-center md:text-left">
            <span className="text-md font-normal text-gray-500 flex items-center justify-center md:justify-start"> 
              <FaStar className="mr-1"/> Guaranteed and Certified
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
              Your Future Starts
              <br />
              <span className="text-orange-500">Online Learning</span>
            </h1>
            <p className="text-lg mb-8 md:pr-20">
              Embrace the future with top-notch courses that elevate your skills and drive innovation, empowering you to stay ahead in the digital world.
            </p>
            
            {/* Buttons */}
            <div className="flex space-x-4 justify-center md:justify-start">
              <button className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 font-medium rounded-full transition duration-300 ease-in-out">
                Start Learning
              </button>
              <button className="bg-gray-500 hover:bg-gray-600 text-white py-3 px-6 rounded-full font-medium transition duration-300 ease-in-out">
                Learn More
              </button>
            </div>
            <p className="text-md font-semibold mt-5 flex items-center justify-center md:justify-start text-gray-500"> 
              <FaUserGraduate className="mr-1"/> 50,000+ Students
            </p>
          </div>
  
          {/* Grid 2: Image */}
          <div className="flex justify-center">
            <img
              src="/online-education.png" // Replace with your image URL
              alt="Online education"
              className="w-full mx-auto"
            />
          </div>
        </div>
      </section>
    );
};

export default Banner;
