import React, { useState } from 'react';
import { X } from 'lucide-react';
import Physics from './Physics';
import Chemistry from './Chemistry';
import Biology from './Biology';

const Analystics = () => {
  const [activeSubject, setActiveSubject] = useState(null);

  const openModal = (subject) => setActiveSubject(subject);
  const closeModal = () => setActiveSubject(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-teal-700 mb-4">NEET Subject Analytics</h2>
        <p className="text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
          Dive into detailed subject-wise analysis of NEET chapters. Get insights into chapter frequency, question trends, and high-weightage topics to boost your preparation.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* PHYSICS */}
          <div className="bg-white rounded-2xl shadow-lg border-t-4 border-teal-500 p-6 text-left flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-teal-700 mb-2">Physics</h3>
              <p className="text-gray-600 mb-2">Focuses on numerical strength, logic, and core concepts. Mostly Class 11 & 12 mechanics, optics, and electricity.</p>
              <p className="text-sm text-gray-500 mb-4">24 chapters · Avg. 10–12 questions</p>
            </div>
            <button
              onClick={() => openModal("Physics")}
              className="bg-gradient-to-r from-[#0f172a] via-[#134e4a] to-[#0f172a] hover:from-[#2dd4bf] hover:via-[#0d9488] hover:to-[#2dd4bf] text-white py-2 rounded-md font-semibold transition"
            >
              View Analytics
            </button>
          </div>

          {/* CHEMISTRY */}
          <div className="bg-white rounded-2xl shadow-lg border-t-4 border-teal-500 p-6 text-left flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-teal-700 mb-2">Chemistry</h3>
              <p className="text-gray-600 mb-2">Includes Physical, Organic, and Inorganic branches. Easy scoring for well-prepared students.</p>
              <p className="text-sm text-gray-500 mb-4">30 chapters · Avg. 12–14 questions</p>
            </div>
            <button
              onClick={() => openModal("Chemistry")}
              className="bg-gradient-to-r from-[#0f172a] via-[#134e4a] to-[#0f172a] hover:from-[#2dd4bf] hover:via-[#0d9488] hover:to-[#2dd4bf] text-white py-2 rounded-md font-semibold transition"
            >
              View Analytics
            </button>
          </div>

          {/* BIOLOGY */}
          <div className="bg-white rounded-2xl shadow-lg border-t-4 border-teal-500 p-6 text-left flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-teal-700 mb-2">Biology</h3>
              <p className="text-gray-600 mb-2">Most scoring subject in NEET. Dominated by NCERT-based questions from Class 11 & 12 Zoology & Botany.</p>
              <p className="text-sm text-gray-500 mb-4">38 chapters · Avg. 85–90 questions</p>
            </div>
            <button
              onClick={() => openModal("Biology")}
              className="bg-gradient-to-r from-[#0f172a] via-[#134e4a] to-[#0f172a] hover:from-[#2dd4bf] hover:via-[#0d9488] hover:to-[#2dd4bf] text-white py-2 rounded-md font-semibold transition"
            >
              View Analytics
            </button>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {activeSubject && (
        <div className="fixed inset-0 bg-opacity-40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white max-w-6xl w-full max-h-[90vh] overflow-y-auto rounded-2xl shadow-xl relative p-6">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-red-500"
            >
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold text-teal-700 mb-4">{activeSubject} Syllabus Analytics</h2>

            {activeSubject === "Physics" && <Physics />}
            {activeSubject === "Chemistry" && <Chemistry />}
            {activeSubject === "Biology" && <Biology />}
          </div>
        </div>
      )}
    </div>
  );
};

export default Analystics;
