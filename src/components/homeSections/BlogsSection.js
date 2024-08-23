import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BlogsSection = () => {
  const [blogDetail, setBlogDetail] = useState(null);
  const [blogList, setBlogList] = useState([]);

  useEffect(() => {
    const fetchBlogDetail = async () => {
      try {
        const response = await axios.get('https://bvmwebsolutions.com/ghoombuddy_laravel/api/home-blog-detail');
        setBlogDetail(response.data.blogDetail);
      } catch (error) {
        console.error('Error fetching blog detail:', error);
      }
    };

    const fetchBlogList = async () => {
      try {
        const response = await axios.get('https://bvmwebsolutions.com/ghoombuddy_laravel/api/home-blog-list');
        setBlogList(response.data.blogList);
      } catch (error) {
        console.error('Error fetching blog list:', error);
      }
    };

    fetchBlogDetail();
    fetchBlogList();
  }, []);

  return (
    <section className="blogs-sc pt-spc pb-spc">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="main-heading-sc pb-70">
              <h5>{blogDetail?.blog_title || 'Default Blog Title'}</h5>
              <h2>{blogDetail?.blog_sub_title || 'Default Blog Subtitle'}</h2>
              <img 
                src={blogDetail?.blog_image ? `https://bvmwebsolutions.com/ghoombuddy_laravel/${blogDetail.blog_image}` : 'default-image-url'} 
                alt={blogDetail?.blog_title || 'Blog Banner'} 
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {blogList.length > 0 ? (
            blogList.map((blog, index) => (
              <div key={index} className="col-lg-4 mb-4">
                <div className="blog-card">
                  <div className="blog-hd">
                    <Link to={`/blog/${blog.slug}`}>
                      <div className="blog-img">
                        <img
                          src={blog.featured_image ? `https://bvmwebsolutions.com/ghoombuddy_laravel/${blog.featured_image}` : 'default-blog-image-url'}
                          className="card-img-top"
                          alt={`Image for ${blog.title}`}
                        />
                        <span className="hover-btn">Learn More</span>
                      </div>
                    </Link>
                  </div>
                  <div className="blog-card-body">
                    <h5 className="blog-card-title">
                      <Link to={`/blog/${blog.slug}`}>
                        {blog.title || 'Default Blog Title'}
                      </Link>
                    </h5>
                    <p className="blog-card-text" dangerouslySetInnerHTML={{ __html: blog.content || '<p>Default blog content</p>' }} />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No blogs available at the moment.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
