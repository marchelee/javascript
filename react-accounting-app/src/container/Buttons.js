import React from 'react';

function Buttons() {
  return (
    <div id="menu">
      <button class="menu-button">
        <a className="btn">
          <i class="fas fa-database"></i>
        </a>
      </button>
      <button class="menu-button">
        <a className="btn">
          <i class="fas fa-shopping-cart"></i>
        </a>
      </button>
      <button class="menu-button">
        <a className="btn">
          <i className="fas fa-wallet"></i>
        </a>
      </button>
      <button class="menu-button">
        <a className="btn">
          <i className="fas fa-coins"></i>
        </a>
      </button>
      <button class="menu-button">
        <a className="btn">
          <i class="fas fa-chart-bar"></i>
        </a>
      </button>
    </div>
  );
}

export default Buttons;