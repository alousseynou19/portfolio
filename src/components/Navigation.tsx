import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-night-blue/90 shadow-lg backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="home" smooth={true} duration={500} className="cursor-pointer">
            <span className="text-cyan font-mono text-xl">AD.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="about" smooth={true} duration={500} className="nav-link">
              À propos
            </Link>
            <Link to="projects" smooth={true} duration={500} className="nav-link">
              Projets
            </Link>
            <Link to="contact" smooth={true} duration={500} className="nav-link">
              Contact
            </Link>
            <a
              href="/portfolio/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-cyan text-cyan rounded hover:bg-cyan/10 transition-all duration-300"
            >
              CV
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-cyan"
            onClick={toggleMobileMenu}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          height: isMobileMenuOpen ? 'auto' : 0
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden bg-night-blue/95 backdrop-blur-sm"
      >
        <div className="px-4 pt-2 pb-4 space-y-2">
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="block py-3 text-center text-light-slate hover:text-cyan transition-colors duration-300"
            onClick={closeMobileMenu}
          >
            À propos
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="block py-3 text-center text-light-slate hover:text-cyan transition-colors duration-300"
            onClick={closeMobileMenu}
          >
            Projets
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="block py-3 text-center text-light-slate hover:text-cyan transition-colors duration-300"
            onClick={closeMobileMenu}
          >
            Contact
          </Link>
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block py-3 text-center text-cyan border border-cyan rounded mx-12 hover:bg-cyan/10 transition-all duration-300"
            onClick={closeMobileMenu}
          >
            CV
          </a>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navigation;