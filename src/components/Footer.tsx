import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-800 to-gray-900 text-white py-12 relative overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 font-serif">PA Real Estate Support Services</h3>
            <p className="mb-4">Your trusted partner in real estate transaction coordination in the Pocono Mountains.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 font-serif">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-primary transition duration-300">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary transition duration-300">About Us</Link></li>
              <li><Link to="/services" className="hover:text-primary transition duration-300">Services</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition duration-300">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 font-serif">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/terms" className="hover:text-primary transition duration-300">Terms of Service</Link></li>
              <li><Link to="/privacy" className="hover:text-primary transition duration-300">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 font-serif">Follow Us</h4>
            <div className="flex space-x-4">
              <motion.a href="#" className="hover:text-primary transition duration-300" whileHover={{ scale: 1.2 }}><Facebook /></motion.a>
              <motion.a href="#" className="hover:text-primary transition duration-300" whileHover={{ scale: 1.2 }}><Instagram /></motion.a>
              <motion.a href="#" className="hover:text-primary transition duration-300" whileHover={{ scale: 1.2 }}><Twitter /></motion.a>
              <motion.a href="#" className="hover:text-primary transition duration-300" whileHover={{ scale: 1.2 }}><Linkedin /></motion.a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} PA Real Estate Support Services LLC. All rights reserved.</p>
        </div>
      </div>
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent to-primary opacity-10"
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }}
      />
    </footer>
  );
};

export default Footer;