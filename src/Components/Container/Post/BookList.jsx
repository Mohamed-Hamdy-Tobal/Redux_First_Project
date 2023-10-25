import { useSelector, useDispatch } from 'react-redux'
import { increment } from '../../../Store/BookSlice'


const BookList = () => {

    const dispatch = useDispatch()
    const global = useSelector((state) => state)

    console.log(global.bookRed.books)

    return (
        <div className="book-list book">
            <h1>Book List</h1>
            <div className="my-list">
                <div className="control">
                    <span>Lorem ipsum dolor sit amet consectetur.</span>
                    <div className="btns">
                        <button className="btn-book" onClick={() => {dispatch(increment(1))}}>Read</button>
                        <button className="btn-book">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookList
