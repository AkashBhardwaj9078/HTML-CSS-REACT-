import React,{useState} from "react";

import { IoMenuOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { Typed } from "react-typed";



function Navbar(){
     const navtags=["Home","Company","Resources","About","Contact"]

    const [Sidebar,setSidebar]=useState(false);
    function handleSidebar(){
        setSidebar(!Sidebar);
    }




    return (
        <div className=" flex justify-between h-24 w-[100%] mx-auto px-4 text-[white] bg-black">
            <h1 className="text-[#4ac185] text-[40px]  mt-3 font-bold "> REACT.</h1>
           <div className=" hidden md:flex items-center bg-gray-890 ">
          
            { navtags.map((val,ind)=>{
                
                    return (
                        // <div className={ind<3?"font-bold text-[15px]":"p-2 font-bold text-[15px] w-[100px] bg-white rounded-[10px] overflow-hidden text-black"}>{val} </div>
                        <li className="p-4 list-none">{val}</li>
                    )

               
               
             }
            )
            }


           </div>
           <div className="w-[40px] h-[40px] mt-[2vh] fixed right-[0]  items-center flex duration-2000ms md:hidden" onClick={handleSidebar}>
            {!Sidebar?<IoMenuOutline size={30}/>:<IoClose size={30}/>}

              
          </div>
          <div className={Sidebar?"border-gray-400 top-[15vh] h-[100%] w-[500%] fixed duration-[1000ms] bg-black uppercase":"border-gray-400 bg-black top-[15vh] left-[-100%] fixed duration-[4000ms] border-red-800"}>
            { navtags.map((val,ind)=>{
                
                return (
                    // <div className={ind<3?"font-bold text-[15px]":"p-2 font-bold text-[15px] w-[100px] bg-white rounded-[10px] overflow-hidden text-black"}>{val} </div>
                    <li className="p-4 flex border-gray-200 ">{val}</li>
                )

           
           
                }
            )
            }

           </div>

        </div>
    )
   
    
}

export default Navbar;