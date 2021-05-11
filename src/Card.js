import './Card.css'

export default function Card({ name, images, types }) {
  const [type1, type2] = types

  return (
    <section className="Card">
      <h2>{name}</h2>
      <ul>
        <li>{type1}</li>
        <li>{type2}</li>
      </ul>
      <img src={images.front} alt="" />
      <img src={images.back} alt="" />
    </section>
  )
}
