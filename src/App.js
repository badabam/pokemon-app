import './App.css'
import Card from './Card'
import pokemons from './data.json'

export default function App() {
  const { name, images, types } = pokemons[0]
  return (
    <div className="App">
      <Card name={name} images={images} types={types} />
    </div>
  )
}
