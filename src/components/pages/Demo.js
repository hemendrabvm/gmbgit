import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Demo = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (searchTerm.length > 1) {
        setLoading(true);
        try {
          const response = await axios.post('https://bvmwebsolutions.com/ghoombuddy_laravel/api/blog/search', { postname: searchTerm });
          setSearchResults(response.data.posts);
          setLoading(false);
        } catch (error) {
          console.error(error);
          setLoading(false);
        }
      } else {
        setSearchResults([]);
      }
    };

    fetchSearchResults();
  }, [searchTerm]);

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchResultClick = (post) => {
    // Navigate to the blog page
    window.location.href = `/blog/${post.slug}`;
  };

  return (
    <div>
      <form action="#" onSubmit={(e) => e.preventDefault()}>
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
        </div>
      </form>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {searchResults.map((post) => (
            <li key={post.id}>
              <a href="#" onClick={() => handleSearchResultClick(post)}>
                {post.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Demo;
