import React from 'react'
import "./BredCrums.css"
import arrow_icon from "../../assets/arrow_icon.png"

const Bredcrums = (props) => {
    const {product} = props;
  return (
    <div className='bredcrumd'>
Home <img src={arrow_icon} alt="" height="30px" /> 
Shop <img src={arrow_icon} alt="" height="30px" /> 
  {product.category}   <img src={arrow_icon} alt="" height="30px" />   
   {product.name}  <img src={arrow_icon} alt="" height="30px" />     
    </div>
  )
}

export default Bredcrums