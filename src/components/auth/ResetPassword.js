import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useLocation, useNavigate } from 'react-router-dom';

const ResetPassword = () => {
  const { token } = useParams(); // Extract token from URL parameters
  const location = useLocation(); // Get location object to parse query params
  const navigate = useNavigate(); // Use useNavigate for navigation

  const [email, setEmail] = useState(new URLSearchParams(location.search).get('email')); // Extract email from query params
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setLoading(true);
    setError(''); // Clear any previous error

    try {
      const response = await axios.post(
        'https://bvmwebsolutions.com/ghoombuddy_laravel/api/reset-password',
        {
          email,
          password,
          password_confirmation: confirmPassword, // Ensure this field matches API requirements
          token
        }
      );

      setSuccess('Password reset successfully.');
      navigate('/login'); // Redirect user to login page after successful reset
    } catch (error) {
      if (error.response && error.response.data) {
        // Display detailed error message from API
        setError(error.response.data.message || 'Failed to reset password. Please try again.');
      } else {
        setError('Failed to reset password. Please try again.');
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
          <a href="/">
              <img src="./assets/images/logoo.png" alt="logo" />
            </a>
          </div>
          <h2 className="mt-5 mb-4">Reset Password</h2>
          <form onSubmit={handleResetPassword}>
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input
              className="form-control mb-4"
              type="email"
              id="email"
              name="email"
              value={email || ''}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <input
              className="form-control mb-4"
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label className="form-label" htmlFor="confirm-password">
              Confirm Password
            </label>
            <input
              className="form-control mb-4"
              type="password"
              id="confirm-password"
              name="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}
            <button type="submit" className="main-button full-w" disabled={loading}>
              {loading ? 'Resetting...' : 'Reset Password'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
