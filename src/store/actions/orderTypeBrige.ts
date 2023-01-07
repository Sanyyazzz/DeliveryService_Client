import {CartType, ProductInInputOrder, ProductPointInCartType, ProductsType} from "../../types/productsType";
import {OrderInputType} from "../../types/orderType";
import {sendOrderToApi} from "./orderRequest";

export const createOrder = (userId : number, cart : CartType, toAddress : string) => {
    return async (dispatch: any) => {
        let order : OrderInputType = {
            orderList: createOrderList(cart.orderPoints),
            totalPrice: cart.totalPrice,
            fromAddress: "Static Address",
            toAddress: toAddress,
            userId: 1,
            statusId: 1
        }

        dispatch(sendOrderToApi(order))
    }
}

const createOrderList = (list : ProductPointInCartType[]) => {
    let orderList : ProductInInputOrder[] | any = list.map((p)=>{
        return {
            productId: p.product.id,
            count: p.count
        };
    });
    return orderList;
}