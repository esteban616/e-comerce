/* eslint-disable react/prop-types */
import "./styles/PurchaseCard.css"

const PurchaseCard = ({prod}) => {
  return (
    <article className="purchaseCard">
        <div className="purchaseCard_img-container">
        <img className="purchaseCard_img" src={prod.product.images[0].url} alt="" />
        </div>
        <h3 className="purchaseCard_title">{prod.product.title}</h3>
        <div className="purchaseCard_data">
            <span className="purchaseCard_label">{prod.quantity}</span> x <span className="purchaseCard_value">$ {prod.product.price}</span>
        </div>
    </article>
  )
}

export default PurchaseCard