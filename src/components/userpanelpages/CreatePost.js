import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const CreatePost = () => {
  const [categories, setCategories] = useState([]);
  const [postTitle, setPostTitle] = useState('');
  const [postContent, setPostContent] = useState('');
  const [postImage, setPostImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [city, setCity] = useState(''); // New state variable for city
  const [message, setMessage] = useState('');
  const [alertType, setAlertType] = useState('success');
  const token = localStorage.getItem('authToken');
  const baseURL = 'https://bvmwebsolutions.com/ghoombuddy_laravel/';

  useEffect(() => {
    fetch('https://bvmwebsolutions.com/ghoombuddy_laravel/api/category', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data.status) {
          setCategories(data.categories);
        } else {
          console.error('Failed to fetch categories');
        }
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  }, [token]);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!postImage) {
      setAlertType('danger');
      setMessage('Please select an image');
      return;
    }

    const imageUrl = `${baseURL}admin/upload_image/post/${postImage.name}`;

    const formData = new FormData();
    formData.append('title', postTitle);
    formData.append('content', postContent);
    formData.append('featured_image', postImage);
    formData.append('category', selectedCategory);
    formData.append('city', city); // Append city to formData

    try {
      const response = await fetch('https://bvmwebsolutions.com/ghoombuddy_laravel/api/blog-store', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: formData
      });

      const data = await response.json();
      if (data.status) {
        setAlertType('success');
        setMessage('Post Added Successfully!');
        setPostTitle('');
        setPostContent('');
        setPostImage(null);
        setSelectedCategory('');
        setCity(''); // Clear city field
      } else {
        setAlertType('danger');
        setMessage('Failed to add post');
      }
    } catch (error) {
      console.error('Error adding post:', error);
      setAlertType('danger');
      setMessage('Failed to add post');
    }
  };

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
                        <h5 className="mb-0">Create a memory</h5>
                      </div>
                      <div className="setting-personal-details">
                        <form onSubmit={handleFormSubmit} encType="multipart/form-data">
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="single-input">
                                <label htmlFor="postTitle">Post Title</label>
                                <input
                                  type="text"
                                  id="postTitle"
                                  name="postTitle"
                                  value={postTitle}
                                  onChange={(e) => setPostTitle(e.target.value)}
                                  placeholder="Enter Post Title"
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
                                  onChange={(e) => setPostImage(e.target.files[0])}
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="single-input">
                                <label htmlFor="postContent">Post Content</label>
                                <CKEditor
                                  editor={ClassicEditor}
                                  data={postContent}
                                  onChange={(event, editor) => {
                                    const data = editor.getData();
                                    setPostContent(data);
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
                                  value={selectedCategory}
                                  onChange={(e) => setSelectedCategory(e.target.value)}
                                >
                                  <option value="">Select Category</option>
                                  {categories.map(category => (
                                    <option key={category.id} value={category.id}>
                                      {category.category_title}
                                    </option>
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
                                  value={city}
                                  onChange={(e) => setCity(e.target.value)}
                                  placeholder="Enter City"
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="single-input">
                                <button type="submit" className="mybtn1">
                                  Create a memory
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
}

export default CreatePost;
