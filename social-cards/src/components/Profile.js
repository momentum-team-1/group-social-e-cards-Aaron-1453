/* globals localStorage */
import React, { useState, useEffect } from 'react'

import Nav from './Nav'
import Card from './Card'

import { getCards } from '../api'

const Profile = (props) => {
  const [cards, setCards] = useState([])
  const [username, setUsername] = useState(null)

  useEffect(() => {
    if (localStorage.getItem('login_auth_token')) {
      getCards(localStorage.getItem('login_auth_token')).then(cards => setCards(cards))
    }

    setUsername(localStorage.getItem('login_username'))
  }, [])

  console.log(cards)
  return (
    <div>
      <Nav username={username} setUsername={props.setUsername} />
      <p className='title'>Hello, {username}  </p>
      {cards && (
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
          {cards.map((card) => {
            return (
              <Card key={card.id} card={card} />
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Profile
