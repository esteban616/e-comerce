import { useParams } from "react-router-dom"
import useFetch from "../Hooks/useFetch"
import { useEffect } from "react"
import ProductInfo from "../components/ProductId/ProductInfo"
import SimilarProduct from "../components/ProductId/SimilarProduct"
import SliderImg from "../components/ProductId/SliderImg"

const ProductIdPage = () => {
    const { id }=useParams()
    const baseUrl = 'https://e-commerce-api-v2.academlo.tech/api/v1'
   
    const [product,getProductById]=useFetch(baseUrl)
    
    useEffect(() => {
        getProductById(`/products/${id}`)
    }, [id])
    
    return (
    <div>
        <div className="product_data">
        <SliderImg product={product}/>
        <ProductInfo product={product}/>
        </div>
        <SimilarProduct product={product} />
    </div>
  )
}

export default ProductIdPage