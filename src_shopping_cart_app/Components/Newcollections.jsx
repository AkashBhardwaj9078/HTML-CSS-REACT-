import React from 'react'
import new_collections from './Assets/new_collections'
import Item from './Item'

const Newcollections = () => {
    return (
        <div className='my-10  mx-[10%]'>
            <h1 className='text-center font-bold text-[30px] mt-3 mb-[8vh]'>NEW COLLECTIONS</h1>
            <div className="grid sm:grid-cols-4 gap-10 grid-cols-2">
                {
                   new_collections.map((item,i)=>{
                    return (
                        <Item name={item.name} id={item.id} image={item.image} new_price={item.new_price} old_price={item.old_price}  key={i}/>
                    )
                   })
                }

            </div>



        </div>
    )
}

export default Newcollections;
