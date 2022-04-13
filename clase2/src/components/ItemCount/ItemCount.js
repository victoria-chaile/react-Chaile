import React from "react";
import { useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { useCartContext } from "../Context/cartContext";

const ItemCount = ({ prod }) => {
  const { addtoCart } = useCartContext();
  const initialValue = 1;
  const stock = 10;

  const [number, setnumber] = useState(initialValue);
  const [cartProduct, setcartProduct] = useState(false);

  const onAdd = (number) => {
    setcartProduct(true);
    addtoCart({ ...prod, quantity: number });
  };

  const addProduct = (num) => {
    setnumber(number + num);
  };

  return (
    <div className="count-container">
      {cartProduct ? (
        <div>
          <Link to={`/`}>
            <button className="btn btn-secondary" onClick={() => {}}>
              Seguir comprando
            </button>
          </Link>
          <Link to={`/carrito`}>
            <button className="btn btn-secondary" onClick={() => {}}>
              Terminar compra
            </button>
          </Link>
        </div>
      ) : (
        <div>
          <div className="count-container__contador">
            <button
              className="count-container__button"
              onClick={() => addProduct(-1)}
              disabled={number === initialValue ? true : null}
            >
              -
            </button>
            <span className="count-container__number">{number}</span>
            <button
              className="count-container__button"
              onClick={() => addProduct(+1)}
              disabled={number === stock ? true : null}
            >
              +
            </button>
          </div>

          <button
            className="btn btn-light"
            onClick={() => onAdd(number)}
            disabled={stock === 0 ? true : null}
          >
            Agregar
          </button>
        </div>
      )}
    </div>
  );
};

export default ItemCount;
