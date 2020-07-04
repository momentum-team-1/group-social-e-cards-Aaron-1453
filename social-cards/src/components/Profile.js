/* globals localStorage */
import React, { useState, useEffect } from 'react'

import Nav from './Nav'

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
              <div key={card.id} style={{ width: 350 }}>
                <div className='card'>
                  <div className='card-image'>
                    <figure className='image is-4by3'>
                      <img src='https://bulma.io/images/placeholders/1280x960.png' alt={`${card.id}-placeholder-img`} />
                    </figure>
                  </div>
                  <div className='card-content'>
                    <div className='content'>
                      <p>{card.message}</p>
                      <p>From: {card.author.username}</p>
                      <p>{card.posted_at}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Profile
