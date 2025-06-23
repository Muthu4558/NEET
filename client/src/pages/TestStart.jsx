import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import questions from '../data/questions';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft  } from "react-icons/fa";

const QUESTIONS_PER_PAGE = 25;

const TestStart = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(90 * 60); // 90 minutes
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const totalPages = Math.ceil(questions.length / QUESTIONS_PER_PAGE);

  useEffect(() => {
    if (timeLeft <= 0 && !isSubmitted) {
      handleSubmit();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isSubmitted]);

  const handleOptionChange = (qId, option) => {
    if (isSubmitted) return;
    setSelectedAnswers(prev => ({ ...prev, [qId]: option }));
  };

  const handleSubmit = async () => {
    let marks = 0;
    questions.forEach(q => {
      if (selectedAnswers[q.id] === q.correctAnswer) marks += 1;
    });
    setScore(marks);
    setIsSubmitted(true);
    toast.success(`Test submitted! You scored ${marks} out of ${questions.length}`);

    try {
      const token = localStorage.getItem('token');
      const today = new Date();
      const day = today.toLocaleString('en-IN', { weekday: 'long' });
      const date = today.getDate();
      const testName = `Test ${date} - ${day}`;

      await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/test/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          testName,
          score: marks,
          totalQuestions: questions.length,
        }),
      });
    } catch (err) {
      console.error('❌ Failed to save test result', err);
      toast.error('Failed to save test result');
    }
  };

  const handleRestart = () => {
    setSelectedAnswers({});
    setTimeLeft(240);
    setIsSubmitted(false);
    setScore(0);
    setCurrentPage(1);
  };

  const currentQuestions = questions.slice(
    (currentPage - 1) * QUESTIONS_PER_PAGE,
    currentPage * QUESTIONS_PER_PAGE
  );

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-teal-50 px-4 py-8 mt-14">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-teal-700 text-center mb-6">
            NEET Practice Test
          </h1>

          {!isSubmitted && (
            <div className="text-center text-lg text-gray-700 mb-6">
              ⏱️ Time Remaining: <span className="font-bold text-red-600">{Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, '0')}</span>
            </div>
          )}

          {!isSubmitted ? (
            <>
              <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
                {currentQuestions.map((q, index) => (
                  <div key={q.id} className="mb-6 bg-white p-6 rounded-lg shadow">
                    <h2 className="text-lg font-semibold mb-3">
                      {q.id}. {q.question}
                    </h2>
                    <div className="grid gap-3">
                      {q.options.map((option, i) => (
                        <label key={i} className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name={`question-${q.id}`}
                            value={option}
                            checked={selectedAnswers[q.id] === option}
                            onChange={() => handleOptionChange(q.id, option)}
                          />
                          <span>{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
                <div className="flex justify-between items-center mt-6">
                  <button
                    type="button"
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(prev => prev - 1)}
                    className="bg-teal-700 text-white px-4 py-2 rounded shadow disabled:opacity-50"
                  >
                    <FaArrowAltCircleLeft  className="inline ml-2"/> Previous
                  </button>
                  {currentPage < totalPages ? (
                    <button
                      type="button"
                      onClick={() => setCurrentPage(prev => prev + 1)}
                      className="bg-teal-700 hover:bg-teal-600 text-white px-4 py-2 rounded shadow"
                    >
                      Next <FaArrowAltCircleRight className="inline ml-2" />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={handleSubmit}
                      className="bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-2 rounded shadow"
                    >
                      ✅ Complete Test
                    </button>
                  )}

                </div>
              </form>
            </>
          ) : (
            <div className="text-center mt-12">
              <h2 className="text-2xl font-bold text-green-600 mb-6">
                🎉 Test Completed! You scored {score} out of {questions.length}
              </h2>
              <div className="flex justify-center gap-6 mt-4">
                <button
                  onClick={handleRestart}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-2 rounded shadow"
                >
                  🔄 Restart Test
                </button>
                <button
                  onClick={() => navigate('/')}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded shadow"
                >
                  🏠 Go to Home Page
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TestStart;