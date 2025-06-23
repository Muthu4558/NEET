// pages/Home.jsx
import React from 'react';
import { Notebook, Stethoscope, Brain, Medal } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-white via-blue-50 to-teal-50 text-gray-800 font-sans">
      <Navbar />

      {/* Hero Section */}
      <div className="pt-20 bg-gradient-to-r from-teal-100 to-blue-100">
        <section className="text-center py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="inline-block bg-white/60 text-teal-900 text-sm px-4 py-1 rounded-full mb-4 font-semibold uppercase tracking-wide">
              Weekly Tests · Consistent Progress
            </p>
            <h2 className="text-5xl md:text-6xl font-extrabold text-teal-800 mb-6 leading-tight">
              Let Your NEET Journey Shine Bright ✨
            </h2>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-700">
              You are not alone. We're here to help you revise smart, test strong, and rise to become a future doctor.
            </p>
            <Link
              to="/tests"
              className="mt-8 inline-block bg-teal-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-teal-700 transition"
            >
              🚀 Start Weekly Test
            </Link>
          </div>

          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-white">
              <path d="M0,0V46.29c47.27,22,104.06,32.29,158,28,70.1-5.67,136.58-33.25,207-38.27C451,31.26,524.4,49.09,596,65.3c55.5,12.36,112.92,22.78,168,13.33C912.24,66.6,978.1,33.41,1048,22.52c63.44-9.78,123.64,2.24,152,10.18V0Z"></path>
            </svg>
          </div>
        </section>
      </div>

      {/* Motivation Cards */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 border rounded-xl shadow-md hover:shadow-xl transition">
            <Brain className="mx-auto text-teal-500 w-10 h-10 mb-4" />
            <h3 className="text-xl font-bold text-teal-700 mb-2">🧠 Train Your Mind</h3>
            <p className="text-gray-600">NEET isn’t just about knowledge — it’s about mindset, stamina, and smart strategy.</p>
          </div>
          <div className="p-6 border rounded-xl shadow-md hover:shadow-xl transition">
            <Stethoscope className="mx-auto text-green-500 w-10 h-10 mb-4" />
            <h3 className="text-xl font-bold text-green-700 mb-2">🩺 Think Like a Doctor</h3>
            <p className="text-gray-600">Approach your studies like patient cases. Diagnose questions. Treat with logic.</p>
          </div>
          <div className="p-6 border rounded-xl shadow-md hover:shadow-xl transition">
            <Medal className="mx-auto text-yellow-500 w-10 h-10 mb-4" />
            <h3 className="text-xl font-bold text-yellow-600 mb-2">🏆 Aim for Victory</h3>
            <p className="text-gray-600">Small wins every week lead to big results. Stay focused, stay steady, and succeed.</p>
          </div>
        </div>
      </section>

      {/* Notes Section */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50" id="notes">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Notebook className="w-10 h-10 mx-auto text-teal-500 mb-4" />
          <h2 className="text-4xl font-bold text-teal-700">📘 NEET Notes & Materials</h2>
          <p className="mt-4 text-gray-700 text-lg max-w-xl mx-auto">
            Access curated short notes, diagrams, mind maps, and must-know concepts — all coming soon.
          </p>
          <h3 className="text-3xl text-teal-600 font-semibold mt-16 animate-pulse">Coming Soon!</h3>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
