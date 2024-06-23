import React from "react";

import { images } from "../../statics";
import './footer.css'

export default function Footer() {
  const scrollTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <div className="app__footer-wrapper">
      <div className="app__footer">
        <div className="app__footer-links">
          <div className="app__footer-copyright">
            <img src={images.logoblk} alt="logo" />
            <p>Copyright © 2020. LogoIpsum. All rights reserved.</p>
          </div>
          <div className="app__footer-services">
            <p>Services</p>
            <a href='#' alt='email marketing'>Email Marketing</a>
            <a href='#' alt='campaign'>Campaigns</a>
            <a href='#' alt='branding'>Branding</a>
            <a href='#' alt='office'>Office</a>
          </div>
          <div className="app__footer-about">
            <p>About</p>
            <a href='#' alt='our story'>Our Story</a>
            <a href='#' alt='benefits'>Benefits</a>
            <a href='#' alt='team'>Team</a>
            <a href='#' alt='careers'>Careers</a>
          </div>
          <img src={images.scrolltop} width={50} height={50} className="app__footer-scrolltop" onClick={scrollTop} alt='scroll to top'/>
        </div>
        <div className="app__footer-misc"></div>
      </div>
    </div>
  )
}