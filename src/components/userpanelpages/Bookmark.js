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
                        <h5 className="mb-0">Top Picks</h5>
                      </div>
                      <div className="setting-personal-details settings-bookmarks">
                        <div className="table-responsive">
                          <table className="table table-striped table-sm">
                            <thead>
                              <tr>
                                <th>Destination Title</th>
                                <th>Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  qwwwwwSuspendisse lobortis nisi nisi, quis
                                  aliquamm.
                                </td>
                                <td>
                                  <a
                                    className="btn btn-primary btn-sm"
                                    href="/gmb/blog/suspendisse-lobortis-nisi-nisi-quis-aliquam-5"
                                  >
                                    View
                                  </a>
                                  <button className="btn btn-danger btn-sm">Remove</button>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  qwwwwwSuspendisse lobortis nisi nisi, quis
                                  aliquamm.
                                </td>
                                <td>
                                  <a
                                    className="btn btn-primary btn-sm"
                                    href="/gmb/blog/suspendisse-lobortis-nisi-nisi-quis-aliquam-5"
                                  >
                                    View
                                  </a>
                                  <button className="btn btn-danger btn-sm">Remove</button>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  qwwwwwSuspendisse lobortis nisi nisi, quis
                                  aliquamm.
                                </td>
                                <td>
                                  <a
                                    className="btn btn-primary btn-sm"
                                    href="/gmb/blog/suspendisse-lobortis-nisi-nisi-quis-aliquam-5"
                                  >
                                    View
                                  </a>
                                  <button className="btn btn-danger btn-sm">Remove</button>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  qwwwwwSuspendisse lobortis nisi nisi, quis
                                  aliquamm.
                                </td>
                                <td>
                                  <a
                                    className="btn btn-primary btn-sm"
                                    href="/gmb/blog/suspendisse-lobortis-nisi-nisi-quis-aliquam-5"
                                  >
                                    View
                                  </a>
                                  <button className="btn btn-danger btn-sm">Remove</button>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  qwwwwwSuspendisse lobortis nisi nisi, quis
                                  aliquamm.
                                </td>
                                <td>
                                  <a
                                    className="btn btn-primary btn-sm"
                                    href="/gmb/blog/suspendisse-lobortis-nisi-nisi-quis-aliquam-5"
                                  >
                                    View
                                  </a>
                                  <button className="btn btn-danger btn-sm">Remove</button>
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
};

export default BookmarkLists;
