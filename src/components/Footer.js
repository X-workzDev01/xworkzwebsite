import React, { useState } from "react";
import "./Footer.css";

function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      console.log("Subscribed with email:", email);
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="footer-section">
      <div className="container">
        {/* One Row with Flexbox */}
        <div className="footer-content d-flex justify-content-around flex-wrap py-5">

          {/* Left Column - Logo & Social Media */}
          <div className="footer-widget text-center text-lg-start mb-4">
            <div className="footer-logo">
              <a href="/">
                <img
                  src="https://x-workz.com/Logo.png"
                  alt="logo"
                  className="img-fluid"
                />
              </a>
            </div>
            
            {/* Follow Us Section - Moved from right column */}
            <div className="follow-us-section mt-4">
              <div className="footer-widget-heading">
                <h3>Follow Us</h3>
              </div>
              <div className="footer-social-icon">
                <a href="https://www.facebook.com/xworkzdevelopmentcenter/" aria-label="Facebook">
                  <i className="fab fa-facebook-f facebook-bg"></i>
                </a>
                <a href="https://twitter.com/workz_x" aria-label="Twitter">
                  <i className="fab fa-twitter twitter-bg"></i>
                </a>
                <a href="https://www.instagram.com/xworkzraj" aria-label="Instagram">
                  <i className="fab fa-instagram instagram-bg"></i>
                </a>
                <a href="https://www.linkedin.com/company/x-workz-odc/" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in linkedin-bg"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Middle Column - Contact Info (No Changes) */}
          <div className="footer-widget mb-4">
            <div className="footer-widget-heading">
              <h3>Contact Us</h3>
            </div>
            <div className="contact-info">
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <p>X-workz Rajajinagar</p>
                  <p>No 712/55, 62st Cross, 5th Block, Rajajinagar,</p>
                  <p>Bengaluru, Karnataka 560010</p>
                </div>
              </div>

              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <p>X-workz BTM</p>
                  <p>1st Floor, 50, 100 Feet Ring Rd,</p>
                  <p>Vysya Bank Colony, BTM 2nd Stage,</p>
                  <p>BTM Layout, Bengaluru, Karnataka 560076</p>
                </div>
              </div>

              <div className="contact-item">
                <i className="fas fa-phone-alt"></i>
                <p>+91 98869 71480</p>
              </div>

              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <p>contact@x-workz.in</p>
              </div>
            </div>
          </div>

          {/* Right Column - Subscribe Only */}
          <div className="footer-widget mb-4">
            <div className="footer-widget-heading">
              <h3>Subscribe</h3>
            </div>
            <p className="mb-3">Don't miss to subscribe to our new feeds.</p>
            <div className="subscribe-form">
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="rounded-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="rounded-button">
                  <i className="fab fa-telegram-plane"></i>
                </button>
              </form>
              {subscribed && (
                <div className="subscription-success">
                  Thank you for subscribing!
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="copyright-area">
        <div className="container text-center">
          <p>
            Copyright &copy; {new Date().getFullYear()}, Omkar Development Centre. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;