const Add = () => {
    return (
        <div className="add-form">
            <div className="container">
                <form>
                    <h1>Insert Book</h1>
                    <div className="grp">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title"/>
                    </div>
                    <div className="grp">
                        <label htmlFor="price">Price</label>
                        <input type='number' id="price"/>
                    </div>
                    <div className="grp">
                        <label htmlFor="desc">Description</label>
                        <textarea id="desc"></textarea>
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    )
}

export default Add
