import React, { useEffect, useState } from 'react';

const API = 'http://carservice.local/api';

const CarList = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch(`${API}/cars`)
      .then((res) => res.json())
      .then((data) => setCars(data))
      .catch((err) => console.error('Błąd pobierania samochodów:', err));
  }, []);

  return (
    <div>
      <h2>Lista samochodów</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Marka</th>
            <th>Model</th>
            <th>Rok</th>
            <th>VIN</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car) => (
            <tr key={car.id}>
              <td>{car.id}</td>
              <td>{car.make}</td>
              <td>{car.model}</td>
              <td>{car.year}</td>
              <td>{car.vin}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CarList;
