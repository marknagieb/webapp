import React, { useState, useEffect } from 'react';
import { Button } from './Button1';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [Button1, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            RESUME
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
            <li className='nav-item'>
              <Link
                to='/projects'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Projects
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/skills'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Skills
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/certificate'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Certificates
              </Link>
              </li>
              <li className='nav-item'>
              <Link
                to='/education'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Education
              </Link>
              </li>

            <li>
              <Link
                to='/experience'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Experience
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
