import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./Reducers/CartReducer";

export const Store = configureStore({
  reducer: {
    CartReducer: CartReducer,
  },
});

export default Store;
