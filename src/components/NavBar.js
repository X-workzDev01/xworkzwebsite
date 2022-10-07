import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import './NavBar.css';
import Dropdown from './Dropdown';

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
        <img src="https://raw.githubusercontent.com/X-workzDev01/xworkzwebsite/master/src/main/webapp/assets/images/Logo.png" width="140" height="70" alt='Xworkz' className='logo-img'/>
          
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
          
        </ul>
        
      </nav>
    </>
  );
}

export default NavBar;