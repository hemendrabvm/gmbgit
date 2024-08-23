import React, { useRef, useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ActivitiesDetails = () => {
  // Refs for the sliders
  const mainSlider = useRef(null);
  const thumbSlider = useRef(null);
  
  // State to hold slider settings
  const [mainSliderSettings, setMainSliderSettings] = useState({});
  const [thumbSliderSettings, setThumbSliderSettings] = useState({});

  // Set slider settings after component mounts
  useEffect(() => {
    setMainSliderSettings({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      arrows: false,
      fade: true,
      autoplay: true,
      autoplaySpeed: 4000,
      speed: 300,
      lazyLoad: 'ondemand',
      asNavFor: thumbSlider.current
    });

    setThumbSliderSettings({
      slidesToShow: 5,
      slidesToScroll: 1,
      infinite: true,
      centerPadding: '0px',
      asNavFor: mainSlider.current,
      dots: false,
      centerMode: false,
      draggable: true,
      speed: 200,
      focusOnSelect: true,
      prevArrow: <div className="slick-prev"><i className="i-prev"></i><span className="sr-only sr-only-focusable">Previous</span></div>,
      nextArrow: <div className="slick-next"><i className="i-next"></i><span className="sr-only sr-only-focusable">Next</span></div>,
    });
  }, []);

  return (
    <div id="site-content">
      <section className="sub-banner-main">
        <div className="s-banner">
          <div className="banner-overlay-content">
            <h2>Activity Details</h2>
            <div className="breadcurmbs">
              <a href="#">
                <i className="fa-solid fa-house" />
              </a>
              <span>
                <i className="fa-solid fa-angles-right" />
              </span>
              <a href="#">Activity</a>
              <span>
                <i className="fa-solid fa-angles-right" />
              </span>
              <a href="#">Activity details</a>
            </div>
          </div>
        </div>
      </section>
      <section className="detail-tour-section">
        <div className="container">
          <div className="top-scr">
            <div className="st-single-service-content">
              <div className="st-service-header2">
                <div className="left">
                  <h1 className="st-heading">
                    Private Mumbai Sightseeing Tour (Traveller's Choice Award Winner)
                  </h1>
                  <div className="sub-heading">
                    <div className="d-inline-block d-sm-flex align-items-center">
                      <div className="st-review-score">
                        <div className="head d-inline-block d-sm-flex justify-content-between align-items-center clearfix">
                          <div className="left">
                            <div className="star-sc">
                              <div className="stars">
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star-half-stroke" />
                              </div>
                              4.5 <span>1,543 reviews</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="detail">
              <div className="product-images demo-gallery">
                <Slider ref={mainSlider} {...mainSliderSettings} className="main-img-slider">
                  <div>
                    <img src="assets/images/b1.jpg" className="img-fluid" alt="Slide 1" />
                  </div>
                  <div>
                    <img src="assets/images/b2.jpg" className="img-fluid" alt="Slide 2" />
                  </div>
                  <div>
                    <img src="assets/images/b3.jpg" className="img-fluid" alt="Slide 3" />
                  </div>
                  <div>
                    <img src="assets/images/b4.jpg" className="img-fluid" alt="Slide 4" />
                  </div>
                  <div>
                    <img src="assets/images/b5.jpg" className="img-fluid" alt="Slide 5" />
                  </div>
                  <div>
                    <img src="assets/images/b6.jpg" className="img-fluid" alt="Slide 6" />
                  </div>
                </Slider>
                <Slider ref={thumbSlider} {...thumbSliderSettings} className="thumb-nav">
                  <div>
                    <img src="assets/images/b1.jpg" alt="Thumbnail 1" />
                  </div>
                  <div>
                    <img src="assets/images/b2.jpg" alt="Thumbnail 2" />
                  </div>
                  <div>
                    <img src="assets/images/b3.jpg" alt="Thumbnail 3" />
                  </div>
                  <div>
                    <img src="assets/images/b4.jpg" alt="Thumbnail 4" />
                  </div>
                  <div>
                    <img src="assets/images/b5.jpg" alt="Thumbnail 5" />
                  </div>
                  <div>
                    <img src="assets/images/b6.jpg" alt="Thumbnail 6" />
                  </div>
                </Slider>
              </div>
            </div>
          </div>

          <div className="cart-box">
  <div className="pro-sect">
    <div className="about_ticket">
      <h2 className="activity-key-details__title">Overview</h2>
    </div>
  </div>
  <p className="act-des">
    Enjoy personalized attention and a flexible itinerary on this private
    tour of Mumbai. With a dedicated guide in the lead, visit Mumbai
    highlights such as Taj Mahal Palace Hotel, the Gateway of India, Tower
    of Silence, and others. Listen to engaging commentary from your guide
    on the history, culture, and architecture of Mumbai as you travel.
    Read more about Private Mumbai Sightseeing Tour (Traveller's Choice
    Award Winner)
  </p>
  <p className="act-des">
  Lorem ipsum dolor sit amet consecte consectetur adipisicing elit. Ducimus dolore dignissimos distinctio itaque aperiam, labore odio fuga illum quasi aut natus voluptate minus ut. Nam laborum voluptas saepe accusantium  consectetur adipisicing elit. Ducimus dolore dignissimos distinctio itaque aperiam, labore odio fuga illum quasi aut natus voluptate minus ut. Nam laborum voluptas saepe accusantium voluptatem adipisicing elit. Ducimus dolore dignissimos distinctio itaque aperiam, labore odio fuga illum quasi aut natus voluptate minus ut. Nam laborum voluptas saepe accusantium voluptatem?
  </p>
  <div className="pro-sect">
    <div className="about_ticket">
      <h2 className="activity-key-details__title">About this activity</h2>
    </div>
  </div>

<div className="d-flex gap-5">
  <div className="activity-section">
    <div className="activity-container">
    <i className="fa-solid fa-list"></i>
    </div>
    <div className="activity-content">
      <h2 className="activity-heading">Tour Type: <span>City Tours</span></h2>
      <p />
    </div>
  </div>
  <div className="activity-section">
    <div className="activity-container">
    <i className="fa-solid fa-th-large category-icon"></i>
    </div>
    <div className="activity-content">
      <h2 className="activity-heading"> Category:<span> Essentials</span></h2>
      <p />
    </div>
  </div>
  </div>
  
  <div className="pro-sect">
    <div className="about_ticket">
      <h2 className="activity-key-details__title">Experience</h2>
    </div>
  </div>
  <div className="activity-section tw">
    <div className="activity-container">
      <span>Highlights</span>
    </div>
    <div className="activity-content">
      <ul className="activity-highlights__list">
        {/*[*/}
        <li className="activity-highlights__list-item">
          Private tour of Mumbai for just you and your party
        </li>
        <li className="activity-highlights__list-item">
          Save time by reserving your desired entry time in advance
        </li>
        <li className="activity-highlights__list-item">
          Check all the Mumbai highlights off your list in one tour
        </li>
        <li className="activity-highlights__list-item">
          Learn about the landmarks and hidden gems of the city through
          your guide's commentary
        </li>
        <li className="activity-highlights__list-item">
          Round-trip private transportation from your Mumbai hotel
        </li>
        {/*]*/}
      </ul>
    </div>
  </div>
  <div className="activity-section tw">
    <div className="activity-container">
      <span>Includes</span>
    </div>
    <div className="activity-content">
      <ul>
        <li>
          <i className="fa-solid fa-check" />
          Hotel pickup and drop-off (South &amp; Centre Mumbai)
        </li>
        <li>
          <i className="fa-solid fa-check" /> North Mumbai Pickup &amp;
          Drop (EXTRA INR 2000 for 1 Car)
        </li>
        <li>
          <i className="fa-solid fa-check" />
          Private tour
        </li>
        <li>
          <i className="fa-solid fa-check" />
          English Speaking Guide
        </li>
        <li>
          <i className="fa-solid fa-check" /> Museum-quality exhibits
        </li>
        <li>
          <i className="fa-solid fa-check" /> Bottled water
        </li>
        <li>
          <i className="fa-solid fa-check" /> Air-conditioned vehicle
        </li>
        <li>
          <i className="fa-solid fa-check" /> Entry Tickets, Tolls,
          Parking &amp; Taxes
        </li>
        <li>
          <i className="fa-solid fa-xmark" /> North Mumbai Pickup &amp;
          Drop (EXTRA INR 2000 for 1 Car)
        </li>
      </ul>
    </div>
  </div>

  <div className="pro-sect">
    <div className="about_ticket">
      <h2 className="activity-key-details__title">Customer reviews</h2>
    </div>
  </div>
  <div className="review-pro">
    <div className="rv-main">
      <div className="rv-rwo">
        <p className="rv-hdng">Overall rating</p>
        <h2>4.4 /5</h2>
        <div className="rating rating_4">
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
        </div>
        <span className="basd"> based on 2692 reviews </span>
      </div>
      <div className="rv-two">
        <p className="rv-hdng">Review summary</p>
        <div className="review-sumary">
          <div className="item">
            <div className="label">Excellent</div>
            <div className="progress">
              <div className="percent green" style={{ width: "0%" }} />
            </div>
            <div className="number">0</div>
          </div>
          <div className="item">
            <div className="label">Very Good</div>
            <div className="progress">
              <div
                className="percent darkgreen"
                style={{ width: "100%" }}
              />
            </div>
            <div className="number">1</div>
          </div>
          <div className="item">
            <div className="label">Average</div>
            <div className="progress">
              <div className="percent yellow" style={{ width: "0%" }} />
            </div>
            <div className="number">0</div>
          </div>
          <div className="item">
            <div className="label">Poor</div>
            <div className="progress">
              <div className="percent orange" style={{ width: "0%" }} />
            </div>
            <div className="number">0</div>
          </div>
          <div className="item">
            <div className="label">Terrible</div>
            <div className="progress">
              <div className="percent red" style={{ width: "0%" }} />
            </div>
            <div className="number">0</div>
          </div>
        </div>
      </div>
    </div>
   
    <div className="rv-content">
      <div className="star-sc">
        <div className="stars">
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star-half-stroke" />
        </div>
      </div>
      <div className="rc-c-hd">
        <div className="rc-c-hd-l">
          <span className="review-card__author-initial">A</span>
        </div>
        <div className="rc-c-hd-r">
          <span className="review-card_author-details-name">
            – John Doe
          </span>
          <span className="review-card_author-date">
            November 28, 2024
          </span>
        </div>
      </div>
      <div className="rc-c-con">
        <p>
          It was a hot day but the vehicle was an SUV with good AC,
          walking was included on tree covered streets. Guide was very
          friendly, knowledgable and on time. Would book again and this
          time I would include the Slum tour. We did a slum tour the next
          day and it was amazing and eyeopening. We are in our 60's and
          the pace was great and we asked to get out and walk numerous
          times. She accommodated our every request and tour took around 5
          hours. Great job!
        </p>
      </div>
    </div>
    <div className="rv-content">
      <div className="star-sc">
        <div className="stars">
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star-half-stroke" />
        </div>
      </div>
      <div className="rc-c-hd">
        <div className="rc-c-hd-l">
          <span className="review-card__author-initial">A</span>
        </div>
        <div className="rc-c-hd-r">
          <span className="review-card_author-details-name">
            – John Doe
          </span>
          <span className="review-card_author-date">
            November 28, 2024
          </span>
        </div>
      </div>
      <div className="rc-c-con">
        <p>
          It was a hot day but the vehicle was an SUV with good AC,
          walking was included on tree covered streets. Guide was very
          friendly, knowledgable and on time. Would book again and this
          time I would include the Slum tour. We did a slum tour the next
          day and it was amazing and eyeopening. We are in our 60's and
          the pace was great and we asked to get out and walk numerous
          times. She accommodated our every request and tour took around 5
          hours. Great job!
        </p>
      </div>
    </div>
    <div className="rv-content">
      <div className="star-sc">
        <div className="stars">
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star-half-stroke" />
        </div>
      </div>
      <div className="rc-c-hd">
        <div className="rc-c-hd-l">
          <span className="review-card__author-initial">A</span>
        </div>
        <div className="rc-c-hd-r">
          <span className="review-card_author-details-name">
            – John Doe
          </span>
          <span className="review-card_author-date">
            November 28, 2024
          </span>
        </div>
      </div>
      <div className="rc-c-con">
        <p>
          It was a hot day but the vehicle was an SUV with good AC,
          walking was included on tree covered streets. Guide was very
          friendly, knowledgable and on time. Would book again and this
          time I would include the Slum tour. We did a slum tour the next
          day and it was amazing and eyeopening. We are in our 60's and
          the pace was great and we asked to get out and walk numerous
          times. She accommodated our every request and tour took around 5
          hours. Great job!
        </p>
      </div>
    </div>
    <div className="rv-content">
      <div className="star-sc">
        <div className="stars">
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star-half-stroke" />
        </div>
      </div>
      <div className="rc-c-hd">
        <div className="rc-c-hd-l">
          <span className="review-card__author-initial">A</span>
        </div>
        <div className="rc-c-hd-r">
          <span className="review-card_author-details-name">
            – John Doe
          </span>
          <span className="review-card_author-date">
            November 28, 2024
          </span>
        </div>
      </div>
      <div className="rc-c-con">
        <p>
          It was a hot day but the vehicle was an SUV with good AC,
          walking was included on tree covered streets. Guide was very
          friendly, knowledgable and on time. Would book again and this
          time I would include the Slum tour. We did a slum tour the next
          day and it was amazing and eyeopening. We are in our 60's and
          the pace was great and we asked to get out and walk numerous
          times. She accommodated our every request and tour took around 5
          hours. Great job!
        </p>
      </div>
    </div>
    <div className="rv-content">
      <div className="star-sc">
        <div className="stars">
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star-half-stroke" />
        </div>
      </div>
      <div className="rc-c-hd">
        <div className="rc-c-hd-l">
          <span className="review-card__author-initial">A</span>
        </div>
        <div className="rc-c-hd-r">
          <span className="review-card_author-details-name">
            – John Doe
          </span>
          <span className="review-card_author-date">
            November 28, 2024
          </span>
        </div>
      </div>
      <div className="rc-c-con">
        <p>
          It was a hot day but the vehicle was an SUV with good AC,
          walking was included on tree covered streets. Guide was very
          friendly, knowledgable and on time. Would book again and this
          time I would include the Slum tour. We did a slum tour the next
          day and it was amazing and eyeopening. We are in our 60's and
          the pace was great and we asked to get out and walk numerous
          times. She accommodated our every request and tour took around 5
          hours. Great job!
        </p>
      </div>
    </div>
  </div>

  <div className="comment-form">
  <h4>Post your review</h4>
  <form>
    <div className="form-group">
      <textarea
        className="form-control mb-10"
        rows={5}
        name="comment"
        placeholder="Write your review"
        defaultValue={""}
      />
    </div>
    <div className="form-group">
      <button type="submit" className="main-button">
        Post review
      </button>
    </div>
  </form>
</div>

</div> 

        </div>
      </section>
    </div>
  );
};

export default ActivitiesDetails;
