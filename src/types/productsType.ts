export type CartType = {
    isOpenTabCart: boolean;
    totalPrice: number;
    orderPoints: ProductPointInCartType[];
}

export type ProductsType = {
    id: number
    image: string,
    productName: string,
    weight: number,
    price: number,
    categoryId: number
}

export type ProductPointInCartType = {
    id: number
    product: ProductsType
    count: number
}

export type ProductInInputOrder = {
    productId: number,
    count: number
}