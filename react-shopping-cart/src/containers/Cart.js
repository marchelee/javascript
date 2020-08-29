import React from 'react';

function Cart(props) {
  return (
    <div id="cart">
      <h2 className="text-center">cart</h2>
      <div id="cart-area">
        {
          Object.keys(props.cart).map((sku, index) => (
            <div className="cart-item" key={index}>
              <span className="item-text">{props.menu[sku].productName} x {props.cart[sku]}</span>
              <span className="item-total">{props.menu[sku].price}</span>
              <button className="remove-button" onClick={() => props.removeFromCart(sku)} >
                -
              </button>
            </div>
          ))
        }
        <div id="cart-total">
          <div className="cart-item">
            <span className="item-text">Total</span>
            <p className="item-total">
              $<span id="total-amount">{props.total}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;