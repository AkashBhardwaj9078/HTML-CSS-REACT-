import React from 'react'
import insta from "./Assets/instagram_icon.png"
import pin from "./Assets/pintester_icon.png"
import wats from "./Assets/whatsapp_icon.png"
import logo from "./Assets/logo.png"

const Footer = () => {

    


    return (
        <div>
            <div className="flex  align-middle justify-center">
                <img className='' src={logo} alt="" /> <span className='font-extrabold text-[30px] mt-3'>SHOPPER</span>
            </div>

            <div className="flex align-middle justify-center">
                <ul className='flex gap-5 my-6 font-bold '>
                    <li className=''>Company</li>
                    <li className=''>Product</li>
                    <li className=''>Offices</li>
                    <li className=''>Contacts</li>
                </ul>

            </div>
            <div className="flex align-middle justify-center">
                <div className="flex gap-5  font-bold">
                    <img src={pin} alt="" srcset="" />
                    <img src={insta} alt="" srcset="" />
                    <img src={wats} alt="" />
                </div>
            </div>
            <div className="flex align-middle justify-center my-4">
                Copyright @ 2023 -All rights are reserved
            </div>

        </div>
    )
}

export default Footer
