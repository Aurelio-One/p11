import greyIcon from '../../assets/img/grey_star.png'
import redIcon from '../../assets/img/red_star.png'
import './Rating.css'

function Rating({ rating }) {
  const stars = [1, 2, 3, 4, 5]

  return (
    <div className='rating'>
      {stars.map((star, i) =>
        rating >= star ? (
          <img
            key={i}
            className='rating-icon'
            src={redIcon}
            alt=''
          />
        ) : (
          <img
            key={i}
            className='rating-icon'
            src={greyIcon}
            alt=''
          />
        )
      )}
    </div>
  )
}

export default Rating
