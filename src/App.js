import React from "react";
import Home from './Component/Home';
import Login from './Component/Login';
import Register from './Component/Register';
import User from './Component/User';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
const App = () => {
  return(
    <div>
     
  <ToastContainer> </ToastContainer>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Register />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/user" element={<User />}></Route>
    </Routes>
  </BrowserRouter>;
  </div>
  )
};

export default App;
