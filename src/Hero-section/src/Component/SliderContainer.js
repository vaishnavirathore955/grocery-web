import React from 'react';
import ImageSlider from './ImageSlider';

function SliderContainer() {
  const slides = [
    { url: "./images/slider-1.png", title: "Slider 1" },
    { url: "./images/slider-2.png", title: "Slider 2" },
  ];

  const containerStyles = {
    width: "90%",
    height: "180px",
    margin: " 50px auto",
    // margin-top
  };

  return (
    <div>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
}

export default SliderContainer;