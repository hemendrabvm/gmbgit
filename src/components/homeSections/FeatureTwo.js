import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FeatureTwo = () => {
  const [featuresData, setFeaturesData] = useState([]);

  useEffect(() => {
    const fetchFeaturesData = async () => {
      try {
        const response = await axios.get('https://bvmwebsolutions.com/ghoombuddy_laravel/api/feature-two');
        setFeaturesData(response.data.secondFeature);
      } catch (error) {
        console.error('Error fetching feature two data:', error);
      }
    };

    fetchFeaturesData();
  }, []);

  return (
    <div className="bcb-section pt-spc pb-spc">
      <div className="container">
        <div className="row">
          {featuresData.map((feature, index) => (
            <div key={index} className="col-lg-4 col-md-4">
              <div className="bcp-box">
                <img src={`https://bvmwebsolutions.com/ghoombuddy_laravel/${feature.image}`} alt={feature.title} />
                <h4>{feature.title}</h4>
                <p>{feature.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureTwo;
