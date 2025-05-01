import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [resetEmail, setResetEmail] = useState('');
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showResetPassword, setShowResetPassword] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleResetChange = (e) => {
    setResetEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email === 'dimas@gmail.com' && formData.password === 'dimas123') {
      setError('');
      setIsSuccess(true);
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
        navigate('/main-menu');
      }, 2000);
    } else {
      setError('Invalid email or password');
      setIsSuccess(false);
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 2000);
    }
  };

  const handlePasswordReset = () => {
    if (resetEmail) {
      alert(`A reset link has been sent to ${resetEmail}`);
      setResetEmail('');
      setShowResetPassword(false);
    } else {
      alert('Please enter a valid email address.');
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-600 text-white flex flex-col">
      <nav className="flex justify-between items-center px-8 py-4 bg-blue-800 shadow-md">
        <div className="text-2xl font-bold">Dimas.Net</div>
        <ul className="flex space-x-6 text-sm">
          <li>
            <a href="https://dnetprovider.id/id/" className="hover:text-orange-400">About Us</a>
          </li>
        </ul>
      </nav>

      <div className="flex-grow bg-gray-100 flex items-center justify-center">
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.4 }}
          className="bg-white p-8 rounded shadow-lg w-96">
          <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
            {showResetPassword ? 'Reset Password' : 'Login'}
          </h2>

          {showResetPassword ? (
            <div>
              <label htmlFor="reset-email" className="block text-gray-700">Enter your email</label>
              <input
                type="email"
                id="reset-email"
                value={resetEmail}
                onChange={handleResetChange}
                className="w-full px-4 py-2 border rounded text-black focus:outline-none focus:ring focus:ring-blue-200"
                placeholder="Enter your email address"
              />
              <button
                onClick={handlePasswordReset}
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition mt-4"
              >
                Send Reset Link
              </button>
              <button
                onClick={() => setShowResetPassword(false)}
                className="w-full mt-2 text-gray-500 hover:underline text-sm"
              >
                Back to Login
              </button>
            </div>
          ) : (
            <>
              {error && (
                <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
                  className="bg-red-100 text-red-700 px-4 py-2 rounded mb-4">{error}</motion.div>
              )}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded text-black focus:outline-none focus:ring focus:ring-blue-200"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-gray-700">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded text-black focus:outline-none focus:ring focus:ring-blue-200"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
                >
                  Login
                </button>
              </form>
              <div className="mt-4 text-center">
                <p className="text-gray-600">
                  Forgot your password?{' '}
                  <button
                    onClick={() => setShowResetPassword(true)}
                    className="text-blue-500 hover:underline"
                  >
                    Reset Password
                  </button>
                </p>
                <p className="text-gray-600 mt-2">
                  Don't have an account?{' '}
                  <a href="/register" className="text-blue-500 hover:underline">
                    Register
                  </a>
                </p>
              </div>
            </>
          )}
        </motion.div>
      </div>

      <footer className="bg-blue-800 py-6 text-center text-sm text-gray-300">
        &copy; 2025 Dimas Rosyidin
      </footer>

      {showPopup && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-8 md:p-12 rounded-lg shadow-2xl max-w-lg w-full text-center"
          >
            <div className="mb-4">
              {isSuccess ? (
                <svg className="w-16 h-16 mx-auto text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg className="w-16 h-16 mx-auto text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </div>
            <h2 className={`text-3xl font-bold ${isSuccess ? 'text-green-600' : 'text-red-600'}`}>
              {isSuccess ? 'Login Successful!' : 'Login Failed'}
            </h2>
            <p className="text-gray-700 mt-4 text-lg">
              {isSuccess ? 'You will be redirected to the main menu shortly.' : 'Please check your email and password and try again.'}
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className={`mt-6 px-6 py-3 rounded-full text-white text-sm font-medium shadow-lg transition-all ${isSuccess ? 'bg-green-500 hover:bg-green-600' : 'bg-red-500 hover:bg-red-600'}`}
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
}

export default Login;