import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";

// ScrollToTop component for route changes
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function NavBar() {
  const [click, setClick] = useState(false);
  const location = useLocation();

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // Function to handle navigation with scroll to top
  const handleNavClick = (path) => {
    // If we're already on the same page, scroll to top
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      
      // If it's the feedback page, force a refresh
      if (path === "/feedback") {
        window.location.reload();
      }
    }
    closeMobileMenu();
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (click && !event.target.closest('.nav-menu') && !event.target.closest('.menu-icon')) {
        setClick(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [click]);

  return (
    <>
      <ScrollToTop />
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={() => handleNavClick("/")}>
          <img
            src="https://www.x-workz.in/Logo.png"
            width="140"
            height="70"
            alt="Xworkz"
            className="logo-img"
          />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item ">
            <Link
              to="/register"
              className="nav-links"
              onClick={() => handleNavClick("/register")}
            >
              <span className="register-btn">Register</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/"
              className="nav-links"
              onClick={() => handleNavClick("/")}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about"
              className="nav-links"
              onClick={() => handleNavClick("/about")}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/softwares"
              className="nav-links"
              onClick={() => handleNavClick("/softwares")}
            >
              Softwares
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/courses"
              className="nav-links"
              onClick={() => handleNavClick("/courses")}
            >
              Courses
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/batches"
              className="nav-links"
              onClick={() => handleNavClick("/batches")}
            >
              Batches
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/directions"
              className="nav-links"
              onClick={() => handleNavClick("/directions")}
            >
              Directions
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/reviews"
              className="nav-links"
              onClick={() => handleNavClick("/reviews")}
            >
              Reviews
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/interviewQuestions"
              className="nav-links"
              onClick={() => handleNavClick("/interviewQuestions")}
            >
              Interview Questions
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/feedback"
              className="nav-links"
              onClick={() => handleNavClick("/feedback")}
            >
              Feedback
            </Link>
          </li>
        </ul>
        <div className="header-social-icon">
          <a href="https://www.facebook.com/xworkzdevelopmentcenter/">
            <i className="fab fa-facebook-f facebook-bg facebook"></i>
          </a>
          <a href="https://twitter.com/workz_x">
            <i className="fab fa-twitter twitter twitter-bg"></i>
          </a>
          <a href="https://www.instagram.com/xworkzraj">
            <i className="fab fa-instagram  instagram-bg"></i>
          </a>
          <a href="https://www.linkedin.com/company/x-workz-odc/">
            <i className="fab fa-linkedin linkedin-bg linkedin"></i>
          </a>
        </div>
      </nav>
    </>
  );
}

export default NavBar;