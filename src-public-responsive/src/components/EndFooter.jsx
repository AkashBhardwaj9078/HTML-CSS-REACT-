import React from "react";
import { FaFacebook } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaGithub } from "react-icons/fa6";
import { SiSpyderide } from "react-icons/si";

function End(){

    return(

    <div className="bg-black grid md:grid-cols-[1fr_3fr] p-16 text-white sm:grid-cols-1 ">
        <div className="flex flex-col gap-4">
            <h1 className="uppercase text-[#4ac185] font-bold md:text-left sm:text-center text-[30px]">React.</h1>

            <p className="md:text-left sm:text-center">Lorem ipsum, llo libero, asperiores expedita obcaecati unde perspiciatis consectetur iure mollitia explicabo officia accusamus ab? Sed.</p>

            <div className="mx-auto  ">
                <div className="flex gap-3 mt-5  ">
                <FaFacebook size={30}></FaFacebook>
                <GrInstagram size={30}></GrInstagram>
                <AiOutlineTwitter size={30}></AiOutlineTwitter>
                <FaGithub size={30}></FaGithub>
                <SiSpyderide size={30}></SiSpyderide>


                </div>
                          
              
             
                
                
            </div>

                       

        </div>
        <div className=" grid grid-cols-3 ">
            <div className="">
                <div className="my-3 text-xl font-semibold">Solutions</div>
                <ul className="my-3  p-1">
                    <div className="">Analytics </div>
                    <div className="">Marketing </div>
                    <div className="">Commerce </div>
                    <div className="">Insights </div>
                </ul>

            </div>
            <div className="">
            <div className="my-3 text-xl font-semibold">Support</div>
                <ul className="my-3  p-1">
                    <div className="">Pricing </div>
                    <div className="">Documentation </div>
                    <div className="">Guides</div>
                    <div className="">API Status</div>
                </ul>


            </div>
            <div className="">
            <div className="my-3 text-xl font-semibold">Company</div>
                <ul className="my-3  p-1">
                    <div className="">About </div>
                    <div className="">Blog </div>
                    <div className="">Jobs</div>
                    <div className="">Press</div>
                    <div className="">Partners</div>
                </ul>

            </div>
        </div>

    </div>
    )

}


export default End;