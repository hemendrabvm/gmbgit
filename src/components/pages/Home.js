import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';
import BannerSection from '../../components/homeSections/BannerSection';
import AboutSection from '../../components/homeSections/AboutSection';
import FeatureOne from '../../components/homeSections/FeatureOne';
import CategoriesSection from '../../components/homeSections/CategoriesSection';
import FeatureTwo from '../../components/homeSections/FeatureTwo';
import TravelDetails from '../homeSections/TravelDetails';
import TravelList from '../homeSections/TravelList';
import BlogsSection from '../homeSections/BlogsSection';
import StorySection from '../homeSections/StorySection';
import QuoteSection from '../homeSections/QuoteSection';
import GallerySection from '../homeSections/GallerySection';
import VideoSection from '../homeSections/VideoSection';

const Home = () => {
  const [seoData, setSeoData] = useState(null);

  useEffect(() => {
    const fetchSeoData = async () => {
      try {
        const response = await axios.get('https://bvmwebsolutions.com/ghoombuddy_laravel/api/home-seo');
        setSeoData(response.data.seo);
      } catch (error) {
        console.error('Error fetching SEO data:', error);
      }
    };

    fetchSeoData(); // Fetch SEO data initially
  }, []);

  return (
    <div id="site-content">
      <Helmet>
        <title>{seoData?.seo_title || 'Home Page'}</title>
        <meta name="description" content={seoData?.seo_description || 'This is the home page'} />
        <meta name="keywords" content={seoData?.seo_keyword || 'home, page, react'} />
      </Helmet>

      <BannerSection />

      <QuoteSection />
      <AboutSection />
      
      <FeatureOne />
      <CategoriesSection />
      <FeatureTwo />
      <TravelDetails />
      <TravelList />
      <GallerySection />
      <VideoSection />
      <BlogsSection />
      <StorySection />
     
    </div>
  );
};

export default Home;
