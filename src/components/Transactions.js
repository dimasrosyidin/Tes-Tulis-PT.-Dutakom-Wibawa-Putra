import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

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
    <div className="min-h-screen bg-blue-100 text-black flex flex-col">
      <nav className="flex justify-between items-center px-8 py-4 bg-blue-800 shadow-md text-white">
        <div className="text-2xl font-bold">Dimas.Net</div>
        <ul className="flex space-x-6 text-sm">
          <li><Link to="/main-menu" className="hover:text-orange-400">Home</Link></li>
          <li><a href="https://dnetprovider.id/id/" className="hover:text-orange-400">About Us</a></li>
          <li><Link to="/" className="hover:text-orange-400">Logout</Link></li>
        </ul>
      </nav>

      <div className="p-8 flex-grow">
        <h1 className="text-2xl font-bold text-blue-900 mb-6">Paket Data Internet</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {packages.map(pkg => (
            <div key={pkg.id} className="bg-white p-4 rounded shadow">
              <h2 className="text-xl font-semibold text-blue-800">{pkg.name}</h2>
              <p className="text-gray-700 mb-2">Harga: Rp{pkg.price.toLocaleString()}</p>
              <button
                onClick={() => handleBuy(pkg)}
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded"
              >
                Beli Paket
              </button>
            </div>
          ))}
        </div>
      </div>

      <footer className="bg-blue-800 py-6 text-center text-sm text-gray-300">
        &copy; 2025 Dimas Rosyidin
      </footer>
    </div>
  );
}

export default Transactions;
