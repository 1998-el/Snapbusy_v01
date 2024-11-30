import React from 'react';
import errorStyle from '../styles/ErrorMessage/errormessage.module.scss';

const ErrorMsg = ({ message, onClose }) => {
  return (
    <div className={errorStyle.error_message}>
      <button className={errorStyle.close_button} onClick={onClose} aria-label="Close">
        &times;
      </button>
      <p>{message}</p>
    </div>
  );
};

export default ErrorMsg;