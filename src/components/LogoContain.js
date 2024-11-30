import React from 'react'
import logo from '../assets/logo/logo.png'
import logoStyle from '../styles/logo.module.scss'
export default function LogoContain() {
  return (
    <div>
        <img src={logo} alt='logo prisca' className={`${logoStyle.logo_layout}`}/>
    </div>
  )
}
