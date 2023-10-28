/* eslint-disable react/prop-types */
const BookInfo = ({loading, bookInfo}) => {
    return (
        <div className="book-info book">
            <h1>Book Info</h1>
            {
                loading? "... Loading" : (
                <>
                {Object.keys(bookInfo).length > 0 ? (
                <div className="book-info">
                    <p>Title: {bookInfo.title}</p>
                    <p>Description: {bookInfo.description}</p>
                    <p>UserName: {bookInfo.userName}</p>
                    <p>Price: {bookInfo.price}</p>
                </div>
                ): (

                <div className="my-info">
                    <div className="control">
                        <span>There is no book selected yet.</span>
                    </div>
                </div>
                )}
                </>
                )
            }
        </div>
    )
}

export default BookInfo
