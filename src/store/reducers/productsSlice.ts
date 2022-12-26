import { createSlice } from '@reduxjs/toolkit'
import {ProductsType} from "../../types/productsType";

const initialState : ProductsType[] =
    [{
        id:0,
        imageURL: "/image/Burger-PNG.png",
        productTitle: "Чизбургерг",
        productWeight: 500,
        price: 96.50
    },
    {
    id:1,
        imageURL: "/image/Burger-Transparent-Background-PNG.png",
    productTitle: "Чизбургерг",
    productWeight: 250,
    price: 97.60
    },
    {
    id:2,
        imageURL: "/image/Burger-Transparent-PNG.png",
    productTitle: "Чизбургерг з двома котлетами",
    productWeight: 300,
    price: 105.60
    },
    {
    id:3,
        imageURL: "/image/Burger-Transparent-PNG.png",
    productTitle: "Чизбургерг з двома котлетами",
    productWeight: 380,
    price: 110.60
    }]

export const productsSlice = createSlice({
    name: 'products',
    initialState: initialState,

    reducers: {
    },
})

// Action creators are generated for each case reducer function
export const {} = productsSlice.actions

export default productsSlice.reducer