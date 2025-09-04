import React, { useState , useEffect } from "react";

function ImageSlider({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 3000); 

    return () => clearInterval(interval); 
  }, [currentIndex]); 

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // const goToSlide = (slideIndex) => {
  //   setCurrentIndex(slideIndex);
  // };

  const sliderStyles = {
    position: "relative",
    height: "100%",
  };

  const slideStyles = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  const arrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
  };

  // const dotsContainerStyles = {
  //   display: "flex",
  //   justifyContent: "center",
  // };

  // const dotStyle = {
  //   margin: "0 3px",
  //   cursor: "pointer",
  //   fontSize: "20px",
  // };

  return (
    <div style={sliderStyles}>
      <div onClick={goToPrevious} style={{ ...arrowStyles, left: "32px" }}>
        ❰
      </div>
      <div onClick={goToNext} style={{ ...arrowStyles, right: "32px" }}>
        ❱
      </div>
      <div style={slideStyles}></div>
      {/* <div style={dotsContainerStyles}>
        {slides.map((_, slideIndex) => (
          <div
            key={slideIndex}
            style={dotStyle}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default ImageSlider;