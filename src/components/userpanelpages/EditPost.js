import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Sidebar from './Sidebar';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const EditPost = () => {
  const { postId } = useParams(); // Get postId from URL params

  // State variables for managing form inputs, post data, loading, and errors
  const [post, setPost] = useState({});
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [postImage, setPostImage] = useState(null);
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]);
  const [city, setCity] = useState(''); // New state variable for city
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [alertType, setAlertType] = useState('success');

  const baseURL = 'https://bvmwebsolutions.com/ghoombuddy_laravel/';

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      try {
        // Fetch post data using postId from your API
        const postResponse = await axios.get(`${baseURL}api/blog-detail/${postId}`);
        if (postResponse.data.status) {
          const postData = postResponse.data.post;
          setPost(postData);
          setTitle(postData.title);
          setContent(postData.content);
          setCategory(postData.category_id.toString()); // Assuming category_id is a string
          setCity(postData.city || ''); // Set city from the fetched post data
        } else {
          throw new Error(postResponse.data.message || 'Failed to fetch post');
        }

        // Fetch categories from API
        const categoryResponse = await axios.get(`${baseURL}api/category`);
        if (categoryResponse.data.status) {
          setCategories(categoryResponse.data.categories);
        } else {
          throw new Error(categoryResponse.data.message || 'Failed to fetch categories');
        }

        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
        setError('Failed to fetch data. Please try again.');
      }
    };

    fetchPost();
  }, [postId]);

  const handleUpdatePost = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const updatedPost = new FormData();
      updatedPost.append('title', title);
      updatedPost.append('content', content);
      updatedPost.append('category', category);
      updatedPost.append('city', city); // Append city to FormData

      if (postImage) {
        updatedPost.append('featured_image', postImage);
      }

      const authToken = localStorage.getItem('authToken');
      if (!authToken) {
        throw new Error('Authentication token not found');
      }

      const response = await axios.post(`${baseURL}api/blog-update/${postId}`, updatedPost, {
        headers: {
          Authorization: `Bearer ${authToken}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data.status) {
        setLoading(false);
        setAlertType('success');
        setMessage('Post updated successfully!');
        // Optionally redirect to AllPosts or perform other actions
      } else {
        throw new Error(response.data.message || 'Failed to update post');
      }
    } catch (error) {
      console.error('Error updating post:', error);
      setLoading(false);
      setAlertType('danger');
      setMessage(error.message || 'Failed to update post. Please try again.');
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div id="site-content">
      <div className="container">
        <div className="page-heading">
          <h2>Account</h2>
        </div>
      </div>
      <section className="profile-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-12">
              <Sidebar />
            </div>
            <div className="col-xl-9 col-lg-8">
              <div className="tab-content">
                <div className="setting-tab">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="single-area">
                        <h5 className="mb-0">Edit Post</h5>
                      </div>
                      <div className="setting-personal-details">
                        <form onSubmit={handleUpdatePost}>
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="single-input">
                                <label htmlFor="postTitle">Post Title</label>
                                <input
                                  type="text"
                                  id="postTitle"
                                  name="postTitle"
                                  placeholder="Enter Post Title"
                                  value={title}
                                  onChange={(e) => setTitle(e.target.value)}
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="single-input">
                                <label htmlFor="postImage">Post Image</label>
                                <input
                                  type="file"
                                  id="postImage"
                                  name="postImage"
                                  accept="image/*"
                                  onChange={(e) => setPostImage(e.target.files[0])}
                                />
                                {post.featured_image && (
                                  <div className="featured-img">
                                    <img
                                      src={`${baseURL}${post.featured_image}`}
                                      className="img-fluid"
                                      alt="Current Post Image"
                                    />
                                  </div>
                                )}
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="single-input">
                                <label htmlFor="postContent">Post Content</label>
                                <CKEditor
                                  editor={ClassicEditor}
                                  data={content}
                                  onChange={(event, editor) => {
                                    const data = editor.getData();
                                    setContent(data);
                                  }}
                                  config={{
                                    toolbar: [
                                      'heading', '|',
                                      'bold', 'italic', 'link', '|',
                                      'undo', 'redo'
                                    ]
                                  }}
                                />
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="single-input">
                                <label htmlFor="postCategory">Category</label>
                                <select
                                  id="postCategory"
                                  name="postCategory"
                                  value={category}
                                  onChange={(e) => setCategory(e.target.value)}
                                  required
                                >
                                  <option value="">Select Category</option>
                                  {categories.map(cat => (
                                    <option key={cat.id} value={cat.id}>{cat.category_title}</option>
                                  ))}
                                </select>
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="single-input">
                                <label htmlFor="city">City</label>
                                <input
                                  type="text"
                                  id="city"
                                  name="city"
                                  placeholder="Enter City"
                                  value={city}
                                  onChange={(e) => setCity(e.target.value)}
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="single-input">
                                <button type="submit" className="mybtn1">
                                  Update Post
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
                        {message && (
                          <div className={`alert alert-${alertType}`} role="alert">
                            {message}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EditPost;
