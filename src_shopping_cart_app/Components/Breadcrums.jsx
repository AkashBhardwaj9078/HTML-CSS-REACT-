import React from 'react'
import arrow_icon from "./Assets/breadcrum_arrow.png"


const Breadcrums = (props) => {
   const product=props;

  return (
    <div className='flex mx-[10%] gap-2 '>
     Home <img src={arrow_icon} className='sm:w-[10px] w-[20px]' alt="" srcset="" />
     Shop <img src={arrow_icon} className='sm:w-[10px] w-[20px]' alt="" srcset="" />
     {product.category} <img src={arrow_icon} className='sm:w-[10px] w-[20px]' alt="" srcset="" />
     {product.name}
      
    </div>
  )
}

export default Breadcrums
