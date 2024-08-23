// AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    isAuthenticated: false,
    user: null,
    token: '',
  });

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      // Optionally, you can verify the token here by making an API call
      setAuthState({
        isAuthenticated: true,
        user: null, // Update with actual user data if available
        token,
      });
    }
  }, []);

  useEffect(() => {
    // Set Axios authorization header when token changes
    if (authState.token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${authState.token}`;
    } else {
      delete axios.defaults.headers.common['Authorization'];
    }
  }, [authState.token]);

  const login = (token) => {
    localStorage.setItem('authToken', token);
    // Optionally, fetch user data here if needed from backend
    setAuthState({
      isAuthenticated: true,
      user: null, // Update with actual user data if available
      token,
    });
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('totalCoins');
    setAuthState({
      isAuthenticated: false,
      user: null,
      token: '',
    });
  };

  // Removed refreshToken function and its usage

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
