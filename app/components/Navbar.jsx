"use client"
import Link from 'next/link';
import { FaTrophy } from 'react-icons/fa';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import FaBars and FaTimes for the hamburger and close icons
import { useState } from 'react';

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
          <Link href="/" className="flex items-center">
            <FaTrophy className="mr-2" /> Online Learning
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
            {!isMenuOpen ? <FaBars className="w-6 h-6" /> : <FaTimes className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Conditional Rendering based on state) */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-90 z-50 px-6 py-6 flex flex-col justify-center items-center space-y-6">
          {/* Close Icon */}
          <div className="flex justify-end w-full">
            <button onClick={toggleMenu} className="text-white">
              <FaTimes className="w-6 h-6" />
            </button>
          </div>

          {/* Menu Links */}
          <div className="space-y-6 text-center">
            <Link href="#about" className="block text-white text-2xl hover:text-yellow-400" onClick={toggleMenu}>About</Link>
            <Link href="#features" className="block text-white text-2xl hover:text-yellow-400" onClick={toggleMenu}>Features</Link>
            <Link href="#courses" className="block text-white text-2xl hover:text-yellow-400" onClick={toggleMenu}>Course</Link>
            <Link href="#services" className="block text-white text-2xl hover:text-yellow-400" onClick={toggleMenu}>Services</Link>
            <Link href="#pricing" className="block text-white text-2xl hover:text-yellow-400" onClick={toggleMenu}>Pricing</Link>
          </div>

          {/* Login/Signup Buttons */}
          <div className="space-y-4 mt-6">
            <button className="w-full text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-lg">Login</button>
            <button className="w-full text-white bg-green-500 hover:bg-green-600 py-2 px-4 rounded-lg">Signup</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
