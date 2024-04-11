
import React,{useState} from "react"

import { FaCaretDown } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { TbDiscount } from "react-icons/tb";
import { FaShoppingCart } from "react-icons/fa";


function Header(){

  const links=[
    {
      icon:<IoSearch/>,
      name:"Search"
    },
    { icon:<TbDiscount/>,
      name:"Offers"  ,
      sup:"New" 
    },
    {
      icon:"",
      name:"Help"      
    }
    ,
    {
      icon:"",
      name:"Sign in"      
    },
    {
      icon:<FaShoppingCart/>,
      name:"Cart"      
    }

  ]

  const [toggle,settoggle]=useState(false);

  function showsidebar(){
    settoggle(true);

  }

  function revert(){
    settoggle(false);
  }

  // function toggle(){
  //   opac==1?setopac(0):setopac(1);


  // }

    return (
      <>
      
      <div className="black-overlay w-full h-full fixed duration-500 z-[1100]" onClick={revert}  style={{opacity:toggle? 1:0,visibility:toggle? "visible":"hidden"}}> hello</div>
      <div onClick={(e)=>{
        e.stopPropagation();}} className="w-[500px] bg-slate-50 h-full absolute duration-[600ms] z-[1200]" style={{
        left:toggle? "0%" : "-100%",



      }}>

      </div>
        <header className="p-[15px] shadow-xl sticky top-0 z-[1000] bg-white">

          
            
            <div className="max-w-[1200px] mx-auto border border-red-500 flex items-center ">
                <div className="w-[100px]">
                    <img src="image/logo.png" className="w-full" alt="" srcset="" />
                    
                </div>
                <div className="">
                  <span className="font-bold border-b-[3px] border-b-[black]">Ratnada</span> , Jodhpur , Rajasthan , India <FaCaretDown onClick={showsidebar} fontSize={25} className="font-bold inline text-[#fc9019] cursor-pointer" ></FaCaretDown>
                </div>
                <nav className="flex list-none gap-6 ml-auto font-semibold text-[18px]" >
                  {
                  links.map((link,ind)=> {
                    return (<li key={ind} className="flex items-center hover:text-[#fc8019] gap-2">
                      {link.icon}
                      {link.name}
                      <sup>{link.sup}</sup>
                    </li>)

                  })}
                </nav>

            </div>

        </header>

        </>
        

      

    )
}

export default Header;