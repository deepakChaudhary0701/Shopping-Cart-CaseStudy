
import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./cart-slice";
import CategorySlice from "./category-slice";

const store = configureStore({
    reducer: {
        cart: CartSlice.reducer,
        category: CategorySlice.reducer
    }
});

export default store;