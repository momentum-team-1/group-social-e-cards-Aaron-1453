/* globals localStorage */

import React, { useState } from 'react'

import Nav from './Nav'

const fontColorOptions = [
  {
    hex: '#153243',
    label: 'Gunmetal'
  },
  {
    hex: '#284B63',
    label: 'Indigo Dye'
  }
]

const fontStyleOptions = [
  'Lora',
  'Merriweather',
  'Proza Libre',
  'Open Sans',
  'Libre Baskerville',
  'Source Sans Pro',
  'BioRhyme',
  'Cabin'
]

const CreateCard = () => {
  // use useState to create key/values in a state object
  // to keep track of user input from the form
  // i.e. const [body, setBody] = useState('')

  const [text, setText] = useState('')
  const [img, setImg] = useState('')
  const [fontColor, setFontColor] = useState('#153243')
  const [fontStyle, setFontStyle] = useState('Lora')

  const baseUrl = 'https://fumo-e-cards.herokuapp.com/api'

  // define handleChange function that will set
  // the state object's values for us depending on
  // the user input
  // i.e. if value is in fontStyleOptions then
  // setFontStyle to the value passed in
  const handleChange = (event) => {
    event.preventDefault()
    if (fontStyleOptions.includes(event.target.value)) {
      setFontStyle(event.target.value)
    }
    // console.log('fontColorOptions:', fontColorOptions)
    if ((fontColorOptions).map(value => value.hex).includes(event.target.value)) {
      // console.log(Object.values(fontColorOptions))
      setFontColor(event.target.value)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    document.getElementById('cardText').submit()
  }

  return (
    <>
      <Nav username={localStorage.getItem('login_username')} />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} />
      <p>
          Triangle localista sodu the buehler corcoran baromsg spekulera i hausse plaid ccb plaza upcycled, historic preservation haussier barilotto urban farmer haussier city center pousser la hausse poliai, mascul beard brick kocaman erkek hayvan ballpark cupcakes upcycled. Yoga biker bar nevermore duke forest doughman black wall street, reproductor scrap exchange bula papal bula, coffee liberty gregson street specula la burs. Hub kocaman erkek hayvan baseball sustain-a-bull blbost wool e bull haussista festival for the eno, renaissance hope valley carolina theatre food truck rodeo scooter the kress
      </p>
      <form>
        <label htmlFor='card-img-url'>Card Image Url:</label>
        <input type='text' id='card-img-url' name='card-img-url' />

        <label htmlFor='cardText'>Card Message:</label>
        <textarea id='cardText' name='cardText' />
        <input type='button' onClick={(event) => handleSubmit(event)} value='submit message' />

        <label htmlFor='color-options'>Font Color:</label>
        <select
          onChange={(event) => handleChange(event)}
          name='color-options'
          id='color-options'
        >
          {fontColorOptions.map(option => <option value={option.hex} key={option.label}>{option.label}</option>)}
        </select>
        <label htmlFor='font-options'>Font Style:</label>
        <select onChange={(event) => handleChange(event)} name='font-options' id='font-options'>
          {fontStyleOptions.map(option => <option value={option} key={option}>{option}</option>)}
        </select>
      </form>
    </>
  )
}

export default CreateCard
