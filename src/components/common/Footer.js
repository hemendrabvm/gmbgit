// src/components/common/Footer.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import InstallPWA from '../../InstallPWA';
const Footer = () => {
  const [siteSettings, setSiteSettings] = useState({});
  const [email, setEmail] = useState('');
  const [termChecked, setTermChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [subscriptionMessage, setSubscriptionMessage] = useState('');
  const [subscriptionError, setSubscriptionError] = useState('');

  useEffect(() => {
    // Fetch site settings when component mounts
    axios.get('https://bvmwebsolutions.com/ghoombuddy_laravel/api/site-setting')
      .then(response => {
        if (response.data.status) {
          setSiteSettings(response.data.siteDetails);
        }
      })
      .catch(error => {
        console.error('Error fetching site settings:', error);
      });
  }, []);

  const handleSubscription = async (e) => {
    e.preventDefault();

    if (!termChecked) {
      setSubscriptionError('You must accept the terms.');
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post('https://bvmwebsolutions.com/ghoombuddy_laravel/api/subscribe', {
        email,
        term_checked: termChecked ? 'checked' : ''
      });

      if (response.data.status) {
        setSubscriptionMessage('Thank you for subscribing!');
        setSubscriptionError('');
        setEmail(''); // Clear email input
      } else {
        setSubscriptionMessage('');
        setSubscriptionError('Subscription failed. Please try again.');
      }
    } catch (error) {
      setSubscriptionMessage('');
      setSubscriptionError('Subscription failed. Please try again.');
      console.error('Subscription error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="site-footer">
     <footer 
  style={{ 
    backgroundImage: siteSettings.footer_back ? `url(https://bvmwebsolutions.com/ghoombuddy_laravel/${siteSettings.footer_back})` : 'none'
  }}
>

        <div className="footer-main">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 mr-auto">
              
                <h2>{siteSettings.footer_data}</h2>
                <p>{siteSettings.footer_sub_heading}</p>
                <div className="newsletter-area">
                  <form onSubmit={handleSubscription}>
                    <div className="subs">
                      <div className=" po-re">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Enter your email address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      <button type="submit" className="btn btn-primary" disabled={loading}>
                        {loading ? (
                          <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                          </div>
                        ) : (
                          'Subscribe'
                        )}
                      </button>
                    </div>
                    <div className="gdpr-wrap elem-wrap">
                      <label>
                        <input
                          aria-required="true"
                          type="checkbox"
                          name="GDPR"
                          checked={termChecked}
                          onChange={() => setTermChecked(!termChecked)}
                          className="gdpr required"
                        />
                        Accept GDPR Terms
                      </label>
                      {subscriptionError && <span className="gdpr-err err-msg">{subscriptionError}</span>}
                      {subscriptionMessage && <p className="success-message">{subscriptionMessage}</p>}
                    </div>
                  </form>
                </div>
                <div className="social-media-contac">
                  <div className="social-icons-contac">
                    {siteSettings.facebook && (
                      <a href={siteSettings.facebook} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook-f" />
                      </a>
                    )}
                    {siteSettings.instagram && (
                      <a href={siteSettings.instagram} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram" />
                      </a>
                    )}
                    {siteSettings.twitter && (
                      <a href={siteSettings.twitter} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter" />
                      </a>
                    )}
                    {siteSettings.youtube && (
                      <a href={siteSettings.youtube} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-youtube" />
                      </a>
                    )}
                    {siteSettings.skype && (
                      <a href={siteSettings.skype} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-skype" />
                      </a>
                    )}
                    {siteSettings.telegram && (
                      <a href={siteSettings.telegram} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-telegram" />
                      </a>
                    )}
                  </div>
                </div>

<div className='app-g'>
<InstallPWA />
</div>


              </div>
            </div>
          </div>
        </div>
      </footer>
      <div id="footer-bottom" className="clr no-footer-nav">
        <div id="footer-bottom-inner" className="container clr">
          <div id="copyright" className="clr" role="contentinfo">
            {siteSettings.copyright_text}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
