import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {ProductsType, ProductPointInCartType, CartType} from "../../types/productsType";

const initialState : CartType = {
    isOpenTabCart: false,
    totalPrice: 0,
    orderPoints: []
}

export const cartSlice = createSlice({
    name: 'products',
    initialState: initialState,

    reducers: {
        addItemToCart: (state, action: PayloadAction<ProductsType>) => {
            let isItemInCart = false;
            state.orderPoints.forEach((p)=>{
                if(p.id == action.payload.id){
                    isItemInCart = true;
                    p.count++;
                }
            })

            if(!isItemInCart) state.orderPoints.push({id:action.payload.id, product:action.payload, count:1})
            state.totalPrice += action.payload.price;
        },

        incrementItemInCart: (state,action:PayloadAction<ProductPointInCartType>) => {
            let index = state.orderPoints.findIndex((p)=>p.id == action.payload.id);
            state.orderPoints[index].count++;
            state.totalPrice += action.payload.product.price;
        },

        decrementItemInCart: (state,action:PayloadAction<ProductPointInCartType>) => {
            let index = state.orderPoints.findIndex((p)=>p.id == action.payload.id);
            if(action.payload.count == 1){
                state.orderPoints.splice(index, 1)
            }else{
                state.orderPoints[index].count--;
            };

            state.totalPrice -= action.payload.product.price;
        },

        deleteAllItem: (state) => {
            state.orderPoints = [];
            state.totalPrice = 0;
        },

        deleteItem: (state,action:PayloadAction<ProductPointInCartType>) => {
            let index = state.orderPoints.findIndex((p)=>p.id == action.payload.id);
            let price = state.orderPoints[index].count * state.orderPoints[index].product.price;
            state.orderPoints.splice(index, 1);
            state.totalPrice -= price;
        },

        showHideCartTab: (state) => {state.isOpenTabCart = !state.isOpenTabCart}
    },
})

// Action creators are generated for each case reducer function
export const { addItemToCart, incrementItemInCart, decrementItemInCart, deleteAllItem, deleteItem, showHideCartTab } = cartSlice.actions

export default cartSlice.reducer