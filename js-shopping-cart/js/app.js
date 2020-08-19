/**
 * execute this line of codes after page is loaded
 */
(function() {

  var menuData = {
    // SKU = Stock Keeping Unit
    // Key and details are the values
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
      productName: "Fork, Knife and Spoon set",
      price: 15
    },
    "101005": {
      productName: "Glass",
      price: 5
    }
  }

  var cartData = {};

  var menuArea = document.getElementById("menu-area");
  var cartList = document.getElementById("cart-list");

  var setMenu = function () {
    for (var sku in menuData) {
      var menuItem = createMenuItem(sku);
      menuArea.appendChild(menuItem);
    }
  };

  var createMenuItem = function (sku) {
    var data = menuData[sku];

    var menuItem = document.createElement("div");
    menuItem.className = "menu-item";

    var menuText = document.createElement("span");
    menuText.className = "menu-text";
    menuText.innerText = data.productName + "- $" + data.price;

    var menuAction = document.createElement("span");
    menuAction.className = "menu-action";

    var menuActionButton = document.createElement("button");
    menuActionButton.innerText = "+";
    menuActionButton.setAttribute("data-sku", sku);

    menuActionButton.onclick = addToCart;

    menuItem.appendChild(menuText);
    menuItem.appendChild(menuAction);
    menuAction.appendChild(menuActionButton);

    return menuItem;
  };

  var addToCart = function (event) {
    var button = event.target;

    var sku = button.getAttribute('data-sku');

    if (sku in cartData) cartData[sku] += 1;
    else cartData[sku] = 1;

    console.log(cartData);
    setCart();
  };

  var setCart = function () {

    cartList.innerHTML = "";

    for (var sku in cartData) {
      var cartItem = createCartItem(sku);
      cartList.appendChild(cartItem);
    }
  };

  var createCartItem = function (sku) {
    var data = menuData[sku];
    var qty = cartData[sku];

    var cartItem = document.createElement("div");
    cartItem.className = "cart-item";
    
    var itemText = document.createElement("span");
    itemText.className = "item-text";
    itemText.innerText = data.productName + " x " + qty;

    var itemTotal = document.createElement("span");
    itemTotal.className = "item-total";
    itemTotal.innerText = "$" + data.price * qty;

    var itemRemoveButton = document.createElement("button");
    itemRemoveButton.className = "remove-button";
    itemRemoveButton.innerText = "-";
    itemRemoveButton.setAttribute("data-sku", sku);

    cartItem.appendChild(itemText);
    cartItem.appendChild(itemTotal);
    cartItem.appendChild(itemRemoveButton);

    return cartItem;
  };

  setMenu();
}) ();