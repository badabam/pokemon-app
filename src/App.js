import { useState } from 'react'
import './App.css'
import Card from './Card'
import pokemons from './data.json'
import Header from './Header'

export default function App() {
  const [isDarkmode, setIsDarkmode] = useState(false)

  return (
    <div className="App">
      <Header isDarkmode={isDarkmode} />
      <button onClick={() => setIsDarkmode(!isDarkmode)}>
        Toggle darkmode
      </button>
      {pokemons.map(pokemon => {
        const { name, images, types, id } = pokemon
        return (
          <Card
            key={id}
            isDarkmode={isDarkmode}
            name={name}
            images={images}
            types={types}
          />
        )
      })}
    </div>
  )
}
