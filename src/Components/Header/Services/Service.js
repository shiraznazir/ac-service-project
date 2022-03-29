import React, { useState } from "react";
import { Services } from "./Services";
import "./Service.css";

function Service() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        {Services.map((item, index) => {
          return (
            <li
              key={index}
              className={item.cName}
              onClick={() => setClick(false)}
            >
              {item.title}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Service;
