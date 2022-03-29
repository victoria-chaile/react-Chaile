import React, { Component, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItem } from "../Helpers/getFech";
import ItemDetail from "../ItemDetail/ItemDetail";

export default function ItemDetailContainer() {
  const [producto, setProducto] = useState(null);
  const{detalleId}= useParams()

  useEffect(() => {
    getItem(detalleId)
      .then((resp) => setProducto(resp))
      .catch((err) => console.log(err))
      .finally(() => console.log("Al ultimo"));
  }, []);

  console.log("testing " ,producto);

  return (
    <div>
      {
        producto === null? null : <ItemDetail key={1} p={producto} />
      }
    </div>
  );
}
