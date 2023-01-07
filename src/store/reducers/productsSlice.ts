import { createSlice } from '@reduxjs/toolkit'
import {ProductsType} from "../../types/productsType";

const initialState : ProductsType[] = []

export const productsSlice = createSlice({
    name: 'products',
    initialState: initialState,

    reducers: {
        setProduct: (state, action) => {
            return action.payload;
        }
    },
})

// Action creators are generated for each case reducer function
export const { setProduct } = productsSlice.actions

export default productsSlice.reducer