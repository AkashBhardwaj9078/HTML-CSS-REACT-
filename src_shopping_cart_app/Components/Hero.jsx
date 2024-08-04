import React from 'react'
import hero_img from "./Assets/hero_image.png"

import hand_icon from "./Assets/hand_icon.png"

const Hero = () => {
    return (
        <div>
            <div className='flex mx-[10%] h-[90vh] border bg-gradient-to-b from-[#fbe4fe] to-white-500 py-5 '>
                <div className="w-[50%] pt-[10%]  ">
                    <h1 className='text-black font-bold text-2xl sm:text-[25px]' >NEW ARRIVALS ONLY</h1>
                    <h1 className='text-black font-bold text-[30px] sm:text-[50px] space-y-10'>
                        <div className=" sm:text-center text-left sm:mr-0 flex ml-[25vh] gap-5">
                   <span className='sm:block absolute sm:left-[360px] left-24' >New</span>   <img src={hand_icon} c alt="" srcset="" className='w-[60px]' />
                        </div>
                        
                       
                        collections
                        for Everyone
                    </h1>

                    <button className='rounded-[30px] mt-3 border border-black h-[45px] w-[200px] text-[15px] font-bold'>
                        
                        Latest Collections 
                    </button>







                </div>
                <div className="w-[50%] ">
                    <img src={hero_img} className="w-[90%] h-[95%]" alt="" srcset="" />

                </div>



            </div>

        </div>
    )
}

export default Hero
