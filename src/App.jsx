import { useState } from "react";
import { Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className=" relative ">
      <div style={{ position: "fixed", top: 0, width: "100%", zIndex: "1" }}>
        <Navbar></Navbar>
      </div>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/store" element={<Store />}></Route>

        <Route path="/cart" element={<Cart />}></Route>
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </div>
  );
}

export default App;
