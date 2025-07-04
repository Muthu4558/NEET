import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#0f172a] via-[#134e4a] to-[#0f172a] text-white relative z-10">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-3xl font-extrabold text-teal-400">NEETopedia</h2>
          <p className="mt-4 text-sm text-gray-300 leading-relaxed">
            Your one-stop platform for NEET preparation. Get tests, notes, past papers, and more — all in one place.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-3 text-md text-gray-300">
            <li><a href="/" className="hover:text-teal-400 transition duration-200">Home</a></li>
            <li><a href="/tests" className="hover:text-teal-400 transition duration-200">Tests</a></li>
            <li><a href="/notes" className="hover:text-teal-400 transition duration-200">Notes</a></li>
            <li><a href="/profile" className="hover:text-teal-400 transition duration-200">Profile</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Newsletter</h3>
          <p className="text-sm text-gray-300 mb-3">Subscribe for NEET updates and resources.</p>
          <form className="flex items-center">
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-l-xl bg-gray-900 border border-gray-700 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
            <button
              type="submit"
              className="bg-teal-500 hover:bg-teal-600 px-4 py-2 rounded-r-xl text-sm font-semibold transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Follow Us</h3>
          <div className="flex gap-4 text-xl text-white">
            <a href="#" className="hover:text-blue-400 transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-sky-400 transition"><FaTwitter /></a>
            <a href="#" className="hover:text-pink-400 transition"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-300 transition"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-teal-800 mt-10 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} <span className="text-teal-400 font-semibold">NEETopedia</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
