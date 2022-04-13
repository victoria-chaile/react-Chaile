import React from "react";
import ItemCount from "../ItemCount/ItemCount";

export default function ItemDetail({product}) {
  return ( 
    <div className="center-block">
      <div className="card col-xs-12" style={{ width: "35rem" }}>
        <div className="row">
          <div className="col">
            <img
              src={require(`../../../public/img/${product.src}`)}
              className="card-img-top "
              alt="..."
            />
          </div>
          <div className="col col-xs-12">
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">
                {"Disponible en varios colores" + product.description}
              </p>
              <p className="card-text">
                {"Tu consulta no molesta!" + product.description}
              </p>
              <ItemCount prod={product} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
