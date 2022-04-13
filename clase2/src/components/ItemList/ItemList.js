import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  collection,
  getFirestore,
  getDocs,
  where,
  query,
} from "firebase/firestore";
import Item from "../Item/Item";

export default function ItemList() {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    if (categoryId) {
      const querydb = getFirestore();
      const queryCollection = collection(querydb, "productos");
      const queryFilter = query(
        queryCollection,
        where("category", "==", categoryId)
      );
      getDocs(queryFilter).then((resp) =>
        setProducts(
          resp.docs.map((product) => ({ id: product.id, ...product.data() }))
        )
      );
    } else {
      const querydb = getFirestore();
      const queryCollection = collection(querydb, "productos");
      getDocs(queryCollection).then((resp) =>
        setProducts(
          resp.docs.map((product) => ({ id: product.id, ...product.data() }))
        )
      );
    }
  }, [categoryId]);

  return (
    <div>
      <div className="row">
        {products.map((prod) => (
          <div key={prod.id} className="col">
            {<Item product={prod} />}
          </div>
        ))}
      </div>
    </div>
  );
}
