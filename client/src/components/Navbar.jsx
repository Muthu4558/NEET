import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY <= lastScrollY);
      setLastScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Tests', path: '/tests' },
    { name: 'Notes', path: '/notes' },
    { name: 'Profile', path: '/profile' },
  ];

  return (
    <nav className={clsx(
      'fixed top-0 left-0 w-full z-50 bg-teal-600 text-white transition-transform duration-300 shadow-lg',
      showNavbar ? 'translate-y-0' : '-translate-y-full'
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
        <h1 className="text-2xl font-extrabold tracking-wide">NEET Aspire</h1>

        {/* Hamburger Icon */}
        <button
          className="relative w-8 h-8 md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <span className={clsx(
            'absolute left-0 h-0.5 w-full bg-white rounded transition-transform duration-300',
            menuOpen ? 'rotate-45 top-3.5' : 'top-2'
          )} />
          <span className={clsx(
            'absolute left-0 h-0.5 w-full bg-white rounded transition-all duration-300',
            menuOpen ? 'opacity-0 top-3.5' : 'top-3.5'
          )} />
          <span className={clsx(
            'absolute left-0 h-0.5 w-full bg-white rounded transition-transform duration-300',
            menuOpen ? '-rotate-45 top-3.5' : 'top-5'
          )} />
        </button>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 text-lg font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className={clsx(
                  'transition duration-200 hover:underline hover:text-white/90',
                  location.pathname === link.path && 'font-bold underline'
                )}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Nav Dropdown */}
      <div className={clsx(
        'md:hidden px-6 bg-teal-700 transition-all duration-500 overflow-hidden',
        menuOpen ? 'max-h-[400px] pb-4' : 'max-h-0'
      )}>
        <ul className="flex flex-col space-y-3 mt-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={clsx(
                  'block py-2 px-4 rounded hover:bg-teal-800 transition duration-200',
                  location.pathname === link.path && 'bg-teal-900 font-bold'
                )}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
