import React, { useState, useRef, useEffect } from 'react';
import './Nav.css';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target) && !event.target.closest('.menu-icon')) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>GAR<span>U</span>DAN</h1>
      </div>

      <div className={`navbar-menu ${isMenuOpen ? 'open' : ''}`} ref={menuRef}>
        <ul>
          <li><a href="#demo">DEMO</a></li>
          <li><a href="#plugins">PLUGINS</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#docs">DOCS</a></li>
        </ul>
      </div>

      <button className="purchase-btn">Purchase Now</button>

      <div className="menu-icon" onClick={toggleMenu}>
        <div className={`icon ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`icon ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`icon ${isMenuOpen ? 'open' : ''}`}></div>
      </div>
    </nav>
  );
};

export default Nav;
