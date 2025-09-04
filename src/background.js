import React from "react";
import "./back.css"; 
import Cer1 from "./Image/cer1.webp";
import Cer2 from "./Image/cer2.webp";   // For custom styles

const Back = () => {
  return (
<div className="App mt-4 mb-5">

     <div id="demo" class="carousel slide" data-bs-ride="carousel">

    
     <div class="carousel-indicators">
      <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
      <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    </div>
    
    
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src={Cer1} alt="Los Angeles" class="d-block" /> 
      </div>
      <div class="carousel-item">
        <img src={Cer2} alt="Chicago" class="d-block" />
      </div>
    </div>
    
    
    <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
      <span class="carousel-control-prev-icon"></span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
      <span class="carousel-control-next-icon"></span>
    </button>
  </div>
</div>
  
  );
};

export default Back;