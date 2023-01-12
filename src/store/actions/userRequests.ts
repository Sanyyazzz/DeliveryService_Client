import axios from "axios";
import {setProduct} from "../reducers/productsSlice";
import {setUser} from "../reducers/userSlice";
import {endLoading, startLoading} from "../reducers/loading";

const config = {
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
};

export const getUser = (id: number) => {
    return async (dispatch: any) => {
        dispatch(startLoading())
        const response = await axios.get(`https://deliveryservice.somee.com/api/DeliveryService/user/${id}`, config)
        response.data.address = [{id:0, address:"пр.Лісний 9"}, {id:1, address:"вул. Дарбіняна 10"}];
        dispatch(setUser(response.data))
        dispatch(endLoading())
    }
}