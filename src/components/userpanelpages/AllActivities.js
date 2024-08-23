import React from 'react';
import Sidebar from "./Sidebar";

const AllActivities = () => {
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
                        <h5 className="mb-0">All Activities</h5>
                      </div>
                      <div className="setting-personal-details">
                        <h5>Activities List</h5>
                        <div className="table-responsive">
                          <table className="table table-striped table-sm">
                            <thead>
                              <tr>
                                <th>#</th>
                                <th>Activities Title</th>
                                <th>Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>Delhi - Leh, search for a suitable bike</td>
                                <td>
                                <a class="btn btn-primary btn-sm me-2" href="/gmb/edit-post/4">Edit</a>
                                  <button className="btn btn-danger btn-sm">Delete</button>
                                </td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>Private Mumbai Sightseeing Tour (Traveller's Choice Award Winner)</td>
                                <td>
                                <a class="btn btn-primary btn-sm me-2" href="/gmb/edit-post/4">Edit</a>
                                  <button className="btn btn-danger btn-sm">Delete</button>
                                </td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>(Mysuru) Mysore Day Out - A Royal Experience Private Tour from Bangalore</td>
                                <td>
                                <a class="btn btn-primary btn-sm me-2" href="/gmb/edit-post/4">Edit</a>
                                  <button className="btn btn-danger btn-sm">Delete</button>
                                </td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>Elephanta Caves & Island Guided Private Tour</td>
                                <td>
                                <a class="btn btn-primary btn-sm me-2" href="/gmb/edit-post/4">Edit</a>
                                  <button className="btn btn-danger btn-sm">Delete</button>
                                </td>
                              </tr>
                              <tr>
                                <td>5</td>
                                <td>Highlights of Mumbai Private Sightseeing Tour:Winner of TRAVELLERS CHOICE AWARD</td>
                                <td>
                                <a class="btn btn-primary btn-sm me-2" href="/gmb/edit-post/4">Edit</a>
                                  <button className="btn btn-danger btn-sm">Delete</button>
                                </td>
                              </tr>
                              <tr>
                                <td>6</td>
                                <td>Private Bollywood Tour withTransport.</td>
                                <td>
                                <a class="btn btn-primary btn-sm me-2" href="/gmb/edit-post/4">Edit</a>
                                  <button className="btn btn-danger btn-sm">Delete</button>
                                </td>
                              </tr>
                              <tr>
                                <td>7</td>
                                <td>Private Mumbai Sightseeing Tour(Travellers Choice Award Winner)</td>
                                <td>
                                <a class="btn btn-primary btn-sm me-2" href="/gmb/edit-post/4">Edit</a>
                                  <button className="btn btn-danger btn-sm">Delete</button>
                                </td>
                              </tr>
                              <tr>
                                <td>8</td>
                                <td>A visit to a historical place</td>
                                <td>
                                <a class="btn btn-primary btn-sm me-2" href="/gmb/edit-post/4">Edit</a>
                                  <button className="btn btn-danger btn-sm">Delete</button>
                                </td>
                              </tr>
                              <tr>
                                <td>9</td>
                                <td>Same Day Taj Mahal and Agra Tour from Mumbai with Return Flights</td>
                                <td>
                                <a class="btn btn-primary btn-sm me-2" href="/gmb/edit-post/4">Edit</a>
                                  <button className="btn btn-danger btn-sm">Delete</button>
                                </td>
                              </tr>
                              <tr>
                                <td>10</td>
                                <td>1-Day Trip to Taj Mahal and Agra from Mumbai with Both Side Commercial Flights</td>
                                <td>
                                <a class="btn btn-primary btn-sm me-2" href="/gmb/edit-post/4">Edit</a>
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

export default AllActivities;
