import React from 'react'

const Newsletter = () => {
    return (
        <div className='mt-[20vh] mx-[10%]  '>

            <h1 className='text-black font-bold sm:text-[40px] text-[30px] m-5' >Get Exclusive Offers On Your Email</h1>
            <h1 className='text-black  text-[15px]' >Subscribe to our Newsletter And Stay Updated</h1>

            <div className="border border-black rounded-[30px] sm:h-[50px] sm:w-[80vh] h-[35px] w-[60vh] pl-8 py-2 mx-auto my-10
   flex justify-between  ">
                <input type="text" className='outline-none text-[20px] text-black ' placeholder='Email' />
                <div className="">
                    <button className='rounded-[30px] sm:mt-[-8px] mt-[-15px]   bg-[black] text-white border border-black sm:h-[50px] sm:w-[150px] h-[40px] w-[100px] text-[15px]'>
                        Subscribe
                    </button>

                </div>

            </div>

           




        </div>
    )
}

export default Newsletter
