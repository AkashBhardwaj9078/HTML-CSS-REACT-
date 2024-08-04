import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import pr1 from "./Assets/product_1.png"

const Cartitems = () => {
    const { all_product, cart, Removefromcart,gettotalcost } = useContext(ShopContext)
    const cost=gettotalcost()
    console.log(cost);
    return (
        <div className='flex flex-col mx-[10%]'>
            <div className="grid grid-cols-[0.5fr,2fr,1fr,1fr,1fr,1fr] mt-10 mb-4">
                <p>Product</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>

            </div>
            <hr />

            {
                all_product.map((e) => {

                    if (cart[e.id] > 0) {
                        return (
                            <>
                                <div className="grid grid-cols-[0.5fr,2fr,1fr,1fr,1fr,1fr] mt-6 mb-0">
                                    <p><img src={e.image} alt="" className='mt-[-10px] h-[70%]' srcset="" /> </p>
                                    <p className='sm:text-[20px] text-[15px]'>{e.name}</p>
                                    <p>$ {e.new_price}</p>
                                    <p>{cart[e.id]}</p>
                                    <p>$ {cart[e.id]*e.new_price}</p>
                                    <p> <button className='bg-[blue] rounded text-white w-[70px] h-[40px]' onClick={()=>{Removefromcart(e.id)}}>Remove</button></p>

                                </div>
                                <hr />
                            </>
                        )
                    }
                })
            }

            <div className="mx-[10%] my-10 flex">
                <div className="w-[60%] mr-[10vh] ">
                    <h1 className='text-left text-[25px] font-semibold  p-6'>Cart Totals</h1>

                    <div className="flex justify-between my-1 p-5 ">
                        <p>Subtotal</p>
                        <p>$ {cost}</p>

                    </div>
                    <hr />
                    <div className="flex justify-between my-1 p-5">
                        <p>Shipping Fee</p>
                        <p>Free</p>

                    </div>
                    <hr />
                    <div className="flex justify-between my-1 p-5">
                        <p className='font-bold'>Total</p>
                        <p className='font-bold'>$ {cost}</p>

                    </div>

                 
                   
                    <button className='bg-[red] text-white rounded w-[200px] h-[50px] mr-[40vh] my-2 '>
                        Proceed to Checkout
                    </button>

                </div>
                <div className="w-[40%] my-10">
                    <p className='text-[15px] font-semibold'> If you have a promo code, enter it here</p>
                    <div className="bg-[#dedede] my-6 text-white w-[40vh] h-[40px] flex p-auto sm:ml-7 ml-2 justify-around">
                      <input type="text" className='w-[30vh] h-[33px] text-black my-1 p-3 bg-[#dedede] ' placeholder='Promo code' />
                    <br /> 
                     <button className='bg-[black]  w-[60px] h-[40px] text-white rounded'>Submit</button>
                    </div>
                   
                </div>

            </div>






        </div>
    )
}

export default Cartitems
