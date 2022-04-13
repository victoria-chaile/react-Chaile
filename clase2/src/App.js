import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import React from "react";
import CartContextProvider from "./components/Context/cartContext";
import CartContainer from "./components/CartContainer/CartContainer";


function App() {
  let title = "Black and White";
  let greetings = "Productos Disponibles";

  return (
    <div className="App">
      <BrowserRouter>
        <CartContextProvider>
          <NavBar />
          <title titleprops={title} />

          <Routes>
            <Route
              path="/detail/:detailId"
              element={<ItemDetailContainer />}
            ></Route>
            <Route
              path="/"
              element={<ItemListContainer greeting={greetings} />}
            ></Route>
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer />}
            ></Route>
            <Route path="/carrito" element={<CartContainer />}></Route>
            <Route path="/*" element={<Navigate to="/" />}></Route>
          </Routes>
        </CartContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
