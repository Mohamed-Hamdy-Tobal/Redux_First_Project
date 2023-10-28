import { createSlice } from "@reduxjs/toolkit";

const reportSlice = createSlice({
    name: 'auth',
    initialState: {logs: []},
    reducers: {
        LogInsert: (state, action) => {
            state.logs.push(action.payload)
        }
    }
})

export const {LogInsert} = reportSlice.actions

export default reportSlice.reducer