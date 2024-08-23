import React, { useState, useEffect } from 'react';
import axios from 'axios';

const VideoSection = () => {
  const [videoData, setVideoData] = useState({
    title: '',
    sub_title: '',
    featured_image: '',
    bg_image: '',
    video_link: '',
    content: ''
  });

  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        const response = await axios.get('https://bvmwebsolutions.com/ghoombuddy_laravel/api/adventure');
        if (response.data.status) {
          setVideoData(response.data.adventure);
        } else {
          console.error('Failed to fetch video data');
        }
      } catch (error) {
        console.error('Error fetching video data:', error);
      }
    };

    fetchVideoData();
  }, []);

  return (
    <section id="" className="video-section p-100" style={{ backgroundImage: `url(https://bvmwebsolutions.com/ghoombuddy_laravel/${videoData.bg_image})` }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="max-wd">
              <h5>{videoData.title}</h5>
              <h2>{videoData.sub_title}</h2>
              <div dangerouslySetInnerHTML={{ __html: videoData.content }} />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="video-box">
              <div className="vid-con">
                {/* Button trigger modal */}
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#videoModal"
                  type="button"
                  className="video-btn"
                >
                  <span className="play-btn" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <div
        className="modal fade"
        id="videoModal"
        tabIndex={-1}
        aria-labelledby="videoModalLabel"
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
              <div dangerouslySetInnerHTML={{ __html: videoData.video_link }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
