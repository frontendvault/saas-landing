// components/Navbar.js

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className=" p-4 absolute w-full">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo on the left */}
        <div className="text-gray-800 text-xl font-bold">
          <Link href="/">Logo</Link>
        </div>

        {/* Navbar Links */}
        <div className="hidden md:flex space-x-6 mx-auto">
          <Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link>
          <Link href="/course" className="text-gray-600 hover:text-gray-900">Course</Link>
          <Link href="/about" className="text-gray-600 hover:text-gray-900">About Us</Link>
          <Link href="/blog" className="text-gray-600 hover:text-gray-900">Blog</Link>
          <Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
        </div>

        {/* Login/Signup Buttons on the right */}
        <div className="flex space-x-4">
          <button className="text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-lg">Login</button>
          <button className="text-white bg-green-500 hover:bg-green-600 py-2 px-4 rounded-lg">Signup</button>
        </div>
      </div>

      {/* Mobile Responsive Navbar */}
      <div className="md:hidden flex justify-between items-center">
        <div className="text-white text-xl font-bold">
          <Link href="/">Logo</Link>
        </div>
        <div className="flex space-x-4">
          <button className="text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-lg">Login</button>
          <button className="text-white bg-green-500 hover:bg-green-600 py-2 px-4 rounded-lg">Signup</button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <div className="px-4 py-2 space-y-4">
          <Link href="/" className="block text-white hover:text-yellow-400">HOME</Link>
          <Link href="/course" className="block text-white hover:text-yellow-400">Course</Link>
          <Link href="/about" className="block text-white hover:text-yellow-400">ABOUT US</Link>
          <Link href="/blog" className="block text-white hover:text-yellow-400">BLOG</Link>
          <Link href="/blog-grid" className="block text-white hover:text-yellow-400">Blog Grid</Link>
          <Link href="/blog-grid-sidebar" className="block text-white hover:text-yellow-400">Blog Grid Sidebar</Link>
          <Link href="/blog-detail" className="block text-white hover:text-yellow-400">Blog Detail</Link>
          <Link href="/contact" className="block text-white hover:text-yellow-400">CONTACT</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
