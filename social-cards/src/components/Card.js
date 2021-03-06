import React from 'react'

const Card = (props) => {
  return (
    <div key={props.card.id} style={{ width: 350, height: 450, margin: 50 }}>
      <div className='card'>
        <div className='card-image'>
          <figure className='image is-4by3'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Welchcorgipembroke.JPG/1920px-Welchcorgipembroke.JPG' alt={`${props.card.id}-placeholder-img`} />
          </figure>
        </div>
        <div className='card-content' style={{ overflow: 'auto', background: props.card.color }}>
          <div className='content' style={{ background: 'white' }}>
            <p>{props.card.message}</p>
            <p>From: {props.card.author}</p>
            <p>{props.card.posted_at}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
