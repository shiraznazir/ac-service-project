import React, { useState } from "react";
import { Button } from "./Button/Button";
import "./Navbar.css";
import Product from './Products/Product';
import Service from './Services/Service';
import SparePart from './SpareParts/SparePart';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const [dropdown2, setDropdown2] = useState(false);

  const [dropdown3, setDropdown3] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  const onMouseEnter2 = () => {
    if (window.innerWidth < 960) {
      setDropdown2(false);
    } else {
      setDropdown2(true);
    }
  };

  const onMouseLeave2 = () => {
    if (window.innerWidth < 960) {
      setDropdown2(false);
    } else {
      setDropdown2(false);
    }
  };

  const onMouseEnter3 = () => {
    if (window.innerWidth < 960) {
      setDropdown3(false);
    } else {
      setDropdown3(true);
    }
  };

  const onMouseLeave3 = () => {
    if (window.innerWidth < 960) {
      setDropdown3(false);
    } else {
      setDropdown3(false);
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo" onClick={closeMobileMenu}>
          SunShine
          <i class="fab" />
        </div>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fa fa-times" : "fa fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <div className="nav-links" onClick={closeMobileMenu}>
              Home
            </div>
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <div className="nav-links" onClick={closeMobileMenu}>
              Products <i className="fas fa-caret-down" />
            </div>
            {dropdown && <Product />}
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter2}
            onMouseLeave={onMouseLeave2}
          >
            <div className="nav-links" onClick={closeMobileMenu}>
              Services <i className="fas fa-caret-down" />
            </div>
            {dropdown2 && <Service />}
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter3}
            onMouseLeave={onMouseLeave3}
          >
            <div className="nav-links" onClick={closeMobileMenu}>
              SpareParts <i className="fas fa-caret-down" />
            </div>
            {dropdown3 && <SparePart />}
          </li>
          <li>
            <div className="nav-links-mobile" onClick={closeMobileMenu}>
              Call Now
            </div>
          </li>
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;
