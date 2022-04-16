import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../Context/cartContext";
import Cart from "../Cart/Cart";
import Form from "../Form/Form";

export default function CartContainer() {
  const { cartList, total, removetoCart } = useCartContext();
  const [text, setText] = useState("¡No tiene productos agregados!");
  return (
    <div>
      {cartList.length === 0 ? (
        <div>
          <h4>{text}</h4>
          <Link to={`/`}>
            <button className="btn btn-secondary" onClick={() => {}}>
              Volver a la tienda
            </button>
          </Link>
        </div>
      ) : (
        <div className="row">
          <div className="col">
            {cartList.map((product) => (
              <div key={product.id}>{<Cart product={product} />}</div>
            ))}
          </div>
          <div className="col">
            <div className="card-body">
              <h3 className="card-text">{"Valor total: $" + total}</h3>
              <button
                type="button"
                className="btn btn-dark"
                onClick={() => removetoCart(true, null)}
              >
                Vaciar Carrito
              </button>
            </div>
            <Form fnText={setText} fnRemove={removetoCart} />
          </div>
        </div>
      )}
    </div>
  );
}
