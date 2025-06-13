// server.js
const express = require('express');
const dotenv = require('dotenv');
const pool = require('./db');

dotenv.config();
const app = express();
app.use(express.json());

// GET /cars – lista wszystkich samochodów
app.get('/cars', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM cars ORDER BY id ASC');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Błąd serwera');
  }
});

// POST /cars – dodaj nowy samochód
app.post('/cars', async (req, res) => {
  const { make, model, year, vin } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO cars (make, model, year, vin) VALUES ($1, $2, $3, $4) RETURNING *',
      [make, model, year, vin]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Błąd serwera');
  }
});

// DELETE /cars/:id – usuń samochód
app.delete('/cars/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM cars WHERE id = $1', [id]);
    res.status(204).send();
  } catch (err) {
    console.error(err);
    res.status(500).send('Błąd serwera');
  }
});

// PUT /cars/:id – edytuj samochód
app.put('/cars/:id', async (req, res) => {
  const { id } = req.params;
  const { make, model, year, vin } = req.body;
  try {
    const result = await pool.query(
      'UPDATE cars SET make = $1, model = $2, year = $3, vin = $4 WHERE id = $5 RETURNING *',
      [make, model, year, vin, id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Błąd serwera');
  }
});

// Start
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => console.log(`Backend działa na porcie ${PORT}`));

