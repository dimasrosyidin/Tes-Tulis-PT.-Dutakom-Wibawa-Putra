import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

const packageList = [
  { id: 1, name: 'Paket 10GB', price: 50000 },
  { id: 2, name: 'Paket 20GB', price: 90000 },
  { id: 3, name: 'Unlimited Data', price: 150000 },
  { id: 4, name: 'Paket 5GB', price: 30000 },
];

function Checkout() {
  const { id } = useParams();
  const selected = packageList.find(pkg => pkg.id === parseInt(id, 10));
  const [paymentMethod, setPaymentMethod] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const navigate = useNavigate();

  const handleDownloadInvoice = () => {
    if (!selected || !paymentMethod || !customerName) return;

    const doc = new jsPDF();

    // Header
    doc.setFontSize(14);
    doc.text('INVOICE TO :', 15, 20);
    doc.setFontSize(11);
    doc.text(customerName, 15, 26);
    doc.text(customerAddress, 15, 32);

    doc.setFontSize(14);
    doc.text('SEND PAYMENT TO :', 105, 20);
    doc.setFontSize(11);
    doc.text('Bank : BRC Bank', 105, 26);
    doc.text('Account : Dimas.Net', 105, 32);
    doc.text('Account No. : 0123 4567 8901', 105, 38);

    doc.setFontSize(14);
    doc.text('INV.NO#001', 160, 20);
    doc.text('MEI 2025', 160, 26);

    // Table
    autoTable(doc, {
      startY: 50,
      head: [['Description', 'Qty', 'Price', 'Total']],
      body: [
        [selected.name, '1', `Rp${selected.price.toLocaleString()}`, `Rp${selected.price.toLocaleString()}`],
      ],
      theme: 'grid',
      styles: { halign: 'center' },
      headStyles: { fillColor: [0, 0, 0] },
    });

    // Footer total
    doc.setFontSize(12);
    doc.text(`Subtotal : Rp${selected.price.toLocaleString()}`, 140, doc.lastAutoTable.finalY + 10);

    // Save and redirect
    doc.save(`invoice_${selected.name}.pdf`);
    navigate('/transactions');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-900 to-blue-600 text-black">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-blue-800 shadow-md text-white">
        <div className="text-2xl font-bold">Dimas.Net</div>
        <ul className="flex space-x-6 text-sm">
          <li><Link to="/main-menu" className="hover:text-orange-400">Home</Link></li>
          <li><a href="https://dnetprovider.id/id/" className="hover:text-orange-400">About Us</a></li>
          <li><Link to="/" className="hover:text-orange-400">Logout</Link></li>
        </ul>
      </nav>

      {/* Content Wrapper */}
      <div className="flex-grow p-6">
        <h1 className="text-2xl font-bold text-center text-blue-200 my-6">Detail Pesanan</h1>

        {selected ? (
          <div className="bg-white border border-blue-200 rounded-lg p-6 w-full max-w-md shadow-lg mx-auto space-y-6">
            {/* Highlight Nama Paket */}
            <h2 className="text-3xl font-extrabold text-blue-800 text-center">
              {selected.name}
            </h2>

            {/* Highlight Harga */}
            <div className="text-center">
              <span className="inline-block bg-yellow-400 text-blue-900 font-bold text-2xl px-5 py-2 rounded-lg shadow-md">
                Rp{selected.price.toLocaleString()}
              </span>
            </div>

            {/* Form Input Pelanggan */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-blue-800">Nama Pelanggan:</label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Jonathan"
                  className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-800">Alamat:</label>
                <input
                  type="text"
                  value={customerAddress}
                  onChange={(e) => setCustomerAddress(e.target.value)}
                  placeholder="123 Anywhere St., Any City"
                  className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-800">Metode Pembayaran:</label>
                <select
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                >
                  <option value="">-- Pilih --</option>
                  <option value="Transfer Bank">Transfer Bank</option>
                  <option value="E-Wallet">E-Wallet (OVO, DANA, GoPay)</option>
                  <option value="Kartu Kredit">Kartu Kredit</option>
                </select>
              </div>
            </div>

            {/* Action Buttons */}
            <button
              onClick={handleDownloadInvoice}
              disabled={!paymentMethod || !customerName}
              className={`w-full px-6 py-2 rounded text-white font-semibold transition ${
                paymentMethod && customerName
                  ? 'bg-green-600 hover:bg-green-700'
                  : 'bg-gray-400 cursor-not-allowed'
              }`}
            >
              Bayar & Unduh Invoice
            </button>

            <Link to="/transactions">
              <button className="w-full bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
                Kembali ke Transaksi
              </button>
            </Link>
          </div>
        ) : (
          <p className="text-center text-red-300 font-semibold mt-10">Paket tidak ditemukan.</p>
        )}
      </div>

      {/* Sticky Footer */}
      <footer className="bg-blue-800 py-6 text-center text-sm text-gray-300 mt-auto">
        &copy; 2025 Dimas Rosyidin
      </footer>
    </div>
  );
}

export default Checkout;
