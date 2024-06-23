import React from "react";

import { images } from '../../statics'
import './navbar.css'

export default function Navbar() {
  return (
    <div className="app__navbar-wrapper">
      <div className="app__navbar app__element">
        <div className="app__navbar-logo">
          <img src={images.logowht} alt='logo' />
        </div>

        <div className="app__navbar-menus">
          <div className="app__navbar-menus_links">
            <a className="app__navbar-menus_link" href="#investments">Investment Opportunities</a>
            <a className="app__navbar-menus_link" href="#investments">How it works</a>
            <a className="app__navbar-menus_link" href="#about">About us</a>
          </div>

          <div className="app__navbar-menus_accounts">
            <button type="button" className="app__navbar-menus_login btn__primary-block">Login</button>
            <button type="button" className="app__navbar-menus_register btn__secondary-block">Register</button>
          </div>
        </div>
      </div>
    </div>
  )
}