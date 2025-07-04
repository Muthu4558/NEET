import React from 'react';

const chemistryData = [
  {
    chapter: "Some Basic Concepts of Chemistry",
    class: "11",
    questions: { "2019": 1, "2020": 0, "2021": 1, "2022": 0, "2023": 1 },
    total: 3,
    weightage: "Medium"
  },
  {
    chapter: "Structure of Atom",
    class: "11",
    questions: { "2019": 1, "2020": 1, "2021": 0, "2022": 1, "2023": 1 },
    total: 4,
    weightage: "Medium"
  },
  {
    chapter: "Classification of Elements & Periodicity",
    class: "11",
    questions: { "2019": 1, "2020": 1, "2021": 1, "2022": 1, "2023": 1 },
    total: 5,
    weightage: "High"
  },
  {
    chapter: "Chemical Bonding and Molecular Structure",
    class: "11",
    questions: { "2019": 1, "2020": 2, "2021": 2, "2022": 2, "2023": 1 },
    total: 8,
    weightage: "High"
  },
  {
    chapter: "States of Matter: Gases and Liquids",
    class: "11",
    questions: { "2019": 0, "2020": 0, "2021": 1, "2022": 0, "2023": 0 },
    total: 1,
    weightage: "Low"
  },
  {
    chapter: "Thermodynamics",
    class: "11",
    questions: { "2019": 1, "2020": 1, "2021": 1, "2022": 1, "2023": 1 },
    total: 5,
    weightage: "High"
  },
  {
    chapter: "Equilibrium",
    class: "11",
    questions: { "2019": 2, "2020": 1, "2021": 2, "2022": 1, "2023": 2 },
    total: 8,
    weightage: "Very High"
  },
  {
    chapter: "Redox Reactions",
    class: "11",
    questions: { "2019": 1, "2020": 1, "2021": 0, "2022": 1, "2023": 0 },
    total: 3,
    weightage: "Medium"
  },
  {
    chapter: "Hydrogen",
    class: "11",
    questions: { "2019": 0, "2020": 0, "2021": 0, "2022": 1, "2023": 0 },
    total: 1,
    weightage: "Low"
  },
  {
    chapter: "The s-Block Element",
    class: "11",
    questions: { "2019": 1, "2020": 0, "2021": 1, "2022": 0, "2023": 1 },
    total: 3,
    weightage: "Medium"
  },
  {
    chapter: "The p-Block Element (Group 13 & 14)",
    class: "11",
    questions: { "2019": 1, "2020": 1, "2021": 1, "2022": 0, "2023": 1 },
    total: 4,
    weightage: "Medium"
  },
  {
    chapter: "Organic Chemistry - Basic Principles",
    class: "11",
    questions: { "2019": 1, "2020": 1, "2021": 1, "2022": 0, "2023": 1 },
    total: 4,
    weightage: "Medium"
  },
  {
    chapter: "Hydrocarbons",
    class: "11",
    questions: { "2019": 0, "2020": 1, "2021": 0, "2022": 1, "2023": 0 },
    total: 2,
    weightage: "Low"
  },
  {
    chapter: "The Solid State",
    class: "12",
    questions: { "2019": 1, "2020": 1, "2021": 1, "2022": 0, "2023": 1 },
    total: 4,
    weightage: "Medium"
  },
  {
    chapter: "Solutions",
    class: "12",
    questions: { "2019": 1, "2020": 1, "2021": 0, "2022": 1, "2023": 1 },
    total: 4,
    weightage: "Medium"
  },
  {
    chapter: "Electrochemistry",
    class: "12",
    questions: { "2019": 1, "2020": 1, "2021": 1, "2022": 0, "2023": 1 },
    total: 4,
    weightage: "Medium"
  },
  {
    chapter: "Chemical Kinetics",
    class: "12",
    questions: { "2019": 0, "2020": 1, "2021": 1, "2022": 1, "2023": 1 },
    total: 4,
    weightage: "Medium"
  },
  {
    chapter: "Surface Chemistry",
    class: "12",
    questions: { "2019": 0, "2020": 1, "2021": 0, "2022": 0, "2023": 0 },
    total: 1,
    weightage: "Low"
  },
  {
    chapter: "The p-Block Element (Group 15–18)",
    class: "12",
    questions: { "2019": 1, "2020": 2, "2021": 1, "2022": 2, "2023": 2 },
    total: 8,
    weightage: "High"
  },
  {
    chapter: "The d- & f-Block Elements",
    class: "12",
    questions: { "2019": 1, "2020": 1, "2021": 1, "2022": 1, "2023": 0 },
    total: 4,
    weightage: "Medium"
  },
  {
    chapter: "Coordination Compounds",
    class: "12",
    questions: { "2019": 1, "2020": 1, "2021": 2, "2022": 2, "2023": 1 },
    total: 7,
    weightage: "High"
  },
  {
    chapter: "Haloalkanes and Haloarenes",
    class: "12",
    questions: { "2019": 1, "2020": 0, "2021": 1, "2022": 1, "2023": 1 },
    total: 4,
    weightage: "Medium"
  },
  {
    chapter: "Alcohols, Phenols & Ethers",
    class: "12",
    questions: { "2019": 1, "2020": 1, "2021": 1, "2022": 1, "2023": 1 },
    total: 5,
    weightage: "High"
  },
  {
    chapter: "Aldehydes, Ketones and Carboxylic Acids",
    class: "12",
    questions: { "2019": 1, "2020": 1, "2021": 0, "2022": 1, "2023": 1 },
    total: 4,
    weightage: "Medium"
  },
  {
    chapter: "Organic Compounds Containing Nitrogen",
    class: "12",
    questions: { "2019": 0, "2020": 1, "2021": 0, "2022": 1, "2023": 1 },
    total: 3,
    weightage: "Medium"
  },
  {
    chapter: "Biomolecules",
    class: "12",
    questions: { "2019": 1, "2020": 0, "2021": 1, "2022": 1, "2023": 0 },
    total: 3,
    weightage: "Medium"
  },
  {
    chapter: "Polymers",
    class: "12",
    questions: { "2019": 0, "2020": 1, "2021": 0, "2022": 0, "2023": 1 },
    total: 2,
    weightage: "Low"
  },
  {
    chapter: "Chemistry in Everyday Life",
    class: "12",
    questions: { "2019": 1, "2020": 1, "2021": 1, "2022": 1, "2023": 1 },
    total: 5,
    weightage: "High"
  }
];

