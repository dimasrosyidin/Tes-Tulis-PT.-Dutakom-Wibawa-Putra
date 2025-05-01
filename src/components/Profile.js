import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react'; 

function Profile() {
  const navigate = useNavigate();

  const purchasedPackages = [
    { name: 'Paket 10GB', price: 25000, date: '2024-12-01' },
    { name: 'Paket Unlimited 7 Hari', price: 30000, date: '2025-01-15' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-100 to-white text-black">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-blue-800 shadow-md text-white">
        <div className="text-2xl font-bold">Dimas.Net</div>
        <ul className="flex space-x-6 text-sm">
          <li><Link to="/main-menu" className="hover:text-orange-400">Home</Link></li>
          <li><a href="https://dnetprovider.id/id/" className="hover:text-orange-400">About Us</a></li>
          <li><Link to="/login" className="hover:text-orange-400">Logout</Link></li>
        </ul>
      </nav>

      {/* Profile Info */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-grow p-8"
      >
        {/* Tombol Kembali */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-blue-700 hover:text-blue-900 mb-6"
        >
          <ArrowLeft className="mr-2" size={18} />
          <span>Kembali</span>
        </button>

        <h1 className="text-3xl font-bold text-blue-900 mb-6 text-center">Profil Pengguna</h1>

        <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition space-y-6">
          <div className="space-y-2 text-lg text-gray-800">
            <p><strong>Nama:</strong> Dimas Rosyidin</p>
            <p><strong>Email:</strong> dimas@email.com</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-blue-800 mb-4">Paket Pernah Dibeli</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border rounded-lg shadow text-sm text-gray-700">
                <thead className="bg-blue-200 text-blue-800">
                  <tr>
                    <th className="px-4 py-2 text-left">Nama Paket</th>
                    <th className="px-4 py-2 text-left">Harga</th>
                    <th className="px-4 py-2 text-left">Tanggal Pembelian</th>
                  </tr>
                </thead>
                <tbody>
                  {purchasedPackages.map((pkg, index) => (
                    <tr key={index} className="border-t">
                      <td className="px-4 py-2">{pkg.name}</td>
                      <td className="px-4 py-2">Rp{pkg.price.toLocaleString()}</td>
                      <td className="px-4 py-2">{pkg.date}</td>
                    </tr>
                  ))}
                  {purchasedPackages.length === 0 && (
                    <tr>
                      <td colSpan="3" className="text-center py-4 text-gray-500">Belum ada pembelian paket.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <footer className="bg-blue-800 py-6 text-center text-sm text-gray-300">
        &copy; 2025 Dimas Rosyidin
      </footer>
    </div>
  );
}

export default Profile;
