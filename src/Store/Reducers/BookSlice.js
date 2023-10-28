import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { LogInsert } from './Report';

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
        const {rejected, getState, dispatch} = thunkAPi;
        bookData.userName = getState().author.name
        try {
            const response = await axios.post("http://localhost:3000/books", bookData);
            // Handle successful response here
            const data = await response.data;
            dispatch(LogInsert({ name: 'Inserted book', status: 'success'}))
            return data
            } catch (error) {
            // Handle errors here
            dispatch(LogInsert({ name: 'Inserted book', status: 'failed'}))
            return rejected(error.message)
        }
    }
)


// The Action To Insert Data To API
export const deleteBooks = createAsyncThunk(
    'bookShelf/deleteBooks',
    async(item, thunkAPi) => {
        const {rejected} = thunkAPi;
        try {
            axios.delete(`http://localhost:3000/books/${item.id}`);
            // Handle successful response here To Return Not The Data, Only The ID For Deleted Book
            return item
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

        // Actions For Delete Bookshelf
        [deleteBooks.pending] : (state, action) => {
            state.isLoading = true
            state.error = null
            console.log('pending: ',action)
        },
        [deleteBooks.fulfilled] : (state, action) => {
            state.isLoading = false
            // Filtering The Data That Not Includes The Book Selected To Delete.
            state.books = state.books.filter(ele => ele.id !== action.payload.id)
            console.log('fulfilled: ',action)
        },
        [deleteBooks.rejected] : (state, action) => {
            state.isLoading = false
            state.error = true
            console.log('rejected: ',action)
        },

    }
})

export default counterSlice.reducer