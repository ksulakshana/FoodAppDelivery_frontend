import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Register,
  Login,
  HomePage,
  ProductPage,
  CheckOutPage,
  Address,
  PaymentPage,
  OrderConfirmPage,
  ProfilePage,
  ProductCartPage,
} from "./pages/index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/product/:id" element={<ProductPage />}></Route>
        <Route path="/productcart/:id" element={<ProductCartPage />}></Route>
        <Route path="/checkout" element={<CheckOutPage />}></Route>
        <Route path="/address" element={<Address />}></Route>
        <Route path="/payment" element={<PaymentPage />}></Route>
        <Route path="/confirm" element={<OrderConfirmPage />}></Route>
        <Route path="/profile" element={<ProfilePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
