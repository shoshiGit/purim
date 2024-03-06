import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProductList from "./features/product/ProductList";
import ProductDetails from "./features/product/ProductDetails";
import Basket from "./features/order/Basket";
import SmallBasket from "./features/order/SmallBasket";
import OrderDetails from "./features/order/OrderDetails";
import NavBar from "./NavBar";
import Login from "./features/user/Login";
import SingUp from "./features/user/SingUp";
import Home from "./Home";
import { useState } from "react";

//npm i mdb-react-ui-kit
//npm i @fortawesome/fontawesome-free
//npm i --save mdb-react-ui-kit 
//npm install @mui/material @emotion/react @emotion/styled      
//npm install @mui/icons-material      
function App() {
const [currentUser,setCurrentUser]=useState('');
if(currentUser){
  console.log(currentUser)
}
  return (
    <>
      <NavBar />
 
      <Routes>

      <Route path="list" element={<ProductList />}>
          <Route path=":id" one element={<ProductDetails />} />
        </Route>
        <Route path="register" element={<SingUp />} />
        <Route path="login" element={<Login />} />
        <Route path="basket" element={<Basket />} />
        <Route path="SmallBasket" element={<SmallBasket />} />
        <Route path="orderDetails" element={<OrderDetails/>}/>
        <Route  path="*" element={<Home/>}/>
      </Routes>
    </>
  );
}

export default App;

