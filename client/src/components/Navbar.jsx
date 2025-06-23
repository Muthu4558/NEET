// components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { AlignJustify, PanelTopClose } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`bg-teal-600 text-white shadow-md fixed top-0 w-full z-50 transition-transform duration-300 ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4">
        <h1 className="text-2xl font-bold tracking-wide">NEET Aspire</h1>
        <div className="md:hidden">
          {menuOpen ? (
            <PanelTopClose onClick={toggleMenu} className="w-6 h-6 text-white" />
          ) : (
            <AlignJustify onClick={toggleMenu} className="w-6 h-6 text-white" />
          )}
        </div>
        <ul className="hidden md:flex gap-8 text-white font-medium">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/tests" className="hover:underline">Tests</Link></li>
          <li><Link to="/notes" className="hover:underline">Notes</Link></li>
          <li><Link to="/profile" className="hover:underline">Profile</Link></li>
        </ul>
      </div>

      {menuOpen && (
        <ul className="md:hidden px-4 pb-4 bg-teal-600 space-y-3 text-white">
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/tests" onClick={toggleMenu}>Tests</Link></li>
          <li><Link to="/notes" onClick={toggleMenu}>Notes</Link></li>
          <li><Link to="/profile" onClick={toggleMenu}>Profile</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
