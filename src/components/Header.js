import React, { useState, useEffect } from 'react';
import header from '../styles/Header/header.module.scss';
import log_dark from '../assets/logo/logo.png';
import LanguageToggle from './Language_btn';

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
        <a href='/home'><img src={log_dark} alt="Logo de l'entreprise" className={header.logo} /></a>
      </div>
      <ul
        className={`${isMobile ? header.mobile : header.navbar_nav} ${
          isMenuOpen ? header.show : ''
        }`}
      >
        <li className={header.nav_item}>
          <a href="#" className={header.nav_link}>
            Blog
          </a>
        </li>
        <li className={header.nav_item}>
          <a href="#" className={header.nav_link}>
            API
          </a>
        </li>
        <li className={header.nav_item}>
          <a href="#" className={header.nav_link}>
            Solutions
          </a>
        </li>
        <li className={header.nav_item}>
          <a href="#" className={header.nav_link}>
            Help
          </a>
        </li>
        <li className={header.nav_item}>
          <a href="#" className={header.nav_link}>
            Contact
          </a>
        </li>
      </ul>
      {/* <LanguageToggle /> */}
      <div className={header.navbar_actions}>
        <a href="#" className={header.btn_login}>
          Login
        </a>
        <a href="#" className={header.btn_signup}>
          Sign Up
        </a>
      </div>
    </div>
  );
}

export default Header;