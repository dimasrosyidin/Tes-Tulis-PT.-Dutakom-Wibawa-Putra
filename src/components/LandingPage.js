import React from "react";
import { motion } from "framer-motion";
import { HiArrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import dimasImage from "../assets/images/logo.png"; // Pastikan path sesuai dengan struktur folder Anda

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-[#f4f8ff] text-gray-800 min-h-screen flex flex-col"
    >
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-blue-800 shadow-md">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => navigate(-1)}
            className="text-white hover:text-orange-300 text-xl transition-colors"
            title="Kembali"
          >
            <HiArrowLeft />
          </button>
          <div className="text-2xl font-bold text-white">Dimas.Net</div>
        </div>
        <ul className="flex space-x-6 text-sm">
          <li>
            <a
              href="https://dnetprovider.id/id/"
              className="hover:text-orange-300 text-white transition-colors duration-300"
            >
              About Us
            </a>
          </li>
        </ul>
      </nav>

      {/* Content */}
      <div className="flex flex-col md:flex-row flex-grow items-center justify-center px-8 py-12 gap-8">
        {/* Left section */}
        <div className="md:w-1/2 text-center md:text-left">
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-blue-900"
          >
            Stable Connections, Flexible Plans, Dimas.Net - Your Choice!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-4 text-base text-gray-700"
          >
            The ultimate e-commerce platform to buy internet data packages. 
            Get the best deals for all your internet needs!
          </motion.p>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-8 space-x-4"
          >
            <a
              href="/register"
              className="bg-blue-800 text-white py-2 px-6 rounded-full hover:bg-blue-900 shadow-lg hover:shadow-xl transition-all"
            >
              SIGN UP
            </a>
            <a
              href="/login"
              className="border border-blue-800 text-blue-800 py-2 px-6 rounded-full hover:bg-blue-800 hover:text-white shadow hover:shadow-md transition-all"
            >
              SIGN IN
            </a>
          </motion.div>
        </div>

        {/* Right section */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="md:w-1/2 max-w-sm bg-white p-6 rounded-lg shadow-xl text-left"
        >
          <img
            src={dimasImage}
            alt="Professional counselor"
            className="rounded-md w-full h-64 object-cover mb-4"
          />
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="bg-blue-800 py-6 text-center text-sm text-gray-300"
      >
        &copy; 2025 Dimas Rosyidin
      </motion.footer>
    </motion.div>
  );
};

export default LandingPage;
