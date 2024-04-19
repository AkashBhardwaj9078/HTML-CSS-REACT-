import React from "react";


function Tags(Props){
    return (
      <div className="mx-auto w-full">
       <div className={"bg-[url('image/"+Props.data.image+"')] bg-cover bg-center rounded-xl h-[220px] w-full  flex flex-col justify-between p-4 overflow-hidden"}>
        <div className="bg-black/43 text-left font-bold p-4">
           <h1 className="text-white text-[25px]"> {Props.data.text1}</h1>
           <h2 className="text-xl text-white">{Props.data.text2}</h2>
        </div>

        <button className="bg-white text-black rounded-3xl w-[15vh] h-[40px]"> Order Now</button>

       </div>
       </div>
    )
}

export default Tags;