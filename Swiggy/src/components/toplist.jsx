import React,{useState} from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import ACard from "./Acard";
function Toplist(){

    const cards=[
        {
            "image": "2b4f62d606d1b2bfba9ba9e5386fabb7.jpeg",
            "offer": "Items at ₹179",
            "title": "Pizza Hut",
            "rating": 4.2,
            "minTime": 30,
            "maxTime": 40,
            "name": "Pizzas",
            "place": "New Jodhpur"
        },
        {
            "image": "75d0b3ebeb56fe2484c944e94cac7a8d.jpeg",
            "offer": "₹50 OFF ABOVE ₹199",
            "title": "Janta Sweet Home",
            "rating": 4.5,
            "minTime": 35,
            "maxTime": 40,
            "name": "Sweets,South Indian",
            "place": "Shastri Nagar"
        },
        {
            "image": "cef5bf4cc31dc3c46a1e1b027c5627e4.jpeg",
            "offer": "₹85 OFF ABOVE ₹149",
            "title": "Parihaar Bhojnalay",
            "rating": 4.3,
            "minTime": 35,
            "maxTime": 40,
            "name": "North India, Thalis",
            "place": "Sardarpura"
        },
        {
            "image": "eillc7d7hbrzcuussus5.jpeg",
            "offer": "₹70 OFF ABOVE ₹149",
            "title": "Kwality Walls Frozen",
            "rating": 4.5,
            "minTime": 25,
            "maxTime": 25,
            "name": "Desserts,Ice Cream",
            "place": "Chopsani Housing Board"
        },
        {
            "image": "6e04be27387483a7c00444f8e8241108.jpeg",
            "offer": "₹1-5 OFF ABOVE ₹179",
            "title": "The Good Bowl",
            "rating": 4.4,
            "minTime": 30,
            "maxTime": 35,
            "name": "Biryani, North India",
            "place": "Shastri Nagar"
        },
        {
            "image": "w7ndo1dkkk6kf4qfz2p1.jpeg",
            "offer": "₹100 OFF ABOVE ₹499",
            "title": "NIC Ice Creams",
            "rating": 4.7,
            "minTime": 25,
            "maxTime": 30,
            "name": "Desserts,Ice Cream",
            "place": "Sardarpura"
        },
        {
            "image": "f1bc9ddf53de574cdc35ab2f717df234.jpeg",
            "offer": "Items at ₹109",
            "title": "Dosh Center",
            "rating": 4.0,
            "minTime": 35,
            "maxTime": 40,
            "name": "South Indian",
            "place": "Chopsani Housing Board"
        },
        {
            "image": "919cb3be0e7406f86f6741ebe7c30128.jpeg",
            "offer": "₹125 OFF ABOVE ₹349",
            "title": "Lunch Box - Meals and Thalis",
            "rating": 4.3,
            "minTime": 30,
            "maxTime": 35,
            "name": "Biryani, North India",
            "place": "Shastri Nagar"
        },
        {
            "image": "535fc9f9c135f7982317bbb6a64a1ffc.jpeg",
            "offer": "₹70 OFF ABOVE ₹249",
            "title": "McDonald's",
            "rating": 4.4,
            "minTime": 30,
            "maxTime": 35,
            "name": "American",
            "place": "Rawaton Ka Bass"
        },
        {
            "image": "2a41aa363a8ae1e98a4cce95c2d0c589.jpeg",
            "offer": "₹100 OFF ABOVE ₹449",
            "title": "Kajal's Cake",
            "rating": 4.5,
            "minTime": 35,
            "maxTime": 40,
            "name": "Cake",
            "place": "Chopsani Housing Board"
        }
    ]

    const [Slide,setSlide]=useState(0);
    function Slide_right(){
        if(Slide  <cards.length-4){
            setSlide(Slide+1);
        }
    }
    function Slide_left(){
        if(Slide  >0){
            setSlide(Slide-1);
        }
    }

    return (
    
        
    <div className="my-[10vh]">
        <div className="flex items-center max-w-[1200px] mx-auto h-[20px] my-[20px] justify-between">
        <div className="text-[25px] font-bold">Restaurants with online food delivery on Jodhpur</div>
            <div className="flex items-center">

                <div className="cursor-pointer w-[30px] h-[30px] bg-[#e2e2e72] rounded-full mx-1 justify-center" onClick={Slide_left}> <FaRegArrowAltCircleRight></FaRegArrowAltCircleRight> </div>
                <div className="cursor-pointer w-[30px] h-[30px] bg-[#e2e2e72] rounded-full mx-1 justify-center" onClick={Slide_right}> <FaRegArrowAltCircleLeft></FaRegArrowAltCircleLeft> </div>
 
          
        
            </div>
        </div>
        
        <div className="w-[1200px] mx-auto   overflow-hidden shadow-2xl gap-5 flex p-2 " >
          
        {cards.map((val,ind) =>
        { 
           return (
                <div className="duration-200 scale-110" style={{transform:'translateX(-'+Slide*103 +'%)'}}> <ACard data={val}></ACard> </div>
               
           )
        }
        )
        }


        </div>
       
    </div>

    
        
    )
}

export default Toplist;