import React, { useState, useEffect } from 'react';
import header from '../styles/Header/header.module.scss';
import log_dark from '../assets/logo/logo.png';
// import LanguageToggle from './Language_btn';
import { Link } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={header.navbar}>
      <div
        className={`${header.menu_burger} ${isMenuOpen ? header.open : ''}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={header.navbar_brand}>
        <Link to='/home'><img src={log_dark} alt="Logo de l'entreprise" className={header.logo} /></Link>
      </div>
      <ul
        className={`${isMobile ? header.mobile : header.navbar_nav} ${
          isMenuOpen ? header.show : ''
        }`}
      >
        <li className={header.nav_item}>
          <Link to="/blog" className={header.nav_link}>
            Blog
          </Link>
        </li>
        <li className={header.nav_item}>
          <Link to="/api" className={header.nav_link}>
            API
          </Link>
        </li>
        <li className={header.nav_item}>
          <Link to="/solutions" className={header.nav_link}>
            Solutions
          </Link>
        </li>
        <li className={header.nav_item}>
          <Link to="/help" className={header.nav_link}>
            Help
          </Link>
        </li>
        <li className={header.nav_item}>
          <Link to="/contact" className={header.nav_link}>
            Contact
          </Link>
        </li>
      </ul>
      {/* <LanguageToggle /> */}
      <div className={header.navbar_actions}>
        <Link to="/login" className={header.btn_login}>
          Login
        </Link>
        <Link to="/signup" className={header.btn_signup}>
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default Header;