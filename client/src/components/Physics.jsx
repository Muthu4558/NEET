import React from 'react';

const tableData = [
  { chapter: "Physical world and Measurement", class: "11", questions: { "2019": 1, "2020": 0, "2021": 0, "2022": 0, "2023": 0 }, total: 1, weightage: "Low" },
  { chapter: "Motion in a Straight Line", class: "11", questions: { "2019": 1, "2020": 0, "2021": 1, "2022": 1, "2023": 1 }, total: 4, weightage: "Medium" },
  { chapter: "Laws of Motion", class: "11", questions: { "2019": 1, "2020": 1, "2021": 1, "2022": 0, "2023": 1 }, total: 4, weightage: "Medium" },
  { chapter: "Work, Energy & Power", class: "11", questions: { "2019": 0, "2020": 1, "2021": 1, "2022": 1, "2023": 1 }, total: 4, weightage: "Medium" },
  { chapter: "System of Particles & Rigid Body", class: "11", questions: { "2019": 1, "2020": 1, "2021": 1, "2022": 1, "2023": 1 }, total: 5, weightage: "High" },
  { chapter: "Gravitation", class: "11", questions: { "2019": 1, "2020": 1, "2021": 0, "2022": 0, "2023": 0 }, total: 2, weightage: "Low" },
  { chapter: "Mechanical Properties of Fluids", class: "11", questions: { "2019": 0, "2020": 0, "2021": 1, "2022": 0, "2023": 0 }, total: 1, weightage: "Low" },
  { chapter: "Thermal Properties of Matter", class: "11", questions: { "2019": 1, "2020": 0, "2021": 0, "2022": 0, "2023": 1 }, total: 2, weightage: "Low" },
  { chapter: "Thermodynamics", class: "11", questions: { "2019": 2, "2020": 1, "2021": 1, "2022": 2, "2023": 1 }, total: 7, weightage: "High" },
  { chapter: "Oscillations", class: "11", questions: { "2019": 1, "2020": 0, "2021": 1, "2022": 1, "2023": 1 }, total: 4, weightage: "Medium" },
  { chapter: "Waves", class: "11", questions: { "2019": 0, "2020": 0, "2021": 1, "2022": 0, "2023": 1 }, total: 2, weightage: "Low" },
  { chapter: "Electric Charges & Fields", class: "12", questions: { "2019": 1, "2020": 1, "2021": 0, "2022": 1, "2023": 1 }, total: 4, weightage: "Medium" },
  { chapter: "Current Electricity", class: "12", questions: { "2019": 2, "2020": 1, "2021": 1, "2022": 2, "2023": 2 }, total: 8, weightage: "High" },
  { chapter: "Moving Charges & Magnetism", class: "12", questions: { "2019": 1, "2020": 1, "2021": 1, "2022": 0, "2023": 1 }, total: 4, weightage: "Medium" },
  { chapter: "Magnetism & Matter", class: "12", questions: { "2019": 0, "2020": 1, "2021": 0, "2022": 0, "2023": 1 }, total: 2, weightage: "Low" },
  { chapter: "Electromagnetic Induction", class: "12", questions: { "2019": 1, "2020": 0, "2021": 1, "2022": 1, "2023": 0 }, total: 3, weightage: "Medium" },
  { chapter: "Alternating Current", class: "12", questions: { "2019": 1, "2020": 0, "2021": 0, "2022": 1, "2023": 0 }, total: 2, weightage: "Low" },
  { chapter: "Electromagnetic Waves", class: "12", questions: { "2019": 0, "2020": 1, "2021": 0, "2022": 0, "2023": 0 }, total: 1, weightage: "Low" },
  { chapter: "Ray Optics", class: "12", questions: { "2019": 1, "2020": 1, "2021": 1, "2022": 1, "2023": 1 }, total: 5, weightage: "High" },
  { chapter: "Wave Optics", class: "12", questions: { "2019": 0, "2020": 0, "2021": 0, "2022": 0, "2023": 1 }, total: 1, weightage: "Low" },
  { chapter: "Dual Nature of Matter", class: "12", questions: { "2019": 1, "2020": 1, "2021": 1, "2022": 0, "2023": 1 }, total: 4, weightage: "Medium" },
  { chapter: "Atoms & Nuclei", class: "12", questions: { "2019": 1, "2020": 1, "2021": 1, "2022": 2, "2023": 1 }, total: 6, weightage: "High" },
  { chapter: "Semiconductors", class: "12", questions: { "2019": 1, "2020": 1, "2021": 2, "2022": 1, "2023": 1 }, total: 6, weightage: "High" },
  { chapter: "Modern Physics", class: "12", questions: { "2019": 2, "2020": 2, "2021": 2, "2022": 2, "2023": 3 }, total: 11, weightage: "Very High" }
];

const Syllabus = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-extrabold text-teal-700 mb-4">📘 NEET Physics Analytics</h2>
        <p className="text-gray-600 text-lg">
          Here's a clear breakdown of chapter-wise question trends from 2019–2023 based on NEET Physics exams.
        </p>
      </div>

      <div className="overflow-x-auto shadow-xl rounded-xl border border-gray-200 bg-white">
        <table className="min-w-full divide-y divide-gray-200 text-sm text-gray-700">
          <thead className="bg-gradient-to-r from-[#0f172a] via-[#134e4a] to-[#0f172a] text-white text-left">
            <tr>
              <th className="px-6 py-4 font-bold">Chapter</th>
              <th className="px-4 py-4 text-center">2019</th>
              <th className="px-4 py-4 text-center">2020</th>
              <th className="px-4 py-4 text-center">2021</th>
              <th className="px-4 py-4 text-center">2022</th>
              <th className="px-4 py-4 text-center">2023</th>
              <th className="px-4 py-4 text-center">Total Qs</th>
              <th className="px-4 py-4 text-center">Weightage</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {tableData.map((row, idx) => (
              <tr key={idx} className="hover:bg-blue-50 transition-all">
                <td className="px-6 py-4 font-medium">{row.chapter}</td>
                {["2019", "2020", "2021", "2022", "2023"].map((year) => (
                  <td key={year} className="px-4 py-4 text-center">{row.questions[year] || 0}</td>
                ))}
                <td className="px-4 py-4 text-center font-semibold text-teal-700">{row.total}</td>
                <td className="px-4 py-4 text-center">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
                    row.weightage === "Very High"
                      ? "bg-red-100 text-red-600"
                      : row.weightage === "High"
                      ? "bg-orange-100 text-orange-600"
                      : row.weightage === "Medium"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-gray-100 text-gray-600"
                  }`}>
                    {row.weightage}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Syllabus;
