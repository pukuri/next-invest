import React, { useState } from "react";

import './investmentCard.css';

export default function InvestmentCard({ investment }) {
  const [imageClose, setImageClose] = useState(false);
  const currentbar_width = `${(investment.raised_current / investment.raised_target) * 100}%`;

  const closeImage = () => setImageClose(true)
  const openImage = () => setImageClose(false)

  return (
    <div className="app__investmentcard-card"
        onMouseEnter={closeImage} onMouseLeave={openImage}>
      <div 
        className={"app__investmentcard-card_heading" + ( imageClose ? ' close' : '')}>
        <div className="app__investmentcard-card_tags">
          {
            investment.tags.map((tag, index) => (
              <span className="tags" key={index}>{tag.toUpperCase()}</span>
            ))
          }
        </div>
        <img src={investment.imgUrl} alt='investment place' />
      </div>

      <div className="app__investmentcard-card_content">
        <h2>{investment.title}</h2>
        <span className="location">{investment.location}</span>
        <p className="description">{investment.desc}</p>

        <div className="app__investmentcard-card_raisestatus">
          <div className="app__investmentcard-card_targetbar"></div>
          <div className="app__investmentcard-card_currentbar" style={{ width: currentbar_width }}></div>
          <span className="blue-bold">${investment.raised_current}</span>
          <span> raised of ${investment.raised_target}</span>
        </div>
      </div>

      <div className="app__investmentcard-card_details">
        <div className="app__investmentcard-card_detail">
          <span className="key">Security Type</span>
          <span className="value">{investment.security_type}</span>
        </div>
        <div className="app__investmentcard-card_detail">
          <span className="key">Investment Multiple</span>
          <span className="value">{investment.invest_mult}x</span>
        </div>
        <div className="app__investmentcard-card_detail">
          <span className="key">Maturity</span>
          <span className="value">{investment.maturity} Months</span>
        </div>
        <div className="app__investmentcard-card_detail">
          <span className="key">Min. Investment</span>
          <span className="value">${investment.min_invest}</span>
        </div>
      </div>

      <button type="button" className="btn__secondary-block">VIEW</button>
    </div>
  )
}