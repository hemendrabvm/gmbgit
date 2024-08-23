import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const BannerSection = () => {
  const [bannerData, setBannerData] = useState(null);

  useEffect(() => {
    const fetchBannerData = async () => {
      try {
        const response = await axios.get('https://bvmwebsolutions.com/ghoombuddy_laravel/api/home-banner');
        setBannerData(response.data.banner);
      } catch (error) {
        console.error('Error fetching banner data:', error);
      }
    };

    fetchBannerData(); 
  }, []);

  return (
    <section
      className="banner-main"
      style={{
        backgroundImage: bannerData?.banner_image 
          ? `url(https://bvmwebsolutions.com/ghoombuddy_laravel/${bannerData.banner_image})` 
          : 'none'
      }}
    > 
      <div className="banner">
        <div className="banner-overlay-content">
          <h2>
            {bannerData?.normal_one}{' '}
            <span className="on-a">{bannerData?.orange_text}</span>.{' '}
            {bannerData?.normal_two}{' '}
            <span className="tw-a">{bannerData?.blue_text}</span>.
          </h2>
          <h3>{bannerData?.banner_sub_title}</h3>
          <Link to={bannerData?.button_link} className="main-button">
          {bannerData?.button_title}
        </Link>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
      >
        <path
          className="elementor-shape-fill"
          d="M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z"
        />
      </svg>
    </section>
  );
};

export default BannerSection;
