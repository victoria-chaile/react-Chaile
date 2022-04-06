import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

function CartContextProvider({ children }) {
  const [cartList, setCartList] = useState([]);

  const addtoCart = (item) => {
    if (cartList.filter((e) => e.id === item.id).length > 0) {
      console.log("producto ya agregado")
    } else {
      setCartList([...cartList, item]);
    }
  };
  console.log(cartList);

  return (
    <CartContext.Provider value={{ cartList, addtoCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
