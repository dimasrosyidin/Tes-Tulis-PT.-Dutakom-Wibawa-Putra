import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Register from './components/Register';
import MainMenu from './components/MainMenu';
import Profile from './components/Profile';
import Transactions from './components/Transactions';
import Checkout from './components/Checkout';
import TransactionHistory from './components/TransactionHistory';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/main-menu" element={<MainMenu />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/checkout/:id" element={<Checkout />} />
        <Route path="/transaction-history" element={<TransactionHistory />} />
      </Routes>
    </Router>
  );
}

export default App;