import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

function Transactions() {
  const [packages, setPackages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const dummyPackages = [
      { id: 1, name: 'Paket 10GB', price: 50000 },
      { id: 2, name: 'Paket 20GB', price: 90000 },
      { id: 3, name: 'Unlimited Data', price: 150000 },
      { id: 4, name: 'Paket 5GB', price: 30000 },
    ];
    setPackages(dummyPackages);
  }, []);

  const handleBuy = (pkg) => {
    navigate(`/checkout/${pkg.id}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white text-black flex flex-col">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-blue-800 shadow-md text-white">
        <div className="text-2xl font-bold">Dimas.Net</div>
        <ul className="flex space-x-6 text-sm">
          <li><Link to="/main-menu" className="hover:text-orange-400">Home</Link></li>
          <li><a href="https://dnetprovider.id/id/" className="hover:text-orange-400">About Us</a></li>
          <li><Link to="/" className="hover:text-orange-400">Logout</Link></li>
        </ul>
      </nav>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="p-8 flex-grow"
      >
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-blue-700 hover:text-blue-900 mb-6 transition"
        >
          <ArrowLeft className="mr-2" size={18} />
          <span>Kembali</span>
        </button>

        <h1 className="text-3xl font-bold text-blue-900 mb-6 text-center">Paket Data Internet</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map(pkg => (
            <motion.div
              key={pkg.id}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="relative bg-white p-6 rounded-2xl shadow-lg border hover:shadow-xl transition"
            >
              {/* Highlight Badge */}
              <div className="absolute -top-3 -right-3 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                Best Deal
              </div>

              {/* Paket Name */}
              <h2 className="text-2xl font-extrabold text-blue-800 mb-4 uppercase tracking-wide">
                {pkg.name}
              </h2>

              {/* Price Tag */}
              <div className="inline-block bg-blue-600 text-white font-bold text-xl px-4 py-2 rounded-lg shadow-md mb-6">
                Rp{pkg.price.toLocaleString()}
              </div>

              <button
                onClick={() => handleBuy(pkg)}
                className="w-full bg-blue-600 hover:bg-blue-800 text-white py-2 rounded-lg font-medium transition"
              >
                Beli Paket
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Footer */}
      <footer className="bg-blue-800 py-6 text-center text-sm text-gray-300">
        &copy; 2025 Dimas Rosyidin
      </footer>
    </div>
  );
}

export default Transactions;
