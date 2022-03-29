import React from "react";
import ItemCount from "../ItemCount/ItemCount";

export default function ItemDetail({p}) {
  let path = require(`../../../public/img/${p.src}`)
  return (
  <div class='center-block'>
    <div class="card col-xs-12" style={{ width: "35rem" }}>
      <div class="row">
        <div class="col">
          <img
            src={path}
            class="card-img-top "
            alt="..."
          />
        </div>
        <div class="col col-xs-12">
          <div class="card-body">
            <h5 class="card-title">{p.name}</h5>
            <p class="card-text">{"Disponible en varios colores" + p.descripcion}</p>
            <p class="card-text">{"Tu consulta no molesta!" + p.descripcion}</p>
            <ItemCount/>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
