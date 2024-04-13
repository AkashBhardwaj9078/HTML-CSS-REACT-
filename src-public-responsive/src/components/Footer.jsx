import React from "react";



function Footer(){

    return (
        <div className="bg-black text-white grid md:grid-cols-[3fr_2fr] h-[40vh] p-12 sm:grid-cols-1">

            <div className=" flex flex-col sm:gap-4">
                <div className="md:text-[35px] sm:text-[35px] sm:text-center font-bold md:text-left ">Want tips and tricks to optimize your flow?</div>

                <div className="md:text-[25px] sm:text-[20px] md:flex sm:block">Sign up to our newsletter and stay updated</div>


            </div>

            <div className="">
              <div className="flex md:flex-row gap-2 " >
                <input type="email" name="" className="rounded-[10px] p-2 w-[220px] mt-2  font-bold" placeholder=" Enter Your Email"id="" />
                <button className="text-black bg-[#4ac185] rounded-[10px] p-2 w-[220px] mt-2  font-bold">Notify Me</button>
              </div>
             
              <div className="md:text-left sm:text-center text-[17px] py-2 ">We care about the protection of your data. Read our <br /><a href="" className="text-[#4ac185] underline">Privacy Policy </a></div>
            </div>



            




        </div>

    )

}

export default Footer;