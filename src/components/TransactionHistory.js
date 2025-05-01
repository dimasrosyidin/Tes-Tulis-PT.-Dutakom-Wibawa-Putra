import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Pencil, Trash2, Check, X } from 'lucide-react';
import { DatePicker } from 'antd';
import 'antd/dist/reset.css';

function TransactionHistory() {
  const [transactions, setTransactions] = useState([]);
  const [userId] = useState(1);
  const [filterDate, setFilterDate] = useState('');
  const [editId, setEditId] = useState(null);
  const [editPackageName, setEditPackageName] = useState('');
  const [editPrice, setEditPrice] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const dummyTransactions = [
      { id: 1, userId: 1, packageName: 'Paket 20GB', price: 90000, purchaseDate: '2023-11-01' },
      { id: 2, userId: 1, packageName: 'Paket 10GB', price: 50000, purchaseDate: '2023-11-02' },
      { id: 3, userId: 1, packageName: 'Unlimited Data', price: 150000, purchaseDate: '2024-03-10' },
    ];
    setTransactions(dummyTransactions.filter(tx => tx.userId === userId));
  }, [userId]);

  const handleDelete = (id) => {
    if (window.confirm("Yakin ingin menghapus transaksi ini?")) {
      setTransactions(transactions.filter(tx => tx.id !== id));
    }
  };

  const handleEdit = (tx) => {
    setEditId(tx.id);
    setEditPackageName(tx.packageName);
    setEditPrice(tx.price);
  };

  const handleUpdate = () => {
    const updated = transactions.map(tx =>
      tx.id === editId
        ? { ...tx, packageName: editPackageName, price: parseInt(editPrice, 10) }
        : tx
    );
    setTransactions(updated);
    setEditId(null);
  };

  const filteredTransactions = transactions.filter(tx =>
    filterDate ? tx.purchaseDate === filterDate : true
  );

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

      {/* Main Content */}
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

        <h1 className="text-3xl font-bold text-blue-900 mb-6 text-center">Riwayat Transaksi Anda</h1>

        {/* Filter */}
        <div className="mb-6 text-center">
          <label className="mr-2 font-semibold text-blue-900">Filter Tanggal:</label>
          <DatePicker
            onChange={(date, dateString) => setFilterDate(dateString)}
            format="YYYY-MM-DD"
            allowClear
          />
        </div>

        {/* Transactions Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-x-auto border">
          <table className="w-full text-sm text-left">
            <thead className="bg-blue-200 text-blue-800">
              <tr>
                <th className="px-4 py-3">ID</th>
                <th className="px-4 py-3">Paket</th>
                <th className="px-4 py-3">Harga</th>
                <th className="px-4 py-3">Tanggal</th>
                <th className="px-4 py-3">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {filteredTransactions.map(tx => (
                <tr key={tx.id} className="border-t hover:bg-gray-50">
                  <td className="px-4 py-2">{tx.id}</td>
                  <td className="px-4 py-2">
                    {editId === tx.id ? (
                      <input
                        type="text"
                        value={editPackageName}
                        onChange={(e) => setEditPackageName(e.target.value)}
                        className="border px-2 py-1 rounded focus:outline-none"
                      />
                    ) : (
                      tx.packageName
                    )}
                  </td>
                  <td className="px-4 py-2">
                    {editId === tx.id ? (
                      <input
                        type="number"
                        value={editPrice}
                        onChange={(e) => setEditPrice(e.target.value)}
                        className="border px-2 py-1 rounded focus:outline-none"
                      />
                    ) : (
                      `Rp${tx.price.toLocaleString()}`
                    )}
                  </td>
                  <td className="px-4 py-2">{tx.purchaseDate}</td>
                  <td className="px-4 py-2 flex items-center gap-4">
                    {editId === tx.id ? (
                      <>
                        <button
                          onClick={handleUpdate}
                          title="Simpan"
                          className="text-green-600 hover:text-green-800 transition"
                        >
                          <Check size={18} />
                        </button>
                        <button
                          onClick={() => setEditId(null)}
                          title="Batal"
                          className="text-gray-500 hover:text-gray-700 transition"
                        >
                          <X size={18} />
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => handleEdit(tx)}
                          title="Edit"
                          className="text-blue-600 hover:text-blue-800 transition"
                        >
                          <Pencil size={18} />
                        </button>
                        <button
                          onClick={() => handleDelete(tx.id)}
                          title="Hapus"
                          className="text-red-600 hover:text-red-800 transition"
                        >
                          <Trash2 size={18} />
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
              {filteredTransactions.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-center text-gray-500 py-4">
                    Tidak ada transaksi ditemukan.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Footer */}
      <footer className="bg-blue-800 py-6 text-center text-sm text-gray-300">
        &copy; 2025 Dimas Rosyidin
      </footer>
    </div>
  );
}

export default TransactionHistory;
