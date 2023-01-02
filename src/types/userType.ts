export type UserType = {
    id:number,
    name: string,
    phoneNumber: string,
    address: AddressType[]
}

export type AddressType = {
    id: number,
    address: string
}
