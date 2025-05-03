import React from "react";
import "./Footer.css";
import emailjs from "emailjs-com";
import Logo from "../img/Logo.png";

function Footer() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gdf9o6a",
        "template_l50t6hc",
        e.target,
        "vhlq2wUUQwHQPOf-f"
      )
      .then((res) => {
        alert("Succesfully Subsrcibed ");

        console.log(res);
      })
      .catch((err) => {
        alert("Not subscribed , Please Try again");
        console.log(err);
      });
  }
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-content pt-5 pb-5">
          <div className="row">
            <div className="col-xl-4 col-lg-4 mb-50">
              <div className="footer-widget">
                <div className="footer-logo">
                  <a href="">
                    <img
                      src="https://www.x-workz.in/Logo.png"
                      className="img-fluid"
                      alt="logo"
                    />{" "}
                  </a>
                </div>

                <div className="footer-social-icon">
                  <span>Follow us</span>
                  <a href="https://www.facebook.com/xworkzdevelopmentcenter/">
                    <i className="fab fa-facebook-f facebook-bg"></i>
                  </a>
                  <a href="https://twitter.com/workz_x">
                    <i className="fab fa-twitter twitter-bg"></i>
                  </a>
                  <a href="https://www.instagram.com/xworkzraj">
                    <i className="fab fa-instagram instagram-bg"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/x-workz-odc">
                    <i className="fab fa-linkedin linkedin-bg linkedin"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Subscribe</h3>
                </div>
                <div className="footer-text mb-25">
                  <p>
                    Don’t miss to subscribe to our new feeds, kindly fill the
                    form below.
                  </p>
                </div>
                <div className="subscribe-form">
                  <form onSubmit={sendEmail}>
                    <input
                      type="text"
                      name="email"
                      placeholder="Email Address"
                    />
                    <button type="submit">
                      <i className="fab fa-telegram-plane"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 text-center text-lg-left">
              <div className="copyright-text">
                <p>Copyright &copy; 2022, All Right Reserved </p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
              <div className="footer-menu">
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/about">about</a>
                  </li>
                  <li>
                    <a href="/softwares">Software</a>
                  </li>
                  <li>
                    <a href="/courses">Courses</a>
                  </li>
                  <li>
                    <a href="/directions">Directions</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
