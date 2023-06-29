import { useSelector } from "react-redux"
import CartElement from "../components/Cart/CartElement"
import usePurchase from "../Hooks/usePurchase"
import "./styles/Cart.css"

const Cart = () => {
 const cart = useSelector(states =>states.cart)

 const totalPrice= cart.reduce((acc,cv)=>{
    const subTotal = cv.quantity*cv.product.price
    return acc + subTotal
 },0)

 const {makeAPurchase} =usePurchase()

 const handleMakePurchase = ()=>{
    makeAPurchase()
 } 
    return (
     <div className="cart-container">
    <section className="cart">
        <h2>Cart</h2>
        <div className="cart_products">
          {
            cart?.map(prod =>(
                <CartElement 
                key={prod.id}
                prod={prod}
                />
            ))
          }
        </div>
        <footer className="cart_footer">
          <div className="cart_footer-info">
            <span className="cart_footer-label">Total: </span><span className="cart_footer-value">$ {totalPrice}.00</span>
          </div>
          <button className="cart_footer-btn" onClick={handleMakePurchase}>Purchase this cart</button>
        </footer>
    </section></div> 
  )
}

export default Cart