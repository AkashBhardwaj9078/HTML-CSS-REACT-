import React from "react";
import { Typed } from "react-typed";


function Center(){
    return (
        <div className=" py-[20vh] h-[600px] bg-black text-[white]">

            <div className="md:text-2xl sm:text-xl text-[#4ac185] font-bold">GROWING WITH DATA ANALYTICS</div>

            <div className="md:text-7xl sm:text-5xl  my-3 text-4xl p-3 font-bold">Grow with data.</div>

             <div className="md:text-5xl sm:text-3xl font-bold my-[3vh]  ">Fast flexible financing for BTB/BTC/SaSS
             {/* <Typed strings={["BTB","BTC","SaSS"]} typeSpeed={120} backSpeed={140} loop ></Typed> */}
             </div>
            

            <div className="my-[20px] text-[#66686c] md:text-[3vh] sm:text-[2vh] font-bold p-3"> Monitor your data analytics to increase revenue for BTB/BTC/SaSS platforms</div>

            <button className="bg-[#4ac185] w-[200px] h-[50px] rounded-[10px] text-[black] text-[20px]">Get Started </button>


        </div>


    )
}

export default Center;