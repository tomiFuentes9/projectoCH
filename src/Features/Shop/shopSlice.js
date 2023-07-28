import { createSlice } from "@reduxjs/toolkit";
import Products from "../../Data/products.json";

export const shopSlice = createSlice({
  name: "Shop",
  initialState: {
    value: {
      categorySelected: "",
      idSelected: "",
      allProducts: Products,
      productsSelected: [],
      productSelected: "",
    },
  },
  reducers: {
    setCategorySelected: (state, action) => {
      state.value.productsSelected = state.value.allProducts.filter(
        (product) => product.category === action.payload
      );
      state.value.categorySelected = action.payload;
    },
    setIdSelected: (state, action) => {
      state.value.idSelected = action.payload;
    },
    setProductSelected: (state, action) => {
      state.value.productSelected = action.payload;
    },
  },
});

export const { setCategorySelected, setIdSelected, setProductSelected } =
  shopSlice.actions;

export default shopSlice.reducer;
