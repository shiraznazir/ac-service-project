import React from "react";
import CompanyLogo from "./CompanyLogo";
import ContactUs from "./ContactUs";
import AirContainers from "./AirContainers";
import "./Footer.css";
import ServiceWeProvide from "./ServiceWeProvide";
import logo from "./Img/logo.png";

function Footer() {
  return (
    <div>
      <div className="footer">
        <CompanyLogo url={logo} />
        <AirContainers />
        <ServiceWeProvide />
        <ContactUs />
      </div>
      <hr />
      <div className="below-line">
            <p>© SunShine Solutions Services, All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
