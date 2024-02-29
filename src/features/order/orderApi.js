import axios from "axios";

let baseUrl="http://localhost:4000/order";

export const addOrderToServer=(order)=>{//{userId,cart,address}
    return axios.post(baseUrl,order);
}
export const getOrdersFromServer=()=>{
    return axios.get(baseUrl)
}