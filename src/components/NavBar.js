import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../img/Logo.png";
import Dropdown from "./Dropdown";
import "./NavBar.css";

function NavBar() {
  const [registerOpen, setRegisterOpen] = useState(false);
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  const handleRegister = () => {
    setRegisterOpen(true);
  };
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
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
              onClick={closeMobileMenu}
            >
              <span className="bg-gradient bg-danger rounded-5 p-md-2">
                Register
              </span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
              About
              {/* <i className='fas fa-caret-down' /> */}
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className="nav-item">
            <Link
              to="/softwares"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Softwares
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/courses" className="nav-links" onClick={closeMobileMenu}>
              Courses
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/directions"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Directions
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/reviews" className="nav-links" onClick={closeMobileMenu}>
              Reviews
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/interviewQuestions"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Interview Questions
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link
              to="/feedback"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Feedback
            </Link>
          </li> */}
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
          <a href="https://www.linkedin.com/in/x-workz-odc/">
            <i className="fab fa-linkedin linkedin-bg linkedin"></i>
          </a>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
