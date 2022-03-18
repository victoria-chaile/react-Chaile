import React, { Component } from 'react'

export default function Item ({producto}) {
    return (
<div class="card" style={{width: "18rem"}}>
        <img src={require("./img/"+producto.src)} class="card-img-top " alt="..."/>
    <div class="card-body">
        <h5 class="card-title">{producto.name}</h5>
        <p class="card-text">{producto.descripcion}</p>
        <p class="card-text">{"$"+producto.precio}</p>
        <a href="#" class="btn btn-primary">Detalles</a>
    </div>
</div>
    )
}

