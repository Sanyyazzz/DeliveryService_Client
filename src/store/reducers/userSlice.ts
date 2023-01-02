import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {ProductsType, ProductPointInCartType} from "../../types/productsType";
import {AddressType, UserType} from "../../types/userType";

const initialState : UserType = {
    id:0,
    name:"Oleksandr",
    phoneNumber:"+380950137179",
    address:[{id:0, address:"pr.Lisnuy 9"}, {id:1, address:"вул. Дарбіняна 10"}]
};

export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,

    reducers: {
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
    },
})

// Action creators are generated for each case reducer function
export const { addAddressUser, deleteAddressUser, saveUser } = userSlice.actions

export default userSlice.reducer