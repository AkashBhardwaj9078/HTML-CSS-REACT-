import React, { useState } from 'react'
import logo from "./Assets/logo.png"
import cart_icon from "./Assets/cart_icon.png"
import { Link } from 'react-router-dom'
import { IoMdMenu } from "react-icons/io";
import { MdCancel } from "react-icons/md";


const Navbar = () => {

    const [menu,setMenu]=useState("Shop");
    const [showmenu,setShowmenu]=useState(true)

  const change_menu=(props)=>{
    setMenu(props);
  }

  return (
    <div>
      <div className={!showmenu?"bg-black z-40  opacity-85 w-[30%] h-[100%] top-0 left-[0%] fixed text-white":"bg-black opacity-85 w-[30%] h-[100%] top-0 left-[100%] fixed text-white"}>
          
          

          <ul className='flex flex-col gap-4 text-[25px]  font-bold'>
                <li    className=' mt-5  ' ><Link to="/">Shop</Link></li>
                <li    className=' mt-5  '><Link to="/mens">Men</Link></li>
                <li    className=' mt-5  ' ><Link to="/womens">Women</Link></li>
                <li    className=' mt-5  ' ><Link to="/kids">Kids</Link> </li>
            </ul>
      </div>
      <div className='flex mx-[15%] align-center justify-between '>
         <div className="flex align-middle justify-between gap-2">
         <img className='' src={logo} alt="" /> <span className='font-extrabold sm:text-[30px] text-2xl mt-3'>SHOPPER</span>
         </div>
        
        <div className="">
            <ul className='flex gap-4 text-[18px] text-black font-bold'>
                <li    className='hidden sm:block mt-5 hover:border-b-4 hover:border-b-[black]' ><Link to="/">Shop</Link></li>
                <li    className='hidden sm:block mt-5 hover:border-b-4 hover:border-b-[black] '><Link to="/mens">Men</Link></li>
                <li    className='hidden sm:block mt-5 hover:border-b-4 hover:border-b-[black]' ><Link to="/womens">Women</Link></li>
                <li    className='hidden sm:block mt-5 hover:border-b-4 hover:border-b-[black]' ><Link to="/kids">Kids</Link> </li>
            </ul>
        </div>

        <div className="flex gap-3">
           <Link to="/login"><button  className='w-[100px] rounded-[30px] mt-3 border border-black h-[38px] sm:w-[150px] text-[22px] font-bold'>Login</button></Link>
           <Link to="/cart" ><img src={cart_icon} alt="" className='w-[30px] h-[30px] mt-4 ' /></Link>     
           {
            showmenu?<IoMdMenu size={30}  className='mt-4 sm:hidden block' onClick={()=>setShowmenu(!showmenu)}></IoMdMenu>:<MdCancel size={30} className='mt-4 sm:hidden block' onClick={()=>setShowmenu(!showmenu)}></MdCancel>
           }
        </div>

        


      
    </div>

      
    </div>
    
  )
}

export default Navbar
