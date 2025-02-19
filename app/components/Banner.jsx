// components/Banner.js

const Banner = () => {
    return (
      <section className=" text-gray-700 py-16 md:h-screen flex items-center">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Grid 1: Heading */}
          <div>
            <h1 className="text-4xl md:text-7xl font-bold mb-6">
              Your Future Starts
              <br />
              Online Learning
            </h1>
            <p className="text-lg mb-8">
              Embrace the future with top-notch courses that will take you to the next level.
            </p>
            
            {/* Buttons */}
            <div className="flex space-x-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-full transition duration-300 ease-in-out">
                Start Learning
              </button>
              <button className="bg-gray-500 hover:bg-gray-600 text-white py-3 px-6 rounded-full transition duration-300 ease-in-out">
                Learn More
              </button>
            </div>
          </div>
  
          {/* Grid 2: Image */}
          <div>
            <img
              src="https://via.placeholder.com/600x400" // Replace with your image URL
              alt="Online Learning"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    );
  };
  
  export default Banner;
  