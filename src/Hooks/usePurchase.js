import axios from "axios"
import getConfigAuth from "../utils/getConfigAuth"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { setCartG } from "../store/slices/cart.slice"

const usePurchase = () => {
  const [purchases, setPurchases] = useState()  
  const url="https://e-commerce-api-v2.academlo.tech/api/v1/purchases"
  const dispatch = useDispatch()

  const getAllPurchases=()=>{
    axios.get(url,getConfigAuth())
    .then(res =>{
        setPurchases(res.data)
    })
    .catch(err => console.log(err))
  }

  const makeAPurchase =()=>{
    axios.post(url,{},getConfigAuth())
    .then(res => {
      console.log(res.data)
      dispatch(setCartG([]))
    })
    .catch(err => console.log(err))
  }
  return {purchases,getAllPurchases,makeAPurchase}
}

export default usePurchase