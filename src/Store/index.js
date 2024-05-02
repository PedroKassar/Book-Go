import { configureStore, createReducer } from "@reduxjs/toolkit";
import { shopApi } from "../Services/shopApi";
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
    reducer:{
        [shopApi.reducerPath]: shopApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shopApi.middleware)
})

setupListeners(store.dispatch)

export default store