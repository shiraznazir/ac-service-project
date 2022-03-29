import React from "react";
import CPImage from "./CPImage";
import voltas from "../images/voltas.jpg";
import bluestar from "../images/bluestar.jpeg";
import daikin from "../images/daikin.png";
import goorej from "../images/goorej.png";
import hitachi from '../images/hitachi.png'
import samsung from '../images/samsung.png'
import './ChannelPartner.css'

function ChannelPartners() {
  return (
    <div className="channel-partner">
        <h1>We partner with the best</h1>
        <div className="cp-items">
          <CPImage url={voltas} />
          <CPImage url={bluestar} />
          <CPImage url={daikin} />
          <CPImage url={goorej} />
          <CPImage url={hitachi} />
          <CPImage url={samsung} />
      </div>
    </div>
  );
}

export default ChannelPartners;
