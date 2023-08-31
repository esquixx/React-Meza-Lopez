import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
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
            <Link to={`/item/${item.id}`} className="ver-mas">Ver Mas</Link>
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
