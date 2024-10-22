import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../src/slices/CartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
