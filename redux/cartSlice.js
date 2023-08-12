import { createSlice } from '@reduxjs/toolkit';

const cartDataFromStorage = typeof window !== 'undefined' && localStorage.getItem('cart');
const initialCartState = cartDataFromStorage ? JSON.parse(cartDataFromStorage) : {
  products: [],
  quantity: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addProduct: (state, action) => {
      // Find the index of the product with the same _id in the cart
      const existingProductIndex = state.products.findIndex(
        (product) => product._id === action.payload._id
      );

      if (existingProductIndex !== -1) {
        // If the product already exists in the cart, update its quantity and total
        state.products[existingProductIndex].quantity += action.payload.quantity;
        state.products[existingProductIndex].total += action.payload.price * action.payload.quantity;
      } else {
        // If the product does not exist in the cart, add it to the products array
        state.products.push(action.payload);
      }

      // Update the cart's total and quantity
      state.quantity += action.payload.quantity;
      state.total += action.payload.price * action.payload.quantity;
    },
    reset: (state) => {
      // ... (unchanged)
    },
    updateCart: (state, action) => {
      // ... (unchanged)
    },
  },
});

export const { addProduct, reset, updateCart } = cartSlice.actions;
export default cartSlice.reducer;
