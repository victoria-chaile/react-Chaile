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
    const querydb = getFirestore();
    const queryCollection = collection(querydb, "productos");
    if (categoryId) {
      const queryFilter = query(
        queryCollection,
        where("category", "==", categoryId)
      );
      updateProducts(queryFilter);
    } else {
      updateProducts(queryCollection);
    }

    function updateProducts(query) {
      getDocs(query).then((resp) =>
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
