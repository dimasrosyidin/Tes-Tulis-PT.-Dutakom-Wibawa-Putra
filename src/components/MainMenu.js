import React from 'react';
import { Link } from 'react-router-dom';

function MainMenu() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-600 text-white flex flex-col">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-blue-800 shadow-md text-white">
        <div className="text-3xl font-bold">Dimas.Net</div>
        <ul className="flex space-x-8 text-sm">
          <li>
            <Link to="/main-menu" className="hover:text-orange-400 transition">Home</Link>
          </li>
          <li>
            <a href="https://dnetprovider.id/id/" className="hover:text-orange-400 transition">About Us</a>
          </li>
          <li>
            <Link to="/" className="hover:text-orange-400 transition">Logout</Link>
          </li>
        </ul>
      </nav>

      <div className="flex flex-col items-center justify-center flex-grow text-center px-4 md:px-0">
        <h1 className="text-5xl font-bold mb-6 text-yellow-500 drop-shadow-lg">Dimas Shop</h1>
        <p className="text-xl text-white mb-12 max-w-3xl mx-auto">
          Welcome to Dimas Shop - the ultimate e-commerce platform to buy internet data packages. 
          Get the best deals for all your internet needs!
        </p>
      </div>

      {/* Action Buttons Section */}
      <div className="bg-blue-800 py-10 rounded-t-3xl flex justify-center mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-4/5 max-w-4xl">
          
          {/* Profile Button */}
          <Link
            to="/profile"
            className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-500 text-white py-6 rounded-lg shadow-lg text-center transition font-medium text-xl transform hover:scale-105"
          >
            <i className="fas fa-user text-3xl mb-3"></i>
            Profile
          </Link>

          {/* Transactions Button */}
          <Link
            to="/transactions"
            className="bg-gradient-to-r from-orange-500 to-orange-700 hover:from-orange-700 hover:to-orange-500 text-white py-6 rounded-lg shadow-lg text-center transition font-medium text-xl transform hover:scale-105"
          >
            <i className="fas fa-shopping-cart text-3xl mb-3"></i>
            Paket Data
          </Link>

          {/* Transaction History Button */}
          <Link
            to="/transaction-history"
            className="bg-gradient-to-r from-green-500 to-green-700 hover:from-green-700 hover:to-green-500 text-white py-6 rounded-lg shadow-lg text-center transition font-medium text-xl transform hover:scale-105"
          >
            <i className="fas fa-history text-3xl mb-3"></i>
            Riwayat Transaksi
          </Link>

        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-800 py-6 text-center text-sm text-gray-300">
        &copy; 2025 Dimas Rosyidin
      </footer>
    </div>
  );
}

export default MainMenu;
