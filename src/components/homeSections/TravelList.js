import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TravelList = () => {
  const [travelList, setTravelList] = useState([]);

  useEffect(() => {
    const fetchTravelList = async () => {
      try {
        const response = await axios.get('https://bvmwebsolutions.com/ghoombuddy_laravel/api/home-travel-list');
        setTravelList(response.data.travelList);
      } catch (error) {
        console.error('Error fetching travel list:', error);
      }
    };

    fetchTravelList();
  }, []);

  return (
    <section className="explore-sc-col pb-spc">
      <div className="container">
        <div className="row">
          {travelList.map((travel, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              <div className="oew-widget-wrap">
                <div className="oew-banner">
                  <a href="#">
                    <img
                      src={`https://bvmwebsolutions.com/ghoombuddy_laravel/${travel.image}`}
                      alt={travel.title}
                      width={533}
                      height={800}
                    />
                    <figcaption>
                      <h3>{travel.title}</h3>
                      <h5>{travel.sub_title}</h5>
                    </figcaption>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelList;
