import React from "react";
import Sidebar from "./Sidebar";

const BookmarkLists = () => {
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
                        <h5 className="mb-0">All Bookmarks</h5>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="setting-tab bookmarktab">
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="single-area">
                        <div className="icon-area">
                        <i className="fa-regular fa-folder"></i>
                        </div>
                      <a href="/gmb/bookmark">  <h6 className="mdr mb-0">Must Visit</h6></a>
                      </div>
                    </div>

                    <div className="col-lg-4">
                      <div className="single-area">
                        <div className="icon-area">
                        <i className="fa-regular fa-folder"></i>
                        </div>
                        <h6 className="mdr mb-0">Top Picks</h6>
                      </div>
                    </div>

                    <div className="col-lg-4">
                      <div className="single-area">
                        <div className="icon-area">
                        <i className="fa-regular fa-folder"></i>
                        </div>
                        <a href="/gmb/bookmark"> <h6 className="mdr mb-0">City Adventures</h6></a>
                      </div>
                    </div>


                    <div className="col-lg-4">
                      <div className="single-area">
                        <div className="icon-area">
                        <i className="fa-regular fa-folder"></i>
                        </div>
                        <h6 className="mdr mb-0">Historical Sites</h6>
                      </div>
                    </div>


                    <div className="col-lg-4">
                      <div className="single-area">
                        <div className="icon-area">
                        <i className="fa-regular fa-folder"></i>
                        </div>
                        <a href="/gmb/bookmark">  <h6 className="mdr mb-0">Planned Trips</h6></a>
                      </div>
                    </div>


                    <div className="col-lg-4">
                      <div className="single-area">
                        <div className="icon-area">
                        <i className="fa-regular fa-folder"></i>
                        </div>
                        <a href="/gmb/bookmark">   <h6 className="mdr mb-0">Saved for Later</h6></a>
                      </div>
                    </div>


                    <div className="col-lg-4">
                      <div className="single-area">
                        <div className="icon-area">
                        <i className="fa-regular fa-folder"></i>
                        </div>
                        <a href="/gmb/bookmark">        <h6 className="mdr mb-0">Must Visit</h6></a>
                      </div>
                    </div>
                    

                    <div className="col-lg-4">
                      <div className="single-area">
                        <div className="icon-area">
                        <i className="fa-regular fa-folder"></i>
                        </div>
                        <a href="/gmb/bookmark">  <h6 className="mdr mb-0">Must Visit</h6></a>
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

export default BookmarkLists;
