import BookInfo from "./Post/BookInfo"
import BookList from "./Post/BookList"

const PostContainer = () => {
    return (
        <div className="post-contain">
            <div className="container">
                <div className="main-content">
                    <BookList/>
                    <BookInfo/>
                </div>
            </div>
        </div>
    )
}

export default PostContainer
