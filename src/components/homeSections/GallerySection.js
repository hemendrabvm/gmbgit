import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GallerySection = () => {
  const [images, setImages] = useState([]);
  const [imageDetail, setImageDetail] = useState({
    title: '',
    sub_title: '',
    image: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch image details
        const imageDetailResponse = await axios.get('https://bvmwebsolutions.com/ghoombuddy_laravel/api/image-detail');
        if (imageDetailResponse.data.status) {
          setImageDetail(imageDetailResponse.data.imageDetail);
        } else {
          console.error('Failed to fetch image details');
        }

        // Fetch gallery images
        const imagesResponse = await axios.get('https://bvmwebsolutions.com/ghoombuddy_laravel/api/image');
        if (imagesResponse.data.status) {
          setImages(imagesResponse.data.images);
        } else {
          console.error('Failed to fetch images');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="gallery-section pt-spc pb-spc">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="main-heading-sc pb-70">
              <h5>{imageDetail.title}</h5>
              <h2>{imageDetail.sub_title}</h2>
              <img src={`https://bvmwebsolutions.com/ghoombuddy_laravel/${imageDetail.image}`} alt="Gallery Heading" />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="gallery-container">
          {images.map((image, index) => (
            <div className="item" key={index}>
              <a
                href={`https://bvmwebsolutions.com/ghoombuddy_laravel/${image.image}`}
                data-fancybox="gallery"
              >
                <img
                  src={`https://bvmwebsolutions.com/ghoombuddy_laravel/${image.image}`}
                  alt={`Gallery image ${index + 1}`}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
       
    </section>

    
  );
};

export default GallerySection;
