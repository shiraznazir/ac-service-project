import React from "react";
import location from "./Img/location.png";
import phone from "./Img/phone.png";
import email from "./Img/email-logo.png";
import facebook from "./Img/facebook.png";
import twitter from "./Img/twitter.png";
import linkedin from "./Img/linkedin.png";
import instagram from "./Img/instagram.png";
import './Footer.css';

function ContactUs() {
  return (
    <div className="contact">
      <h4>Contact Us</h4>
      <h5>
        <div className="contact-logo contacts">
          <img src={location} />
        </div>
        Location :
      </h5>
      <p className="address contacts">
        N-149, Naryan Nagar, Lalita Park, Laxmi Nagar, Delhi 110092
      </p>
      <h5>
        <div className="contact-logo contacts">
          <img src={phone} />
        </div>
        Toll Free Number:{" "}
      </h5>
      <a href="tel:+9118003095992"><p className="toll-free">1800 309 5992</p></a>
      <h5>
        <div className="contact-logo contacts">
          <img src={phone} />
        </div>
        Phone Number:{" "}
      </h5>
      <p className="address contacts">+91 7505075937</p>
      <h5>
        <div className="contact-logo contacts">
          <img src={email} />
        </div>
        Email:{" "}
      </h5>
      <p className="address contacts">info@sunshinesolution.com</p>
      
      <h5 className="contacts">Follow Us</h5>
      <div className="social-acc contacts">
        <div className="social">
          <img src={facebook} />
        </div>
        <div className="social contacts">
          <img src={twitter} />
        </div>
        <div className="social contacts">
          <img src={linkedin} />
        </div>
        <div className="social contacts">
          <img src={instagram} />
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
