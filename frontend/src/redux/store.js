import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./services/product";
import { authApi } from "./services/auth";
import { serviceApi } from "./services/service";
import { cartReducer } from "./reducers/cart";
import { orderApi } from "./services/order";
import { dashboardApi } from "./services/dashboard";

export const store = configureStore({
  reducer: {
    // authApi: authApi.reducer,
    productsApi: productsApi.reducer,
    authApi: authApi.reducer,
    serviceApi: serviceApi.reducer,
    orderApi: orderApi.reducer,
    dashboardApi: dashboardApi.reducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(productsApi.middleware)
      .concat(serviceApi.middleware)
      .concat(orderApi.middleware)
      .concat(dashboardApi.middleware),
});
