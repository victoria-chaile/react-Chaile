import React from "react";
import Cart from "../Cart/Cart";
import { useCartContext } from "../Context/cartContext";

export default function CartContainer() {
  const { cartList, total, removetoCart } = useCartContext();

  return (
    <div>
      {cartList.length === 0 ? (
        <h4>¡No tiene productos agregados!</h4>
      ) : (
        <div className="row">
          <div className="col">
            {cartList.map((product) => (
              <div>{<Cart key={product.id} product={product} />}</div>
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
          </div>
        </div>
      )}
    </div>
  );
}
