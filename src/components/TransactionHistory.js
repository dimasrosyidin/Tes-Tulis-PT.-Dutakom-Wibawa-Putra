import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function TransactionHistory() {
  const [transactions, setTransactions] = useState([]);
  const [userId] = useState(1);
  const [filterDate, setFilterDate] = useState('');
  const [editId, setEditId] = useState(null);
  const [editPackageName, setEditPackageName] = useState('');
  const [editPrice, setEditPrice] = useState('');

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
        ? { ...tx, packageName: editPackageName, price: parseInt(editPrice) }
        : tx
    );
    setTransactions(updated);
    setEditId(null);
  };

  const filteredTransactions = transactions.filter(tx =>
    filterDate ? tx.purchaseDate === filterDate : true
  );

  return (
    <div className="min-h-screen bg-blue-100 text-black flex flex-col">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-blue-800 shadow-md text-white">
        <div className="text-2xl font-bold">Dimas.Net</div>
        <ul className="flex space-x-6 text-sm">
          <li><Link to="/main-menu" className="hover:text-orange-400">Home</Link></li>
          <li><a href="https://dnetprovider.id/id/" className="hover:text-orange-400">About Us</a></li>
          <li><Link to="/" className="hover:text-orange-400">Logout</Link></li>
        </ul>
      </nav>

      <div className="p-8 flex-grow">
        <h1 className="text-2xl font-bold text-blue-900 mb-6">Riwayat Transaksi Anda</h1>

        <div className="mb-4">
          <label className="mr-2 font-semibold text-blue-900">Filter Tanggal:</label>
          <input
            type="date"
            value={filterDate}
            onChange={(e) => setFilterDate(e.target.value)}
            className="px-2 py-1 rounded"
          />
        </div>

        <div className="bg-white rounded shadow overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-blue-200 text-blue-800">
              <tr>
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Paket</th>
                <th className="px-4 py-2">Harga</th>
                <th className="px-4 py-2">Tanggal</th>
                <th className="px-4 py-2">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {filteredTransactions.map(tx => (
                <tr key={tx.id} className="border-t">
                  <td className="px-4 py-2">{tx.id}</td>
                  <td className="px-4 py-2">
                    {editId === tx.id ? (
                      <input
                        type="text"
                        value={editPackageName}
                        onChange={(e) => setEditPackageName(e.target.value)}
                        className="border px-2 py-1 rounded"
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
                        className="border px-2 py-1 rounded"
                      />
                    ) : (
                      `Rp${tx.price.toLocaleString()}`
                    )}
                  </td>
                  <td className="px-4 py-2">{tx.purchaseDate}</td>
                  <td className="px-4 py-2 space-x-2">
                    {editId === tx.id ? (
                      <>
                        <button onClick={handleUpdate} className="text-green-500 hover:underline">Simpan</button>
                        <button onClick={() => setEditId(null)} className="text-gray-500 hover:underline">Batal</button>
                      </>
                    ) : (
                      <>
                        <button onClick={() => handleEdit(tx)} className="text-blue-500 hover:underline">Edit</button>
                        <button onClick={() => handleDelete(tx.id)} className="text-red-500 hover:underline">Hapus</button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
              {filteredTransactions.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-center text-gray-500 py-4">Tidak ada transaksi ditemukan.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="mt-4">
          <Link to="/main-menu" className="text-blue-800 hover:underline">← Kembali ke Menu Utama</Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-800 py-6 text-center text-sm text-gray-300">
        &copy; 2025 Dimas Rosyidin
      </footer>
    </div>
  );
}

export default TransactionHistory;
