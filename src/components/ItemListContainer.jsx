import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Style.css';
import img from "../assets/01.jpg"

import data from '../data/products.json';

export default function ItemListContainer() {
  const [items, setItems] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const filteredItems = data.filter(item => item.categoria === id);
    if (filteredItems.length > 0) {
      setItems(filteredItems);
    } else {
      setItems(data);
    }
  }, [id]);

  const handleVerProducto = (productId) => {
    const product = items.find(item => item.id === productId);
    setSelectedProduct(product);
  };

  return (
    <div className="card-container">
      <div className="grid-container">
        {items.map(item => (
          <div key={item.id} className="card">
            <h2>{item.titulo}</h2>
            <img src={img} alt={item.titulo} />
            <p>Precio: ${item.precio}</p>
            <button onClick={() => handleVerProducto(item.id)}>Ver Producto</button>
          </div>
        ))}
      </div>
      {selectedProduct && (
        <div className="detalle-producto">
          <h3>Detalles del Producto</h3>
          <p>Título: {selectedProduct.titulo}</p>
          <p>Precio: ${selectedProduct.precio}</p>
        </div>
      )}
    </div>
  );
}
