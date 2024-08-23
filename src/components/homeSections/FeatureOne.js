import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FeatureOne = () => {
  const [featuresData, setFeaturesData] = useState([]);

  useEffect(() => {
    const fetchFeaturesData = async () => {
      try {
        const response = await axios.get('https://bvmwebsolutions.com/ghoombuddy_laravel/api/feature-one');
        setFeaturesData(response.data.firstFeatures);
      } catch (error) {
        console.error('Error fetching features data:', error);
      }
    };

    fetchFeaturesData();
  }, []);

  return (
    <section className="bcb-section pt-spc">
      <div className="container">
        <div className="row">
          {featuresData.map((feature, index) => (
            <div key={index} className="col-lg-4 col-md-4">
              <div className="bcp-box">
                <img src={`https://bvmwebsolutions.com/ghoombuddy_laravel/${feature.image}`} alt={feature.title} />
                <h4>{feature.title}</h4>
                <p dangerouslySetInnerHTML={{ __html: feature.content }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureOne;
