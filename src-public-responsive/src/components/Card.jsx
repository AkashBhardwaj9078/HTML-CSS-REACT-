import React from "react";


function Cards(Props){
    return (
        <div className="hover:bg-[#eceef0] hover:scale-105  rounded-[10px] duration-200 bg-white mx-auto mt-2 text-[black] h-[600px]
         w-[400px] shadow-5xl p-10">

            <img src={Props.data.image} className="w-[16vh] h-[16vh] mx-auto" alt="" srcset="" />
        




            <div className="font-bold text-[40px] my-[5vh] text-[#4ac185]">
                {Props.data.name}

            </div>

            <div className="font-bold text-[40px] my-[5vh]">{Props.data.price}</div>

            <ul className="text-[25px] flex flex-col gap-2 font-bold">
                <div className="border border-b-2">{Props.data.storage} Storage</div>
                <div className="border border-b-2">{Props.data.user} User Allowed</div>
                <div className="border border-b-2 ">Send Up to {Props.data.Send}</div>
            </ul>

            <button className="hover:bg-black bg-[#4ac185] text-[black] rounded-[10px] p-3 w-[200px] my-8 font-bold hover:text-[#4ac185]">Start Trial</button>

            


        </div>

    )
}

export default Cards;