import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { UploadCloud, FilePlus, PlusCircle } from 'lucide-react';

const AdminCreateTest = () => {
  const [testName, setTestName] = useState('');
  const [testDate, setTestDate] = useState('');
  const [questions, setQuestions] = useState([]);
  const navigate = useNavigate();

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const json = JSON.parse(e.target.result);

        const isValid = Array.isArray(json) && json.every(q =>
          typeof q.id === "number" &&
          typeof q.question === "string" &&
          Array.isArray(q.options) &&
          typeof q.correctAnswer === "string"
        );

        if (!isValid) {
          toast.error("Invalid JSON structure. Please check the format.");
          return;
        }

        setQuestions(json);
        toast.success("✅ Questions uploaded successfully!");
      } catch {
        toast.error("Invalid JSON format");
      }
    };
    reader.readAsText(file);
  };

  const handleSubmit = async () => {
    if (!testName || !testDate || questions.length === 0) {
      return toast.error("Please fill all fields and upload questions");
    }

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/test/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ testName, testDate, questions }),
      });

      const data = await res.json();
      if (res.ok) {
        toast.success("🎉 Test created successfully!");
        setTestName("");
        setTestDate("");
        setQuestions([]);
      } else {
        toast.error(data?.error || "Failed to create test");
      }
    } catch (error) {
      toast.error("❌ Server error. Please check console.");
      console.error("Test creation error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-emerald-100 py-12 px-4">
        <h1 className='text-4xl font-bold text-center mb-8'>Admin Dashboard</h1>
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-200 p-10">
        <h2 className="text-3xl font-bold text-teal-700 mb-8 flex items-center gap-2">
          <FilePlus className="text-teal-600" />
          Create New NEET Test
        </h2>

        {/* Form Fields */}
        <div className="grid sm:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Test Name</label>
            <input
              type="text"
              value={testName}
              onChange={(e) => setTestName(e.target.value)}
              placeholder="Eg. NEET Mock Test - 01"
              className="w-full border rounded-xl px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Test Date</label>
            <input
              type="date"
              value={testDate}
              onChange={(e) => setTestDate(e.target.value)}
              className="w-full border rounded-xl px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
        </div>

        {/* File Upload */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Upload JSON Questions</label>
          <div className="flex items-center gap-4">
            <input
              type="file"
              accept=".json"
              onChange={handleFileUpload}
              className="file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-teal-600 file:text-white hover:file:bg-teal-700"
            />
            <a
              href="/sample-questions.json"
              className="text-sm text-blue-600 underline"
              download
            >
              📄 Download Sample Format
            </a>
          </div>
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-6 py-3 rounded-xl text-lg font-semibold shadow-md flex items-center gap-2 transition-all"
        >
          <PlusCircle size={18} />
          Create Test
        </button>

        {/* Navigation Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate('/')}
            className="bg-white border border-teal-600 text-teal-700 hover:bg-teal-600 hover:text-white px-6 py-2 rounded-xl shadow transition font-semibold"
          >
            🏠 Back to Home
          </button>

          <button
            onClick={() => navigate('/tests')}
            className="bg-white border border-blue-600 text-blue-700 hover:bg-blue-600 hover:text-white px-6 py-2 rounded-xl shadow transition font-semibold"
          >
            🧪 Go to Test Page
          </button>
        </div>

        {/* Preview Section */}
        {questions.length > 0 && (
          <div className="mt-10">
            <h3 className="text-xl font-semibold text-teal-700 mb-4">
              📋 Preview Questions ({questions.length})
            </h3>
            <div className="max-h-72 overflow-y-auto space-y-4">
              {questions.map((q, i) => (
                <div key={i} className="bg-white border border-gray-200 p-4 rounded-xl shadow-sm">
                  <p className="font-semibold text-gray-800">
                    {q.id}. {q.question}
                  </p>
                  <ul className="list-disc list-inside text-gray-700 ml-4 mt-2">
                    {q.options.map((opt, j) => (
                      <li key={j}>{opt}</li>
                    ))}
                  </ul>
                  <p className="text-sm text-green-600 mt-1">
                    ✅ Correct Answer: <strong>{q.correctAnswer}</strong>
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminCreateTest;