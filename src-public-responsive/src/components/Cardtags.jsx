import React from "react";
import Cards from "./Card";


function Cardtags(){

    const tag=[
        {
            name:"Single User",
            image:"cloud-computing (1).png",

            price:"$149",
            storage:"500 GB",
            user:"1",
            Send:"2GB",


        },
        {
            name:"Partnership",
            image:"collaboration (2).png",

            price:"$199",
            storage:"5 TB",
            user:"3",
            Send:"10 GB",


        },
        {
            name:"Group Account",
            image:"add-group.png",

            price:"$299",
            storage:"5 TB",
            user:"10",
            Send:"20 GB",


        }
    ]
    return (
       <div className="grid md:h-[740px] sm:[2500px] md:grid-cols-3 p-12 sm:grid grid-cols-1 gap-2 sm:gap-6">
       {tag.map((val,key)=>{
        return (
            <Cards data={val} key={key}></Cards>
        )

       })
       }
       </div>
    )
}

export default Cardtags;