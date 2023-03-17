import './Card.css'

function Card({ image, text }) {
  return (
    <div className='card'>
      <img
        src={image}
        alt=''
        className='card-img'
      />
      <div className='card-overlay'></div>
      <h2 className='card-text'>{text}</h2>
    </div>
  )
}

export default Card
