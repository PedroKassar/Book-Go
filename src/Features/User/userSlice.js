import { createSlice } from "@reduxjs/toolkit"
import { insertFavorite, removeFavorite } from "../../Persistence"

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
            const userId = state.value.localId
            state.value.favorites.push(action.payload.product)
            insertFavorite(action.payload.product, userId).catch(error => alert(error))
        },
        removeFromFavorites: (state, action) => {
            const userId = state.value.localId
            state.value.favorites = state.value.favorites.filter((item) => item.id !== action.payload.productId)
            removeFavorite(action.payload.productId, userId).catch(error => alert(error))
        },
        setFavorites: (state, action) => {
            state.value.favorites = action.payload
        }
    }
})

export const { setUser, clearUser, addToFavorites, removeFromFavorites, setFavorites } = authSlice.actions

export default authSlice.reducer