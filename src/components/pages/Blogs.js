import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';

// Search Component
const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  // Handle search term change
  const handleSearchTermChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Fetch suggestions
    if (value.length > 1) {
      axios
        .post('https://bvmwebsolutions.com/ghoombuddy_laravel/api/blog/search', { postname: value })
        .then((response) => {
          setSuggestions(response.data.posts.map((post) => ({
            id: post.id,
            title: post.title,
            slug: post.slug,
          })));
        })
        .catch((error) => {
          console.error('Error fetching suggestions:', error);
        });
    } else {
      setSuggestions([]);
    }
  };

  // Handle form submission
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  // Render search suggestions
  const renderSuggestions = () => {
    return (
      <ul className="list-group">
        {suggestions.map((post) => (
          <li key={post.id} className="list-group-item">
            <Link to={`/blog/${post.slug}`} onClick={() => setSearchTerm('')}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <aside className="single_sidebar_widget search_widget">
      <form onSubmit={handleSearchSubmit}>
        <div className="form-group m-0">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search Keyword"
              value={searchTerm}
              onChange={handleSearchTermChange}
            />
            <div className="input-group-append d-flex">
              <button className="boxed-btn2" type="submit">
                Search
              </button>
            </div>
          </div>
          {suggestions.length > 0 && renderSuggestions()}
        </div>
      </form>
    </aside>
  );
};

// Main Blogs Component
const Blogs = () => {
  const [posts, setPosts] = useState([]);
  const [recentPosts, setRecentPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); // Track current page
  const postsPerPage = 6; // Number of posts to display per page
  const [seoData, setSeoData] = useState(null); // State to hold SEO data
  const [searchResults, setSearchResults] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://bvmwebsolutions.com/ghoombuddy_laravel/api/blog');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setPosts(data.posts);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch data');
        setLoading(false);
      }
    };

    const fetchRecentPosts = async () => {
      try {
        const response = await fetch('https://bvmwebsolutions.com/ghoombuddy_laravel/api/recent-blog');
        if (!response.ok) {
          throw new Error('Failed to fetch recent posts');
        }
        const data = await response.json();
        setRecentPosts(data.posts);
      } catch (error) {
        console.error('Failed to fetch recent posts', error);
      }
    };

    const fetchSeoData = async () => {
      try {
        const response = await axios.get('https://bvmwebsolutions.com/ghoombuddy_laravel/api/blog-seo');
        if (response.data.status) {
          setSeoData(response.data.seo);
        } else {
          throw new Error('Failed to fetch SEO data');
        }
      } catch (error) {
        console.error('Error fetching SEO data:', error);
        // Handle error state if needed
      }
    };

    fetchPosts();
    fetchRecentPosts();
    fetchSeoData(); // Fetch SEO data initially
  }, []);

  // Function to truncate content to a specific word limit
  const truncateContent = (content, limit) => {
    const words = content.split(' ');
    if (words.length > limit) {
      return words.slice(0, limit).join(' ') + '...';
    }
    return content;
  };

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = searchResults.length > 0 ? searchResults : posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Handle search
  const handleSearch = async (searchTerm) => {
    if (searchTerm.length > 1) {
      setSearchLoading(true);
      try {
        const response = await axios.post('https://bvmwebsolutions.com/ghoombuddy_laravel/api/blog/search', { postname: searchTerm });
        setSearchResults(response.data.posts);
        setSearchLoading(false);
      } catch (error) {
        console.error('Error searching:', error);
        setSearchLoading(false);
      }
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div id="site-content">
      <Helmet>
        <title>{seoData?.seo_title || 'Blog Page'}</title>
        <meta name="description" content={seoData?.seo_description || 'Explore our blog'} />
        <meta name="keywords" content={seoData?.seo_keyword || 'blog, travel, explore'} />
      </Helmet>

      <section className="sub-banner-main">
        <div className="s-banner">
          <div className="banner-overlay-content">
            <h2> Blog</h2>
            <div className="breadcurmbs">
              <a href="#">
                <i className="fa-solid fa-house" />
              </a>
              <span>
                <i className="fa-solid fa-angles-right" />
              </span>
              <span>Blogs</span>
            </div>
          </div>
        </div>
      </section>

      <section className="blog_area pt-spc pb-spc">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mb-5 mb-lg-0">
              <div className="blog_left_sidebar">
                <div>
                  {loading && <p>Loading...</p>}
                  {error && <p>{error}</p>}
                  {!loading &&
                    !error &&
                    currentPosts.map((post) => (
                      <article className="blog_item" key={post.id}>
                        <div className="blog_item_img">
                          {post.featured_image && (
                            <img
                              className="card-img rounded-0"
                              src={`https://bvmwebsolutions.com/ghoombuddy_laravel/${post.featured_image}`}
                              alt={post.title}
                            />
                          )}
                          <Link
                            to={`/blog/${post.slug}`} 
                            className="blog_item_date"
                          >
                            <h3>{new Date(post.created_date).getDate()}</h3>
                            <p>
                              {new Date(post.created_date).toLocaleString(
                                'en-us',
                                { month: 'short' }
                              )}
                            </p>
                          </Link>
                        </div>
                        <div className="blog_details">
                        <ul className="blog-info-link">
                            <li>
                            
                                <i className="fas fa-folder-open" /> {post.category.category_title}
                             
                            </li>
                            <li>
                            
                                <i className="fa fa-user" /> {post.user.name}
                             
                            </li>
                            <li>
                            
                                <i className="fa-solid fa-thumbs-up" />{' '}
                                {post.likes.length} Likes
                             
                            </li>
                            <li>
                              
                                <i className="fa-solid fa-eye" />{' '}
                                {post.views.length} Views
                              
                            </li>
                            <li>
                            
                                <i className="fas fa-comments" />{' '}
                                {post.comments.length} Comments
                             
                            </li>
                            <li>
                            
                                <i className="fa-solid fa-coins"></i>{' '}
                                {post.coins_sum_coin || 0} Trip-Coins
                             
                            </li>
                          </ul>

                          <Link
                            to={`/blog/${post.slug}`} // Use slug instead of post.id
                            className="d-inline-block"
                          >
                            <h2 className="blog-head">{post.title}</h2>
                          </Link>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: truncateContent(post.content, 40),
                            }}
                          ></div>
                          
                        </div>
                      </article>
                    ))}
                  {/* Pagination */}
                  {!searchResults.length > 0 && (
                    <nav className="blog-pagination justify-content-center d-flex">
                      <ul className="pagination">
                        <li
                          className={`page-item ${
                            currentPage === 1 ? 'disabled' : ''
                          }`}
                        >
                          <a
                            className="page-link"
                            href="#"
                            onClick={() => paginate(currentPage - 1)}
                            aria-label="Previous"
                          >
                            <i className="fa-solid fa-angle-left"></i>
                          </a>
                        </li>
                        {Array.from(
                          { length: Math.ceil(posts.length / postsPerPage) },
                          (_, index) => (
                            <li
                              key={index}
                              className={`page-item ${
                                currentPage === index + 1 ? 'active' : ''
                              }`}
                            >
                              <a
                                className="page-link"
                                href="#"
                                onClick={() => paginate(index + 1)}
                              >
                                {index + 1}
                              </a>
                            </li>
                          )
                        )}
                        <li
                          className={`page-item ${
                            currentPage ===
                            Math.ceil(posts.length / postsPerPage)
                              ? 'disabled'
                              : ''
                          }`}
                        >
                          <a
                            className="page-link"
                            href="#"
                            onClick={() => paginate(currentPage + 1)}
                            aria-label="Next"
                          >
                            <i className="fa-solid fa-chevron-right"></i>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  )}
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blog_right_sidebar">
                <Search onSearch={handleSearch} />

                <aside className="single_sidebar_widget popular_post_widget">
                  <h3 className="widget_title">Recent Posts</h3>
                  {recentPosts.map((recentPost) => (
                    <div className="media post_item" key={recentPost.id}>
                      {recentPost.featured_image && (
                        <img
                          src={`https://bvmwebsolutions.com/ghoombuddy_laravel/${recentPost.featured_image}`}
                          alt="post"
                        />
                      )}
                      <div className="media-body">
                        <Link
                          to={`/blog/${recentPost.slug}`} // Link to PostDetails with recent post slug
                        >
                          <h3>{recentPost.title}</h3>
                        </Link>
                        <p>
                          {new Date(recentPost.created_date).toLocaleDateString(
                            'en-US',
                            {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric',
                            }
                          )}
                        </p>
                      </div>
                    </div>
                  ))}
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
