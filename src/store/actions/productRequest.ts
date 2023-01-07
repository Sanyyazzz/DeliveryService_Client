import axios from 'axios'
import {setProduct} from "../reducers/productsSlice";

const config = {
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
};

export const getProductByCategory = (id: number) => {
    return async (dispatch: any) => {
        const response = await axios.get(`https://deliveryservice.somee.com/api/DeliveryService/${id}`, config)
        //console.log(response);
        dispatch(setProduct(response.data))
    }
}