import React from 'react'
import { Link } from 'react-router-dom'


const Item = (props) => {
  return (
    <div className='hover:scale-110 duration-[1000]'>
      <Link to={"/product/"+props.id}><img onClick={window.scrollTo(0,0)} className='' src={props.image}srcset="" /></Link>  

        <p className='text-left font-bold text-[13px]'>{props.name}</p>
        <div className="flex gap-3">
           <p className='text-left font-bold text-[13px]'>{"$"+props.new_price+" "+props.id }</p>
           <p className='text-left  text-[13px] line-through'>{"$"+props.old_price}</p>
        

        </div>
        
      
    </div>
  )
}

export default Item
