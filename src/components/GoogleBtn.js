import React from 'react';
import buttonStyle from '../styles/Button/button.module.scss'
import iconGgle from '../assets/Fond/google.png';
const GoogleButton = ({ onClick }) => {
    return (
        <button className={buttonStyle.google_button} onClick={onClick}>
            <img src={iconGgle} className={buttonStyle.google_icon} />
        </button>
    );
};

export default GoogleButton;