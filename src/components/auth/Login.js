import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { login } = useContext(AuthContext);
    const navigate = useNavigate(); // Hook for navigation

    const handleLogin = async (e) => {
        e.preventDefault();

        setLoading(true); // Start loading

        try {
            const response = await axios.post(
                'https://bvmwebsolutions.com/ghoombuddy_laravel/api/login',
                { email, password }
            );

            // Check if the login is successful
            if (response.data.status) {
                login(response.data.token);
                setLoading(false); // Stop loading
                navigate('/'); // Redirect to the homepage or profile page
            } else {
                // Handle any API-specific messages
                setError(response.data.error || 'Login failed. Please check your credentials.');
                setLoading(false); // Stop loading
            }
        } catch (error) {
            setLoading(false); // Stop loading

            // Check for specific error response
            if (error.response && error.response.data && error.response.data.error) {
                setError(error.response.data.error);
            } else {
                setError('Login failed. Please check your credentials.');
            }

            console.error('Login error:', error);
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
                    <h2 className="mt-5 mb-4">Sign In</h2>
                    <form onSubmit={handleLogin}>
                        <label className="form-label" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="form-control mb-1"
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <Link to="/forgotpassword" className="forgot-password">
                            Forgot my password
                        </Link>
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
                        
                        <button type="submit" className="main-button full-w">
                            {loading ? (
                                <div className="spinner-border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            ) : (
                                'Login'
                            )}
                        </button>

                        {error && (
                            <div className="alert alert-danger mt-3" role="alert">
                                {error}
                            </div>
                        )}

                        <p className="text-center mt-3">
                            Don't have an account? <Link to="/signup" className="s-sgn">Signup</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
