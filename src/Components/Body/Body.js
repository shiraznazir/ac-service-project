import React from "react";
import ImageSlideBar from './ImageSlider/ImageSlideBar';
import OurServices from './OurServices/OurServices'
import "./Body.css";
import Service from "./Services/Service";
import About from "./AboutCmy/About";
import ChannelPartners from "./ChannelPartner/ChannelPartner";
import AboutUs from "./AboutUs/AboutUs";

function Body() {
  return (
    <div className="body-part">
      <ImageSlideBar />
      <OurServices />
      <Service />
      <About />
      <ChannelPartners />
      <AboutUs />
    </div>
  );
}

export default Body;
