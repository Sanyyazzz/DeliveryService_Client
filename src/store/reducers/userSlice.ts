import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {AddressType, OrderStatus, UserType} from "../../types/userType";

const initialState : UserType = {
    id:0,
    name:"Oleksandr",
    phoneNumber:"+380950137179",
    address:[{id:0, address:"pr.Lisnuy 9"}, {id:1, address:"вул. Дарбіняна 10"}],
    orderHistory: [{id:0, totalPrice: 450, status: OrderStatus.Ordered}]
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

        }
    },
})

// Action creators are generated for each case reducer function
export const { setUser, addAddressUser, deleteAddressUser, saveUser, addOrderToHistory } = userSlice.actions

export default userSlice.reducer