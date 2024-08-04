import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrums from '../Components/Breadcrums'
import Prod from '../Components/Prod'
import Description from '../Components/Description'
import Relatedproducts from '../Components/Relatedproducts'



const Products = () => {
 const {all_product}=useContext(ShopContext)
 const {productId}=useParams()
 const product=all_product.find((e)=>e.id===Number(productId))


  return (
  <div>
   <Breadcrums product={product} name={product.name} id={product.id} category={product.category} image={product.image} 
   old_price={product.old_price} new_price={product.new_price} />
   <Prod product={product} name={product.name} id={product.id} category={product.category} image={product.image}
   old_price={product.old_price} new_price={product.new_price}/>
   <Description></Description>
   <Relatedproducts/>
   
  </div>
  
  )
}

export default Products
