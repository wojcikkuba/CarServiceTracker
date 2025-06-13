import React, { useState } from 'react';

const API = 'http://carservice.local/api';

const AddCarForm = () => {
  const [car, setCar] = useState({ make: '', model: '', year: '', vin: '' });

  const handleChange = (e) => {
    setCar({ ...car, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`${API}/cars`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(car),
    });
    window.location.href = '/';
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Dodaj samochód</h2>
      <input name="make" placeholder="Marka" onChange={handleChange} required />
      <input name="model" placeholder="Model" onChange={handleChange} required />
      <input name="year" placeholder="Rok" type="number" onChange={handleChange} required />
      <input name="vin" placeholder="VIN" onChange={handleChange} required />
      <button type="submit">Zapisz</button>
    </form>
  );
};

export default AddCarForm;
