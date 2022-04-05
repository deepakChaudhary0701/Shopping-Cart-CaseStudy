import { createSlice } from "@reduxjs/toolkit";

const cartInitialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const CartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    addItemsToCart(state, action) {
      const addedItem = action.payload;
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === addedItem.id
      );
      const existingItem = state.items[existingItemIndex];
      state.totalAmount = state.totalAmount + addedItem.price;
      state.totalQuantity = state.totalQuantity + 1;
      if (!state.items[existingItemIndex]) {
        state.items.push({
          id: addedItem.id,
          price: addedItem.price,
          quantity: addedItem.quantity,
          imageUrl: addedItem.imageURL,
          name: addedItem.name,
        });
      } else {
        existingItem.quantity = existingItem.quantity + 1;
        existingItem.price = addedItem.price;
      }
    },

    removeItemFromCart(state, action) {
      const id = action.payload;
      const removedItemIndex = state.items.findIndex((item) => item.id === id);
      const removedItem = state.items[removedItemIndex];

      state.totalAmount = state.totalAmount - removedItem.price;
     
      state.totalQuantity = state.totalQuantity - 1;
      if (removedItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        removedItem.quantity = removedItem.quantity - 1;
      }
    },

    resetCart(state){
      state.items = [];
    }
  },
});

export const cartActions = CartSlice.actions;

export default CartSlice;
