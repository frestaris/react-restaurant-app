import React, { useState, useEffect } from "react";
import "./Carousel.css";

const Carousel = ({ images, intervalTime = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, intervalTime);
    return () => clearInterval(slideInterval);
  }, [intervalTime, images.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-slide">
        <img
          src={images[currentIndex]}
          alt={`slide-${currentIndex}`}
          className="carousel-image"
        />
      </div>

      <div className="carousel-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;