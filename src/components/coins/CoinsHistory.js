import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CoinsHistory = () => {
  const [coinHistory, setCoinHistory] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCoinHistory = async () => {
      const token = localStorage.getItem('authToken');
      if (!token) {
        setError('Authentication token not found');
        return;
      }

      try {
        const response = await axios.get('https://bvmwebsolutions.com/ghoombuddy_laravel/api/coin-history', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.data.status) {
          setCoinHistory(response.data.coinHistory);
        } else {
          throw new Error(response.data.message || 'Failed to fetch coin history');
        }
      } catch (error) {
        console.error('Error fetching coin history:', error);
        setError('Failed to fetch coin history. Please try again.');
      }
    };

    fetchCoinHistory();
  }, []);

  return (
    <div className="setting-personal-details">
      <div className="row">
        <div className="col-lg-12">
          <h5>Trip-Coins History</h5>
          {coinHistory.length > 0 ? (
            <div className="table-responsive">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Post Title / Username</th>
                  <th>Coins Received</th>
                  <th>From</th>
                </tr>
              </thead>
              <tbody>
                {coinHistory.map((historyItem, index) => (
                  <tr key={index}>
                    <td>{historyItem.Date}</td>
                    <td>{historyItem.receiver_sender_name}</td>
                    <td>{historyItem.coin}</td>
                    <td>{historyItem.From}</td>
                  </tr>
                ))}
              </tbody>
            </table></div>
          ) : (
            <p>No coin history available</p>
          )}
          {error && <p className="text-danger">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default CoinsHistory;
