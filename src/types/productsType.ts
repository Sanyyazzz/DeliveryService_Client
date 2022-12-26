export type ProductsType = {
    id: number
    imageURL: string,
    productTitle: string,
    productWeight: number,
    price: number
}

export type ProductsTypeInCart = {
    id: number
    imageURL: string,
    productTitle: string,
    productWeight: number,
    price: number,
    count: number
}