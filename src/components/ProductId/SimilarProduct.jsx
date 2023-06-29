/* eslint-disable react/prop-types */

import { useEffect } from "react"
import useFetch from "../../Hooks/useFetch"
import CardProduct from "../Home/CardProduct"

const SimilarProduct = ({product}) => {
 
  const baseUrl="https://e-commerce-api-v2.academlo.tech/api/v1/products?Id="
  const [productsByCategory,getProductsByCategory]= useFetch(baseUrl)

  useEffect(() => {
    if (product) {
      getProductsByCategory(`${product.categoryId}`)
    }
  
  }, [product])
  
  return (
    <div>
      <h2>Similar Products</h2>
      <div className="home_product-container">
        {
          productsByCategory?.map(prod =>{
            if (prod.id !== product?.id && prod.categoryId === product.categoryId) {
              return (
                 <CardProduct 
            key={prod.id}
            prod={prod}
            />
              )
            }
           
})
        }
      </div>
    </div>
  )
}

export default SimilarProduct