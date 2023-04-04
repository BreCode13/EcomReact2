import React, { useState, useEffect } from 'react';
import "./SlideShow.css";



const SlideShow = () => {
  const [slides, setSlides] = useState([
    'https://www.footlocker.com/content/dam/flincfoundation/FootLocker/images/flhoj-060217a-aj4Retro4.jpg',
    'https://www.footlocker.com/content/dam/flincfoundation/FootLocker/images/flhoj-060217a-aj9Retro9.jpg',
    'https://www.footlocker.com/content/dam/flincfoundation/FootLocker/images/flhoj-060217a-aj6Retro6.jpg',
  ]);
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSlideIndex((slideIndex + 1) % slides.length);
    }, 2000);

    return () => clearTimeout(timer);
  }, [slideIndex, slides.length]);

  return (
    <div className="slideshow-container">
      {slides.map((slide, index) => (
        <div
          className={index === slideIndex ? 'mySlides fade active' : 'mySlides fade'}
          key={index}
        >
          <img src={slide} alt={`Slide ${index}`} />
        </div>
      ))}
    </div>
  );
};

export default SlideShow;

