import { configureStore } from "@reduxjs/toolkit";
import BasketReducer from "./slice/basketslice";

export const store = configureStore({
  reducer: {
    basket: BasketReducer,
  },
});
