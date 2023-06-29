/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import "./styles/FilterPrice.css"

const FilterPrice = ({setPriceMinMax}) => {
  const {handleSubmit,register}= useForm()

  const submit=(data)=>{
    const from= data.from.trim() === "" ? 0 : +data.from
    const to= data.to.trim() === "" ? Infinity : +data.to
    setPriceMinMax({min:from,max:to})
  }
  return (
    <article className="filterPrice">
      <h3>Price</h3>
      <form onSubmit={handleSubmit(submit)} className="filterPrice_form">
        <div className="filterPrice_form-item">
          <label htmlFor="from">From</label>
          <input {...register("from")}type="number" id="from"/>
        </div>
        <div className="filterPrice_form-item">
          <label htmlFor="to">To</label>
          <input {...register("to")}className="input_to" type="number" id="to"/>
        </div>
        <button>Filter</button>
      </form>
     
      
    </article>
  );
};

export default FilterPrice;
