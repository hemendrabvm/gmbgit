import React, { useContext, useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

import { AuthContext } from '../../context/AuthContext';

const Header = () => {
  const { authState, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [categoriesData, setCategoriesData] = useState([]);
  const [logoUrl, setLogoUrl] = useState('');
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const fetchCategoriesData = async () => {
      try {
        const response = await axios.get('https://bvmwebsolutions.com/ghoombuddy_laravel/api/category');
        setCategoriesData(response.data.categories || []);
      } catch (error) {
        console.error('Error fetching categories data:', error);
      }
    };

    fetchCategoriesData();
  }, []);

  useEffect(() => {
    const fetchLogo = async () => {
      try {
        const response = await axios.get('https://bvmwebsolutions.com/ghoombuddy_laravel/api/logo');
        const data = response.data;

        if (data.status === true && data.logo && data.logo.header_logo) {
          setLogoUrl('https://bvmwebsolutions.com/ghoombuddy_laravel/' + data.logo.header_logo);
        } else {
          console.error('Failed to fetch logo data:', data);
        }
      } catch (error) {
        console.error('Error fetching logo:', error);
      }
    };

    fetchLogo();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50); // Add sticky class if scrolled more than 50px
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
    localStorage.removeItem('fullName');
    localStorage.removeItem('profileImageUrl');
    logout();
    navigate('/login');
  };

  const isPWA = window.matchMedia('(display-mode: standalone)').matches;

  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <div>
      <header className={`main-header ${isSticky ? 'sticky' : ''}`} id="header">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <div className="logo-sc">
              <Link to="/">
                {logoUrl ? (
                  <img src={logoUrl} alt="Logo" className="logo-image" />
                ) : (
                  <p></p>
                )}
              </Link>
            </div>
            <nav className="navbar navbar-expand-lg">
              <button
                className="navbar-toggler collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon">
                  <i className="fa-solid fa-xmark"></i>
                  <i className="fa-solid fa-bars"></i>
                </span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                  <li className={`nav-item ${isActive('/')}`}>
                    <Link to="/" className="nav-link">Home</Link>
                  </li>
                  <li className={`nav-item ${isActive('/activities')}`}>
                    <Link to="/activities" className="nav-link">Discover</Link>
                  </li>
                  <li className={`nav-item dropdown ${location.pathname.startsWith('/destinations') ? 'active' : ''}`}>
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Destinations
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li>
                        <Link className={`dropdown-item ${isActive('/destinations')}`} to="/destinations">
                          All Destinations
                        </Link>
                      </li>
                      {categoriesData.map((category) => (
                        <li key={category.id}>
                          <Link className={`dropdown-item ${isActive(`/destinations/${category.slug}`)}`} to={`/destinations/${category.slug}`}>
                            {category.category_title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li className={`nav-item ${isActive('/about')}`}>
                    <Link to="/forums" className="nav-link">Forums</Link>
                  </li>
                  <li className={`nav-item ${isActive('/blogs')}`}>
                    <Link to="/blogs" className="nav-link">Blog</Link>
                  </li>
                </ul>
              </div>
            </nav>
            <div className="d-flex align-items-center">
              {!authState.isAuthenticated ? (
                <Link className="btn btn-primary" to="/login">
                  <i className="fa-regular fa-circle-user"></i><span> Login</span>
                </Link>
              ) : (
                <>
                  <Link to="/profile" className="btn btn-primary">
                    <i className="fa-regular fa-circle-user"></i> <span>Profile</span>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      {isPWA && (
        <div className="pwa-nav-container">
          <div className="pwa-nav">
            <ul>
              <li>
                <Link to="/">
                  <i className="fa-solid fa-house"></i>Home
                </Link>
              </li>
              <li>
                <Link to="/blogs">
                  <i className="fa-solid fa-list"></i>Blogs
                </Link>
              </li>
              <li>
                <Link to="/destinations">
                  <i className="fa-solid fa-map-location-dot"></i>Destinations
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
