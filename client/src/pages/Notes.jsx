import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BookOpen, FlaskConical, Microscope } from 'lucide-react';
import { Link } from 'react-router-dom';
import Bot from '../components/Bot';

const Notes = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow bg-gradient-to-br from-white via-blue-50 to-teal-50 py-16 px-4 sm:px-8 mt-16">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-teal-700 mb-4">
            NEET Notes & Study Material
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
            Access high-quality handwritten and NCERT-based revision notes tailored for NEET aspirants.
            Click below to explore each subject.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Physics Card */}
            <div className="bg-white/60 backdrop-blur-lg border border-gray-200 p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-[1.03] transition-all text-left flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen className="text-blue-600" size={28} />
                  <h3 className="text-2xl font-bold text-teal-700">Physics Notes</h3>
                </div>
                <p className="text-gray-700 mb-6">
                  Covers derivations, formulas, and concepts from Mechanics, Thermodynamics, Electricity, and more.
                </p>
              </div>
              <Link to="/notes/physics">
                <button className="w-full bg-gradient-to-br from-[#0f172a] via-[#134e4a] to-[#0f172a] hover:from-[#2dd4bf] hover:via-[#0d9488] hover:to-[#2dd4bf] text-white py-2 rounded-xl text-sm font-semibold transition-all">
                  View Notes
                </button>
              </Link>
            </div>

            {/* Chemistry Card */}
            <div className="bg-white/60 backdrop-blur-lg border border-gray-200 p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-[1.03] transition-all text-left flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <FlaskConical className="text-orange-500" size={28} />
                  <h3 className="text-2xl font-bold text-teal-700">Chemistry Notes</h3>
                </div>
                <p className="text-gray-700 mb-6">
                  Includes quick revision of Organic, Inorganic & Physical Chemistry. Perfect for last-minute prep!
                </p>
              </div>
              <Link to="/notes/chemistry">
                <button className="w-full bg-gradient-to-br from-[#0f172a] via-[#134e4a] to-[#0f172a] hover:from-[#2dd4bf] hover:via-[#0d9488] hover:to-[#2dd4bf] text-white py-2 rounded-xl text-sm font-semibold transition-all">
                  View Notes
                </button>
              </Link>
            </div>

            {/* Biology Card */}
            <div className="bg-white/60 backdrop-blur-lg border border-gray-200 p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-[1.03] transition-all text-left flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Microscope className="text-pink-500" size={28} />
                  <h3 className="text-2xl font-bold text-teal-700">Biology Notes</h3>
                </div>
                <p className="text-gray-700 mb-6">
                  Detailed NCERT-focused notes with diagrams and short points from Botany and Zoology.
                </p>
              </div>
              <Link to="/notes/biology">
                <button className="w-full bg-gradient-to-br from-[#0f172a] via-[#134e4a] to-[#0f172a] hover:from-[#2dd4bf] hover:via-[#0d9488] hover:to-[#2dd4bf] text-white py-2 rounded-xl text-sm font-semibold transition-all">
                  View Notes
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Bot />
      <Footer />
    </div>
  );
};

export default Notes;