/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux"
import { deleteCartThunk } from "../../store/slices/cart.slice"
import "./styles/CartElement.css"

const CartElement = ({prod}) => {
    const dispatch= useDispatch()

    const handleDelete=()=>{
        dispatch(deleteCartThunk(prod.id))
    }
    return (
    <article className="cartElement">
        <header className="cartElement_img-container">
            <img className="cartElement_img"src={prod.product.images[0].url} alt="" />
        </header>
        <section className="cartElement_data">
        <div className="cartElement_info">
            <h5>{prod.product.title}</h5>
            <p className="cartElement_info-data"><span>{prod.quantity}</span> x <span>{prod.product.price}</span></p>
            </div>
            <button className="cartElement_btn" onClick={handleDelete}><i className='bx bxs-trash'></i></button>
        </section>
        <footer className="cartElement_footer">
            <span className="cartElement_foote-label">Subtotal:</span> <span className="cartElement_footer-value">${prod.quantity*prod.product.price}.00</span>
        </footer>
    </article>
  )
}

export default CartElement