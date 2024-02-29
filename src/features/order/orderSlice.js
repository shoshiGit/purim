import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basket: [],
  address: "",
  orders: [],
};

const orderSLice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addtoCart: (state, action) => {
      //action.paylod{name:"...",id:""}
      let itemTo = state.basket.find((item) => item.id == action.payload.id);
      if (!itemTo) {
        state.basket.push({ ...action.payload, qty: 1 });
      } else {itemTo.qty++};
    },
    isInCart:(state,action)=>{
      let itemTo = state.basket.find((item) => item.id == action.payload.id);
      if(!itemTo)
      return false;
    return true;
    },
    setOrders: (state,action)=>{
      state.orders = action.payload;
    }
    //הופה לסל של מוצר בדיקה האם המוצר כבר קיים אם כן רק להגדיל את הכמות
    //הסרה מהסל
    //הפחתה בסל בודקת שלא מגיעים לאפס אם הכמות היא אפס להסיר
    //עדכון כתובת ההזמנה
  },
});
export const { addtoCart,setOrders,isInCart } = orderSLice.actions;
export default orderSLice.reducer;
