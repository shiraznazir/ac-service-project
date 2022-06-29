import React from "react";
import "./Button.css";
import waap from "./img/waap.png";
import phone from "./img/phone.png";

export function Button() {
  return (
    <div>
      <div>
        <a href="tel:+9118003095992">
          <button className="btn">18003095992</button>
        </a>
        <div>
          <a
            href="tel:+9118003095992"
            class="call_float"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={phone} />
          </a>
          <a
            href="https://wa.me/+917505075937"
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
