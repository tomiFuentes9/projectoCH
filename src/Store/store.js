import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Features/Counter/counterSlice";
import shopReducer from "../Features/Shop/shopSlice";
import cartReducer from "../Features/Cart/cartSlice";
import { shopApi } from "../Services/shopServices";

export default configureStore({
  reducer: {
    counterReducer,
    shopReducer,
    cartReducer,
    [shopApi.reducerPath]: shopApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shopApi.middleware),
});
