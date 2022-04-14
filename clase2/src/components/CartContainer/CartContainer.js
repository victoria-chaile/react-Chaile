import React from "react";
import Cart from "../Cart/Cart";
import { useCartContext } from "../Context/cartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";

export default function CartContainer() {
  const { cartList, total, removetoCart } = useCartContext();
  const createOrder = () => {
    let order = {};

    order.buyer = {
      name: "Victoria",
      email: "victoriachaile.a@gmail.com",
      phone: "6564541386",
    };
    order.total = total;

    order.items = cartList.map((cartItem) => {
      const id = cartItem.id;
      const title = cartItem.name;
      const price = cartItem.price * cartItem.quantity;

      return { id, title, price };
    });

    const db = getFirestore();
    const queryCollection = collection(db, "orders");
    addDoc(queryCollection, order).then((resp) => console.log(resp));
  };

  return (
    <div>
      {cartList.length === 0 ? (
        <h4>¡No tiene productos agregados!</h4>
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
              <button
                type="button"
                className="btn btn-dark"
                onClick={() => createOrder()}
              >
                Generar Orden
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
