import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Bot from '../components/Bot';

const BiologyNotes = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow flex items-center justify-center px-4 py-16 text-center mt-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-teal-700 break-words">
          Coming Soon...
        </h1>
      </main>

      <Bot />
      <Footer />
    </div>
  );
};

export default BiologyNotes;
