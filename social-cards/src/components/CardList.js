/* globals localStorage */
import React, { useState, useEffect } from 'react'

import Nav from './Nav'
import Card from './Card'
import { getCards } from '../api'

const CardList = (props) => {
  const [cards, setCards] = useState([])

  useEffect(() => {
    if (localStorage.getItem('login_auth_token')) {
      getCards(localStorage.getItem('login_auth_token')).then(cards => setCards(cards))
    }
  }, [])

  const baseUrl = 'http://localhost:3000'
  return (
    <div>
      {window.location.href === `${baseUrl}/cards/all/` &&
        <Nav username={localStorage.getItem('login_username')} />}
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {cards && cards.map((card) => {
          return (
            <Card key={card.id} card={card} />
          )
        })}
      </div>
    </div>
  )
}

export default CardList
