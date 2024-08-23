import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ExchangeCoins = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');
  const [shareCoins, setShareCoins] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserList = async () => {
      const token = localStorage.getItem('authToken');
      if (!token) {
        setError('Authentication token not found');
        return;
      }

      try {
        const response = await axios.get('https://bvmwebsolutions.com/ghoombuddy_laravel/api/user-list', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.data.status) {
          setUsers(response.data.users);
        } else {
          throw new Error(response.data.message || 'Failed to fetch user list');
        }
      } catch (error) {
        console.error('Error fetching user list:', error);
        setError('Failed to fetch user list. Please try again.');
      }
    };

    fetchUserList();
  }, []);

  const handleRecipientChange = (event) => {
    setSelectedUser(event.target.value);
  };

  const handleShareCoinsChange = (event) => {
    setShareCoins(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const token = localStorage.getItem('authToken');
    if (!token) {
      setError('Authentication token not found');
      return;
    }

    if (!selectedUser || !shareCoins) {
      setError('Please select a recipient and enter the number of coins to share.');
      return;
    }

    try {
      const exchangeResponse = await axios.post(
        'https://bvmwebsolutions.com/ghoombuddy_laravel/api/exchange-coin',
        {
          user: selectedUser, // Send user ID
          coin: shareCoins,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (exchangeResponse.data.status) {
        alert('Coins exchanged successfully!');
        setSelectedUser(''); // Reset selected user
        setShareCoins(''); // Reset share coins input
      } else {
        throw new Error(exchangeResponse.data.message || 'Failed to exchange coins');
      }
    } catch (error) {
      console.error('Error exchanging coins:', error);
      setError('Failed to exchange coins. Please try again.');
    }
  };

  return (
    <div className="setting-personal-details">
      <div className="row">
        <div className="col-lg-12">
          <h5>Exchange Trip-Coins</h5>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-lg-6">
                <div className="single-input mb-3">
                  <label htmlFor="recipient">Recipient Username</label>
                  <select
                    id="recipient"
                    className="form-control"
                    value={selectedUser}
                    onChange={handleRecipientChange}
                    required
                  >
                    <option value="">Select recipient</option>
                    {users.map((user) => (
                      <option key={user.id} value={user.id}>
                        {user.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="single-input mb-3">
                  <label htmlFor="shareCoins">Coins to Share</label>
                  <input
                    type="number"
                    id="shareCoins"
                    className="form-control"
                    placeholder="Enter number of coins"
                    value={shareCoins}
                    onChange={handleShareCoinsChange}
                    required
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="single-input">
                  <button type="submit" className="mybtn1">
                    Exchange Trip Coins
                  </button>
                </div>
              </div>
            </div>
          </form>
          {error && <p className="text-danger">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default ExchangeCoins;
