import { configureStore } from '@reduxjs/toolkit'
import menuItemsReducer from "./reducers/productsSlice";
import cartReducer from "./reducers/cartSlice";

export const store = configureStore({
    reducer: {
        menuItems: menuItemsReducer,
        cartItems: cartReducer
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch