import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import data from '../data/products.json';
export default function ItemListContainer() {
  const [items, setItems] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const filteredItems = data.filter(item => item.categoria === id);
    if (filteredItems.length > 0) {
      setItems(filteredItems);
    } else {
      setItems(data);
    }
  }, [id]);

  return (
    <div className="card-container">
      {items.map(item => (
        <div key={item.id} className="card">
          <h2>{item.titulo}</h2>
          <img src={item.imagen} alt={item.titulo} />
          <p>Precio: ${item.precio}</p>
        </div>
      ))}
    </div>
  );
}
