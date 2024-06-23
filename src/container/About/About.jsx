import React from "react";

import { images } from "../../statics";
import './about.css';

export default function About() {
  return (
    <div className="app__about-wrapper">
      <div className="app__about" style={{ backgroundImage: `url(${images.aboutpinkbg})` }}>
        <div className="app__about-content">
          <div className="app__about-texts">
            <img src={images.aboutstonksicon} alt="stonks" width={56} height={56}/>
            <h1 className="app__about-title">$7M+ paid out to investors</h1>
            <p className="app__about-description">Next Invest has already paid out over $7M in cash returns to investors. Earn potential cash payments through unique revenue-share and debt financing investments.</p>
          </div>
          <img src={images.aboutchart} alt="chart" />
        </div>
      </div>

      <div className="app__about">
        <div className="app__about-content">
          <div className="app__about-texts">
            <h1 className="app__about-title">Looking to raise capital for your growing business?</h1>
            <p className="app__about-description" style={{ color: '#999' }}>Whether expanding or opening a brand-new concept, we make it easy to raise money from thousands of local investors.</p>
            <button type="button" className="btn__primary-block">APPLY ONLINE</button>
          </div>
          <img src={images.aboutgrowth} alt="growth" />
        </div>
      </div>
    </div>
  )
}