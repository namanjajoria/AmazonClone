
import { useState } from "react";
import "./App.css";
import MainNavbar from "./Components/MainNavbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import Order from "./Components/Order";

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      <MainNavbar setSearchTerm={setSearchTerm} />
      <Routes>
        <Route exact path="/" element={<Home searchTerm={searchTerm} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Order />} />
      </Routes>
    </>
  );
}

export default App;
