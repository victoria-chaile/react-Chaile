import React from "react";
import { useCartContext } from "../Context/cartContext";

function Cart({ product }) {
  const { removetoCart } = useCartContext();
  return (
    <div className="card mb-3" style={{ maxWidth: "540px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={require("../../../public/img/" + product.src)}
            className="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{"$" + product.price}</p>
            <h3 className="card-text">
              {"Agregaste " + product.quantity + " productos"}
            </h3>
            <button
              type="button"
              onClick={() => removetoCart(false, product)}
              className="btn btn-outline-dark"
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
