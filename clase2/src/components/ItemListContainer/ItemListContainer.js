
import React from 'react'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import ItemList from '../ItemList/ItemList'

export default function ItemListContainer({greeting}) {


return (
    <div class="container">
        <h3 style={{color:'black'}}>{ greeting }</h3>
        <ItemList />
        <ItemDetailContainer id={"1"}/>
        <ItemDetailContainer id={"2"}/>
        <ItemDetailContainer id={"3"}/>
        <ItemDetailContainer id={"4"}/>
    </div>
    )
}






