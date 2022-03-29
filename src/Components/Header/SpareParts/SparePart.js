import React, { useState } from "react";
import { SpareParts } from "./SpareParts";
import "./SparePart.css";

function SparePart() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        {SpareParts.map((item, index) => {
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

export default SparePart;
