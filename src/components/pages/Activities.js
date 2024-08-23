import React from 'react'

const Activities = () => {
  return (
    <div id="site-content">
  <section className="search-banner-main">
    <div className="search-activity">
      <div className="s-a-ct-overlay-content">
        <h2> Do more with Ghoombuddy</h2>
        <p>Experience the best activities tailored to your preferences.</p>
        <div className="searchContainer">
          <input
            id="searchInput"
            type="text"
            placeholder="Search for a place or activity"
            className="searchInput"
          />
         <a href="activities-listing">  <button className="searchButton" aria-label="Search">
           <i className="fa-solid fa-magnifying-glass" />
          </button></a>
        </div>
      </div>
    </div>
  </section>
  <section className="blog_area pt-spc pb-spc">
    <div className="container">

    <div className="row">
        <div className="col-lg-12">
          <div className="main-heading-sc pb-55">
            <h5>Pick a category to filter your recs</h5>
            <h2>Explore Your Recommendations
            </h2>
          </div>
        </div>
      </div>


      <div className="row">
  <div className="col-lg-12">
    <div className="activity-category">
      <div className="category-item">
       <a href=''><i className="fas fa-star" />
        <span>Essentials</span></a>
      </div>
      <div className="category-item">
      <a href=''>  <i className="fas fa-trophy" />
        <span>Travellers' Choice</span></a>
      </div>
      <div className="category-item">
      <a href=''>  <i className="fas fa-user-friends" />
        <span>Family friendly</span></a>
      </div>
      <div className="category-item">
      <a href=''> <i className="fas fa-map-pin" />
        <span>Hidden gems</span></a>
      </div>
      <div className="category-item">
      <a href=''> <i className="fas fa-museum" />
        <span>Museums</span></a>
      </div>
      <div className="category-item">
      <a href=''> <i className="fas fa-tree" />
        <span>Outdoors</span></a>
      </div>
      <div className="category-item">
      <a href=''><i className="fas fa-theater-masks" />
        <span>Arts &amp; theatre</span></a>
      </div>
      <div className="category-item">
      <a href=''>     <i className="fas fa-cocktail" />
        <span>Nightlife</span></a>
      </div>
    </div>
  </div>
</div>




      <div className="row">
        <div className="col-lg-12">
          <div className="main-heading-sc pb-55">
            <h5>Explore our curated top-rated activities</h5>
            <h2>Discover the Top Activities</h2>
          </div>
        </div>
      </div>
      <div className="row">
        {/* Main Content Area */}
        <div className="col-lg-4 mb-5 mb-lg-0">
          {/* Article 1 */}
          <article className="activities_item src-page">
            <div className="activiti_item_img">
              <img
                className="card-img"
                src="assets/images/b1.jpg"
                alt="Private Mumbai Sightseeing Tour"
              />
            </div>
            <div className="activiti_details">
              <div className="act-rating-p">
                <i className="fa-solid fa-star" /> 4.7 (855)
              </div>
              <a className="d-inline-block" href="activity-details">
                <h2 className="blog-head">
                  Private Mumbai Sightseeing Tour ( Award Winner)
                </h2>
              </a>
              <ul class="blog-info-link"><li><a href="#"><i class="fa-solid fa-list"></i> City Tours</a></li><li><a href="#"><i class="fa-solid fa-th-large category-icon"></i> Hidden Gems</a></li></ul>
            </div>
          </article>
        </div>
        <div className="col-lg-4 mb-5 mb-lg-0">
          {/* Article 2 */}
          <article className="activities_item src-page">
            <div className="activiti_item_img">
              <img
                className="card-img"
                src="assets/images/b2.jpg"
                alt="Elephanta Caves & Island Guided Private Tour"
              />
            </div>
            <div className="activiti_details">
              <div className="act-rating-p">
                <i className="fa-solid fa-star" /> 4.9 (405)
              </div>
              <a className="d-inline-block" href="activity-details">
                <h2 className="blog-head">
                  Elephanta Caves &amp; Island Guided Private Tour
                </h2>
              </a>
              <ul class="blog-info-link"><li><a href="#"><i class="fa-solid fa-list"></i> City Tours</a></li><li><a href="#"><i class="fa-solid fa-th-large category-icon"></i> Hidden Gems</a></li></ul>
            </div>
          </article>
        </div>
        <div className="col-lg-4 mb-5 mb-lg-0">
          {/* Article 3 */}
          <article className="activities_item src-page">
            <div className="activiti_item_img">
              <img
                className="card-img"
                src="assets/images/b3.jpg"
                alt="Mysore Day Out - A Royal Experience"
              />
            </div>
            <div className="activiti_details">
              <div className="act-rating-p">
                <i className="fa-solid fa-star" /> 4.9 (158)
              </div>
              <a className="d-inline-block" href="activity-details">
                <h2 className="blog-head">
                  Mysore Day Out - A Royal Experience Private Tour
                </h2>
              </a>
              <ul class="blog-info-link"><li><a href="#"><i class="fa-solid fa-list"></i> City Tours</a></li><li><a href="#"><i class="fa-solid fa-th-large category-icon"></i> Hidden Gems</a></li></ul>
            </div>
          </article>
        </div>
        {/* Article 4 */}
        <div className="col-lg-4 mb-5 mb-lg-0">
          <article className="activities_item src-page">
            <div className="activiti_item_img">
              <img
                className="card-img"
                src="assets/images/b4.jpg"
                alt="Highlights of Mumbai Private Sightseeing Tour"
              />
            </div>
            <div className="activiti_details">
              <div className="act-rating-p">
                <i className="fa-solid fa-star" /> 4.9 (698)
              </div>
              <a className="d-inline-block" href="activity-details">
                <h2 className="blog-head">
                  Highlights of Mumbai Private Sightseeing Tour: AWARD
                </h2>
              </a>
              <ul class="blog-info-link"><li><a href="#"><i class="fa-solid fa-list"></i> City Tours</a></li><li><a href="#"><i class="fa-solid fa-th-large category-icon"></i> Hidden Gems</a></li></ul>
            </div>
          </article>
        </div>
        {/* Article 5 */}
        <div className="col-lg-4 mb-5 mb-lg-0">
          <article className="activities_item src-page">
            <div className="activiti_item_img">
              <img
                className="card-img"
                src="assets/images/b5.jpg"
                alt="Private Mumbai Sightseeing Tour"
              />
            </div>
            <div className="activiti_details">
              <div className="act-rating-p">
                <i className="fa-solid fa-star" /> 4.9 (698)
              </div>
              <a className="d-inline-block" href="activity-details">
                <h2 className="blog-head">
                  Highlights of Mumbai Private Sightseeing Tour: AWARD
                </h2>
              </a>
              <ul class="blog-info-link"><li><a href="#"><i class="fa-solid fa-list"></i> City Tours</a></li><li><a href="#"><i class="fa-solid fa-th-large category-icon"></i> Hidden Gems</a></li></ul>
            </div>
          </article>
        </div>
        {/* Article 6 */}
        <div className="col-lg-4 mb-5 mb-lg-0">
          <article className="activities_item src-page">
            <div className="activiti_item_img">
              <img
                className="card-img"
                src="assets/images/b6.jpg"
                alt="Private Mumbai Street Food Tour"
              />
            </div>
            <div className="activiti_details">
              <div className="act-rating-p">
                <i className="fa-solid fa-star" /> 4.9 (698)
              </div>
              <a className="d-inline-block" href="activity-details">
                <h2 className="blog-head">
                  Highlights of Mumbai Private Sightseeing Tour: AWARD
                </h2>
              </a>
              <ul class="blog-info-link"><li><a href="#"><i class="fa-solid fa-list"></i> City Tours</a></li><li><a href="#"><i class="fa-solid fa-th-large category-icon"></i> Hidden Gems</a></li></ul>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</div>

  )
}

export default Activities
