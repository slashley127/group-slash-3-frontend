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
                    <Link
                    to='/my_profile'
                    className='nav-links'
                    onClick={closeMobileMenu}  >
                My profile
                    </Link>
                </li>
                <li className='nav-item'>
                   <Link to='/all_activites' className='nav-links' onClick={closeMobileMenu}>
                All activites
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
              <li className='nav-item'>
              <Link
                to='/'
                className='nav-links'
                onClick={closeMobileMenu}
                >
                log in 
              </Link>
               </li>

            </ul>
          {button && (
            <Link to='/create_trip' className='btn-link' onClick={closeMobileMenu}>
             <Button variant='outline-primary'>Create Trip</Button>
            </Link>
)}
 
        </div>
      </nav>
    </>
  );
}

export default Navbar;