import React,{useState} from "react";



function Sec(){

    const [Scr,setScr]=useState(false);
    
    return(
        <div className="sm:grid-cols-1 sm:h-[1200px] md:h-[600px] md:grid-cols-2 bg-white p-4  w-[100%] text-[black] grid  ">
            <div className="mx-auto my-5">
             <img src="2821658.png" className="sm:mx-auto my-auto" alt="" srcset=""/>
            </div>
            <div className="md:mt-[20vh] flex flex-col gap-2">
            <div className="flex font-bold uppercase md:text-3xl sm:text-2xl text-left   ">Data Analytics Dashboard</div>

            <div className="flex font-bold uppercase text-2xl py-1 text-[#4ac185]">
            Manage Data Analytics Centrally
            </div>

            <div className="flex font-bold text-left">
             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam a,  quae excepturi distinctio impedit alias magni quas, numquam vel id consequuntur nesciunt nobis, nostrum cupiditate odit suscipit culpa molestiae debitis accusamus! Et, architecto assumenda sapiente asperiores, alias ex repellendus nisi aspernatur ullam harum voluptate officia suscipit mollitia nihil!
            </div>

            <div className="flex">
             <button className="bg-black text-[#4ac185] rounded-[10px] p-3 w-[200px] mt-4 font-bold text-[border border-b-2 border-t-2]">Get Started</button>
            </div>

            


            </div>
          
            





        </div>
    )

}

export default Sec;


