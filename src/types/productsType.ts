export type CartType = {
    isOpenTabCart: boolean;
    totalPrice: number;
    orderPoints: ProductPointInCartType[];
}

export type ProductsType = {
    id: number
    imageURL: string,
    productTitle: string,
    productWeight: number,
    price: number
}

export type ProductPointInCartType = {
    id: number
    product: ProductsType
    count: number
}