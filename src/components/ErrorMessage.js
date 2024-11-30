import React from 'react';
import errMsgStyle from '../styles/ErrorMessage/errormessage.module.scss'

const ErrorTooltip = ({ message }) => {
  return (
    <div className={errMsgStyle.error_tooltip}>
      <div className={errMsgStyle.arrow} />
      <span className={errMsgStyle.error_message}>{message}</span>
    </div>
  );
};

export default ErrorTooltip;