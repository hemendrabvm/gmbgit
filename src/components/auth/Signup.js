import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [cityOne, setCityOne] = useState('');
  const [cityTwo, setCityTwo] = useState('');
  const [cityThree, setCityThree] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const [resendEmail, setResendEmail] = useState(false); // New state for resending verification email
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        'https://bvmwebsolutions.com/ghoombuddy_laravel/api/register',
        {
          name: username,
          email,
          password,
          password_confirmation: confirmPassword,
          city_one: cityOne,
          city_two: cityTwo,
          city_three: cityThree
        }
      );

      if (response.data.status) {
        setSuccess('Signup successful. Please check your email for verification link.');
        setError('');
        setResendEmail(true); // Allow resending email after signup
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      if (error.response && error.response.data && error.response.data.errors) {
        setError(Object.values(error.response.data.errors).join(', '));
      } else {
        setError('Signup failed. Please check your details.');
      }
    }
  };

  const handleResendVerification = async () => {
    try {
      const response = await axios.post('https://bvmwebsolutions.com/ghoombuddy_laravel/api/email/resend');
      if (response.data.status) {
        setSuccess('Verification email resent successfully.');
        setError('');
      } else {
        setError('Failed to resend verification email.');
      }
    } catch (error) {
      setError('An error occurred while resending verification email.');
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
          <h2 className="mt-5 mb-4">Sign Up</h2>
          <form onSubmit={handleSignup}>
            <label className="form-label" htmlFor="username">
              Username
            </label>
            <input
              className="form-control mb-4"
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
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
            <label className="form-label">
              Enter the cities names where you have expertise.
            </label>
            <input
              className="form-control mb-2"
              type="text"
              placeholder="Enter city one"
              id="city-one"
              name="city-one"
              value={cityOne}
              onChange={(e) => setCityOne(e.target.value)}
            />
            <input
              className="form-control mb-2"
              type="text"
              id="city-two"
              placeholder="Enter city two"
              name="city-two"
              value={cityTwo}
              onChange={(e) => setCityTwo(e.target.value)}
            />
            <input
              className="form-control mb-4"
              type="text"
              placeholder="Enter city three"
              id="city-three"
              name="city-three"
              value={cityThree}
              onChange={(e) => setCityThree(e.target.value)}
            />
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <input
              minLength="8"
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
            {error && (
              <div className="alert alert-danger mt-3" role="alert">
                {error}
              </div>
            )}
            {success && (
              <div className="alert alert-success mt-3" role="alert">
                {success}
              </div>
            )}
            <button type="submit" className="main-button full-w">
              {loading ? (
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              ) : (
                'Signup'
              )}
            </button>
            {/* {resendEmail && (
              <button
                type="button"
                className="main-button full-w mt-3"
                onClick={handleResendVerification}
              >
                Resend Verification Email
              </button>
            )} */}
            <p className="text-center mt-3">
              Already have an account? <Link to="/login" className="s-sgn">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
