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
      <p class='title'>Hello, {username}  </p>
      {cards &&
        cards.map((card, idx) => <p key={idx}>{card.author.id}</p>)}
    </div>
  )
}

export default Profile
