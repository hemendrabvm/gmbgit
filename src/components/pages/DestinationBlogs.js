import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';

const DestinationBlogs = () => {
  const { slug } = useParams(); // Get slug from URL params
  const navigate = useNavigate(); // To programmatically navigate
  const [posts, setPosts] = useState([]);
  const [recentPosts, setRecentPosts] = useState([]);
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); // Track current page
  const postsPerPage = 6; // Number of posts to display per page
  const [seoData, setSeoData] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`https://bvmwebsolutions.com/ghoombuddy_laravel/api/destination/${slug}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        if (data.status === false) {
          setPosts([]);
          setError(data.message);
        } else {
          setPosts(data.posts);
          setError(null);
        }
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

    const fetchDestinations = async () => {
      try {
        const response = await axios.get('https://bvmwebsolutions.com/ghoombuddy_laravel/api/category');
        setDestinations(response.data.categories || []);
      } catch (error) {
        console.error('Error fetching destinations:', error);
      }
    };

    const fetchSeoData = async () => {
      try {
        const response = await axios.get(`https://bvmwebsolutions.com/ghoombuddy_laravel/api/category-seo/${slug}`);
        setSeoData(response.data.seo);
      } catch (error) {
        console.error('Error fetching SEO data:', error);
      }
    };

    fetchPosts();
    fetchRecentPosts();
    fetchDestinations();
    fetchSeoData(); // Fetch SEO data initially
  }, [slug]);

  // Function to handle search input change
  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    if (query) {
      // Filter posts for suggestions based on the search query
      const filtered = posts.filter(post =>
        post.title.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filtered.map(post => ({
        title: post.title,
        slug: post.slug
      })));
    } else {
      setSuggestions([]);
    }
  };

  // Function to handle suggestion click
  const handleSuggestionClick = (slug) => {
    navigate(`/blog/${slug}`);
  };

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
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
            <h2>Destinations</h2>
            <div className="breadcurmbs">
              <Link to="/">
                <i className="fa-solid fa-house" />
              </Link>
              <span>
                <i className="fa-solid fa-angles-right" />
              </span>
              <span>Destinations</span>
            </div>
          </div>
        </div>
      </section>

      <section className="blog_area pt-spc pb-spc">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mb-5 mb-lg-0">
              <div className="blog_left_sidebar">
                {loading && <p>Loading...</p>}
                {error && <p className='noposts'>{error}</p>}
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
                          to={`/blog/${post.slug}`} // Use slug instead of post.id
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
                          
                              <i className="fas fa-folder-open" /> {post.category_name}
                            
                          </li>
                          <li>
                          
                              <i className="fa fa-user" /> {post.user_name}
                           
                          </li>
                          <li>
                            
                              <i className="fa-solid fa-thumbs-up" />{' '}
                              {post.likes_count} Likes
                           
                          </li>
                          <li>
                           
                              <i className="fa-solid fa-eye" />{' '}
                              {post.views_count} Views
                           
                          </li>
                          <li>
                           
                              <i className="fas fa-comments" />{' '}
                              {post.comments_count} Comments
                           
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
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blog_right_sidebar">
                <aside className="single_sidebar_widget search_widget">
                  <form action="#">
                    <div className="form-group m-0">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search Keyword"
                          value={searchQuery}
                          onChange={handleSearchChange}
                        />
                        <div className="input-group-append d-flex">
                          <button
                            className="boxed-btn2"
                            type="button"
                            onClick={() => {
                              if (searchQuery) {
                                // Navigate to the search results page or any desired behavior
                                navigate(`/search?query=${searchQuery}`);
                              }
                            }}
                          >
                            Search
                          </button>
                        </div>
                      </div>
                      {suggestions.length > 0 && (
                        <ul className="list-group">
                          {suggestions.map((suggestion, index) => (
                            <li className="list-group-item"
                              key={index}
                              onClick={() => handleSuggestionClick(suggestion.slug)}
                            >
                              {suggestion.title}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </form>
                </aside>
                <aside className="single_sidebar_widget">
                  <h3 className="widget_title">All Destinations</h3>
                  <ul className="list-groupp">
                    {destinations.map((destination) => (
                      <li className="list-group-itemm" key={destination.id}>
                        <Link to={`/destinations/${destination.slug}`}>
                          {destination.category_title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </aside>
                <aside className="single_sidebar_widget popular_post_widget">
                  <h3 className="widget_title">Recent Posts</h3>
                  {recentPosts.map((recentPost) => (
                    <div className="media post_item" key={recentPost.id}>
                      {recentPost.featured_image && (
                        <img
                          src={`https://bvmwebsolutions.com/ghoombuddy_laravel/${recentPost.featured_image}`}
                          alt={recentPost.title}
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

export default DestinationBlogs;
