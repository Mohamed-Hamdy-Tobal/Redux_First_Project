import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {isLoggedIn: false, name: 'Mohamed Tobal'},
    reducers: {
        LogInOut: (state) => {
            state.isLoggedIn = !state.isLoggedIn
        }
    }
})

export const {LogInOut} = authSlice.actions

export default authSlice.reducer