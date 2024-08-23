import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom'; // Import Link for navigation


const AllPosts = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {


    // Fetch posts
    const fetchPosts = async () => {
      try {
        const authToken = localStorage.getItem('authToken');
        if (!authToken) {
          throw new Error('Authentication token not found');
        }

        const response = await axios.get('https://bvmwebsolutions.com/ghoombuddy_laravel/api/blog-list', {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });

        if (response.data.status) {
          setPosts(response.data.posts);
        } else {
          throw new Error(response.data.message || 'Failed to fetch posts');
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
        setError(error.message || 'Error fetching posts');
      }
    };

    fetchPosts();
  }, []);

  const handleDeletePost = async (postId) => {
    try {
      const authToken = localStorage.getItem('authToken');
      if (!authToken) {
        throw new Error('Authentication token not found');
      }

      const response = await axios.delete(`https://bvmwebsolutions.com/ghoombuddy_laravel/api/blog-delete/${postId}`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      if (response.data.status) {
        // Filter out the deleted post from the state
        const updatedPosts = posts.filter(post => post.id !== postId);
        setPosts(updatedPosts);
        setError('');
        alert('Post deleted successfully!');
      } else {
        throw new Error(response.data.message || 'Failed to delete post');
      }
    } catch (error) {
      console.error('Error deleting post:', error);
      setError(error.message || 'Error deleting post');
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
            <Sidebar/>
            </div>
            <div className="col-xl-9 col-lg-8">
              <div className="tab-content">
                <div className="setting-tab">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="single-area">
                        <h5 className="mb-0">All Posts</h5>
                      </div>
                      <div className="setting-personal-details">
                        <h5>Blogs List</h5>
                        {error && <p className="text-danger">{error}</p>}
                        <div className="table-responsive">
                          <table className="table table-striped table-sm">
                            <thead>
                              <tr>
                                <th>#</th>
                                <th>Blog Title</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                              {posts.map((post, index) => (
                                <tr key={post.id}>
                                  <td>{index + 1}</td>
                                  <td>{post.title}</td>
                                  <td>{post.created_date}</td>
                                  <td>{post.status}</td>
                                  <td>
                                    <Link
                                      to={`/edit-post/${post.id}`} // Navigate to EditPost component with post ID
                                      className="btn btn-primary btn-sm"
                                    >
                                      Edit
                                    </Link>
                                    <button
                                      className="btn btn-danger btn-sm"
                                      onClick={() => handleDeletePost(post.id)}
                                    >
                                      Delete
                                    </button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
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

export default AllPosts;
