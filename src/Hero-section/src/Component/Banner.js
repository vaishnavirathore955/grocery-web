import React from 'react';

function Banner() {
  const bannerImg = 
  {
    url: "./images/banner.png",
    title: "Banner Image",
  };

  const bannerImgStyle = {
    width: "100%",
    height: "200px",
    margin: "10px auto 0 auto",
  };

  return (
    <div>
      <img src={bannerImg.url} style={bannerImgStyle} alt={bannerImg.title} />
    </div>
  );
}

export default Banner;