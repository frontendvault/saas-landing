const Footer = () => {
    return (
      <footer className=" text-gray-800 py-10 px-5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <p className="text-sm text-gray-400">
              Lorem ipsum dolor sit amet consectetur. Velit interdum tellus elit diam amet eleifend suspendisse.
            </p>
          </div>
          
          {/* Popular Courses */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Courses</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Web Development</li>
              <li>Data Science</li>
              <li>Digital Marketing</li>
              <li>Business Management</li>
              <li>Graphic Design</li>
              <li>Human Resources</li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Home Page</li>
              <li>About Us</li>
              <li>Courses</li>
              <li>Signup</li>
              <li>Login</li>
              <li>Contact</li>
            </ul>
          </div>
          
          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm text-gray-400">+001 123 456 789</p>
            <p className="text-sm text-gray-400">FREE</p>
            <p className="text-sm text-gray-400">exampleinfo@gmail.com</p>
            
            {/* Newsletter Subscription */}
            <div className="mt-4">
              <h4 className="text-md font-semibold mb-2">Subscribe to Our Newsletter</h4>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full p-2 rounded text-black"
              />
              <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded">Subscribe</button>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  