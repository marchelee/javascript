import React from 'react';

function MenuItem(props) {
  return (
    <div className="menu-item">
      <span className="menu-text">{props.productName} - ${props.price}</span>
      <span className="menu-action">
        <button onClick={() => props.addToCart(props.sku)}>+</button>
      </span>
    </div>
  );
}

export default MenuItem;