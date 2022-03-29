
import React from 'react'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import ItemList from '../ItemList/ItemList'

export default function ItemListContainer({greeting}) {


return (
    <div className="container">
        <h3 style={{color:'black'}}>{ greeting }</h3>
        <ItemList />
        
    </div>
    )
}






