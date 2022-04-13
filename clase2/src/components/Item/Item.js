import React from "react";
import { Link } from "react-router-dom";

export default function Item({ product }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={require("../../../public/img/" + product.src)}
        className="card-img-top "
        alt="..."
        height="300"
      />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text">{"$" + product.price}</p>
        <Link to={`/detail/${product.id}`}>
          <button className="btn btn-secondary">Detalles</button>
        </Link>
      </div>
    </div>
  );
}
