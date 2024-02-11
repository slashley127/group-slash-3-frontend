import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from 'react-bootstrap';


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

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
          <Link to="/home" className='navbar-logo' onClick={closeMobileMenu}>
            Tripoohooo
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/all_activites' className='nav-links' onClick={closeMobileMenu}>
              All activites
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/create_trip'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Create Trip
              </Link>
            </li>

            <li>
              <Link
                to='/about_us'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                About us
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;