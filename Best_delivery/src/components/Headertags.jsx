import React from "react";
import Tags from "./Cards";

function Headertags(){

    const data=[
        {   image:"p1.jpg",
            text1:"Sun's Out, BOGO's Out",
            text2:"through 8/26"
        }
        ,
        {
            image:"p2.jpg",
            text1:"New Restaurants",
            text2:"Added daily"  
        }
        ,
        {
            image:"p3.jpg",
            text1:"We Deliver Desserts too",
            text2:"Tasty treats"  
        }

    ]
    return (
        <div className="grid md:grid-cols-3 sm:grid-cols-1 max-w-[1200px] sm:p-0 sm:h-[300%] mt-[4vh]  mx-auto items-center  gap-2 ">
          
             <Tags data={data[0]}/> 
             <Tags data={data[1]}/> 
             <Tags data={data[2]}/> 
            
        </div>
    )
}
export default Headertags;