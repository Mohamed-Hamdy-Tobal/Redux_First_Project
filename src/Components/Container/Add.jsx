import { useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { insertBooks } from "../../Store/BookSlice"

const Add = () => {

    const {isLoggedIn} = useSelector(state => state.author)

    const dispatch = useDispatch()
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const desc = useRef(null)

    const handlerForm = (e) => {
        e.preventDefault()
        console.log("Submit")
        const data = {title:title, description:desc.current.value, price:price}
        dispatch(insertBooks(data))
        
        // To reload the form
        setTitle('')
        setPrice('')
        desc.current.value = null
    }

    const titleHandler = (e) => {
        setTitle(e.target.value)
        console.log("Submit", title)
    }
    const priceHandler = (e) => {
        setPrice(e.target.value)
        console.log("Submit", price)
    }

    return (
        <div className="add-form">
            <div className="container">
                <form onSubmit={handlerForm}>
                    <h1>Insert Book</h1>
                    <div className="grp">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" value={title} onChange={titleHandler}/>
                    </div>
                    <div className="grp">
                        <label htmlFor="price">Price</label>
                        <input type='number' id="price" value={price} onChange={priceHandler}/>
                    </div>
                    <div className="grp">
                        <label htmlFor="desc">Description</label>
                        <textarea id="desc" ref={desc}></textarea>
                    </div>
                    <button className="btn sub" disabled={!isLoggedIn}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Add
