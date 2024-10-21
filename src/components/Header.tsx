import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronUp } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();

  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(0, 0, 0, 0.5)', 'rgba(255, 255, 255, 0.9)']
  );
  const textColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 1)', 'rgba(51, 51, 51, 1)']
  );
  const boxShadow = useTransform(
    scrollY,
    [0, 100],
    ['none', '0 2px 4px rgba(0,0,0,0.1)']
  );
  const height = useTransform(scrollY, [0, 100], ['80px', '60px']);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/blog', label: 'Blog' },
    { path: '/resources', label: 'Resources' },
    { path: '/contact', label: 'Contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      style={{ backgroundColor, boxShadow, height }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex justify-between items-center h-full">
        <Link to="/" className="text-2xl font-bold font-serif" onClick={scrollToTop}>
          <motion.span style={{ color: textColor }}>PA Real Estate Support</motion.span>
        </Link>
        <nav className="hidden lg:block">
          <ul className="flex space-x-6">
            {navItems.map((item, index) => (
              <motion.li key={index} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  to={item.path} 
                  className="relative transition duration-300 group"
                  onClick={scrollToTop}
                >
                  <motion.span style={{ color: textColor }} className="text-shadow-sm">{item.label}</motion.span>
                  <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
        <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <motion.span style={{ color: textColor }}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.span>
        </button>
      </div>
      {isMenuOpen && (
        <motion.div
          className="lg:hidden bg-white py-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <ul className="flex flex-col items-center space-y-4">
            {navItems.map((item, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={item.path}
                  className="text-primary hover:text-gray-medium transition duration-300"
                  onClick={() => {
                    setIsMenuOpen(false);
                    scrollToTop();
                  }}
                >
                  {item.label}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
      {isScrolled && (
        <motion.button
          className="fixed bottom-4 right-4 bg-primary text-white p-2 rounded-full shadow-lg"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronUp size={24} />
        </motion.button>
      )}
    </motion.header>
  );
};

export default Header;