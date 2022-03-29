import React, { useState } from 'react';
import { Products } from './Products';
import './Product.css';

function Product() {
  
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {Products.map((item, index) => {
          return (
            <li key={index} className={item.cName}
            onClick={() => setClick(false)}>
                {item.title}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Product;
