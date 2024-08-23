import React from 'react';
import Sidebar from "./Sidebar";

const AllTopics = () => {
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
                        <h5 className="mb-0">All Topics</h5>
                      </div>
                      <div className="setting-personal-details">
                        <h5>Topics List</h5>
                        <div className="table-responsive">
                          <table className="table table-striped table-sm">
                            <thead>
                              <tr>
                                <th>#</th>
                                <th>Topic Title</th>
                                <th>Date</th>
                                <th>Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>Delhi - Leh, search for a suitable bike</td>
                                <td>Sep 27, 2016</td>
                                <td>
                                  <button className="btn btn-danger btn-sm">Delete</button>
                                </td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>Kochi to Rameshwaram trip</td>
                                <td>Dec 24, 2014</td>
                                <td>
                                  <button className="btn btn-danger btn-sm">Delete</button>
                                </td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>How To Reach Bhutan From Guwahati?</td>
                                <td>May 2, 2018</td>
                                <td>
                                  <button className="btn btn-danger btn-sm">Delete</button>
                                </td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>How to plan a trip to Goa?</td>
                                <td>Sep 22, 2016</td>
                                <td>
                                  <button className="btn btn-danger btn-sm">Delete</button>
                                </td>
                              </tr>
                              <tr>
                                <td>5</td>
                                <td>How to reach Vaishno Devi Temple</td>
                                <td>Aug 26, 2016</td>
                                <td>
                                  <button className="btn btn-danger btn-sm">Delete</button>
                                </td>
                              </tr>
                              <tr>
                                <td>6</td>
                                <td>Best place to visit in India</td>
                                <td>Sep 11, 2016</td>
                                <td>
                                  <button className="btn btn-danger btn-sm">Delete</button>
                                </td>
                              </tr>
                              <tr>
                                <td>7</td>
                                <td>How to reach Vaishno Devi from Delhi?</td>
                                <td>Oct 25, 2016</td>
                                <td>
                                  <button className="btn btn-danger btn-sm">Delete</button>
                                </td>
                              </tr>
                              <tr>
                                <td>8</td>
                                <td>A visit to a historical place</td>
                                <td>Jan 10, 2017</td>
                                <td>
                                  <button className="btn btn-danger btn-sm">Delete</button>
                                </td>
                              </tr>
                              <tr>
                                <td>9</td>
                                <td>How to reach Shirdi from Delhi?</td>
                                <td>Aug 26, 2016</td>
                                <td>
                                  <button className="btn btn-danger btn-sm">Delete</button>
                                </td>
                              </tr>
                              <tr>
                                <td>10</td>
                                <td>How Many Forts In India?</td>
                                <td>Apr 27, 2023</td>
                                <td>
                                  <button className="btn btn-danger btn-sm">Delete</button>
                                </td>
                              </tr>
                              
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
}

export default AllTopics;
