// components/FeatureSection.js

const Services = () => {
    return (
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Grid 1: Stacked Images */}
          <div className="space-y-4">
            <img
              src="https://via.placeholder.com/600x400" // Replace with your image URL
              alt="Stacked Image 1"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <img
              src="https://via.placeholder.com/600x400" // Replace with your image URL
              alt="Stacked Image 2"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
  
          {/* Grid 2: Heading and Small Grids */}
          <div>
            <h2 className="text-5xl font-bold text-gray-800 mb-8">
              Learn Online, Anytime, Anywhere
            </h2>
  
            {/* Four smaller grids */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-semibold text-gray-700">Top Instructors</h3>
                <p className="text-lg text-gray-500 mt-2">Learn from the best in the field.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-semibold text-gray-700">6,000 Membership</h3>
                <p className="text-lg text-gray-500 mt-2">Join a community of learners.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-semibold text-gray-700">3,020 Online Courses</h3>
                <p className="text-lg text-gray-500 mt-2">Choose from a wide variety of courses.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-semibold text-gray-700">Online Certifications</h3>
                <p className="text-lg text-gray-500 mt-2">Get certified in various fields.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Services;
  