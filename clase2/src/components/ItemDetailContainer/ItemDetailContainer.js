import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import {
  doc,
  getDoc,
  getFirestore,
} from "firebase/firestore";

export default function ItemDetailContainer() {
  const [product, setProduct] = useState(null);
  const {detailId} = useParams()

  useEffect(() => {
      const querydb = getFirestore()
      const queryProd = doc(querydb, 'productos', detailId)
  
      getDoc(queryProd)
      .then(resp => setProduct( {  id: resp.id, ...resp.data()  } ))
  
  },[detailId])
  return (
    <div>{product === null ? null : <ItemDetail key={1} product={product} />}</div>
  );
}
