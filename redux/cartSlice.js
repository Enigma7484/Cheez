import { createSlice } from "@reduxjs/toolkit";

const emptyCart = {
  products: [],
  quantity: 0,
  total: 0,
};

const cartDataFromStorage =
  typeof window !== "undefined" && localStorage.getItem("cart");
const initialCartState = cartDataFromStorage ? JSON.parse(cartDataFromStorage) : {
  ...emptyCart,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addProduct: (state, action) => {
      const existingProductIndex = state.products.findIndex(
        (product) => product._id === action.payload._id
      );

      if (existingProductIndex !== -1) {
        state.products[existingProductIndex].quantity += action.payload.quantity;
        state.products[existingProductIndex].total =
          (state.products[existingProductIndex].total || 0) +
          action.payload.price * action.payload.quantity;
      } else {
        state.products.push({
          ...action.payload,
          total: action.payload.price * action.payload.quantity,
        });
      }

      state.quantity += action.payload.quantity;
      state.total += action.payload.price * action.payload.quantity;
    },
    reset: () => {
      return { ...emptyCart };
    },
    updateCart: (state, action) => {
      state.products = action.payload?.products || [];
      state.quantity = action.payload?.quantity || 0;
      state.total = action.payload?.total || 0;
    },
  },
});

export const { addProduct, reset, updateCart } = cartSlice.actions;
export default cartSlice.reducer;
