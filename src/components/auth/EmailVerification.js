// EmailVerification.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EmailVerification = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const response = await axios.get(`https://bvmwebsolutions.com/ghoombuddy_laravel/api/email/verify/${userId}`);
        setStatus(response.data.status ? 'success' : 'error');
        setMessage(response.data.message);
        if (response.data.status) {
          // Optionally redirect or provide further instructions
          setTimeout(() => navigate('/login'), 2000);
        }
      } catch (error) {
        setStatus('error');
        setMessage('Verification failed. Please try again.');
      }
    };

    verifyEmail();
  }, [userId, navigate]);

  return (
    <div className="email-verification">
      <h2>Email Verification</h2>
      <div className={`alert alert-${status === 'success' ? 'success' : 'danger'}`} role="alert">
        {message}
      </div>
    </div>
  );
};

export default EmailVerification;
