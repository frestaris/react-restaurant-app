import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const { categoryId, contentId, unitPrice } = action.payload;
      const existingItem = state.cart.find(
        (item) => item.categoryId === categoryId && item.contentId === contentId
      );
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice =
          existingItem.quantity * existingItem.unitPrice;
      } else {
        state.cart.push({
          ...action.payload,
          quantity: 1,
          totalPrice: unitPrice,
        });
      }
    },
    deleteItem(state, action) {
      const { categoryId, contentId } = action.payload;
      state.cart = state.cart.filter(
        (item) =>
          !(item.categoryId === categoryId && item.contentId === contentId)
      );
    },
    increaseItemQuantity(state, action) {
      const { categoryId, contentId } = action.payload;
      const item = state.cart.find(
        (item) => item.categoryId === categoryId && item.contentId === contentId
      );
      if (item) {
        item.quantity++;
        item.totalPrice = item.quantity * item.unitPrice;
      }
    },
    decreaseItemQuantity(state, action) {
      const { categoryId, contentId } = action.payload;
      const item = state.cart.find(
        (item) => item.categoryId === categoryId && item.contentId === contentId
      );
      if (item) {
        item.quantity--;
        item.totalPrice = item.quantity * item.unitPrice;
        if (item.quantity === 0) {
          state.cart = state.cart.filter(
            (cartItem) =>
              !(
                cartItem.categoryId === categoryId &&
                cartItem.contentId === contentId
              )
          );
        }
      }
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

// Export actions
export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

// Export reducer
export default cartSlice.reducer;

// Selectors
export const getCart = (state) => state.cart.cart;

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

export const getCurrentQuantityById = (categoryId, contentId) => (state) =>
  state.cart.cart.find(
    (item) => item.categoryId === categoryId && item.contentId === contentId
  )?.quantity ?? 0;
