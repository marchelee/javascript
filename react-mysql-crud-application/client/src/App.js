import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>CRUD Application MySQL</h1>
      <div className="form">
        <label>Movie Name</label>
        <input type="text" name="movie-name" />
        <label>Movie Review</label>
        <input type="text" name="movie-review" />
        <button>Submit</button>
      </div>
    </div>
  );
}

export default App;
