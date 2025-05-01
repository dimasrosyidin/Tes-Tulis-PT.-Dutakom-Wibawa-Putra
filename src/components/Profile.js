import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Profile() {
  return (
    <div className="min-h-screen from-blue-900 to-blue-600 text-white flex flex-col">
      <nav className="flex justify-between items-center px-8 py-4 bg-blue-800 shadow-md">
        <div className="text-2xl font-bold">Dimas.Net</div>
        <ul className="flex space-x-6 text-sm">
          <li>
            <Link to="/main-menu" className="hover:text-orange-400">Home</Link>
          </li>
          <li>
            <a href="https://dnetprovider.id/id/" className="hover:text-orange-400">About Us</a>
          </li>
          <li>
            <Link to="/login" className="hover:text-orange-400">Logout</Link>
          </li>
        </ul>
      </nav>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-grow bg-gradient-to-b from-blue-100 to-white p-8"
      >
        <h1 className="text-3xl font-bold text-blue-900 mb-6 text-center">Profil Pengguna</h1>
        <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
          <div className="space-y-2">
            <p className="text-lg text-gray-800"><strong>Nama:</strong> Dimas Rosyidin</p>
            <p className="text-lg text-gray-800"><strong>Email:</strong> dimas@email.com</p>
            <div>
              <p className="text-lg text-gray-800 font-semibold">Paket Pernah Dibeli:</p>
              <ul className="list-disc ml-6 mt-2 text-gray-700">
                <li>Paket 10GB - Rp25.000</li>
                <li>Paket Unlimited 7 Hari - Rp30.000</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>

      <footer className="bg-blue-800 py-6 text-center text-sm text-gray-300">
        &copy; 2025 Dimas Rosyidin 
      </footer>
    </div>
  );
}

export default Profile;