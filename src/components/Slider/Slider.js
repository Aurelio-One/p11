import { useState } from 'react';
import './Slider.css';

import arrowLeft from '../../assets/img/arrow_left.png';
import arrowRight from '../../assets/img/arrow_right.png';

function Slider({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  return (
    <div className='slider'>
      <div className='slide slider-active-image'>
        <img
          src={slides[currentSlide]}
          alt=''
          className='slider-image'
          loading='lazy'
        />
      </div>

      {slides.length > 1 ? (
        <>
          <div className='slider-previous' onClick={prevSlide}>
            <img src={arrowLeft} alt='' className='slider-previous-icon' />
          </div>
          <div className='slider-next' onClick={nextSlide}>
            <img src={arrowRight} alt='' className='slider-next-icon' />
          </div>
        </>
      ) : null}
    </div>
  );
}

export default Slider;
