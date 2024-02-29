import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./productA.css"
import ProductDetails from "./ProductDetails";
import { addtoCart, isInCart } from "../order/orderSlice";
import { useState } from "react";



import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const OneProduct = ({ one }) => {
  let user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const [openSnackbar, setOpenSnackbar]= useState(false);
  
  const handleAddToCart = () => {
    dispatch(addtoCart(one));
    setOpenSnackbar(true);
  };
  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }setOpenSnackbar(false);
  }

  return (
    
    <div className="product">

      <Link to={""+one.id}><img src={one.imgUrl} alt={one.name} />  </Link>
      <h3>{one.name}</h3>
      <p>Price: {one.price} </p>
      {/* <Link to={"" + one.id}>הצג פרטים</Link> */}
      
      {user && user.role == "ADMIN" ? (
        <>
          <input type="button" value="עריכה" />
          <input type="button" value="מחיקה" />
        </>
      ) :

        // <input type="button" value="הוספה לסל" onClick={()=>(one)}/>
      
<button id="addButton" disabled={!isInCart(one.id)} onClick={handleAddToCart}>Add to Cart</button>
}
<Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
         {one.name} added to car
        </Alert>
      </Snackbar>
    </div>
  
  );
};

export default OneProduct;
