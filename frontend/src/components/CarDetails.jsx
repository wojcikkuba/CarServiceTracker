import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const API = 'http://carservice.local/api';

const CarDetails = () => {
  const { id } = useParams();
  const [repairs, setRepairs] = useState([]);
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(`${API}/cars/${id}/repairs`)
      .then((res) => res.json())
      .then(setRepairs);

    fetch(`${API}/cars/${id}/services`)
      .then((res) => res.json())
      .then(setServices);
  }, [id]);

  return (
    <div>
      <h2>Szczegóły samochodu (ID: {id})</h2>

      <h3>Naprawy</h3>
      <ul>
        {repairs.map((r) => (
          <li key={r.id}>{r.date}: {r.description} – {r.cost} zł</li>
        ))}
      </ul>

      <h3>Przeglądy</h3>
      <ul>
        {services.map((s) => (
          <li key={s.id}>{s.date}: {s.description} – {s.cost} zł ({s.status})</li>
        ))}
      </ul>
    </div>
  );
};

export default CarDetails;
