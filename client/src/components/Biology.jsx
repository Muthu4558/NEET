import React from 'react';

const biologySyllabus = [
  {
    topic: 'Animal Kingdom',
    subtopics: [
      { name: 'Phylum Chordata', questions: 9 },
      { name: 'Phylum Ctenophora', questions: 7 },
      { name: 'Phylum Coelenterata (Cnidaria)', questions: 4 },
      { name: 'Phylum Annelida', questions: 4 },
      { name: 'Class – Cyclostomata', questions: 4 },
      { name: 'Phylum Porifera', questions: 3 },
      { name: 'Class – Amphibia', questions: 3 },
      { name: 'Class – Reptilia', questions: 2 },
      { name: 'Basis of Classification', questions: 1 },
      { name: 'Phylum Arthropoda', questions: 1 },
      { name: 'Phylum Echinodermata', questions: 1 },
      { name: 'Phylum Hemichordata', questions: 1 },
      { name: 'Class – Osteichthyes', questions: 1 },
    ],
  },
  {
    topic: 'Structural Organisation in Animals',
    subtopics: [
      { name: 'Animal Tissues', questions: 24 },
      { name: 'Cockroach', questions: 17 },
      { name: 'Frogs', questions: 3 },
    ],
  },
  {
    topic: 'Biomolecules',
    subtopics: [
      { name: 'Enzymes', questions: 16 },
      { name: 'How to Analyse Chemical Composition?', questions: 13 },
      { name: 'Proteins', questions: 9 },
      { name: 'Polysaccharides', questions: 7 },
      { name: 'Primary and Secondary Metabolites', questions: 6 },
      { name: 'Nucleic Acids', questions: 4 },
      { name: 'Structure of Proteins', questions: 1 },
    ],
  },
  {
    topic: 'Digestion and Absorption',
    subtopics: [
      { name: 'Digestive Enzymes', questions: 9 },
      { name: 'Digestive Glands', questions: 7 },
      { name: 'Absorption', questions: 4 },
    ],
  },
  {
    topic: 'Breathing and Exchange of Gases',
    subtopics: [
      { name: 'Human Respiratory System', questions: 12 },
      { name: 'Exchange of Gases', questions: 5 },
    ],
  },
  {
    topic: 'Body Fluids and Circulation',
    subtopics: [
      { name: 'Cardiac Cycle', questions: 8 },
      { name: 'Double Circulation', questions: 6 },
    ],
  },
  {
    topic: 'Excretory Products and their Elimination',
    subtopics: [
      { name: 'Human Excretory System', questions: 7 },
    ],
  },
  {
    topic: 'Locomotion and Movement',
    subtopics: [
      { name: 'Types of Movement', questions: 5 },
      { name: 'Skeletal Muscle', questions: 4 },
    ],
  },
  {
    topic: 'Neural Control and Coordination',
    subtopics: [
      { name: 'Neuron and Nerve Impulse', questions: 7 },
    ],
  },
  {
    topic: 'Chemical Coordination and Integration',
    subtopics: [
      { name: 'Human Endocrine Glands', questions: 12 },
      { name: 'Hormones of Heart, Kidney, and Gastrointestinal Tract', questions: 6 },
    ],
  },
];

const Biology = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-green-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-teal-700 mb-8">🧬 Biology Syllabus Analysis (2019–2024)</h2>
        {biologySyllabus.map((section, idx) => (
          <div key={idx} className="mb-10">
            <h3 className="text-2xl font-semibold text-teal-600 mb-3 border-b pb-2">{section.topic}</h3>
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-300 text-left">
                <thead className="bg-teal-100">
                  <tr>
                    <th className="p-3 border">Sub Topic</th>
                    <th className="p-3 border">Number of Questions</th>
                  </tr>
                </thead>
                <tbody>
                  {section.subtopics.map((sub, i) => (
                    <tr key={i} className="hover:bg-gray-50">
                      <td className="p-3 border">{sub.name}</td>
                      <td className="p-3 border">{sub.questions}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Biology;
