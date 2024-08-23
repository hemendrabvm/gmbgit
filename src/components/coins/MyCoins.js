import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyCoins = () => {
  const [totalCoins, setTotalCoins] = useState(0);
  const [coinsReceivedPosts, setCoinsReceivedPosts] = useState(0);
  const [coinsReceivedUsers, setCoinsReceivedUsers] = useState(0);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCoinsData = async () => {
      const token = localStorage.getItem('authToken');
      if (!token) {
        setError('Authentication token not found');
        return;
      }

      try {
        // Fetch Total Coins
        const totalCoinsResponse = await axios.get('https://bvmwebsolutions.com/ghoombuddy_laravel/api/total-coin', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (totalCoinsResponse.data.status) {
          setTotalCoins(totalCoinsResponse.data.coin || 0); // Set to 0 if no coins found
        } else {
          throw new Error(totalCoinsResponse.data.message || 'Failed to fetch total coins');
        }

        // Fetch Coins Received from Posts
        const postCoinsResponse = await axios.get('https://bvmwebsolutions.com/ghoombuddy_laravel/api/post-coin', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (postCoinsResponse.data.status) {
          setCoinsReceivedPosts(postCoinsResponse.data.PostCoin || 0); // Set to 0 if no coins found
        } else {
          throw new Error(postCoinsResponse.data.message || 'Failed to fetch coins received from posts');
        }

        // Fetch Coins Received from Users
        const userCoinsResponse = await axios.get('https://bvmwebsolutions.com/ghoombuddy_laravel/api/user-coin', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (userCoinsResponse.data.status) {
          setCoinsReceivedUsers(userCoinsResponse.data.UserCoin || 0); // Set to 0 if no coins found
        } else {
          throw new Error(userCoinsResponse.data.message || 'Failed to fetch coins received from users');
        }
      } catch (error) {
        console.error('Error fetching coins data:', error);
        setError('Failed to fetch coins data. Please try again.');
      }
    };

    fetchCoinsData();
  }, []);

  return (
    <div className="setting-personal-details">
      <div className="row">
        <div className="col-lg-4">
          <div className="single-input mb-3">
            <label htmlFor="totalCoins">Total Coins</label>
            <input
              type="text"
              id="totalCoins"
              className="form-control"
              value={totalCoins}
              disabled
            />
          </div>
        </div>
        <div className="col-lg-4">
          <div className="single-input mb-3">
            <label htmlFor="coinsReceivedPosts">Coins Received for Posts</label>
            <input
              type="text"
              id="coinsReceivedPosts"
              className="form-control"
              value={coinsReceivedPosts}
              disabled
            />
          </div>
        </div>
        <div className="col-lg-4">
          <div className="single-input mb-3">
            <label htmlFor="coinsReceivedUsers">Coins Received from Users</label>
            <input
              type="text"
              id="coinsReceivedUsers"
              className="form-control"
              value={coinsReceivedUsers}
              disabled
            />
          </div>
        </div>
      </div>
      {error && <p className="text-danger">{error}</p>}
    </div>
  );
};

export default MyCoins;
