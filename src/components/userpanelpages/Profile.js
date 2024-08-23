import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';

const Profile = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [profileImageUrl, setProfileImageUrl] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [cityOne, setCityOne] = useState('');
  const [cityTwo, setCityTwo] = useState('');
  const [cityThree, setCityThree] = useState('');
  const [profileUpdateError, setProfileUpdateError] = useState('');
  const [profileUpdateMessage, setProfileUpdateMessage] = useState('');
  const [passwordChangeError, setPasswordChangeError] = useState('');
  const [passwordChangeMessage, setPasswordChangeMessage] = useState('');

  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    if (!authToken) {
      console.error('Auth token is missing');
      return;
    }

    // Fetch user data from API
    fetchUserData(authToken);
  }, []);

  const fetchUserData = async (token) => {
    try {
      const response = await axios.get('https://bvmwebsolutions.com/ghoombuddy_laravel/api/user-detail', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      const userData = response.data.data;
      setFullName(userData.name);
      setEmail(userData.email);
      setCityOne(userData.city_one || '');
      setCityTwo(userData.city_two || '');
      setCityThree(userData.city_three || '');
      setProfileImageUrl(userData.image ? `https://bvmwebsolutions.com/ghoombuddy_laravel/${userData.image}` : './assets/images/user.png');
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const handleProfileUpdate = async (event) => {
    event.preventDefault();
    const authToken = localStorage.getItem('authToken');

    try {
      const formData = new FormData();
      formData.append('name', fullName);
      formData.append('city_one', cityOne);
      formData.append('city_two', cityTwo);
      formData.append('city_three', cityThree);
      if (selectedFile) {
        formData.append('image', selectedFile);
        // Create a local URL for the selected file
        setProfileImageUrl(URL.createObjectURL(selectedFile));
      }

      const response = await axios.post(
        'https://bvmwebsolutions.com/ghoombuddy_laravel/api/profile-update',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${authToken}`,
          },
        }
      );

      if (response.data.status) {
        setProfileUpdateMessage('Profile updated successfully!');
        // Update profile image URL based on server response, if necessary
        if (response.data.image) {
          setProfileImageUrl(`https://bvmwebsolutions.com/ghoombuddy_laravel/${response.data.image}`);
        }
      } else {
        setProfileUpdateError('Failed to update profile. Please try again.');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      setProfileUpdateError('An error occurred. Please try again.');
    }
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleChangePassword = async (event) => {
    event.preventDefault();
    const authToken = localStorage.getItem('authToken');

    if (newPassword !== confirmPassword) {
      setPasswordChangeError('New password and confirmation do not match.');
      return;
    }

    try {
      const response = await axios.post(
        'https://bvmwebsolutions.com/ghoombuddy_laravel/api/change-password',
        {
          password: currentPassword,
          new_password: newPassword,
          new_password_confirmation: confirmPassword,
        },
        {
          headers: {
            'Authorization': `Bearer ${authToken}`,
          },
        }
      );

      if (response.data.status) {
        setPasswordChangeMessage(response.data.message);
        setCurrentPassword('');
        setNewPassword('');
        setConfirmPassword('');
      } else {
        setPasswordChangeError(response.data.message || 'Password change failed.');
      }
    } catch (error) {
      setPasswordChangeError('An error occurred. Please try again.');
      console.error('Error changing password:', error);
    }
  };

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
                        <h5 className="mb-0">Profile Details</h5>
                      </div>
                      <div className="single-area fweb">
                        <div className="file-upload">
                          <div className="img-area">
                            <img
                              src={profileImageUrl}
                              alt="Profile"
                            />
                          </div>
                          <div className="right-area">
                            <p className="title">Upload profile photo via:</p>
                            <label className="file">
                              <input type="file" onChange={handleFileChange} />
                              <span className="file-custom" />
                            </label>
                            <p className="mdr">Choose a photo for your account.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="setting-personal-details vdb">
                  <form onSubmit={handleProfileUpdate}>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="single-input">
                          <label htmlFor="perFname">Full Name</label>
                          <input
                            type="text"
                            id="perFname"
                            placeholder="Enter Full Name"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="single-input">
                          <label htmlFor="cityOne">City One</label>
                          <input
                            type="text"
                            id="cityOne"
                            placeholder="Enter City One"
                            value={cityOne}
                            onChange={(e) => setCityOne(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="single-input">
                          <label htmlFor="cityTwo">City Two</label>
                          <input
                            type="text"
                            id="cityTwo"
                            placeholder="Enter City Two"
                            value={cityTwo}
                            onChange={(e) => setCityTwo(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="single-input">
                          <label htmlFor="cityThree">City Three</label>
                          <input
                            type="text"
                            id="cityThree"
                            placeholder="Enter City Three"
                            value={cityThree}
                            onChange={(e) => setCityThree(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="single-input">
                          <button type="submit" className="mybtn1">
                            Update
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                  {profileUpdateError && (
                    <div className="alert alert-danger mt-3" role="alert">
                      {profileUpdateError}
                    </div>
                  )}
                  {profileUpdateMessage && (
                    <div className="alert alert-success mt-3" role="alert">
                      {profileUpdateMessage}
                    </div>
                  )}
                </div>

                <div className="setting-tab">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="single-area">
                        <div className="icon-area">
                          <i className="fa-solid fa-envelope" />
                        </div>
                        <p className="mdr">{email}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="setting-personal-details">
                  <h5>Change Password</h5>
                  <form onSubmit={handleChangePassword}>
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="single-input">
                          <label htmlFor="currentPassword">Current Password</label>
                          <input
                            type="password"
                            id="currentPassword"
                            placeholder="Current Password"
                            value={currentPassword}
                            onChange={(e) => setCurrentPassword(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="single-input">
                          <label htmlFor="newPassword">New Password</label>
                          <input
                            type="password"
                            id="newPassword"
                            placeholder="New Password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="single-input">
                          <label htmlFor="confirmPassword">Confirm Password</label>
                          <input
                            type="password"
                            id="confirmPassword"
                            placeholder="Confirm New Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="single-input">
                          <button type="submit" className="mybtn1">
                            Change Password
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                  {passwordChangeError && (
                    <div className="alert alert-danger mt-3" role="alert">
                      {passwordChangeError}
                    </div>
                  )}
                  {passwordChangeMessage && (
                    <div className="alert alert-success mt-3" role="alert">
                      {passwordChangeMessage}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
