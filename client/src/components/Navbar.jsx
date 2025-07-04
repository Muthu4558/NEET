import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [notesDropdownOpen, setNotesDropdownOpen] = useState(false);
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
    { name: 'Tests', path: '/tests' }
  ];

  const notesLinks = [
    { name: 'Physics', path: '/notes/physics' },
    { name: 'Chemistry', path: '/notes/chemistry' },
    { name: 'Biology', path: '/notes/biology' }
  ];

  return (
    <nav
      className={clsx(
        'fixed top-0 left-0 w-full z-50 text-white transition-transform duration-300 shadow-lg',
        'bg-gradient-to-br from-[#0f172a] via-[#134e4a] to-[#0f172a]',
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
        <h1 className="text-2xl font-extrabold tracking-wide">NEETopedia</h1>

        {/* Hamburger */}
        <button
          className="relative w-8 h-8 md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <span className={clsx('absolute left-0 h-0.5 w-full bg-white rounded transition-transform duration-300', menuOpen ? 'rotate-45 top-3.5' : 'top-2')} />
          <span className={clsx('absolute left-0 h-0.5 w-full bg-white rounded transition-all duration-300', menuOpen ? 'opacity-0 top-3.5' : 'top-3.5')} />
          <span className={clsx('absolute left-0 h-0.5 w-full bg-white rounded transition-transform duration-300', menuOpen ? '-rotate-45 top-3.5' : 'top-5')} />
        </button>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 text-lg font-medium relative items-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className={clsx(
                  'transition duration-200 hover:text-teal-300 hover:underline',
                  location.pathname === link.path && 'font-bold text-teal-300 underline'
                )}
              >
                {link.name}
              </Link>
            </li>
          ))}

          {/* Notes dropdown */}
          <li
            className="relative group"
            onMouseEnter={() => setNotesDropdownOpen(true)}
            onMouseLeave={() => setNotesDropdownOpen(false)}
          >
            <Link
              to="/notes"
              className={clsx(
                'transition duration-200 hover:text-teal-300 hover:underline',
                location.pathname.startsWith('/notes') && 'font-bold text-teal-300 underline'
              )}
            >
              Notes ▾
            </Link>

            <ul className={clsx(
              'absolute top-full left-0 mt-2 w-44 bg-white text-gray-800 rounded shadow-lg overflow-hidden transform transition-all duration-200 origin-top',
              notesDropdownOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
            )}>
              {notesLinks.map(note => (
                <li key={note.name}>
                  <Link
                    to={note.path}
                    className="block px-4 py-2 hover:bg-teal-100 transition text-sm"
                    onClick={() => setNotesDropdownOpen(false)}
                  >
                    {note.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          {/* Profile */}
          <li>
            <Link
              to="/profile"
              className={clsx(
                'transition duration-200 hover:text-teal-300 hover:underline',
                location.pathname === '/profile' && 'font-bold text-teal-300 underline'
              )}
            >
              Profile
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Nav */}
      <div className={clsx(
        'md:hidden px-6 transition-all duration-500 overflow-hidden',
        'bg-gradient-to-b from-[#134e4a] to-[#0f172a]',
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

          {/* Notes expandable */}
          <li>
            <details className="group">
              <summary className="py-2 px-4 rounded cursor-pointer hover:bg-teal-800 transition text-white font-medium">
                Notes
              </summary>
              <ul className="pl-4 mt-2 space-y-2">
                <li>
                  <Link
                    to="/notes"
                    onClick={() => setMenuOpen(false)}
                    className="block py-1 px-4 rounded hover:bg-teal-700 transition"
                  >
                    All Notes
                  </Link>
                </li>
                {notesLinks.map(note => (
                  <li key={note.name}>
                    <Link
                      to={note.path}
                      onClick={() => setMenuOpen(false)}
                      className="block py-1 px-4 rounded hover:bg-teal-700 transition"
                    >
                      {note.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          </li>

          {/* Profile */}
          <li>
            <Link
              to="/profile"
              onClick={() => setMenuOpen(false)}
              className={clsx(
                'block py-2 px-4 rounded hover:bg-teal-800 transition duration-200',
                location.pathname === '/profile' && 'bg-teal-900 font-bold'
              )}
            >
              Profile
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;