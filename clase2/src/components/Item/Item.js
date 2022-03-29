import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default function Item ({producto}) {
    return (
<div className="card" style={{width: "18rem"}}>
        <img src={require("../../../public/img/"+producto.src)} className="card-img-top " alt="..." height="300" />
    <div className="card-body">
        <h5 className="card-title">{producto.name}</h5>
        <p className="card-text">{producto.descripcion}</p>
        <p className="card-text">{"$"+producto.precio}</p>
        <Link to={`/detalle/${producto.id}`}><a className="btn btn-secondary">Detalles</a></Link>
    </div>
</div>
    )
}




