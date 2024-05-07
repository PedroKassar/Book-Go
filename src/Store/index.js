import { configureStore, createReducer } from "@reduxjs/toolkit"
import { shopApi } from "../Services/shopApi"
import { setupListeners } from "@reduxjs/toolkit/query"
import { authApi } from "../Services/authApi"
import authReducer from "../Features/User/userSlice"

const store = configureStore({
    reducer:{
        auth: authReducer,
        [shopApi.reducerPath]: shopApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(shopApi.middleware).concat(authApi.middleware)
})

setupListeners(store.dispatch)

export default store