import { createSlice } from "@reduxjs/toolkit"

export const authSlice = createSlice({
    name: "auth",
    initialState:{
        value: {
            user: null,
            token: null,
            localId: null,
            favorites: [],
        }
    },
    reducers: {
        setUser: (state, {payload}) => {
            state.value.user = payload
            state.value.token = payload.idToken
            state.value.localId = payload.localId
        },
        clearUser: (state) => {
            state.value.user = null
            state.value.token = null
            state.value.localId = null
            state.value.favorites = []
        },
        addToFavorites: (state, action) => {
            state.value.favorites.push(action.payload.product)
        },
        removeFromFavorites: (state, action) => {
            state.value.favorites = state.value.favorites.filter((item) => item.id !== action.payload.productId)
        },
    }
})

export const { setUser, clearUser, addToFavorites, removeFromFavorites } = authSlice.actions

export default authSlice.reducer