const Chemistry = () => {
  return (
    <div className="p-6 bg-gradient-to-b from-white to-blue-50 min-h-screen">
      <h1 className="text-3xl font-bold text-teal-700 mb-6 text-center">🧪 NEET Chemistry Chapter-Wise Analytics</h1>
      <div className="overflow-x-auto bg-white shadow rounded-2xl">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gradient-to-r from-[#0f172a] via-[#134e4a] to-[#0f172a] text-white">
            <tr>
              <th className="px-4 py-3 text-left">#</th>
              <th className="px-4 py-3 text-left">Chapter</th>
              <th className="px-4 py-3 text-left">Class</th>
              <th className="px-4 py-3 text-left">2019</th>
              <th className="px-4 py-3 text-left">2020</th>
              <th className="px-4 py-3 text-left">2021</th>
              <th className="px-4 py-3 text-left">2022</th>
              <th className="px-4 py-3 text-left">2023</th>
              <th className="px-4 py-3 text-left">Total</th>
              <th className="px-4 py-3 text-left">Weightage</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {chemistryData.map((item, i) => (
              <tr key={i} className="hover:bg-teal-50 transition-all">
                <td className="px-4 py-3">{i + 1}</td>
                <td className="px-4 py-3 font-semibold">{item.chapter}</td>
                <td className="px-4 py-3">{item.class}</td>
                <td className="px-4 py-3">{item.questions["2019"]}</td>
                <td className="px-4 py-3">{item.questions["2020"]}</td>
                <td className="px-4 py-3">{item.questions["2021"]}</td>
                <td className="px-4 py-3">{item.questions["2022"]}</td>
                <td className="px-4 py-3">{item.questions["2023"]}</td>
                <td className="px-4 py-3">{item.total}</td>
                <td className="px-4 py-3 font-semibold text-teal-700">{item.weightage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Chemistry;