import React from 'react'

const ActivitiesListing = () => {
  return (
    <div id="site-content">
      <section className="sub-banner-main">
        <div className="s-banner">
          <div className="banner-overlay-content">
            <h2>Activities</h2>
            <div className="breadcurmbs">
              <a href="">
                <i className="fa-solid fa-house" />
              </a>
              <span>
                <i className="fa-solid fa-angles-right" />
              </span>
              <span>Activities</span>
            </div>
          </div>
        </div>
      </section>
      <section className="blog_area pt-spc pb-spc">
        <div className="container">
          <div className="row">
            <h4 className="pagerestitle">Mumbai Tours</h4>
          </div>
          <div className="row">
            {/* Sidebar for Filters */}
            <div className="col-lg-3 mb-5 mb-lg-0">
              <div className="act_right_sidebar">
                <aside className="filter-widget">
                  <h3 className="widget_title">Filter Activities</h3>
                  <div className="filter-options">
                    <label className="checkbox-container">
                      Show All Activities
                      <input
                        type="checkbox"
                        className="activity-filter"
                        defaultValue="all"
                      />
                      <span className="checkmark" />
                    </label>
                    <label className="checkbox-container">
                      Bus Tours
                      <input
                        type="checkbox"
                        className="activity-filter"
                        defaultValue="bus"
                      />
                      <span className="checkmark" />
                    </label>
                    <label className="checkbox-container">
                      Private Sightseeing Tours
                      <input
                        type="checkbox"
                        className="activity-filter"
                        defaultValue="private-sightseeing"
                      />
                      <span className="checkmark" />
                    </label>
                    <label className="checkbox-container">
                      Private and Luxury
                      <input
                        type="checkbox"
                        className="activity-filter"
                        defaultValue="luxury"
                      />
                      <span className="checkmark" />
                    </label>
                    <label className="checkbox-container">
                      City Tours
                      <input
                        type="checkbox"
                        className="activity-filter"
                        defaultValue="city"
                      />
                      <span className="checkmark" />
                    </label>
                    <label className="checkbox-container">
                      Historical Tours
                      <input
                        type="checkbox"
                        className="activity-filter"
                        defaultValue="historical"
                      />
                      <span className="checkmark" />
                    </label>
                    <label className="checkbox-container">
                      Shore Excursions
                      <input
                        type="checkbox"
                        className="activity-filter"
                        defaultValue="shore"
                      />
                      <span className="checkmark" />
                    </label>
                    <label className="checkbox-container">
                      Ports of Call Tours
                      <input
                        type="checkbox"
                        className="activity-filter"
                        defaultValue="ports"
                      />
                      <span className="checkmark" />
                    </label>
                    <label className="checkbox-container">
                      Port Transfers
                      <input
                        type="checkbox"
                        className="activity-filter"
                        defaultValue="port-transfers"
                      />
                      <span className="checkmark" />
                    </label>
                    <label className="checkbox-container">
                      Rail Tours
                      <input
                        type="checkbox"
                        className="activity-filter"
                        defaultValue="rail"
                      />
                      <span className="checkmark" />
                    </label>
                    <label className="checkbox-container">
                      Cooking Classes
                      <input
                        type="checkbox"
                        className="activity-filter"
                        defaultValue="cooking"
                      />
                      <span className="checkmark" />
                    </label>
                    <label className="checkbox-container">
                      Private Drivers
                      <input
                        type="checkbox"
                        className="activity-filter"
                        defaultValue="drivers"
                      />
                      <span className="checkmark" />
                    </label>
                    {/* Add new categories */}
                    <label className="checkbox-container">
                      Essentials
                      <input
                        type="checkbox"
                        className="activity-filter"
                        defaultValue="essentials"
                      />
                      <span className="checkmark" />
                    </label>
                    <label className="checkbox-container">
                      Family Friendly
                      <input
                        type="checkbox"
                        className="activity-filter"
                        defaultValue="family-friendly"
                      />
                      <span className="checkmark" />
                    </label>
                    <label className="checkbox-container">
                      Hidden Gems
                      <input
                        type="checkbox"
                        className="activity-filter"
                        defaultValue="hidden-gems"
                      />
                      <span className="checkmark" />
                    </label>
                    <label className="checkbox-container">
                      Museums
                      <input
                        type="checkbox"
                        className="activity-filter"
                        defaultValue="museums"
                      />
                      <span className="checkmark" />
                    </label>
                    <label className="checkbox-container">
                      Arts & Theatre
                      <input
                        type="checkbox"
                        className="activity-filter"
                        defaultValue="arts-theatre"
                      />
                      <span className="checkmark" />
                    </label>
                    <label className="checkbox-container">
                      Nightlife
                      <input
                        type="checkbox"
                        className="activity-filter"
                        defaultValue="nightlife"
                      />
                      <span className="checkmark" />
                    </label>
                  </div>
                </aside>
              </div>
            </div>
            {/* Main Content Area */}
            <div className="col-lg-9 mb-5 mb-lg-0">
              <div className="blog_left_sidebar">
                {/* Article 1 */}
                <article className="activities_item">
                  <div className="activiti_item_img">
                    <img
                      className="card-img"
                      src="assets/images/b1.jpg"
                      alt="Mumbai City Tour by Private Vehicle"
                    />
                  </div>
                  <div className="activiti_details">
                    <div className="act-rating-p">
                      <i className="fa-solid fa-star" /> 4.8 (143)
                    </div>
                    <a className="d-inline-block" href="activity-details">
                      <h2 className="blog-head">
                        Mumbai City Tour by Private Vehicle
                      </h2>
                    </a>
                    <p>
                      Explore Mumbai at your own pace with a private vehicle and driver.
                      This customizable tour lets you visit top attractions such as the
                      Gateway of India, Marine Drive, and the Dhobi Ghat. Enjoy the
                      flexibility of designing your own itinerary and discover the city's
                      landmarks and hidden gems.
                    </p>
                    <ul className="blog-info-link">
                      
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-list" /> City Tours
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-th-large category-icon"></i> Essentials
                        </a>
                      </li>
                    </ul>
                  </div>
                </article>
                {/* Article 2 */}
                <article className="activities_item">
                  <div className="activiti_item_img">
                    <img
                      className="card-img"
                      src="assets/images/b2.jpg"
                      alt="Mumbai City and Elephanta Caves Guided Tour"
                    />
                  </div>
                  <div className="activiti_details">
                    <div className="act-rating-p">
                      <i className="fa-solid fa-star" /> 4.7 (124)
                    </div>
                    <a className="d-inline-block" href="activity-details">
                      <h2 className="blog-head">
                        Mumbai City and Elephanta Caves Guided Tour
                      </h2>
                    </a>
                    <p>
                      Discover Mumbai's highlights and the Elephanta Caves, carved some 1500 years ago,
                      with this guided tour. Your driver will pick you up and take
                      you to the port, where you'll take a boat ride out to the
                      famous caves. You'll then spend time visiting and exploring
                      the historical sites.
                    </p>
                    <ul className="blog-info-link">
                      
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-list" /> City Tours
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-th-large category-icon"></i> Hidden Gems
                        </a>
                      </li>
                    </ul>
                  </div>
                </article>
                {/* Article 3 */}
                <article className="activities_item">
                  <div className="activiti_item_img">
                    <img
                      className="card-img"
                      src="assets/images/b3.jpg"
                      alt="Mumbai Street Food Walking Tour"
                    />
                  </div>
                  <div className="activiti_details">
                    <div className="act-rating-p">
                      <i className="fa-solid fa-star" /> 4.9 (182)
                    </div>
                    <a className="d-inline-block" href="activity-details">
                      <h2 className="blog-head">
                        Mumbai Street Food Walking Tour
                      </h2>
                    </a>
                    <p>
                      Experience the vibrant street food scene of Mumbai with a local guide.
                      This walking tour takes you through bustling markets and local
                      neighborhoods, where you'll sample a variety of traditional
                      dishes and snacks. Perfect for food enthusiasts looking to
                      taste authentic Mumbai flavors.
                    </p>
                    <ul className="blog-info-link">
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-list" /> Food Tours
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-th-large category-icon"></i> Family Friendly
                        </a>
                      </li>
                    </ul>
                  </div>
                </article>
                {/* Additional Articles */}
                {/* Article 4 */}
                <article className="activities_item">
                  <div className="activiti_item_img">
                    <img
                      className="card-img"
                      src="assets/images/b4.jpg"
                      alt="Mumbai Heritage Walk"
                    />
                  </div>
                  <div className="activiti_details">
                    <div className="act-rating-p">
                      <i className="fa-solid fa-star" /> 4.6 (98)
                    </div>
                    <a className="d-inline-block" href="activity-details">
                      <h2 className="blog-head">
                        Mumbai Heritage Walk
                      </h2>
                    </a>
                    <p>
                      Explore the rich history and architectural marvels of Mumbai on a
                      guided heritage walk. Discover ancient temples, colonial buildings,
                      and bustling bazaars while learning about the city's evolution from
                      a small fishing village to a thriving metropolis.
                    </p>
                    <ul className="blog-info-link">
                     
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-list" /> Historical Tours
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-th-large category-icon"></i> Hidden Gems
                        </a>
                      </li>
                    </ul>
                  </div>
                </article>
                {/* Article 5 */}
                <article className="activities_item">
                  <div className="activiti_item_img">
                    <img
                      className="card-img"
                      src="assets/images/b5.jpg"
                      alt="Mumbai Bollywood Tour"
                    />
                  </div>
                  <div className="activiti_details">
                    <div className="act-rating-p">
                      <i className="fa-solid fa-star" /> 4.7 (159)
                    </div>
                    <a className="d-inline-block" href="activity-details">
                      <h2 className="blog-head">
                        Mumbai Bollywood Tour
                      </h2>
                    </a>
                    <p>
                      Get an insider's look into Mumbai's Bollywood film industry with
                      this exciting tour. Visit popular film studios, see live filming
                      sets, and meet local stars. Discover behind-the-scenes secrets
                      and learn about the history and impact of Bollywood on global cinema.
                    </p>
                    <ul className="blog-info-link">
                     
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-list" /> City Tours
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-th-large category-icon"></i> Hidden Gems
                        </a>
                      </li>
                    </ul>
                  </div>
                </article>
                {/* Article 6 */}
                <article className="activities_item">
                  <div className="activiti_item_img">
                    <img
                      className="card-img"
                      src="assets/images/b6.jpg"
                      alt="Mumbai Night Tour"
                    />
                  </div>
                  <div className="activiti_details">
                    <div className="act-rating-p">
                      <i className="fa-solid fa-star" /> 4.8 (135)
                    </div>
                    <a className="d-inline-block" href="activity-details">
                      <h2 className="blog-head">
                        Mumbai Night Tour
                      </h2>
                    </a>
                    <p>
                      Discover Mumbai's vibrant nightlife with a guided night tour.
                      Visit famous landmarks lit up after dark, explore bustling
                      markets, and enjoy a night-time food tour of the city's
                      best street food vendors. Experience the city from a new perspective.
                    </p>
                    <ul className="blog-info-link">
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-list" /> Nightlife
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-th-large category-icon"></i> Family Friendly
                        </a>
                      </li>
                    </ul>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ActivitiesListing
