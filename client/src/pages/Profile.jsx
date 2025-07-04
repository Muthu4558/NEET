import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { LogOut, Download, Calendar, BarChart } from 'lucide-react';
import { toast } from 'react-toastify';
import Bot from '../components/Bot';

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: 'Guest', email: 'N/A' });
  const [results, setResults] = useState([]);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    } else {
      navigate('/login?redirect=/profile');
    }

    const fetchResults = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/test/my-results`, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (!res.ok) {
          throw new Error('Unauthorized or server error');
        }

        const data = await res.json();
        setResults(data);
      } catch (err) {
        toast.error('Failed to fetch test results');
        console.error('Fetch error:', err);
      }
    };

    fetchResults();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login?redirect=/profile');
    toast.success('Logged out successfully');
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text('NEET Test Report', 14, 20);
    doc.setFontSize(12);
    doc.text(`Name: ${user.name}`, 14, 30);
    doc.text(`Email: ${user.email}`, 14, 37);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 14, 44);

    const tableData = results.map((r, index) => [
      index + 1,
      r.testName,
      `${r.score}/${r.totalQuestions}`,
      new Date(r.date).toLocaleDateString(),
    ]);

    doc.autoTable({
      startY: 50,
      head: [['#', 'Test Name', 'Score', 'Date']],
      body: tableData,
    });

    doc.save('NEET-Test-Report.pdf');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white via-blue-50 to-teal-100">
      <Navbar />
      <main className="flex-grow max-w-6xl mx-auto px-6 py-20 mt-14">
        <div className="bg-white/60 backdrop-blur-lg border border-white/30 shadow-2xl rounded-3xl p-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-center text-teal-700 mb-10">
            👩‍⚕️ Welcome, Dr. {user.name}
          </h1>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-10">
            <p className="text-lg text-gray-800">
              <span className="font-semibold">📧 Email:</span> {user.email}
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 bg-rose-500 hover:bg-rose-600 text-white px-5 py-2 rounded-xl shadow transition"
              >
                <LogOut size={18} />
                Logout
              </button>
              {results.length > 0 && (
                <button
                  onClick={downloadPDF}
                  className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-xl shadow transition"
                >
                  <Download size={18} />
                  PDF Report
                </button>
              )}
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-center text-blue-800 mb-8">📊 Your Test History</h2>

          {results.length === 0 ? (
            <p className="text-center text-gray-500 italic">No test records found yet.</p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {results.map((r, i) => (
                <div
                  key={i}
                  className="bg-white/80 backdrop-blur-lg p-6 rounded-xl border border-blue-200 shadow-md hover:shadow-xl hover:scale-[1.03] transition-all"
                >
                  <h3 className="text-xl font-bold text-teal-800 mb-2">{r.testName}</h3>
                  <p className="text-gray-800 flex items-center gap-2">
                    <BarChart size={16} className="text-blue-600" />
                    Score: {r.score}/{r.totalQuestions}
                  </p>
                  <p className="text-gray-600 text-sm flex items-center gap-2 mt-1">
                    <Calendar size={16} className="text-gray-500" />
                    {new Date(r.date).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Bot />
      <Footer />
    </div>
  );
};

export default Profile;