const express = require('express');
const app = express();
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

app.use(express.json());

app.get('/cars', async (req, res) => {
  const result = await pool.query('SELECT * FROM cars');
  res.json(result.rows);
});

// Dodawanie, edycja, usuwanie — analogicznie

app.listen(3000, () => console.log('Backend listening on port 3000'));
