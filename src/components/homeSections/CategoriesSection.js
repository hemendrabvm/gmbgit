import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const CategoriesSection = () => {
  const [categoriesData, setCategoriesData] = useState([]);

  useEffect(() => {
    const fetchCategoriesData = async () => {
      try {
        const response = await axios.get('https://bvmwebsolutions.com/ghoombuddy_laravel/api/home-category');
        setCategoriesData(response.data.categories);
      } catch (error) {
        console.error('Error fetching categories data:', error);
      }
    };

    fetchCategoriesData();
  }, []);

  return (
    <div className='pt-spc'>
      {categoriesData.map((category, index) => (
        <section key={index} className='beorignal-section'>
          <div className="container-fluid no-gap">
            <div className="row align-items-center">
              <div className={`col-lg-6 ${index % 2 === 0 ? 'order-lg-1' : 'order-lg-2'}`}>
                <div className="ab-img-sc">
                  <img src={`https://bvmwebsolutions.com/ghoombuddy_laravel/${category.image}`} alt={category.title} />
                </div>
              </div>
              <div className={`col-lg-6 ${index % 2 === 0 ? 'order-lg-2' : 'order-lg-1'}`}>
                <div className="spc-content">
                  <h2 className={`heading-wi-bg`}>
                    {category.title} <span className={`p-bg ${category.color_title} ${category.color}`}>{category.color_title}</span>.
                  </h2>
                  <p className="mb-5">
                    {category.content}
                  </p>
                  <div className="org-sc">
                 <Link to={`/destinations/${category.slug}`} className={`main-button ${category.color_title} ${category.color}`}>
  {category.button_text} <i className="fa-solid fa-arrow-right" />
</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default CategoriesSection;
