import React from 'react';

function Pages() {
  return (
    <div id="pages">
      <form>
        <div className="form-group">
          <label for="inputItemType">Item Type</label>
          <input type="text" class="form-control" id="inputItemType" placeholder="Item Type" />
        </div>
        <div className="form-group">
          <label for="inputItemName">Item Name</label>
          <input type="text" class="form-control" id="inputItemName" placeholder="Item Name" />
        </div>
        <div className="form-group">
          <label for="inputPrice">Price</label>
          <input type="text" class="form-control" id="inputPrice" placeholder="Price" />
        </div>
        <div className="form-group">
          <label for="inputQuantity">Quantity</label>
          <input type="text" class="form-control" id="inputQuantity" placeholder="Quantity" />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default Pages;