import axios from "axios";
import Swal from 'sweetalert2'
import { getBooks } from "../../../Store/BookSlice";
import { useDispatch } from "react-redux";

/* eslint-disable react/prop-types */
const BookList = ({loading, books, isLoggedIn}) => {

    const dispatch = useDispatch()

    const deleteProduct = (productId) => {

        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success ',
                cancelButton: 'btn btn-danger me-3'
            },
            buttonsStyling: false
            })
        
            swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
            }).then((result) => {
                if (result.isConfirmed) {
                    axios.delete(`http://localhost:3000/books/${productId}`)
                        .then(response => {
                            console.log('Deleted successfully');
                            console.log(response);
                            dispatch(getBooks(books))
                        })
                        .catch(error => {
                            console.error('Error deleting data:', error);
                        });
                    swalWithBootstrapButtons.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
                ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Your imaginary file is safe :)',
                    'error'
                )
                }
        })
    }

    const bookList = books.length > 0 ? books.map((item) => {
        return (
            <>
                <div className="control" key={item.id}>
                    <span>{item.title}</span>
                    <div className="btns">
                        <button className="btn btn-book">Read</button>
                        <button className="btn btn-book" disabled={!isLoggedIn} onClick={() => {deleteProduct(item.id)}}>Delete</button>
                    </div>
                </div>
            </>
        )
    }) : "There is no book available"

    return (
        <div className="book-list book">
            <h1>Book List </h1>
            {
                loading ? "...Loading" : (
                <div className="my-list">
                    {bookList}
                </div>
                )
            }
        </div>
    )
}

export default BookList
