import { useEffect } from "react"
import usePurchase from "../Hooks/usePurchase"
import PurchaseCard from "../components/purchases/PurchaseCard"
import "./styles/Purchases.css"

const Purchases = () => {
    const {purchases,getAllPurchases} = usePurchase()

    useEffect(() => {
        getAllPurchases()
    }, [])
    
  return (
    <div className="purchases_card">
    <div className="purchases">
        <h2>Purchases</h2>
        <div>
            {
                purchases?.map(prod =>(
                    <PurchaseCard 
                    key={prod.id}
                    prod={prod}
                    />
                ))
            }
        </div>
    </div></div>
  )
}

export default Purchases