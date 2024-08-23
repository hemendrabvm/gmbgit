import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';

const Destinations = () => {
  const [bannerData, setBannerData] = useState(null);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [seoData, setSeoData] = useState(null);

  useEffect(() => {
    const fetchBannerData = async () => {
      try {
        const response = await axios.get('https://bvmwebsolutions.com/ghoombuddy_laravel/api/destination-banner');
        setBannerData(response.data.banner);
      } catch (error) {
        setError('Failed to fetch banner data');
      }
    };

    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://bvmwebsolutions.com/ghoombuddy_laravel/api/destination-category');
        setCategories(response.data.categories);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch categories');
        setLoading(false);
      }
    };

    const fetchSeoData = async () => {
      try {
        const response = await axios.get('https://bvmwebsolutions.com/ghoombuddy_laravel/api/destination-seo');
        setSeoData(response.data.seo);
      } catch (error) {
        console.error('Error fetching SEO data:', error);
      }
    };

    fetchBannerData();
    fetchCategories();
    fetchSeoData(); // Fetch SEO data initially
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  // Function to check if the row index is even (2, 4, 6,...)
  const isEvenRow = (index) => {
    return index % 2 === 1; // index is zero-based, so odd index means even row number
  };

  return (
    <div id="site-content">
      <Helmet>
        <title>{seoData?.seo_title || 'Destinations Page'}</title>
        <meta name="description" content={seoData?.seo_description || 'Explore our destinations'} />
        <meta name="keywords" content={seoData?.seo_keyword || 'destinations, travel, explore'} />
      </Helmet>

      {/* Banner Section */}
      {bannerData && (
        <section className="sub-banner-main" style={{ backgroundImage: `url(https://bvmwebsolutions.com/ghoombuddy_laravel/${bannerData.banner_image})` }}>
          <div className="s-banner">
            <div className="banner-overlay-content">
              <h2>{bannerData.banner_title}</h2>
              <div className="breadcurmbs">
                <Link to="/">
                  <i className="fa-solid fa-house" />
                </Link>
                <span>
                  <i className="fa-solid fa-angles-right" />
                </span>
                <span>{bannerData.banner_title}</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Category Sections */}
      {categories.map((category, index) => (
        <section key={index} className={`beorignal-section ${index % 2 !== 0 ? 'be-adven' : ''}`}>
          <div className="container-fluid no-gap">
            <div className="row align-items-center">
              {/* Conditionally Reverse Columns */}
              {isEvenRow(index) ? (
                <>
                  {/* Text Column */}
                  <div className="col-lg-6">
                    <div className="spc-content">
                      <h2 className="heading-wi-bg">
                        {category.title} <span className={`p-bg ${category.color}`}>{category.color_title}</span>.
                      </h2>
                      <p className="mb-5">{category.content}</p>
                      <Link to={`/destinations/${category.slug}`} className={`main-button ${category.color}`}>
                        {category.button_text} <i className="fa-solid fa-arrow-right" />
                      </Link>
                    </div>
                  </div>
                  {/* Image Column */}
                  <div className="col-lg-6">
                    <div className="ab-img-sc">
                      <img src={`https://bvmwebsolutions.com/ghoombuddy_laravel/${category.image}`} alt="" />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Image Column */}
                  <div className="col-lg-6">
                    <div className="ab-img-sc">
                      <img src={`https://bvmwebsolutions.com/ghoombuddy_laravel/${category.image}`} alt="" />
                    </div>
                  </div>
                  {/* Text Column */}
                  <div className="col-lg-6">
                    <div className="spc-content">
                      <h2 className="heading-wi-bg">
                        {category.title} <span className={`p-bg ${category.color}`}>{category.color_title}</span>.
                      </h2>
                      <p className="mb-5">{category.content}</p>
                      <Link to={`/destinations/${category.slug}`} className={`main-button ${category.color}`}>
                        {category.button_text} <i className="fa-solid fa-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Destinations;
