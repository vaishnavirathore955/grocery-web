import React from 'react';
import ImageSlider from './ImageSlider';
import slider1 from './images/slider-1.png';
import slider2 from './images/slider-2.png';
import "./slider.css";  // ✅ new css file

function SliderContainer() {
  const slides = [
    { url: slider1, title: "Slider 1" },
    { url: slider2, title: "Slider 2" },
  ];

  return (
    <div className="slider-container">
      <ImageSlider slides={slides} />
    </div>
  );
}

export default SliderContainer;
