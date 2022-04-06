import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Titulo from "./components/titulo/titulo";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import React from "react";
import CartContextProvider from "./components/Context/cartContext";

function App() {
  //const obj= useContext(contextApp);
  ///console.log(obj);
  const array = ["b", "c", "d"];
  let a = "a";
  const newArray = [array];
  console.log(newArray);

  let titulo = "Black and White";
  let saludo = "¡Bienvenidos a todos!";

  const fnIngreso = () => {
    console.log("ingresando");
  };

  return (
    <div className="App">
      <BrowserRouter>
        <CartContextProvider>
          <NavBar />
          <Titulo tituloProps={titulo} />

          <Routes>
            <Route
              path="/detalle/:detalleId"
              element={<ItemDetailContainer />}
            ></Route>
            <Route
              path="/"
              element={<ItemListContainer greeting={saludo} />}
            ></Route>
            <Route
              path="/categoria/:categoriaId"
              element={<ItemListContainer />}
            ></Route>
            <Route path="/carrito"></Route>
            <Route path="/*" element={<Navigate to="/" />}></Route>
          </Routes>
        </CartContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;


