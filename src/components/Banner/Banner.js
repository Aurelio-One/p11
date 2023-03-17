import './Banner.css'

function Banner({ image, text }) {
  return (
    <div className='banner'>
      <img
        src={image}
        alt=''
        className='banner-img'
      />
      <div className='banner-overlay'></div>
      {text ? <h1 className='banner-headline'>{text}</h1> : ''}
    </div>
  )
}

export default Banner
