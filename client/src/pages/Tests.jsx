import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Bot from '../components/Bot';

const Tests = () => {
  const [tests, setTests] = useState([]);

  useEffect(() => {
    const fetchTests = async () => {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/test`);
      const data = await res.json();
      setTests(data);
    };
    fetchTests();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white via-blue-50 to-teal-100">
      <Navbar />

      <main className="flex-grow pt-24 pb-20 max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-teal-700 mb-2">📝 Weekly NEET Practice Tests</h2>
          <p className="text-lg text-gray-700">Boost your confidence and measure your performance weekly.</p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {tests.map((test) => (
            <div
              key={test._id}
              className="relative bg-white/50 backdrop-blur-md border border-white/30 p-8 rounded-3xl shadow-2xl hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:scale-[1.03] transition-all duration-300 group overflow-hidden"
            >
              <div className="absolute top-0 right-0 bg-gradient-to-tr from-teal-500 to-teal-700 text-white text-sm font-semibold px-4 py-1 rounded-bl-xl shadow">
                🧪 NEET Test
              </div>

              <h3 className="text-3xl font-extrabold text-teal-800 mb-3 group-hover:text-[#0f172a] transition duration-200">
                {test.testName}
              </h3>

              <p className="text-base text-gray-600 mb-2">
                📅 {new Date(test.testDate).toLocaleDateString()}
              </p>

              <p className="text-base text-gray-700 mb-6">
                ❓ <strong>{test.questions.length}</strong> Questions &middot; ⏱️ 90 minutes
              </p>

              <Link to={`/test/start/${test._id}`}>
                <button className="w-full bg-gradient-to-br from-[#0f172a] via-[#134e4a] to-[#0f172a] hover:from-[#2dd4bf] hover:via-[#0d9488] hover:to-[#2dd4bf] text-white font-semibold text-lg py-3 rounded-xl shadow-md transition-all duration-300 hover:scale-105">
                  🚀 Start Test
                </button>
              </Link>
            </div>
          ))}
        </div>


        {tests.length === 0 && (
          <p className="text-center text-gray-500 mt-16 italic">No tests available at the moment.</p>
        )}
      </main>
      <Bot />
      <Footer />
    </div>

  );
};

export default Tests;