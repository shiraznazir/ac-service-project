import React from "react";
import "./Button.css";
import waap from "./img/waap.png";
import phone from "./img/phone.png";

export function Button() {
  return (
    <div>
      <div>
        <a href="tel:+9175050750937">
          <button className="btn">Call Now</button>
        </a>
        <div>
          <a
            href="tel:+9175050750937"
            class="call_float"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={phone} />
          </a>
          <a
            href="https://wa.me/75050750937"
            class="whatsapp_float"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={waap} /> 
          </a>
        </div>
      </div>
    </div>
  );
}
