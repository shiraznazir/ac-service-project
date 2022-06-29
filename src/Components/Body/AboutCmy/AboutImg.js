import React from "react";
import './About.css';

function AboutImg(props) {
  return (
    <div class="about-img">
      <img src={props.url}/>
    </div>
  );
}

export default AboutImg;
