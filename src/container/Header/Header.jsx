import React from "react";

import { images } from '../../statics'
import './header.css'

export default function Header() {
  return (
    <div className="app__header-wrapper">
      <img className="app__header-bg" src={images.headerbg} alt="header_bg" />
      <div className="app__header app__element">
        <div className="app__header-content">
          <img className="app__header-circle" src={images.headercircle} />
          <h1>Meaningful investments in Main Street businesses</h1>
          <p>Browse vetted investment offerings <br/>in communities all over the US.</p>
          <button type="button" className="app__navbar-menus_login btn__primary-block">Get Started</button>
        </div>
      </div>
      <img className="app__header-stripe" src={images.headerstripe} />
    </div>
  )
}