import React from 'react';
import Sidebar from "./Sidebar";


const CreateTopics = () => {
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
          <Sidebar /></div>
          <div className="col-xl-9 col-lg-8">
            <div className="tab-content">
              <div className="setting-tab">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="single-area">
                      <h5 className="mb-0">Create new topic</h5>
                    </div>
                    <div className="setting-personal-details">
                      <form encType="multipart/form-data">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="single-input">
                              <label htmlFor="postTitle">Topic Title</label>
                              <input
                                type="text"
                                id="postTitle"
                                name="postTitle"
                                placeholder="Enter Topic Title"
                                required=""
                                defaultValue=""
                              />
                            </div>
                          </div>


                          <div className="col-lg-12">
                            <div className="single-input">
                              <label htmlFor="postTitle">Topic Description</label>
                              <textarea
                                id="postTitle"
                                name="postTitle"
                                placeholder="Enter Topic Description"
                                required=""
                                defaultValue=""
                              />
                            </div>
                          </div>


                       
                          <div className="col-lg-12">
                            <div className="single-input">
                              <label htmlFor="postCategory">Category</label>
                              <select id="postCategory" name="postCategory">
                                <option value="">Select Category</option>
                                <option value="{1}">India Travel Basics</option>
        <option value="{2}">India Travel Forum</option>
        <option value="{3}">Inspiration</option>
        <option value="{4}">Beyond Indian Borders</option>
                              </select>
                            </div>
                          </div>

                          <div className="col-lg-12">
                            <div className="single-input">
                              <label htmlFor="postCategory">Select Sub Category</label>
                              <select id="subpostCategory" name="subpostCategory">
                                <option value="">Select Sub Category</option>
                                <option value="{1}">Travel Advice</option>
        <option value="{2}">Visa and Passport</option>
        <option value="{3}">Itinerary</option>
        <option value="{4}">Travelogues</option>
        <option value="{5}">Transportation</option>
        <option value="{6}">Hotels</option>
        <option value="{7}">General Discussions</option>
        <option value="{8}">Travel Partners</option>
        <option value="{9}">Destination Guides</option>
        <option value="{10}">Food &amp; Drinks</option>
                              </select>
                            </div>
                          </div>

                          <div className="col-lg-12">
                            <div className="single-input">
                              <button type="submit" className="mybtn1">
                                Create topic
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
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
  
  )
}

export default CreateTopics
