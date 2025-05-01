import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Register() {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('User registered successfully!');
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-600 text-white flex flex-col">
      <nav className="flex justify-between items-center px-8 py-4 bg-blue-800 shadow-md">
        <div className="text-2xl font-bold">Dimas.Net</div>
        <ul className="flex space-x-6 text-sm">
          <li>
            <a href="https://dnetprovider.id/id/" className="hover:text-orange-400">About Us</a>
          </li>
        </ul>
      </nav>

      <div className="flex-grow bg-gray-50 flex items-center justify-center">
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.4 }}
          className="bg-white p-8 rounded shadow w-96">
          <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">Register</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700">Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded text-black focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded text-black focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>
            <div>
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded text-black focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
            >
              Register
            </button>
          </form>
          <div className="mt-4 text-center">
            <p className="text-gray-600">
              Have an account?{' '}
              <a href="/login" className="text-blue-500 hover:underline">
                Login
              </a>
            </p>
          </div>
        </motion.div>
      </div>

      <footer className="bg-blue-800 py-6 text-center text-sm text-gray-300">
        &copy; 2025 Dimas Rosyidin
      </footer>
    </motion.div>
  );
}

export default Register;