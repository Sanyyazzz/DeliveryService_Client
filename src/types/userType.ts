export type UserType = {
    id:number,
    name: string,
    phoneNumber: string,
    address: AddressType[],
    orderHistory: Order[]
}

export type AddressType = {
    id: number,
    address: string
}

export type Order = {
    id: number,
    fromAddress: string,
    toAddress: string,
    totalPrice: number,
    statusId: OrderStatus
}

export enum OrderStatus {
    ".",
    "Завершено",
    "В дорозі",
    "Замовлено"
}
