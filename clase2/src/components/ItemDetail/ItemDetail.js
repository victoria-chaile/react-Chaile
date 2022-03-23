import React from "react";

export default function ItemDetail({p}) {
  let path = require(`../../../public/img/${p.src}`)
  return (
    <div class="card" style={{ width: "18rem" }}>
      <div class="row">
        <div class="col">
          <img
            src={path}
            class="card-img-top "
            alt="..."
          />
        </div>
        <div class="col">
          <div class="card-body">
            <h5 class="card-title">{p.name}</h5>
            <p class="card-text">{p.descripcion}</p>
            <p class="card-text">{"$" + p.precio}</p>
            <a href="#" class="btn btn-primary">
              Detalles
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
