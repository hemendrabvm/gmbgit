import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        'https://bvmwebsolutions.com/ghoombuddy_laravel/api/forgot-password',
        { email }
      );

      setSuccess('Password reset link sent to your email.');
      setError('');
    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data.message || 'Failed to send reset link. Please try again.');
      } else {
        setError('Failed to send reset link. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-sc">
      <div className="login-container">
        <div className="login-box">
          <div className="login-logo">
            <Link to="/">
              <img src="./assets/images/logoo.png" alt="logo" />
            </Link>
          </div>
          <h2 className="mt-5 mb-4">Forgot Password</h2>
          <form onSubmit={handleForgotPassword}>
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input
              className="form-control mb-4"
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}
            <button type="submit" className="main-button full-w" disabled={loading}>
              {loading ? 'Sending...' : 'Send Password Reset Link'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
