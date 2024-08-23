import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StorySection = () => {
  const [story, setStory] = useState(null);

  useEffect(() => {
    const fetchStory = async () => {
      try {
        const response = await axios.get('https://bvmwebsolutions.com/ghoombuddy_laravel/api/story');
        setStory(response.data.story);
      } catch (error) {
        console.error('Error fetching story:', error);
      }
    };

    fetchStory(); // Fetching the story details initially
  }, []);

  if (!story) {
    return null; // You can render a loader or placeholder while data is being fetched
  }

  return (
    <section id="story" className="story-section" style={{ backgroundImage: `url(https://bvmwebsolutions.com/ghoombuddy_laravel/${story.bg_image})` }}>
      <div className="container">
        <div className="row align-items-center">
          {/* About Video (if any) */}
          <div className="col-lg-6">
            {/* Example: <div className="about-video"><iframe src="https://www.youtube.com/embed/VIDEO_ID_HERE"></iframe></div> */}
          </div>
          {/* About Text */}
          <div className="col-lg-6">
            <div className="backf">
              <h5>{story.title}</h5>
              <h2 className="">{story.sub_title}</h2>
              <div dangerouslySetInnerHTML={{ __html: story.content }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
