import { useSelector } from "react-redux";
import CardProduct from "../../components/Home/CardProduct";
import { useState } from "react";
import FilterCategory from "../../components/Home/FIlterCategory";
import FilterPrice from "../../components/Home/FilterPrice";
import "./styles/Home.css"

const Home = () => {
  const products = useSelector((states) => states.products);
  const [inputValue, setInputValue] = useState("")
  const [priceMinMax, setPriceMinMax] = useState({min:0,max:Infinity})

  const handleSearchName=e=>{
    setInputValue(e.target.value.toLowerCase())
  }

  const cbFilter= prod =>{
      return prod.title.toLowerCase().includes(inputValue)
  }
  const cbFilterPrice=(prod)=>{
    return priceMinMax.min <= prod.price && prod.price <= priceMinMax.max
  }
  return (
    <div className="home">
      <aside className="home_aside">
       <FilterPrice priceMinMax={priceMinMax} setPriceMinMax={setPriceMinMax}/> 
      <FilterCategory />
      </aside>
      <div>
         <input className="home_seacrh-input" value={inputValue} onChange={handleSearchName} type="text" placeholder="What are you looking for?" />
      <div className="home_product-container">
        {products?.filter(cbFilter).filter(cbFilterPrice).map((prod) => (
          <CardProduct key={prod.id} prod={prod} />
        ))}
      </div>
      </div>
    </div>
  );
};

export default Home;
