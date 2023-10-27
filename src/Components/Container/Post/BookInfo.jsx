/* eslint-disable react/prop-types */
const BookInfo = ({loading}) => {
    return (
        <div className="book-info book">
            <h1>Book Info</h1>
            {
                loading? "... Loading" : (
                <div className="my-info">
                    <div className="control">
                        <span>There is no book selected yet.</span>
                    </div>
                </div>
                )
            }
        </div>
    )
}

export default BookInfo
