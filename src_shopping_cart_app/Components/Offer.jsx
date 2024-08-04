import React from 'react'
import exclsive_img from "./Assets/exclusive_image.png"

const Offer = () => {
    return (
        <div className='mx-[10%] bg-gradient-to-b from-[#fbe4fe] to-white-500'>
            <div className="flex mt-[20vh]">
                <div className="w-[60%]  h-[80vh] my-5 sm:pl-20 sm:pt-20 p-10">
                    <h1 className='text-black font-bold sm:text-[40px] text-[25px] text-left' >EXCLUSIVE</h1>
                    <h1 className='text-black font-bold sm:text-[40px] text-[25px] text-left' >OFFERS FOR YOU</h1>
                    <h1 className='text-black font-bold sm:text-[20px] text-[15px] text-left' >Only On Best Sellers Product</h1>

                    <div className="mt-5 mr-[60vh]">
                        <button className='rounded-[30px] mt-3  h-[45px] sm:w-[200px] w-[100px] text-[15px] text-white font-bold  bg-[red]'>
                            Check Now
                        </button>
                    </div>



                </div>
                <div className="w-[40%]  h-[80vh] my-5 ">
                    <img src={exclsive_img} className='w-[75%] h-[85%]' alt="" />

                </div>

            </div>



        </div>
    )
}

export default Offer
