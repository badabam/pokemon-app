import './Card.css'

export default function Card({ name, frontImage }) {
  return (
    <section className="Card">
      <h2>{name}</h2>
      <img src={frontImage} alt="" />
    </section>
  )
}
