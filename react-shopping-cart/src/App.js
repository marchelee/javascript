import React from 'react';

import MenuCart from './containers/MenuCart'

import './css/reset.css';
import './css/style.css';

function App() {
  return (
    <div className="container">
      <div id="app-holder">
        <MenuCart />
      </div>
    </div>
  );
}

export default App;
