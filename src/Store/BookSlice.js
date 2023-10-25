import { createSlice } from '@reduxjs/toolkit'

const initialState = {books: 0}


export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.books += 1
        },
        decrement: (state) => {
            state.books -= 1
        }
    },
})

export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer