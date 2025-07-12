import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Bredcrums from '../Components/Bredcrums/Bredcrums'

const Product = () => {
  const {all_product} = useContext(ShopContext)
  const {productId}=useParams
  const product =all_product.find((e)=> e.id === productId)
  return (
    <div>
      <Bredcrums product={product} />
    </div>
  )
}

export default Product