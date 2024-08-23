import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext'; // Ensure this path is correct

const Sidebar = () => {
  // const [fullName, setFullName] = useState('');
  const [totalCoins, setTotalCoins] = useState(0);
  const { logout } = useContext(AuthContext); // Use your AuthContext for logout functionality
  const navigate = useNavigate();
  const location = useLocation(); // Get the current path

  useEffect(() => {




  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken'); // Clear auth token only
    logout();
    navigate('/login'); // Redirect to login page after logout
  };

  // Helper function to check if a link is active
  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <div className="dashboard-sidebar">
      <div className="single-item">
        {/* <div className="single-item-in">
          <h3>{fullName}</h3> 
          <p>ID: 32315145</p>
        </div> */}
        <div className="single-item-tab">
          <ul>
            <li className={isActive('/profile')}>
              <Link to="/profile">
                <i className="fa-solid fa-user-lock" /> Profile
              </Link>
            </li>
            <li className={isActive('/all-posts')}>
              <Link to="/all-posts">
                <i className="fa-solid fa-list" /> All Memories
              </Link>
            </li>
            <li className={isActive('/create-post')}>
              <Link to="/create-post">
                <i className="fa-regular fa-square-plus" /> Create Memory
              </Link>
            </li>
            <li className={isActive('/bookmark-Lists')}>
              <Link to="/bookmark-Lists">
                <i className="fa-regular fa-bookmark"></i> All Bookmarks
              </Link>
            </li>

            <li className={isActive('/all-activities')}>
              <Link to="/all-activities">
              <i className="fa-solid fa-list"></i> All Activities
              </Link>
            </li>

            <li className={isActive('/create-activity')}>
              <Link to="/create-activity">
              <i className="fa-regular fa-square-plus"></i> Create Activity
              </Link>
            </li>

            <li className={isActive('/all-topics')}>
              <Link to="/all-topics">
              <i className="fa-solid fa-list"></i> All Forum Topics
              </Link>
            </li>
            <li className={isActive('/create-topics')}>
              <Link to="/create-topics">
                <i className="fa-regular fa-square-plus" /> Create Forum Topic
              </Link>
            </li>
            <li className={isActive('/coins')}>
              <Link to="/coins">
                <i className="fa-solid fa-coins" /> Trip-Coins
              </Link>
            </li>
            <li>
              <button onClick={handleLogout} className="logout-button">
                <i className="fa-solid fa-sign-out-alt" /> Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
   
    </div>
  );
};

export default Sidebar;
