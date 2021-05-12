import { useState } from 'react'
import './Card.css'

export default function Card({ name, images, types, isDarkmode }) {
  const [isActive, setIsActive] = useState(false) // [false, () => {}]

  return (
    <section className={isDarkmode ? 'Card Card--darkmode' : 'Card'}>
      <h2>{name}</h2>
      <button
        className={isActive ? 'Button' : 'Button active'}
        onClick={() => setIsActive(!isActive)}
      >
        {isActive ? 'Hide' : 'Show'}
      </button>
      {isActive && (
        <>
          <ul>
            {types.map(type => (
              <li key={type}>{type}</li>
            ))}
          </ul>
          <img src={images.front} alt="" />
          <img src={images.back} alt="" />
        </>
      )}
    </section>
  )
}
