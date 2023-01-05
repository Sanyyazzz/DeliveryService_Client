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
    totalPrice: number,
    status: OrderStatus
}

export enum OrderStatus {
    Complete,
    OnWay,
    Ordered
}
