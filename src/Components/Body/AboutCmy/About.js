import React from "react";
import './About.css';
import AboutImg from "./AboutImg";
import about1 from "../images/about1.jpg";
import about2 from "../images/about2.jpg";
import about3 from "../images/about3.jpg";

function About(props) {
  return (
    <div className="about-company-section">
      <div>
        <h4>ABOUT COMPANY</h4>
        <h6>
          We Offer A Complete Maintenance Service On All Air Condition Equipment
        </h6>
      </div>
      <div class="about">
        <AboutImg url={about1} />
        <AboutImg url={about2} />
        <AboutImg url={about3} />
      </div>
      <div>
        <p class="text1">
          SunShine Solutions is one of the versatile AC Service providers as it deals
          in all available air conditioner models such cassette, window, split,
          ducting, and central AC system. Contact us to get all around AC
          services from installation to preventive after-sales services. Because
          of all these paybacks, SunShine Solutions emerged as one of the best PAN
          India AC service suppliers.
        </p>
        <p class="text2">
          Here at SunShine Solutions, you can find all categories of AC services at
          any time and place within the low AC service charges. SunShine Solutions is
          there to help you with all the AC-related issues by proving all brands
          of air conditioners installation, service, and repair with their
          assured preventive AC service experience.
        </p>
        <h6>Highly skilled & experienced engineers</h6>
        <h6>Emergency call outs 24/7</h6>
        <h4>Toll Free Number</h4>
        <a style={{color: "black"}} href="tel:+9118003095992">18003095992</a>
        <br></br>
        <a style={{color: "green"}} href="tel:+9118003095992">Call Now</a>
      </div>
    </div>
  );
}

export default About;
