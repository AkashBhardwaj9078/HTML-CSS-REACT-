import React from "react";

function ACard(props){ 

 

    return (
    <div className="w-[273px] shrink-0 grow ">
      <div className="h-[182px] rounded-[15px] overflow-hidden relative">
        <img  className="w-full h-full  object-cover hover:scale-125 transition-all duration-500 cursor-pointer" src={ "image/" + props.data.image} alt="" />
        <div className="image_overlay absolute w-full h-full top-0 flex items-end p-2 text-[20px] font-bold text-[white]" >
            {props.data.offer}
           
            

        </div>

            
      </div>
      
    <div className="text-[20px] font-bold flex items-start pt-2 pl-2" >
        {props.data.title}
    </div>
    <div className="flex gap-3 pl-2" >
        <img className="w-[20px] h-[20px]"src="image/Screenshot 2024-04-11 154652.png" alt="" /> <span className="pb-[2px] font-bold text-[14px]">{props.data.rating}. {props.data.minTime}-{props.data.maxTime} mins</span>

    </div>
    <div className="flex pl-2 text-slate-500">
       {props.data.name}
    </div>
    <div className="flex  pl-2  text-slate-500">
       {props.data.place.substring(0,props.data.place.length-1)}
    </div>


    </div>
    )
}

export default ACard;