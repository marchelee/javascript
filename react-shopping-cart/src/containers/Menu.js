import React from 'react';

import MenuItem from '../components/MenuItem';

function Menu(props) {
  return (
    <div id="menu">
      <h2>Menu</h2>
      <div>
        <div id="menu-area">
          {/** menu items */}
          {
            Object.keys(props.menu).map((sku, index) => (
              // <div className="menu-item" key={index}>
              //   <span className="menu-text">{`${props.menu[sku].productName} - $${props.menu[sku].price}`}</span>
              //   <span className="menu-action">
              //     <button onClick={() => props.addToCart(sku)}>+</button>
              //   </span>
              // </div>
              <MenuItem
                sku={sku}
                productName={props.menu[sku].productName}
                price={props.menu[sku].price}
                addToCart={props.addToCart}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Menu;