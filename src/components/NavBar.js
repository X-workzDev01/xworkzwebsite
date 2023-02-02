import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import './NavBar.css';
import Dropdown from './Dropdown';
import logo from "../img/Logo.png"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function NavBar() {
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

  return (
    <>
    
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <img src={logo} width="140" height="70" alt='Xworkz' className='logo-img' />

        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/about'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              About
              {/* <i className='fas fa-caret-down' /> */}
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
            <Link
              to='/softwares'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Softwares
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/courses'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Courses
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/directions'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Directions
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/testimonials'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Reviews
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/interviewQuestions'
              className='nav-links'
              onClick={closeMobileMenu}
            >Interview Questions
            </Link>
          </li>

        </ul>
        <div className="header-social-icon">

          <a href="https://www.facebook.com/xworkzdevelopmentcenter/"><i className="fab fa-facebook-f facebook-bg facebook"></i></a>
          <a href="https://twitter.com/workz_x"><i className="fab fa-twitter twitter twitter-bg"></i></a>
          <a href="#"><i className="fab fa-instagram  instagram-bg"></i></a>
        </div>
      </nav>


    </>
  );
}

export default NavBar;