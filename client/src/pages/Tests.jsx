import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const getNextSunday = () => {
  const today = new Date();
  const nextSunday = new Date(today);
  nextSunday.setDate(today.getDate() + ((7 - today.getDay()) % 7 || 7));
  return nextSunday.toDateString();
};

const Tests = () => {
  const [showModal, setShowModal] = useState(false);
  const sundayDate = getNextSunday();
  const totalQuestions = 75;
  const recommendedTime = 90;

  const toggleModal = () => setShowModal(!showModal);

  return (
    <div className="bg-gradient-to-br from-white via-blue-50 to-teal-50 text-gray-800 font-sans min-h-screen">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-teal-800 mb-6">
            📝 Weekly NEET Practice Test
          </h2>
          <p className="text-center text-lg text-gray-700 max-w-2xl mx-auto mt-4 mb-10">
            Every Sunday, a full-length NEET practice test will be conducted to keep your preparation consistent and focused.
            Each test includes <span className="font-semibold text-teal-700">75 questions</span> to be solved in
            <span className="font-semibold text-teal-700"> 90 minutes</span>, simulating the real exam experience.
            Stay disciplined, show up each week, and measure your growth—one Sunday at a time. 💪
          </p>

          <div className="bg-white rounded-xl shadow-md p-8 text-center border-l-4 border-teal-500 relative">
            <div className="absolute -top-3 -left-3 bg-teal-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
              Test 1
            </div>
            <p className="text-sm text-teal-600 uppercase tracking-wide font-semibold mb-2">Next Test Date</p>
            <h3 className="text-3xl font-bold text-teal-800 mb-4">{sundayDate}</h3>

            <div className="flex flex-col sm:flex-row justify-center gap-6 text-gray-700 text-lg font-medium mb-8">
              <div className="bg-teal-50 rounded-md px-6 py-3 shadow-sm border border-teal-200">
                ❓ Questions: <span className="font-semibold">{totalQuestions}</span>
              </div>
              <div className="bg-teal-50 rounded-md px-6 py-3 shadow-sm border border-teal-200">
                ⏱️ Time: <span className="font-semibold">{recommendedTime} mins</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={toggleModal}
                className="bg-white border border-teal-600 text-teal-700 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-teal-50 transition"
              >
                📚 Covered Topics
              </button>
              <Link to="/test/start">
                <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition">
                  🚀 Start Test
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 relative shadow-lg overflow-y-auto max-h-[90vh]">
            <button
              onClick={toggleModal}
              className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-2xl"
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold text-teal-700 mb-4 text-center">📚 Covered Topics</h3>

            <div className="grid sm:grid-cols-3 gap-6 text-sm text-gray-800">
              <div>
                <h4 className="text-teal-600 font-semibold mb-2">📘 Physics</h4>
                <ul className="space-y-1 list-disc list-inside">
                  <li>Physics and Measurement</li>
                  <li>Kinematics</li>
                  <li>Laws of Motion</li>
                  <li>Gravitation</li>
                  <li>Rotational Motion</li>
                  <li>Work, Energy and Power</li>
                  <li>Kinetic Theory of Gases</li>
                  <li>Thermodynamics</li>
                  <li>Electrostatics</li>
                </ul>
              </div>

              <div>
                <h4 className="text-teal-600 font-semibold mb-2">🧪 Chemistry</h4>
                <ul className="space-y-1 list-disc list-inside">
                  <li>Basic Concepts of Chemistry</li>
                  <li>Atomic Structure</li>
                  <li>Chemical Bonding & Molecular Structure</li>
                  <li>Chemical Thermodynamics</li>
                  <li>Hydrocarbons</li>
                  <li>Redox Reaction & Electrochemistry</li>
                </ul>
              </div>

              <div>
                <h4 className="text-teal-600 font-semibold mb-2">🌿 Biology</h4>
                <ul className="space-y-1 list-disc list-inside">
                  <li>Diversity in Living World</li>
                  <li>Structural Organisation in Plants & Animals</li>
                  <li>Cell Structure and Function</li>
                  <li>Plant Physiology</li>
                  <li>Human Physiology</li>
                  <li>Classical Genetics</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tests;