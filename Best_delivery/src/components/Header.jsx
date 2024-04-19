import React ,{useState}from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaCartArrowDown } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { TbTruckDelivery } from "react-icons/tb";
import { FaHeart } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";
import { IoMdHelpCircle } from "react-icons/io";
import { IoMdPricetags } from "react-icons/io";
import { IoIosDownload } from "react-icons/io";
import { FaUserFriends } from "react-icons/fa";


function Header(){
    const [Delv,setDelv]=useState(true);

    function toggleDelv(){
        setDelv(!Delv);
    }

    function toggleNav(){
        setNav(!Nav);
    }

    const [Nav,setNav]=useState(false);

    const list=[
        {icon:<TbTruckDelivery />,
         text:"Orders"           
        }
        ,
        {icon:<FaHeart/>,
        text:"Favourites"           
        }
        ,
        {icon:<FaWallet/>,
        text:"Wallet"           
        }
        ,
        {icon:<IoMdHelpCircle/>,
        text:"Help"           
        }
        ,
        {icon:<IoMdPricetags/>,
        text:"Promotions"           
        }
        ,
        {icon:<IoIosDownload/>,
        text:"Best one"           
       },
       {icon:<FaUserFriends/>,
       text:"Invite friends"           
      }
        
    ]
    return (


        
        <>
       <div className={Nav?"bg-[rgba(0,0,0,0.8)] h-full w-full fixed duration-500 top-0 ":"hidden bg-[rgba(0,0,0,0.8)] h-full w-full fixed duration-500 top-0 "}></div>
        <div className={Nav?"bg-white absolute top-0 left-0 w-[48vh]  duration-500 h-full":"bg-white absolute top-0 left-[-100%] w-[48vh] duration-500 h-full"}>
            <h1 className="text-[30px] flex font-bold gap-2 p-2">Best  <span className="fornt-extrabold"> Eats</span></h1>
            <RxCross1 onClick={toggleNav} size={30} className="absolute top-4 right-2 "/>

            <ul className="flex flex-col text-gray-900 p-3 font-xl">
                {
                    list.map((val,key)=>{
                        return (
                            <li className=" flex p-3 items-center gap-3">
                               { val.icon}
                                {val.text}
                            </li>
                        )

                    })




                }
              

            </ul>
        </div>

       <div className="max-w-[1200px] flex mx-auto bg-white items-center gap-2 p-3">
        <GiHamburgerMenu size={40} onClick={toggleNav} />
        <div className="font-bold flex md:text-[40px] sm:text-[35px]"> Best <span className="font-extrabold">Eats</span></div>
        <div className="rounded-[30px]  md:h-[40px] sm:h-[30px] md:w-[230px] sm:w-[100px] bg-[#e5e7eb] flex items-center mx-3">
            <div className={!Delv?"bg-black text-white md:h-[40px] sm:h-[30px] w-[50%] rounded-[30px] p-2 cursor-pointer":"mx-auto cursor-pointer"} onClick={toggleDelv}>
                Delivery
            </div>
             <div className={Delv?"bg-black text-white md:h-[40px] sm:h-[30px]  sm: w-[50%] rounded-[30px] p-2 cursor-pointer":"mx-auto cursor-pointer"} onClick={toggleDelv}>Pickup</div>
       </div>
       <div className="flex items-center rounded-[30px] md:h-[40px] sm:h-[30px] md:w-[50%] sm:w-[40%] bg-[#e5e7eb] pl-4 md:mx-6 sm:mx-2">
        <IoSearch/>
        <input type="search" className=" outline-none rounded-[30px] h-[40px] w-[80%] bg-[#e5e7eb] pl-4" placeholder="Search here"  name="" id="" /> 

       </div>
       
        
        <button className="p-2 text-white bg-black h-[40px]  w-[15vh] flex items-center  rounded-[30px] ">
        <FaCartArrowDown size={20} style={{margin:8}} />
        <div className="ml-1">Cart</div>
            
        </button>

       </div>
       </>
    )
}

export default Header;