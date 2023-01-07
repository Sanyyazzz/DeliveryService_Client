import {ProductInInputOrder} from "./productsType";

export type OrderInputType = {
    orderList: ProductInInputOrder[],
    totalPrice: number,
    fromAddress: string,
    toAddress: string,
    userId: number,
    statusId: number
}