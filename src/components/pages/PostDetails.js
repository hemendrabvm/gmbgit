import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import axios from 'axios';

const PostDetails = () => {
  const { slug } = useParams(); // Get slug from URL params
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');
  const [recentPosts, setRecentPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
  const [messagee, setMessagee] = useState('');
  const token = localStorage.getItem('authToken'); // Get auth token from localStorage
  const baseURL = 'https://bvmwebsolutions.com/ghoombuddy_laravel/';
  
  // Function to fetch blog post details from API based on slug
  const fetchPostDetails = async () => {
    try {
      const response = await axios.get(`${baseURL}api/blog-description/${slug}`, {
        headers: {
          Authorization: `Bearer ${token}`
        } 
      });

      setPost(response.data.post);
      setComments(response.data.post.comments); // Set comments for the post
      setLoading(false);
    } catch (error) {
      setError('Error fetching data');
      setLoading(false);
    }
  };

  // Function to fetch recent posts
  const fetchRecentPosts = async () => {
    try {
      const response = await axios.get(`${baseURL}api/recent-blog`);
      setRecentPosts(response.data.posts);
    } catch (error) {
      console.error('Failed to fetch recent posts', error);
    }
  };

  // Function to check if user is logged in
  const checkLoginStatus = () => {
    const authToken = localStorage.getItem('authToken');
    setIsLoggedIn(!!authToken);
  };

  // Function to handle like/unlike click
  const handleLikeClick = async () => {
    if (!isLoggedIn) {
      alert('You need to login to like or unlike the post.');
      return;
    }

    try {
      const response = await axios.post(
        `${baseURL}api/blog-like/${post.id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      if (response.data.status) {
        // Update the like status in the UI
        setPost((prevPost) => ({
          ...prevPost,
          is_liked: !prevPost.is_liked, // Toggle the liked status
          likes_count: prevPost.is_liked
            ? prevPost.likes_count - 1
            : prevPost.likes_count + 1 // Adjust the likes count
        }));
        setMessagee(response.data.messagee);
      }
    } catch (error) {
      console.error('Error liking/unliking post:', error);
      setMessagee('Failed to like/unlike the post');
    }
  };

  // Fetch data when component mounts
  useEffect(() => {
    fetchPostDetails();
    fetchRecentPosts();
    checkLoginStatus();
  }, [slug, token]); // Include slug and token in dependency array to re-fetch when slug or token changes

  // Function to handle form submission for posting comments
  const handleCommentSubmit = async (event) => {
    event.preventDefault();

    if (!isLoggedIn) {
      setMessagee('You need to login to leave a comment.');
      return;
    }

    try {
      const response = await axios.post(
        `${baseURL}api/blog-comment/${post.id}`,
        { comment },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      if (response.data.status) {
        // Refresh comments after successful comment submission
        fetchPostDetails();
        setComment(''); // Clear comment input
        setMessagee('Comment added successfully!');
      } else {
        setMessagee('Failed to add comment');
      }
    } catch (error) {
      console.error('Error adding comment:', error);
      setMessagee('Failed to add comment');
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div id="site-content">
      <section className="sub-banner-main">
        <div className="s-banner">
          <div className="banner-overlay-content">
            <h2> Blog Details</h2>
            <div className="breadcurmbs">
              <a href="/">
                <i className="fa-solid fa-house" />
              </a>
              <span>
                <i className="fa-solid fa-angles-right" />
              </span>
              Blogs
              <span>
                <i className="fa-solid fa-angles-right" />
              </span>
              <span>{post.title}</span>
            </div>
          </div>
        </div>
      </section>
      <section className="blog_area single-post-area pt-spc pb-spc">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 posts-list">
              <div className="single-post">
                <div className="feature-img">
                  <img
                    className="img-fluid"
                    src={`${baseURL}${post.featured_image}`}
                    alt={post.title}
                  />
                  <span
                    onClick={handleLikeClick}
                    className={`like-bx ${post.is_liked ? 'color-blue' : ''}`}
                  >
                    <i className="fa-solid fa-thumbs-up"></i>
                  </span>
                  <span
    className="bookmark-bx"
    data-bs-toggle="modal"
    data-bs-target="#bookmarkModal"
  >
    <i className="fa-solid fa-bookmark" />
  </span>
 {/* Modal  */}
  <div
  className="modal fade bookmarkmodel"
  id="bookmarkModal"
  tabIndex={-1}
  aria-labelledby="bookmarkModalLabel"
  aria-hidden="true"
>
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="bookmarkModalLabel">
          Bookmark Destination
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        />
      </div>
      <div className="modal-body">
        <form>
          {/* <div className="mb-3">
            <label htmlFor="bookmarkName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="bookmarkName"
              placeholder="Enter bookmark name"
            />
          </div> */}
          <div className="mb-3">
            <label htmlFor="bookmarkFolder" className="form-label">
              Folder
            </label>
            <select id="bookmarkFolder" className="form-select">
              <option value="">Select a folder</option>
             <option>Must Visit</option>
             <option>Top Picks</option>
             <option>
             Historical Sites</option>
            </select>
            <div className="input-group mt-2">
              <input
                type="text"
                className="form-control"
                id="newFolderName"
                placeholder="Enter new folder name"
              />
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="createFolderBtn"
              >
                Create Folder
              </button>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
           Add to Bookmark
          </button>
          {/* <button type="button" className="btn btn-danger ms-2" id="removeBtn">
            Cancel
          </button> */}
        </form>
      </div>
    </div>
  </div>
</div>
 {/* Modal ends here */}

                </div>
                <div className="blog_details">
                  <h2>{post.title} </h2>
                  <ul className="blog-info-link mt-4 mb-4">
                    <li>
                     
                        <i className="fas fa-folder-open" />{post.category.category_title}
                     
                    </li>
                    <li>
                     
                        <i className="fa fa-user" /> {post.user.name}
                     
                    </li>
                    <li>
                     
                        <i className="fa-solid fa-thumbs-up" />{' '}
                        {post.likes_count} Likes
                     
                    </li>
                    <li>
                     
                        <i className="fa-solid fa-eye" /> {post.views_count}{' '}
                        Views
                     
                    </li>
                    <li>
                     
                        <i className="fas fa-comments" />{' '}
                        {post.comments_count} Comments
                     
                    </li>
                    <li>
                     
                        <i className="fas fa-calendar-alt"></i>{' '}
                        {post.created_date}
                     
                    </li>
                    <li>
                     
                        <i className="fa-solid fa-coins"></i>{' '}
                        {post.coins_sum_coin || 0} Trip-Coins
                     
                    </li>
                    <li>
                    <i class="fa-solid fa-city"></i>{' '}
                     {post.city}
                 </li>
                  </ul>
                  <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>
              </div>

              {/* Blog Author Section */}
              <div className="blog-author">
                <div className="media align-items-center">
                  <img
                    src={`${baseURL}${post.user.image}`}
                    alt={post.user.name}
                  />
                  <div className="media-body">
                  
                      <h2>{post.user.name}</h2>
                 
                  </div>
                </div>
              </div>

              {/* Comments Section */}
              <div className="comments-area">
                <h4>{comments.length} Comments</h4>
                {comments.map((comment) => (
                  <div className="comment-list" key={comment.id}>
                    <div className="single-comment justify-content-between d-flex">
                      <div className="user justify-content-between d-flex">
                        <div className="thumb">
                          <img
                            src={`${baseURL}${comment.user.comment_userimage}`}
                            alt={comment.user.comment_username}
                          />
                        </div>
                        <div className="desc">
                          <p className="comment">{comment.comment}</p>
                          <div className="d-flex justify-content-between">
                            <div className="d-flex align-items-center">
                              <h5>
                                <a href="#">{comment.user.comment_username}</a>
                              </h5>
                              <p className="date">{comment.comment_date}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Comment Form */}
              {isLoggedIn && (
                <div className="comment-form">
                  <h4>Leave a Comment</h4>
                  <form onSubmit={handleCommentSubmit}>
                    <div className="form-group">
                      <textarea
                        className="form-control mb-10"
                        rows="5"
                        name="comment"
                        placeholder="Message"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        required
                      ></textarea>
                    </div>
                    <div className="form-group">
                     
                      <button type="submit" className="main-button">Post Comment</button>
               
                    </div>
                  </form>
                </div>
              )}

              {messagee && <p>{messagee}</p>}
            </div>

            {/* Sidebar for Recent Posts */}
            <div className="col-lg-4">
              <div className="blog_right_sidebar">
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

                <aside className="single_sidebar_widget popular_post_widget">
                
                
                

{/* 
  <div className="mb-4">
    <label className="form-label">
      Choose an City-Chief :
    </label>
    <select id="username-select" className="form-select" name="username">
            <option value="">Select a City-Chief</option>
            <option value="all" className="option-separator">Send to All City-Chiefs</option>
            <option value="user1">John Doe</option>
            <option value="user2">User2</option>
            <option value="user3">User3</option>
            <option value="user4">User4</option>
            <option value="user5">User5</option>
        </select>
    <button type="submit" className="btn btn-primary spc-per">
      Connect now
    </button>
  </div> */}


            {/* <div className="contains">

  <div className="chat-container">
    <div className="closechat"><i className="fa-solid fa-xmark"></i></div>
  <h5 className="title-chat">John Doe  <span className="current-status online"> <i className="fa-regular fa-circle-dot"></i></span></h5>
    <div className="chat-box" id="chat-box">
      <div className="message expert-message">
       
        <div className="text">Hello! How are you?</div>
      </div>
      <div className="message user-message">
    
        <div className="text">I'm good, thanks! How about you?</div>
      </div>
    </div>
    <div className="chat-input">
      <form id="chat-form">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            id="message-input"
            placeholder="Type your message..."
            required=""
          />
          <button className="btn btn-primary" type="submit">
            Send
          </button>
        </div>
      </form>
    </div>
  </div>
</div> */}

                  </aside>

              </div>
            </div>
          </div>
        </div>
      </section>




      <button
  type="button"
  className="btn btn-primary city-button"
  data-bs-toggle="modal"
  data-bs-target="#chatModal"
>
  <span>1</span>
  <i className="fa-regular fa-comments"></i> Chat to City-Chief
</button>

<div
  className="modal fade chatmodal"
  id="chatModal"
  tabIndex={-1}
  aria-labelledby="chatModalLabel"
  aria-hidden="true"
>
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <div className="bt-cov">
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        />
      </div>
      <div className="modal-body">
        <div id="frame">
          <div id="sidepanel">
            <div id="contacts">
              <ul>
              <li className="sendall">
                  <a href="/gmb/create-topics">
                    <i className="fa-solid fa-users" /> Send to all
                  </a>
                </li>
                <li className="contact active">
                  <div className="wrap">
                    <span className="contact-status online" />
                    <img
                      src="http://emilcarlsson.se/assets/harveyspecter.png"
                      alt=""
                    />
                    <div className="meta">
                      <p className="name">Harvey Specter</p>
                    </div>
                  </div>
                </li>
                <li className="contact">
                  <div className="wrap">
                    <span className="contact-status busy" />
                    <img
                      src="http://emilcarlsson.se/assets/rachelzane.png"
                      alt=""
                    />
                    <div className="meta">
                      <p className="name">Rachel Zane</p>
                    </div>
                  </div>
                </li>
                <li className="contact">
                  <div className="wrap">
                    <span className="contact-status online" />
                    <img
                      src="http://emilcarlsson.se/assets/donnapaulsen.png"
                      alt=""
                    />
                    <div className="meta">
                      <p className="name">Donna Paulsen</p>
                    </div>
                  </div>
                </li>
                <li className="contact">
                  <div className="wrap">
                    <span className="contact-status busy" />
                    <img
                      src="http://emilcarlsson.se/assets/jessicapearson.png"
                      alt=""
                    />
                    <div className="meta">
                      <p className="name">Jessica Pearson</p>
                    </div>
                  </div>
                </li>
                <li className="contact">
                  <div className="wrap">
                    <span className="contact-status busy" />
                    <img
                      src="http://emilcarlsson.se/assets/haroldgunderson.png"
                      alt=""
                    />
                    <div className="meta">
                      <p className="name">Harold Gunderson</p>
                    </div>
                  </div>
                </li>
                <li className="contact">
                  <div className="wrap">
                    <span className="contact-status busy" />
                    <img
                      src="http://emilcarlsson.se/assets/danielhardman.png"
                      alt=""
                    />
                    <div className="meta">
                      <p className="name">Daniel Hardman</p>
                    </div>
                  </div>
                </li>
                <li className="contact">
                  <div className="wrap">
                    <span className="contact-status online" />
                    <img
                      src="http://emilcarlsson.se/assets/katrinabennett.png"
                      alt=""
                    />
                    <div className="meta">
                      <p className="name">Katrina Bennett</p>
                    </div>
                  </div>
                </li>
                <li className="contact">
                  <div className="wrap">
                    <span className="contact-status busy" />
                    <img
                      src="http://emilcarlsson.se/assets/charlesforstman.png"
                      alt=""
                    />
                    <div className="meta">
                      <p className="name">Charles Forstman</p>
                    </div>
                  </div>
                </li>
                <li className="contact">
                  <div className="wrap">
                    <span className="contact-status busy" />
                    <img
                      src="http://emilcarlsson.se/assets/jonathansidwell.png"
                      alt=""
                    />
                    <div className="meta">
                      <p className="name">Jonathan Sidwell</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="content">
            <div className="contact-profile">
              <img
                src="http://emilcarlsson.se/assets/harveyspecter.png"
                alt=""
              />
              <p>Harvey Specter</p>
            </div>
            <div className="messages">
              <ul>
                <li className="sent">
                  <p>
                   Hello, Can you please tell me what are best places to visit in shimla?
                  </p>
                </li>
                <li className="replies">
                  <p>
                   Ye s sure, there are many places to visit in shimla.
                  </p>
                </li>
                <li className="sent">
                  <p>
                   Ok please tell me the places names.
                  </p>
                </li>
              </ul>
            </div>
            <div className="message-input">
              <div className="wrap">
                <input type="text" placeholder="Write your message..." />
                <button className="submit">
                  <i className="fa fa-paper-plane" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>






    </div>
  );
};

export default PostDetails;
   