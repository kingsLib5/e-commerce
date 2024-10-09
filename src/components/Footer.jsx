import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaArrowUp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-7 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Info */}
        <div>
          <h4 className="font-bold text-lg mb-4">Contact Us</h4>
          <p>1234 Market St, Suite 100</p>
          <p>San Francisco, CA 94103</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@store.com</p>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h4 className="font-bold text-lg mb-4">Subscribe to Our Newsletter</h4>
          {!subscribed ? (
            <form onSubmit={handleSubscribe} className="flex flex-col">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="p-2 mb-4 text-black rounded"
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded"
              >
                Subscribe
              </button>
            </form>
          ) : (
            <p className="text-green-500">Thank you for subscribing!</p>
          )}
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-lg mb-4">Quick Links</h4>
          <ul>
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/shop" className="hover:underline">Shop</a></li>
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/contact" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="mt-12 text-center">
        <h4 className="font-bold text-lg mb-4">Follow Us</h4>
        <div className="flex justify-center space-x-6">
          <motion.a whileHover={{ scale: 1.2 }} href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={24} />
          </motion.a>
          <motion.a whileHover={{ scale: 1.2 }} href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={24} />
          </motion.a>
          <motion.a whileHover={{ scale: 1.2 }} href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} />
          </motion.a>
        </div>
      </div>

      {/* Scroll-to-Top Button */}
      <motion.div
        whileHover={{ scale: 1.2, rotate: 360 }}
        className="fixed bottom-6 right-6 bg-blue-500 text-white p-3 rounded-full cursor-pointer"
        onClick={scrollToTop}
      >
        <FaArrowUp size={20} />
      </motion.div>

      {/* Copyright */}
      <div className="text-center mt-12">
        <p>&copy; {new Date().getFullYear()} Your Store. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
