import React from 'react'
import prod_img from "./Assets/product_1.png"
import dull_star from "./Assets/star_dull_icon.png"
import star_icon from "./Assets/star_icon.png"
import { ShopContext } from '../Context/ShopContext'
import { useContext } from 'react'
import ShopContextProvider from '../Context/ShopContext'
const Prod = (props) => { 

   
    const id=props.id;
    
    const {all_product,cart,Addtocart,Removefromcart}=useContext(ShopContext)
    console.log(all_product,cart);

    
    return (
        <div className='flex sm:flex-row flex-col mx-[10%] my-8 sm:min-h-[500px] min-h-[900px]'>

            <div className="grid grid-cols-4 gap-4 border h-[85vh] sm:w-[40%] w-[100%]">
                <img src={props.image} className='row-span-1' alt="" />
                <img src={props.image} className='row-span-1' alt="" />
                <img src={props.image} className='row-span-1' alt="" />
                <img src={props.image} className='row-span-1' alt="" />
                <img src={props.image} alt="" srcset="" className='col-span-4 row-span-4 w-[110%] h-[80%]' />
            </div>




            <div className="h-[100vh] sm:w-[50%] w-[100%] mt-[30vh] sm:mt-[0vh]">
                <h1 className='font-bold text-[35px] text-left ml-10'>{props.name}</h1>

                <div className="flex ml-10 my-3 w-3">
                    <img src={star_icon} className='w-18 ' alt="" srcset="" />
                    <img src={star_icon} className='w-18 'alt="" srcset="" />
                    <img src={star_icon} className='w-18 'alt="" srcset="" />
                    <img src={star_icon} className='w-18 'alt="" srcset="" />
                    <img src={dull_star} className='w-18'alt="" srcset="" />
                   
                </div>

                <div className="flex ml-10 text-[20px] gap-3 font-bold">
                    <p className='line-through'>{"$"+props.old_price} </p>
                    <p className='text-[red]'>{"$"+props.new_price} </p>

                </div>

                <div className="text-left font-bold ml-10 text-[15px] my-10 ">
                    A lightweight , usually knitted , pullover shirt , close-fiitting and with a round necklace
                    and short sleeves ,worn as under shirt and outer garments.
                </div>
                <div className="">
                    <h1 className='text-[20px] text-left font-semibold ml-10'>Select Size</h1>
                    <div className="flex ml-10 gap-3">
                        <div className="w-[50px] h-[50px] bg-[#d5d5d5] pt-3">S</div>
                        <div className="w-[50px] h-[50px] bg-[#d5d5d5] pt-3">M</div>
                        <div className="w-[50px] h-[50px] bg-[#d5d5d5] pt-3">L</div>
                        <div className="w-[50px] h-[50px] bg-[#d5d5d5] pt-3">XL</div>
                        <div className="w-[50px] h-[50px] bg-[#d5d5d5] pt-3">XXL</div>
                    </div>

                   

                    
                </div>
                <div className="">
                        <button onClick={()=>{Addtocart(id)}}  className='bg-[red] rounded text-white w-[100px] h-[40px] mt-5 mr-[53vh] ' > Add to Cart</button>
                </div>
                <div className="text-left my-4 ml-10">
                    <p><span className='font-bold'>Category:</span> Women,T-shir,Crop Top </p>
                    <p><span className='font-bold'>Tags:</span> Modern,latest</p>
                </div>





            </div>


        </div>
    )
}

export default Prod
