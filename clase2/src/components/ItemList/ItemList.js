import React, { Component, useEffect, useState } from 'react'
import Item from '../Item/Item'
import {getFech} from '../Helpers/getFech'

export default function ItemList () {
    const [productos, setProductos] = useState([])
    useEffect (()=>{
    getFech
        .then(resp => setProductos(resp))
        .catch (err => console.log(err))
        .finally (()=> console.log ("Al ultimo"))
    },[])

    console.log(productos)
   
    return (
      <div>
            <div class="row"> 
            {productos.map((producto)=><div class="col">{<Item producto={producto}/>}</div>)} 
             </div>
      </div>
    )
  }

