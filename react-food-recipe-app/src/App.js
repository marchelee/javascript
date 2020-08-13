import React, { useEffect, useState } from 'react';
import Recipe from './Recipes/Recipe'
import './App.css';

const App = () => {
  const APP_ID = 'e65cf9b6';
  const APP_KEY = 'b5c4afdb498d0e61a53a8af050ffee2d';

  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');
  const [recipes, setRecipes] = useState([]);

  /**
   * add second argument ([]), will only load once 
   * add parameter inside the argument, will load with changes
   */
  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    console.log(data.hits);
    setRecipes(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
