/* eslint-disable react/prop-types */
import "./styles/ProducInfo.css"
import { useDispatch } from "react-redux"
import { useState } from "react"
import { postCartThunk } from "../../store/slices/cart.slice"

const ProductInfo = ({product}) => {
    const [quantity, setQuantity] = useState(1)
    

    const handleAdd =()=>{
        setQuantity(quantity + 1)
    }
    const handleSus=()=>{
        if (quantity >1) {
            setQuantity(quantity - 1)
        }
       
    }
    const dispatch =useDispatch()
    const handleAddToCart=()=>{
        dispatch(postCartThunk(product,quantity))
    }    
    
  return (
    <article className="productInfo">
        <h3 className="productInfo_brand">{product?.brand}</h3>
        <h2 className="productInfo_title">{product?.title}</h2>
        <p className="productInfo_desc">{product?.description}</p>
        <footer className="productInfo_footer">
            <ul className="productInfo_price-quantity">
                <li className="productInfo_price-quantity-item">
                    <span className="productInfo_price-label">Price</span>
                    <span className="productInfo_price-value">${product?.price}</span>
                </li>
                <li className="productInfo_price-quantity-item1">
                    <span className="productInfo_quantity-label">Quantity</span>
                    <div className="productInfo_cart">
                        <div className="productInfo_quantity-op" onClick={handleSus}>-</div>
                        <div className="productInfo_quantity-value">{quantity}</div>
                        <div className="productInfo_quantity-op" onClick={handleAdd}>+</div>
                    </div>
                </li>
            </ul>
            <button onClick={handleAddToCart} className="productInfo_btn">Add to cart <i className='bx bx-cart'></i></button>
        </footer>
    </article>
  )
}

export default ProductInfo