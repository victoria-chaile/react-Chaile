import React from "react";
import { useCartContext } from "../Context/cartContext";

function Cart({ producto }) {
  const { removetoCart } = useCartContext();
  return (
    <div class="card mb-3" style={{ maxWidth: "540px" }}>
      <div class="row g-0">
        <div class="col-md-4">
          <img
            src={require("../../../public/img/" + producto.src)}
            class="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 className="card-title">{producto.name}</h5>
            <p className="card-text">{"$" + producto.precio}</p>
            <h3 className="card-text">
              {"Agregaste " + producto.cantidad + " productos"}
            </h3>
            <button
              type="button"
              onClick={() => removetoCart(false, producto)}
              class="btn btn-outline-dark"
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
