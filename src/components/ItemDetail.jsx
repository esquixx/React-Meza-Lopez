import React from 'react';
import img from "../assets/01.jpg";
import './Style.css';

export default function ItemDetail({ detail }) {
  return (
    <div className="item-card">
      <h2>{detail.titulo}</h2>
      <img src={img} alt={detail.titulo} />
      <p>{detail.descripcion}</p>
      <p>Categoría: {detail.categoria}</p>
      <p>Precio: ${detail.precio}</p>
      <button>Agregar al carrito</button>
    </div>
  );
}
