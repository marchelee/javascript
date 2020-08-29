import React, { useState, useEffect } from 'react';

import Menu from './Menu';
import Cart from './Cart';

function MenuCart() {

  const [menuData, setMenuData] = useState({
    "101001": {
      productName: "Table",
      price: 500
    },
    "101002": {
      productName: "Chair",
      price: 150
    },
    "101003": {
      productName: "Plate",
      price: 25
    },
    "101004": {
      productName: "Cutlery Set",
      price: 15
    },
    "101005": {
      productName: "Glass",
      price: 5
    }
  });
  const [cartData, setCartData] = useState({});
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    let total = 0;
    Object.keys(cartData).map((sku, _) => {
      let qty = cartData[sku];
      let price = menuData[sku].price;
      total += qty * price;
    })

    setCartTotal(total);
  }, [cartData])

  const addToCart = sku => {
    let newCart = { ...cartData };
  
    if (sku in cartData) {
      newCart[sku] += 1;
    } else {
      newCart[sku] = 1;
    }

    setCartData(newCart);
    console.log(cartData)
  }

  const removeFromCart = sku => {
    let newCart = { ...cartData };

    if (sku in cartData) {
      newCart[sku] -= 1;
      
      if (newCart[sku] < 1) {
        delete newCart[sku];
      }
    }

    setCartData(newCart);
  }

  return (
    <div id="menu-cart">
      <Menu menu={menuData} addToCart={addToCart}/>
      <Cart total={cartTotal} menu={menuData} cart={cartData} removeFromCart={removeFromCart}/>
    </div>
  );
}

export default MenuCart;
