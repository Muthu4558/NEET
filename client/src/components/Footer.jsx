// components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-teal-700 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} NEET Aspire. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
