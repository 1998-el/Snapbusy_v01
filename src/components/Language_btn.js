import React, { useState } from 'react';
import styles from '../styles/ToggleButon/toggle_btn.module.scss';

import ukFlag from '../assets/icons/english.png';
import frFlag from '../assets/icons/french.png';

const LanguageToggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (lang) => {
    setCurrentLanguage(lang);
    setIsOpen(false);
  };

  const languages = [
    { code: 'en', flag: ukFlag, name: 'English' },
    { code: 'fr', flag: frFlag, name: 'Français' },
  ];

  const getLanguageData = (langCode) => {
    const language = languages.find((lang) => lang.code === langCode);
    return language || { flag: '', name: '' };
  };

  return (
    <div className={styles.languageToggle}>
      <button className={styles.toggleButton} onClick={toggleDropdown}>
        <div className={styles.languageIndicator}>
          <img
            src={getLanguageData(currentLanguage).flag}
            alt={`${currentLanguage} flag`}
          />
          <span>{getLanguageData(currentLanguage).name}</span>
        </div>
        <span className={`${styles.arrow} ${isOpen ? styles.open : ''}`}>▼</span>
      </button>
      {isOpen && (
        <ul className={styles.languageList}>
          {languages.map((lang) => (
            <li
              key={lang.code}
              className={`${styles.languageItem} ${
                lang.code === currentLanguage ? styles.active : ''
              }`}
              onClick={() => handleLanguageChange(lang.code)}
            >
              <img src={lang.flag} alt={`${lang.code} flag`} />
              <span>{lang.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageToggle;