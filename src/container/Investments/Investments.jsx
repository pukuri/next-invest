import React, { useState } from "react";

import InvestmentCard from "../../components/InvestmentCard/InvestmentCard";
import { investments, images } from "../../statics";
import './investments.css'

export default function Investments() {
  const [cards, setCards] = useState(investments.slice(0, 8))
  const [showButton, setShowButton] = useState(true)

  const showAllCards = (e) => {
    e.stopPropagation()
    setCards(investments)
    setShowButton(false)
  }

  return (
    <div className="app__investments-wrapper">
      <img src={images.investmentbg} alt="background flower" className="bg"/>
      <div className="app__investments" id="investments">
        <h1>Offerings open for investment</h1>
        <p>Explore pre-vetted investments opportunities available in a growing number of industry categories</p>

        <div className="app__investments-cards">
          { cards.map((invest, index) => (
              <InvestmentCard investment={invest} key={invest + index} />
          ))}
        </div>

        {
          investments.length > 8 && (
            <button type="button" 
              className={"btn__primary" + (showButton ? '' : ' hide')}
              onClick={showAllCards}>VIEW ALL PROJECTS</button>
          )
        }
      </div>
    </div>
  )
}