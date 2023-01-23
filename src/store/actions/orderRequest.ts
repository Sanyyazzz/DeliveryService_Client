import {OrderInputType} from "../../types/orderType";
import axios from "axios";
import {deleteAllItem} from "../reducers/cartSlice";
import {addOrderToHistory, cancelOrder} from "../reducers/userSlice";

const config = {
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
};

export const sendOrderToApi = (order : OrderInputType) => {
    return async (dispatch: any) => {
        const response = await axios.post(`https://deliveryservice.somee.com/api/DeliveryService`, order)
        //console.log(response);
        dispatch(deleteAllItem())
        dispatch(addOrderToHistory(response.data))
    }
}

export const cancelOrderToApi = (id : number) => {
    return async (dispatch: any) => {
        let response = await axios.delete(`https://deliveryservice.somee.com/api/DeliveryService/${id}`, config);
        console.log(response);
        if(response.status == 200){
            dispatch(cancelOrder(id));
        }
        else{
            alert("Щось пішло не так, спробуйте ще раз пізніше")
        }
    }
}