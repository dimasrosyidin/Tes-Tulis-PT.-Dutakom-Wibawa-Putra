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
  const selected = packageList.find(pkg => pkg.id === parseInt(id));
  const [paymentMethod, setPaymentMethod] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const navigate = useNavigate();

  const handleDownloadInvoice = () => {
    if (!selected || !paymentMethod) return;

    const doc = new jsPDF();

    // Header
    doc.setFontSize(14);
    doc.text('INVOICE TO :', 15, 20);
    doc.setFontSize(11);
    doc.text(customerName || 'Nama Pelanggan', 15, 26);
    doc.text(customerAddress || 'Alamat Pelanggan', 15, 32);

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
    <div className="min-h-screen from-blue-900 to-blue-600 text-black flex flex-col">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-blue-800 shadow-md text-white">
        <div className="text-2xl font-bold">Dimas.Net</div>
        <ul className="flex space-x-6 text-sm">
          <li><Link to="/main-menu" className="hover:text-orange-400">Home</Link></li>
          <li><a href="https://dnetprovider.id/id/" className="hover:text-orange-400">About Us</a></li>
          <li><Link to="/" className="hover:text-orange-400">Logout</Link></li>
        </ul>
      </nav>

      <h1 className="text-2xl font-bold text-center text-blue-800 my-6">Detail Pesanan</h1>

      {selected ? (
        <div className="bg-white border border-blue-200 rounded-lg p-6 w-full max-w-md shadow-lg mx-auto">
          <p className="text-blue-800 font-semibold"><strong>Nama Paket:</strong> {selected.name}</p>
          <p className="text-blue-800 font-semibold"><strong>Harga:</strong> Rp{selected.price.toLocaleString()}</p>

          <div className="mt-4">
            <label className="block text-sm font-medium text-blue-800">Nama Pelanggan:</label>
            <input
              type="text"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              placeholder="Jonathan"
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
            />

            <label className="block text-sm font-medium text-blue-800 mt-3">Alamat:</label>
            <input
              type="text"
              value={customerAddress}
              onChange={(e) => setCustomerAddress(e.target.value)}
              placeholder="123 Anywhere St., Any City"
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
            />

            <label className="block text-sm font-medium text-blue-800 mt-3">Metode Pembayaran:</label>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
            >
              <option value="">-- Pilih --</option>
              <option value="Transfer Bank">Transfer Bank</option>
              <option value="E-Wallet">E-Wallet (OVO, DANA, GoPay)</option>
              <option value="Kartu Kredit">Kartu Kredit</option>
            </select>
          </div>

          <button
            onClick={handleDownloadInvoice}
            disabled={!paymentMethod || !customerName}
            className={`mt-6 w-full px-6 py-2 rounded text-white transition ${
              paymentMethod && customerName
                ? 'bg-green-600 hover:bg-green-700'
                : 'bg-gray-400 cursor-not-allowed'
            }`}
          >
            Bayar & Unduh Invoice
          </button>

          <Link to="/transactions">
            <button className="mt-4 w-full bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
              Kembali ke Transaksi
            </button>
          </Link>
        </div>
      ) : (
        <p className="text-center text-red-600 font-semibold mt-10">Paket tidak ditemukan.</p>
      )}

      {/* Footer */}
      <footer className="bg-blue-800 mt-10 py-6 text-center text-sm text-gray-300 w-full">
        &copy; 2025 Dimas Rosyidin
      </footer>
    </div>
  );
}

export default Checkout;
