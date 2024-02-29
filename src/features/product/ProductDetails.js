import { useNavigate, useParams } from "react-router-dom";
import { getProductById } from "./productApi";
import { useEffect, useState } from "react";
import { addtoCart, isInCart } from "../order/orderSlice";
import { useDispatch } from "react-redux";



const ProductDetails = () => {

 const [productD,setProductD]=useState([]);
  let { id } = useParams();
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addtoCart(productD));
  };


  let navigate = useNavigate();
  useEffect(() => {
    getProductById(id)
      .then((res) => {
        setProductD(res.data);
      })
      .catch((err) => {
        alert("הבאת הנתונים מהשרת נכשלה");
        console.log(err);
      });
    })
    

  return (
    <div
      style={{
        backgroundColor: "#00000029",
        position: "fixed",
        top: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ backgroundColor: "white", width: "50%" }}>
        details {id}
        <p>{ productD["name"]}</p>
        <button disabled={!isInCart(productD.id)} onClick={handleAddToCart}>Add to Cart</button>

        </div>
  
      <button
        onClick={() => {
          navigate(-1);
        }}
      > back</button>

    </div>
  );
};

export default ProductDetails;
