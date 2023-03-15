import { createAction } from "@reduxjs/toolkit";

export const addToCart = createAction("addToCart", (item) => ({
  payload: item,
}));
export const decrement = createAction("decrement", (id) => ({
  payload: id,
}));
export const deleteFromCart = createAction("deleteFromCart", (id) => ({
    payload: id,
  }));
export const calculatePrice = createAction("calculatePrice");
