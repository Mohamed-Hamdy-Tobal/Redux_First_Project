import BookInfo from "./Post/BookInfo"
import BookList from "./Post/BookList"
import { useDispatch, useSelector } from "react-redux"
import { getBooks } from "../../Store/Reducers/BookSlice"
import { useEffect, useState } from "react"

const PostContainer = () => {

    const globalState = useSelector((state) => state.bookRed)
    const {isLoggedIn} = useSelector(state => state.author)
    const loading = globalState.isLoading
    const books = globalState.books
    const [selected, setSelectedBook] = useState({})


    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getBooks({id:"omar"}))
    },[dispatch])

    const getBook = (id) => {
        const selectedBook = books.find(book => book.id === id)
        setSelectedBook((prev) => { return {...prev, ...selectedBook}})
    }

    return (
        <div className="post-contain">
            <div className="container">
                <div className="main-content">
                    <BookList loading={loading} books={books} isLoggedIn={isLoggedIn} getBook={getBook}/>
                    <BookInfo loading={loading} bookInfo={selected}/>
                </div>
            </div>
        </div>
    )
}

export default PostContainer
