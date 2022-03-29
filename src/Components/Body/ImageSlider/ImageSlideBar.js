import React from "react";
import banner from '../images/banner12.png';
import "./ImageSlideBar.css";

function ImageSlideBar() {
  return (
    <div>
      <img className="banner-image" src={banner} />
    </div>
  );
}

export default ImageSlideBar;
