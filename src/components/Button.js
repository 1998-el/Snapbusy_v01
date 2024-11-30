import React from 'react'
import buttonStyle from '../styles/Button/button.module.scss'
export default function({name}) {
  return (
    <button className={buttonStyle.button}>
        {name}
    </button>
  )
}
