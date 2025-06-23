import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Notes = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-teal-50">
        <h1 className="text-5xl sm:text-6xl font-bold text-teal-600 text-center">
          Coming Soon! 🚧
        </h1>
      </main>

      <Footer />
    </div>
  );
};

export default Notes;