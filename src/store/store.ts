import { configureStore } from '@reduxjs/toolkit'
import menuItemsReducer from "./reducers/productsSlice";
import cartReducer from "./reducers/cartSlice";
import userReducer from "./reducers/userSlice";
import loadingReducer from "./reducers/loading";

export const store = configureStore({
    reducer: {
        menuItems: menuItemsReducer,
        cart: cartReducer,
        user: userReducer,
        loading: loadingReducer
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch