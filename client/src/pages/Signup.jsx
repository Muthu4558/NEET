import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { Eye, EyeOff } from 'lucide-react';
import { toast } from 'react-toastify';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const redirect = new URLSearchParams(location.search).get('redirect') || '/tests';

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', {
        name,
        email,
        password,
      });
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      navigate(redirect);
      toast.success('Signup successful');
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert('Signup failed');
      toast.error('Signup failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-100 to-teal-100 px-4">
      <div className="w-full max-w-md bg-white/30 backdrop-blur-md border border-white/30 p-8 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-extrabold text-center text-teal-700 mb-8">Create Your Account</h2>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="relative">
            <label className="block text-sm text-gray-700 mb-1">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 pr-10"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-9 cursor-pointer text-gray-600"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 rounded-md transition duration-200 shadow"
          >
            Signup
          </button>
        </form>

        <p className="mt-6 text-sm text-center text-gray-700">
          Already have an account?{' '}
          <a
            href={`/login?redirect=${redirect}`}
            className="text-teal-600 font-semibold hover:underline"
          >
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
