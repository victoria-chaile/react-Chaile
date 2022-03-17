import React from 'react';
import { useState } from 'react';
import './styles.css';

const ItemCount = () => {
  const valorInicial = 1; 
  const stock = 10; 

  const [numero, setnumero] = useState(valorInicial);

  const onAdd = (numero) => {
    alert(`Agregaste ${numero} productos`);
  };

  const addProduct = (num) => {
    setnumero(numero + num);
  };

  return (
    <div className="count-container">
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
        className="button-primary"
        onClick={() => onAdd(numero)}
        disabled={stock === 0 ? true : null}
      >
        Añadir
      </button>
    </div>
  );
};

export default ItemCount;

