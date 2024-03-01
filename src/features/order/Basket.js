import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrdersFromServer } from "./orderApi";
import { addtoCart, setOrders } from "./orderSlice";

const Basket = () => {

  const dispatch = useDispatch();
  const basketItems = useSelector((state) => state.order.basket);
  const orders = useSelector((state) => state.order.orders);

  const handleAddToCart = (item) => {
    dispatch(addtoCart(item));
  };

  //הצגה בלולאה של כל המוצרים שבסל
  //let basketItems = useSelector((state) => state.order.basket);

  useEffect(() => {
    // Fetch orders from the server and update Redux state
    getOrdersFromServer()
      .then((response) => {
        dispatch(setOrders(response.data));
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
      });
  }, [dispatch]);

  return (
    <div>Basket
      {/* {orders.map((item) => (
        <div key={item.id}>{item.name}
      </div>   
      ))} */}
      <div>
        {/* <h2>Orders:</h2>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>{order.name}</li>
        ))}
      </ul> */}

        <h2>Basket:</h2>
        {basketItems.map((item) => (
          <div key={item.id}>{item.name}
            <img src={item.imgUrl} alt={item.name} />
            <p>{item.price}מחיר:</p>
            <p>{item.qty}כמות</p>
            <p>{item.price * item.qty}סהכ </p>
          </div>

        ))}
      </div>
      {console.log(basketItems)}
    </div>
  );
};

export default Basket;