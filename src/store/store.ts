import { configureStore } from '@reduxjs/toolkit'
import menuItemsReducer from "./reducers/productsSlice";
import cartReducer from "./reducers/cartSlice";
import userReducer from "./reducers/userSlice";

export const store = configureStore({
    reducer: {
        menuItems: menuItemsReducer,
        cart: cartReducer,
        user: userReducer
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch