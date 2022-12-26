import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {ProductsType, ProductsTypeInCart} from "../../types/productsType";

const initialState : ProductsTypeInCart[] = []

export const cartSlice = createSlice({
    name: 'products',
    initialState: initialState,

    reducers: {
        addItemToCart: (state, action: PayloadAction<ProductsType>) => {
            let isItemInCart = false;
            state.forEach((p)=>{
                if(p.id == action.payload.id){
                    isItemInCart = true;
                    p.count++;
                }
            })

            if(!isItemInCart) state.push({...action.payload, count:1})
        },

        incrementItemInCart: (state,action:PayloadAction<ProductsTypeInCart>) => {
            let index = state.findIndex((p)=>p.id == action.payload.id);
            state[index].count++
        },

        decrementItemInCart: (state,action:PayloadAction<ProductsTypeInCart>) => {
            let index = state.findIndex((p)=>p.id == action.payload.id);
            if(action.payload.count == 1){
                state.splice(index, 1)
            }else{
                state[index].count--;
            };
        }
    },
})

// Action creators are generated for each case reducer function
export const { addItemToCart, incrementItemInCart, decrementItemInCart } = cartSlice.actions

export default cartSlice.reducer