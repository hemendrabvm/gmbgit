// ResendVerification.js
import React, { useState } from 'react';
import axios from 'axios';

const ResendVerification = ({ email }) => {
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');

  const handleResend = async () => {
    try {
      const response = await axios.post('https://bvmwebsolutions.com/ghoombuddy_laravel/api/email/resend', { email });
      setStatus(response.data.status ? 'success' : 'error');
      setMessage(response.data.message);
    } catch (error) {
      setStatus('error');
      setMessage('Failed to resend verification email. Please try again.');
    }
  };

  return (
    <div className="resend-verification">
      <button onClick={handleResend} className="main-button">
        Resend Verification Email
      </button>
      {status && (
        <div className={`alert alert-${status === 'success' ? 'success' : 'danger'}`} role="alert">
          {message}
        </div>
      )}
    </div>
  );
};

export default ResendVerification;
