import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TravelDetails = () => {
  const [travelDetail, setTravelDetail] = useState(null);

  useEffect(() => {
    const fetchTravelDetail = async () => {
      try {
        const response = await axios.get('https://bvmwebsolutions.com/ghoombuddy_laravel/api/home-travel-detail');
        setTravelDetail(response.data.travelDetail);
      } catch (error) {
        console.error('Error fetching travel detail:', error);
      }
    };

    fetchTravelDetail();
  }, []);

  return (
    <section className="explore-sc">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="ex-hdng">
              <h5>{travelDetail?.category_title}</h5>
              <h2>{travelDetail?.category_sub_title}</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelDetails;
