import React, { Component, useEffect, useState } from 'react'
import Item from '../Item/Item'
import {getFech} from '../Helpers/getFech'
import { useParams } from 'react-router-dom'

export default function ItemList () {
    const [productos, setProductos] = useState([])
    const{categoriaId}= useParams()

    useEffect (()=>{
    if (categoriaId) {
      getFech
      .then(resp => setProductos(resp.filter(item=>item.categoria===categoriaId)))
      .catch (err => console.log(err))
      console.log("Filtra"); 
     
    }else{
      getFech
      .then(resp => setProductos(resp))
      .catch (err => console.log(err)) 
      console.log(" No filtra");
    }
    },[categoriaId])
    

    console.log(categoriaId)
    console.log(productos)
   
    return (
      <div>
            <div className="row"> 
            {productos.map((producto)=><div className="col">{<Item producto={producto}/>}</div>)} 
             </div>
      </div>
    )
  }


