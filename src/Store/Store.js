import { configureStore } from '@reduxjs/toolkit'
import BookSlice from './BookSlice'
import authSlice from './AuthSlice'

export const store = configureStore({
    reducer: {
        bookRed : BookSlice,
        author: authSlice
    },
})

