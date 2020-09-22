const express = require('express')
const app = express()
const mysql = require('mysql')

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  databasename: 'react_crud_db',
});

// req - required
// res - response
app.get('/', (req, res) => {
  const sqlInsert = "INSERT INTO movie_reviews (movie_name, movie_review) VALUES ('Inception', 'Good movie, enjoyable');"
  db.query(sqlInsert, (err, res) => { 
    res.send('hello perkele');
  });
});

app.listen(3001, () => {
  console.log('running on port 3001 ...')
});