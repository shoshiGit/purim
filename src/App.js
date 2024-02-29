import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProductList from "./features/product/ProductList";
import ProductDetails from "./features/product/ProductDetails";
import Login from "./features/user/Login";
import Basket from "./features/order/Basket";
import NavBar from "./NavBar";
import SighUp from "./features/user/SingUp";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        {/* <Route path="contact" element={}/> */}
        <Route path="list" element={<ProductList />}>
          <Route path=":id"  one element={<ProductDetails />} />
        </Route>
        <Route path="register" element={<SighUp/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="login" element={<Login />} />
        <Route path="basket" element={<Basket />} />
      </Routes>
    </>
  );
}

export default App;
