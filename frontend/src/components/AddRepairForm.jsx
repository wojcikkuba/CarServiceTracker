import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const API = 'http://carservice.local/api';

const AddRepairForm = () => {
  const { id } = useParams();
  const [form, setForm] = useState({ description: '', cost: '', date: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`${API}/cars/${id}/repairs`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Dodaj naprawę</h3>
      <input name="description" placeholder="Opis" onChange={handleChange} required />
      <input name="cost" placeholder="Koszt" type="number" onChange={handleChange} />
      <input name="date" type="date" onChange={handleChange} />
      <button type="submit">Dodaj</button>
    </form>
  );
};

export default AddRepairForm;
