import { configureStore } from '@reduxjs/toolkit'
import BookSlice from './Reducers/BookSlice'
import authSlice from './Reducers/AuthSlice'
import reportSlices from './Reducers/Report'

export const store = configureStore({
    reducer: {
        bookRed : BookSlice,
        author: authSlice,
        reportRed: reportSlices
    },
})

