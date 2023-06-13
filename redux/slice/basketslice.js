import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (basketitem) => basketitem.id === action.payload.id
      );

      let newItems = [...state.items];
      if (index >= 0) {
        newItems.splice(index, 1);
      } else {
        console.warn("unavailable");
      }
      state.items = newItems;
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

export const selectedItem = (state) => state.basket.items;

export default basketSlice.reducer;
