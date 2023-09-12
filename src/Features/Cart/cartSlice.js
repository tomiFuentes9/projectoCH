import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const sumTotal = (items) => {
  items
    .map((item) => item.price * item.quantity)
    .reduce((acc, curr) => acc + curr, 0);
};

export const cartSlice = createSlice({
  name: "Cart",
  initialState: {
    value: {
      user: "User 1",
      updatedAt: "",
      total: null,
      items: [],
    },
  },
  reducers: {
    addCartItem: (state, action) => {
      const productExists = state.value.items.some(
        (item) => item.id === action.payload.id
      );

      if (productExists) {
        state.value.items = state.value.items.map((item) => {
          if (item.id === action.payload.id) {
            item.quantity += action.payload.quantity;
            return item;
          }
          return item;
        });
      } else state.value.items.push(action.payload);

      state.value.total = state.value.items.reduce(
        (acc, currentItem) => (acc += currentItem.price * currentItem.quantity),
        0
      );
      state.value.updatedAt = new Date().toLocaleString();
    },
    removeCartItem: (state, action) => {
      state.value.items = state.value.items.filter(
        (item) => item.id !== action.payload
      );
      state.value.total = sumTotal(state.value.items);
    },
    clearCart: (state) => {
      state.value.items = [];
      state.value.total = null;
    },
  },
});

export const { addCartItem, removeCartItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
