import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AboutSection = () => {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const response = await axios.get('https://bvmwebsolutions.com/ghoombuddy_laravel/api/about');
        setAboutData(response.data.about);
      } catch (error) {
        console.error('Error fetching about data:', error);
      }
    };

    fetchAboutData();
  }, []);

  return (
    <section id="about" className="about-section pt-spc">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="ab-img-sc">
              <img 
                src={aboutData?.image ? `https://bvmwebsolutions.com/ghoombuddy_laravel/${aboutData.image}` : 'default-image-url'} 
                alt="About Us" 
              />
            </div>
          </div>
          <div className="col-lg-6">
            <h5>{aboutData?.title || 'Default Title'}</h5>
            <h2>{aboutData?.sub_title || 'Default Subtitle'}</h2>
            <div 
              dangerouslySetInnerHTML={{ __html: aboutData?.content || '<p>Default content</p>' }} 
            />
            <Link 
              to={aboutData?.button_link || '#'} 
              className="main-button mt-f"
            >
              {aboutData?.button_text || 'Learn More'} <i className="fa-solid fa-arrow-right" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
