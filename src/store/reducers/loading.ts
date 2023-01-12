import { createSlice } from '@reduxjs/toolkit'
import {ProductsType} from "../../types/productsType";

const initialState = {
    isLoading: false
};

export const loadingSlice = createSlice({
    name: 'loading',
    initialState: initialState,

    reducers: {
        startLoading: (state) => {
            state.isLoading = true;
        },

        endLoading: (state) => {
            state.isLoading = false;
        }
    },
})

// Action creators are generated for each case reducer function
export const { startLoading, endLoading } = loadingSlice.actions

export default loadingSlice.reducer