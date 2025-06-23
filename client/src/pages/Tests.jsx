import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from "react-router-dom";

const getNextSunday = () => {
  const today = new Date();
  const nextSunday = new Date(today);
  nextSunday.setDate(today.getDate() + ((7 - today.getDay()) % 7 || 7));
  return nextSunday.toDateString();
};

const Tests = () => {
  const sundayDate = getNextSunday();
  const totalQuestions = 75;
  const recommendedTime = 90;

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
            <Link to="/test/start">
              <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition">
                🚀 Start Test
              </button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Tests;
