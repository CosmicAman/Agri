import React, { useState } from 'react';
import './App.css'; // Import the CSS file here

const Navbar = ({ setActivePage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false); // Ensures that menu closes when clicking on a link or outside
  };

  return (
    <>
      <nav>
        <div className="navbar-brand">Agri Sustain</div>
        <ul className={`nav-links ${isMobileMenuOpen ? 'nav-active' : ''}`}>
          <li><a href="#" onClick={() => setActivePage('Home')}>Home</a></li>
          <li><a href="#" onClick={() => setActivePage('About')}>About</a></li>
          <li><a href="#" onClick={() => setActivePage('Projects')}>Crops</a></li>
          <li><a href="#" onClick={() => setActivePage('Contact')}>Contact</a></li>
          <a className='sos1' href="tel:108"><img className='sos' src="images/help.png" alt="Help" /></a>
        </ul>
        <div 
          className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`} 
          onClick={toggleMobileMenu}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        {/* Mobile menu */}
        <ul className={`nav-links-mobile ${isMobileMenuOpen ? 'nav-active' : ''}`}>
          <li><a className='nav-tag' href="#" onClick={() => { setActivePage('Home'); closeMobileMenu(); }}>Home</a></li>
          <li><a className='nav-tag' href="#" onClick={() => { setActivePage('About'); closeMobileMenu(); }}>About</a></li>
          <li><a className='nav-tag' href="#" onClick={() => { setActivePage('Projects'); closeMobileMenu(); }}>Crops</a></li>
          <li><a className='nav-tag' href="#" onClick={() => { setActivePage('Contact'); closeMobileMenu(); }}>Contact</a></li>
          <li>
            <a href="tel:108">
              <img className='sos' src="images/help.png" alt="Help" />
            </a>
          </li>
        </ul>
      </nav>
      {/* Background overlay when menu is active */}
      <div className={`overlay ${isMobileMenuOpen ? 'active' : ''}`} onClick={closeMobileMenu}></div>
    </>
  );
};

export default Navbar;
