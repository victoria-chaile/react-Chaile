import React from "react";
import { useCartContext } from "../Context/cartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";

export default function Form({ fnText, fnRemove }) {
  const { cartList, total } = useCartContext();
  const createOrder = (event) => {
    event.preventDefault();
    let order = {};

    order.buyer = {
      name: `${event.target[0].value} ${event.target[1].value}`,
      email: event.target[2].value,
      phone: event.target[3].value,
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
    addDoc(queryCollection, order).then((resp) => {
      fnRemove(true, null);
      fnText(`Gracias por la compra! Su id es: ${resp.id}`);
    });
  };
  return (
    <div>
      <form className="row g-3" onSubmit={createOrder}>
        <div className="col-md-6">
          <label htmlFor="validationServer01" className="form-label">
            Nombre:
          </label>
          <input
            type="text"
            className="form-control"
            id="validationServer01"
            required
          />
          <div className="valid-feedback">OK!</div>
        </div>
        <div className="col-md-6">
          <label htmlFor="validationServer02" className="form-label">
            Apellido:
          </label>
          <input
            type="text"
            className="form-control"
            id="validationServer02"
            required
          />
          <div className="valid-feedback">OK!</div>
        </div>
        <div className="col-md-6">
          <label htmlFor="validationServer03" className="form-label">
            Correo Electronico:
          </label>
          <input
            type="email"
            className="form-control"
            id="validationServer03"
            aria-describedby="validationServer03Feedback"
            required
          />
          <div id="validationServer03Feedback" className="invalid-feedback">
            Por favor ingrese un email valido
          </div>
        </div>
        <div className="col-md-6">
          <label htmlFor="validationServer05" className="form-label">
            Telefono:
          </label>
          <input
            type="tel"
            pattern="[0-9]{4}-[0-9]{7}"
            className="form-control"
            id="validationServer05"
            aria-describedby="validationServer05Feedback"
            required
          />
          <small>Format: 3351-1234567</small>
          <div id="validationServer05Feedback" className="invalid-feedback">
            Por favor ingrese un numero valido
          </div>
        </div>
        <div className="col-12">
          <button className="btn btn-dark" type="submit">
            Generar Orden
          </button>
        </div>
      </form>
    </div>
  );
}
