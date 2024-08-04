import React, { useContext, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
// import men_banner from "./Components/Assets/banner_mens.png"
// import women_banner from "./Components/Assets/banner_women.png"
// import kid_banner from "./Components/Assets/banner_kids.png"
import men_banner from "../Components/Assets/banner_mens.png"
import drop_down from "../Components/Assets/dropdown_icon.png"
import Item from '../Components/Item'



const Shopcategory = (props) => {

  

  const { all_product } = useContext(ShopContext)
 
 

  return (
    <div className='mx-[10%]'>
      <img src={props.banner} alt="" srcset="" />
      <div className="flex justify-between my-10">
        <p><span className='font-bold'>Showing 1-12</span> out of 36 products</p>
        <button className='flex align-middle justify-center gap-1 rounded-[60px] bg-[#ff7324] text-black sm:w-[100px] sm:h-[30px] h-[25px] w-[80px] '> Sort By <img src={drop_down} className='mt-2' alt="" srcset="" /></button>
      </div>
      <div className="grid sm:grid-cols-3 grid-cols-2 gap-10 ">

        
          {
            all_product.map((item,i)=>{
              if(props.category===item.category){
                return (
                  <Item name={item.name} id={item.id} image={item.image} new_price={item.new_price} old_price={item.old_price}  key={i}/>
                )
              }
              else{
                return null;
              }
               
            })
          

        }
      

       
     

      </div>
     

    </div>
    
  )
}

export default Shopcategory
