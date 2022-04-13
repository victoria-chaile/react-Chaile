import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

function CartContextProvider({ children }) {
  const [cartList, setCartList] = useState([]);
  const [total, setTotal] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  const addtoCart = (item) => {
    if (cartList.filter((e) => e.id === item.id).length > 0) {
      console.log("producto ya agregado");
    } else {
      setCartList([...cartList, item]);
      setTotal(total + item.price * item.quantity);
      setTotalQuantity(totalQuantity + item.quantity);
    }
  };

  const removetoCart = (removeAll, item) => {
    if (removeAll) {
      setCartList([]);
      setTotal(0);
      setTotalQuantity(0);
    } else {
      const arr = cartList.filter((e) => e.id !== item.id);
      setCartList(arr);
      setTotal(total - item.price * item.quantity);
      setTotalQuantity(totalQuantity - item.quantity);
    }
  };

  return (
    <CartContext.Provider
      value={{ cartList, addtoCart, total, removetoCart, totalQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
