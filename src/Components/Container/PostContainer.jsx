import BookInfo from "./Post/BookInfo"
import BookList from "./Post/BookList"
import { useDispatch, useSelector } from "react-redux"
import { getBooks } from "../../Store/BookSlice"
import { useEffect } from "react"

const PostContainer = () => {

    const globalState = useSelector((state) => state.bookRed)
    const {isLoggedIn} = useSelector(state => state.author)
    const loading = globalState.isLoading
    const books = globalState.books
    console.log(books)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getBooks({id:"omar"}))
    },[dispatch])

    return (
        <div className="post-contain">
            <div className="container">
                <div className="main-content">
                    <BookList loading={loading} books={books} isLoggedIn={isLoggedIn}/>
                    <BookInfo loading={loading}/>
                </div>
            </div>
        </div>
    )
}

export default PostContainer
