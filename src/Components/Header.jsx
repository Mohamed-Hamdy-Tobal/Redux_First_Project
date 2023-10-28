import { Fragment } from "react"
import { useDispatch, useSelector } from "react-redux"
import { LogInOut } from "../Store/Reducers/AuthSlice"

const Header = () => {

    const {error} = useSelector((state) => state.bookRed)
    const {isLoggedIn} = useSelector(state => state.author)
    const dispatch = useDispatch()

    return (
        <Fragment>
        <header>
            <div className="container">
                <div className="content">
                    <a href="/" className="logo">Book</a>
                    <button className="log" onClick={() => dispatch(LogInOut())}>{isLoggedIn? "Logout": "Login"}</button>
                </div>
            </div>
        </header>
        {error && (
            <div className="alert alert-danger" role="alert">
                Sorry, The Server Fell
            </div>
        )}
        </Fragment>
    )
}

export default Header
