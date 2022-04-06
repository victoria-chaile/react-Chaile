import React from 'react';
import { useState } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { useCartContext } from '../Context/cartContext';

const ItemCount = ({prod}) => {
  const { addtoCart }=useCartContext()
  const valorInicial = 1; 
  const stock = 10; 

  const [numero, setnumero] = useState(valorInicial);
  const [productoAgregado, setProductoAgregado] = useState(false);

  const onAdd = (numero) => {
   setProductoAgregado(true);
   addtoCart({...prod, cantidad : numero})
  };

  const addProduct = (num) => {
    setnumero(numero + num);
  };

    console.log("hola " + productoAgregado)
  return (
    <div className="count-container">
     
      {productoAgregado?
      <div>
      <Link to={`/`}>
      <button 
       className="btn btn-secondary"
       onClick={() => {}}
     >
       Seguir comprando
     </button>
     </Link>
     <Link to={`/carrito`}>
     <button
       className="btn btn-secondary"
       onClick={() => {}}
       
     >
       Terminar compra
     </button>
     </Link>
     </div>
    :
    <div>
    <div className="count-container__contador">
    <button
      className="count-container__button"
      onClick={() => addProduct(-1)}
      disabled={numero === valorInicial ? true : null}
    >
      -
    
    </button>
    <span className="count-container__numero">{numero}</span>
    <button
      className="count-container__button"
      onClick={() => addProduct(+1)}
      disabled={numero === stock ? true : null}
    >
      +
    </button>
  </div>

    <button
      className="btn btn-light"
      onClick={() => onAdd(numero)}
      disabled={stock === 0 ? true : null}
    >
      Agregar
    </button>
    </div>
    }

    </div>
  );
};

export default ItemCount;

