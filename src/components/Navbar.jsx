import React, { useState } from 'react';
import { FiSearch, FiUser, FiShoppingCart, FiHeart, FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom'; // Use Link for routing

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold text-black">
              YourStore
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button onClick={toggleMobileMenu} className="text-gray-600 hover:text-black focus:outline-none">
              {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>

          {/* Navigation Links */}
          <div className={`md:flex space-x-8 items-center ${isMobileMenuOpen ? 'block' : 'hidden'} md:block`}>
            <Link to="/" className="text-gray-600 hover:text-black cursor-pointer">
              Home
            </Link>
            <Link to="/products" className="text-gray-600 hover:text-black cursor-pointer">
              Products
            </Link>
            <Link to="/categories" className="text-gray-600 hover:text-black cursor-pointer">
              Categories
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-black cursor-pointer">
              Contact Us
            </Link>
          </div>

          {/* Search Bar and Icons */}
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <input
                type="text"
                className="pl-8 pr-3 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
                placeholder="Search..."
              />
              <FiSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
            <FiUser className="text-gray-600 hover:text-black cursor-pointer" />
            <FiHeart className="text-gray-600 hover:text-black cursor-pointer" />
            <FiShoppingCart className="text-gray-600 hover:text-black cursor-pointer" />
          </div>
        </div>

        {/* Mobile Menu Links */}
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col space-y-2 pt-2 pb-3">
            <Link to="/" onClick={toggleMobileMenu} className="text-gray-600 hover:text-black cursor-pointer">
              Home
            </Link>
            <Link to="/products" onClick={toggleMobileMenu} className="text-gray-600 hover:text-black cursor-pointer">
              Products
            </Link>
            <Link to="/categories" onClick={toggleMobileMenu} className="text-gray-600 hover:text-black cursor-pointer">
              Categories
            </Link>
            <Link to="/contact" onClick={toggleMobileMenu} className="text-gray-600 hover:text-black cursor-pointer">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
