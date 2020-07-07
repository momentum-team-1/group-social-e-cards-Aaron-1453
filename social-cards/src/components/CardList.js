/* globals localStorage */
import React, { useState, useEffect } from 'react'

import Nav from './Nav'
import Card from './Card'
import { getAllCards, getFriendsCards, getMyCards } from '../api'

const CardList = (props) => {
  const [cards, setCards] = useState([])
  const [option, setOption] = useState('all')
  const [isLoading, setIsLoading] = useState('true')

  const baseUrl = 'http://localhost:3000'

  useEffect(() => {
    if (localStorage.getItem('login_auth_token') && option === 'all') {
      getAllCards(localStorage.getItem('login_auth_token')).then(cards => { setCards(cards); setIsLoading(false) })
    }

    if (localStorage.getItem('login_auth_token') && option === 'friends') {
      getFriendsCards(localStorage.getItem('login_auth_token')).then(cards => { setCards(cards); setIsLoading(false) })
    }

    if (localStorage.getItem('login_auth_token') && option === 'me') {
      getMyCards(localStorage.getItem('login_auth_token')).then(cards => {
        setCards(cards); setIsLoading(false)
      })
    }
  }, [option])

  const handleChange = (event) => { event.preventDefault(); return setOption(event.target.value) }

  const buildDropdown = () => {
    return (
      <form>
        <label htmlFor='card-list-options' id='card-list-options'>
                 See cards by:
        </label>
        <select name='card-list-options' id='card-list-options' onChange={(event) => { handleChange(event); setIsLoading(true) }}>
          <option value='all'>All</option>
          <option value='friends'>Friends</option>
          <option value='me'>Me</option>
        </select>
      </form>
    )
  }

  return (
    <div>
      {window.location.href === `${baseUrl}/cards/all/` &&
        <Nav username={localStorage.getItem('login_username')} />}
      {buildDropdown()}
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {isLoading &&
          <p>Please wait while we grab your cards!</p>}
        {cards && !isLoading && cards.map((card) => {
          return (
            <Card key={card.id} card={card} />
          )
        })}
      </div>
    </div>
  )
}

export default CardList
