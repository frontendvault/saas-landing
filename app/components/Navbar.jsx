"use client"
import Link from 'next/link';
import { FaTrophy } from 'react-icons/fa';
import { useState } from 'react'; // Import useState for toggle functionality

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for toggling mobile menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the state when the hamburger icon is clicked
  };

  return (
    <nav className="p-4 absolute w-full">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo on the left */}
        <div className="text-gray-800 text-xl font-bold">
          <Link href="/" className='flex items-center'>
            <FaTrophy className='mr-2'/> Online Learning
          </Link>
        </div>

        {/* Navbar Links for larger screens */}
        <div className="hidden md:flex space-x-6 mx-auto">
          <Link href="#about" className="text-gray-600 hover:text-gray-900">About</Link>
          <Link href="#features" className="text-gray-600 hover:text-gray-900">Features</Link>
          <Link href="#courses" className="text-gray-600 hover:text-gray-900">Course</Link>
          <Link href="#services" className="text-gray-600 hover:text-gray-900">Services</Link>
          <Link href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</Link>
        </div>

        {/* Login/Signup Buttons on the right for larger screens */}
        <div className="hidden md:flex space-x-4">
          <button className="text-white bg-gray-500 hover:bg-gray-600 py-2 px-4 rounded-full duration-200 ease-in-out">Login</button>
          <button className="text-white bg-green-700 hover:bg-green-800 py-2 px-4 rounded-full duration-200 ease-in-out">Signup</button>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-800">
            {/* Hamburger Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (Conditional Rendering based on state) */}
      {isMenuOpen && (
        <div className="md:hidden px-4 py-2 space-y-4 bg-gray-800">
          <Link href="/course" className="block text-white hover:text-yellow-400">Course</Link>
          <Link href="/about" className="block text-white hover:text-yellow-400">About</Link>
          <Link href="/blog" className="block text-white hover:text-yellow-400">Blog</Link>
          <Link href="/contact" className="block text-white hover:text-yellow-400">Contact</Link>
          <div className="space-y-2 mt-4">
            <button className="w-full text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-lg">Login</button>
            <button className="w-full text-white bg-green-500 hover:bg-green-600 py-2 px-4 rounded-lg">Signup</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
