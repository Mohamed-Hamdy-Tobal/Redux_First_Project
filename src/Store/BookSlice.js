import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

// Action For Export The Data From API
export const getBooks = createAsyncThunk(
    'bookShelf/getBooks',
    async (_, thunkAPi) => {
        const {rejected} = thunkAPi;
        try {
            const response = await axios.get("http://localhost:3000/books");
            // Handle successful response here
            const data = await response.data;
            return data
            } catch (error) {
            // Handle errors here
            return rejected(error.message)
        }
    }
)

// The Action To Insert Data To API
export const insertBooks = createAsyncThunk(
    'bookShelf/insertBooks',
    async(bookData, thunkAPi) => {
        const {rejected} = thunkAPi;
        try {
            const response = await axios.post("http://localhost:3000/books", bookData);
            // Handle successful response here
            const data = await response.data;
            return data
            } catch (error) {
            // Handle errors here
            return rejected(error.message)
        }
    }
)


// The Initial Data 
const initialState = {books: [], isLoading: false, error:null}

// The Book Slice
export const counterSlice = createSlice({
    name: 'bookShelf',
    initialState,
    extraReducers: {
        // Actions For Get Bookshelf
        [getBooks.pending] : (state, action) => {
            state.isLoading = true
            state.error = null
            console.log('pending: ',action)
        },
        [getBooks.fulfilled] : (state, action) => {
            state.isLoading = false
            state.books = action.payload
            console.log(state.books)
            console.log('fulfilled: ',action)
        },
        [getBooks.rejected] : (state, action) => {
            state.isLoading = false
            state.error = true
            console.log('rejected: ',action)
        },

        
        // Actions For Insert Bookshelf
        [insertBooks.pending] : (state, action) => {
            state.isLoading = true
            state.error = null
            console.log('pending: ',action)
        },
        [insertBooks.fulfilled] : (state, action) => {
            state.isLoading = false
            state.books.push(action.payload)
            console.log(state.books)
            console.log('fulfilled: ',action)
        },
        [insertBooks.rejected] : (state, action) => {
            state.isLoading = false
            state.error = true
            console.log('rejected: ',action)
        },


    }
})

export default counterSlice.reducer