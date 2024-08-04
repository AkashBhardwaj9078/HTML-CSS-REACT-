import React from 'react'
import Item from './Item'
import data_product from './Assets/data'

const Popular = () => {
  return (
  <div className='my-10  mx-[10%]'>
    <h1 className='text-center font-bold text-[30px] my-8'>POPULAR IN WOMEN</h1>
    <hr />
    <div className="grid sm:grid-cols-4 grid-cols-2 gap-5 ">
        {
            data_product.map((item,i)=>{
                return (
                    <Item name={item.name} id={item.id} image={item.image} new_price={item.new_price} old_price={item.old_price}  key={i}/>
                )
            })
        }



     




    </div>



  </div>
  )
}

export default Popular
