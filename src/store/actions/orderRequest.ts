import {OrderInputType} from "../../types/orderType";
import axios from "axios";
import {deleteAllItem} from "../reducers/cartSlice";


export const sendOrderToApi = (order : OrderInputType) => {
    return async (dispatch: any) => {
        const response = await axios.post(`https://deliveryservice.somee.com/api/DeliveryService`, order)
        console.log(response);
        dispatch(deleteAllItem())
    }
}