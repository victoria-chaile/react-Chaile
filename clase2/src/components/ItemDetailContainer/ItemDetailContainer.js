import React, { Component, useEffect, useState } from "react";
import { getItem } from "../Helpers/getFech";
import ItemDetail from "../ItemDetail/ItemDetail";

export default function ItemDetailContainer({ id }) {
  const [producto, setProducto] = useState(null);
  useEffect(() => {
    getItem(id)
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
