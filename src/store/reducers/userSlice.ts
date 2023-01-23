import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {AddressType, Order, OrderStatus, UserType} from "../../types/userType";

const initialState : UserType | any = null;

export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,

    reducers: {
        setUser: (state, action: PayloadAction<UserType>) => {
            return action.payload;
        },

        saveUser: (state, action: PayloadAction<UserType>) => {
            return action.payload;
        },

        addAddressUser: (state, action: PayloadAction<string>) => {
            let maxId = 0;
            state.address.forEach((p : AddressType)=>{
                if(p.id > maxId){
                    maxId = p.id;
                    maxId++;
                }
            })
            state.address.push({id:maxId, address: action.payload})
        },

        deleteAddressUser: (state, action: PayloadAction<AddressType>) => {
            let index = state.address.findIndex((p : AddressType)=>p.id == action.payload.id)
            state.address.splice(index, 1)
        },

        addOrderToHistory: (state, action) => {
            state.orderHistory.push(action.payload);
        },

        cancelOrder: (state, action) => {
            let index = state.orderHistory.findIndex((p : Order)=>p.id == action.payload)
            state.orderHistory.splice(index, 1);
        }
    },
})

// Action creators are generated for each case reducer function
export const { setUser, addAddressUser, deleteAddressUser, saveUser, addOrderToHistory, cancelOrder } = userSlice.actions

export default userSlice.reducer