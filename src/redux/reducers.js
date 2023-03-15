import { createReducer } from "@reduxjs/toolkit";
import {
  addToCart,
  decrement,
  deleteFromCart,
  calculatePrice,
} from "./actions";

export const cartReducer = createReducer(
  {
    cartItems: [],
    subToatal: 0,
    shipping: 0,
    tax: 0,
    total: 0,
  },
  (builder) => {
    builder
      .addCase(addToCart, (state, action) => {
        const item = action.payload;
        const isItemExist = state.cartItems.find((i) => i.id === item.id);

        if (isItemExist) {
          state.cartItems.forEach((i) => {
            if (i.id === item.id) i.quantity += 1;
          });
        } else {
          state.cartItems.push(item);
        }
      })
      .addCase(decrement, (state, action) => {
        const item = state.cartItems.find((i) => i.id === action.payload);
        if (item.quantity > 1) {
          state.cartItems.forEach((i) => {
            if (i.id === item.id) {
              i.quantity -= 1;
            }
          });
        }
      })
      .addCase(deleteFromCart, (state, action) => {
        state.cartItems = state.cartItems.filter(
          (i) => i.id !== action.payload
        );
      })
      .addCase(calculatePrice, (state) => {
        let sum = 0;
        state.cartItems.forEach((i) => (sum += i.price * i.quantity));
        state.subToatal = sum;
        state.shipping = state.subToatal > 1000 ? 0 : 200;
        state.tax = +(state.subToatal * 0.18).toFixed();
        state.total = state.subToatal + state.shipping + state.tax;
      });
  }
);
