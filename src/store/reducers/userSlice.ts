import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {AddressType, OrderStatus, UserType} from "../../types/userType";

const initialState : UserType = {
    id:0,
    name:"",
    phoneNumber:"",
    address:[],
    orderHistory: []
};

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
            state.address.forEach((p)=>{
                if(p.id > maxId){
                    maxId = p.id;
                    maxId++;
                }
            })
            state.address.push({id:maxId, address: action.payload})
        },

        deleteAddressUser: (state, action: PayloadAction<AddressType>) => {
            let index = state.address.findIndex((p)=>p.id == action.payload.id)
            state.address.splice(index, 1)
        },

        addOrderToHistory: (state, action) => {
            state.orderHistory.push(action.payload);
        }
    },
})

// Action creators are generated for each case reducer function
export const { setUser, addAddressUser, deleteAddressUser, saveUser, addOrderToHistory } = userSlice.actions

export default userSlice.reducer