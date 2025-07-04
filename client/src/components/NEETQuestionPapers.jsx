import React, { useState } from "react";
import { FileText, Download, Eye } from "lucide-react";

const questionPapers = [
  { year: 2024, url: "/papers/2024.pdf" },
  { year: 2023, url: "/papers/2023.pdf" },
  { year: 2022, url: "/papers/2022.pdf" },
  { year: 2021, url: "/papers/2021.pdf" },
  { year: 2020, url: "/papers/2020.pdf" },
  { year: 2019, url: "/papers/2019.pdf" },
  { year: 2018, url: "/papers/2018.pdf" },
];

const NEETQuestionPapers = () => {
  const [papers] = useState(questionPapers);

  return (
    <section className="py-20 bg-gradient-to-br from-white to-blue-50" id="neet-papers">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {/* <FileText className="w-12 h-12 mx-auto text-teal-600 mb-3 animate-bounce" /> */}
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-[#0f172a] via-[#134e4a] to-[#0f172a] 
            text-transparent bg-clip-text tracking-tight">
            NEET Previous Year Papers (2018–2024)
          </h2>
          <p className="mt-4 text-gray-700 text-lg max-w-2xl mx-auto">
            Sharpen your preparation with official NEET papers. View or download in 1 click.
          </p>
        </div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {papers
            .sort((a, b) => b.year - a.year)
            .map((paper, i) => (
              <div
                key={i}
                className="bg-white border shadow-md hover:shadow-xl p-6 rounded-2xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-2xl font-bold text-teal-700 mb-3">NEET {paper.year}</h3>
                  <p className="text-sm text-gray-600">Full Question Paper PDF</p>
                </div>
                <div className="mt-6 flex justify-between">
                  <a
                    href={paper.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 bg-gradient-to-br from-[#0f172a] via-[#134e4a] to-[#0f172a] hover:from-[#2dd4bf] hover:via-[#0d9488] hover:to-[#2dd4bf] text-white px-4 py-2 rounded-xl text-sm shadow transition"
                  >
                    <Eye size={18} /> View
                  </a>
                  <a
                    href={paper.url}
                    download
                    className="flex items-center gap-1 bg-gradient-to-br from-[#0f172a] via-[#134e4a] to-[#0f172a] hover:from-[#2dd4bf] hover:via-[#0d9488] hover:to-[#2dd4bf] text-white px-4 py-2 rounded-xl text-sm shadow transition"
                  >
                    <Download size={18} /> Download
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default NEETQuestionPapers;
