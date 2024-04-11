import React,{useState} from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";






function Category() {

   const cg=[
        {
            "image": "North_Indian_4.jpeg",
            "path": "north-indian"
        },
        {
            "image": "Pizza.jpeg",
            "path": "pizza"
        },
        {
            "image": "Noodles.jpeg",
            "path": "noodles"
        },
        {
            "image": "Pasta.jpeg",
            "path": "pasta"
        },
        {
            "image": "Paratha.jpeg",
            "path": "paratha"
        },
        {
            "image": "Biryani_2.jpeg",
            "path": "biryani"
        },
        {
            "image": "Burger.jpeg",
            "path": "burger"
        },
        {
            "image": "Cakes.jpeg",
            "path": "cakes"
        },
        {
            "image": "Chinese.jpeg",
            "path": "chinese"
        },
        {
            "image": "Chole_Bature.jpeg",
            "path": "chole-bature"
        },
        {
            "image": "Dosa.jpeg",
            "path": "dost"
        },
        {
            "image": "Gulab_Jamun.jpeg",
            "path": "gulab-jamun"
        },
        {
            "image": "Ice_Creams.jpeg",
            "path": "ice-creams"
        },
        {
            "image": "Idli.jpeg",
            "path": "idli"
        },
        {
            "image": "Khichdi.jpeg",
            "path": "khichdi"
        },
        {
            "image": "Poori.jpeg",
            "path": "poori"
        },
        {
            "image": "Pure_Veg.jpeg",
            "path": "pure-veg"
        },
        {
            "image": "Rolls.jpeg",
            "path": "rolls"
        },
        {
            "image": "Salad.jpeg",
            "path": "salad"
        },
        {
            "image": "South_Indian_4.jpeg",
            "path": "south-indian"
        }
    ]

    const [Slide,setSlide]=useState(0);
    

    function Slide_right(){
        if(Slide  <cg.length-8){
            setSlide(Slide+3);
        }
    }
    function Slide_left(){
        if(Slide  >0){
            setSlide(Slide-3);
        }
    }
      
    return (
        
        <div className="my-[10vh] ">
        <div className="flex items-center max-w-[1200px] mx-auto h-[20px] my-[20px] justify-between">
        <div className="text-[25px] font-bold"> What's on your mind ?</div>
            <div className="flex items-center">

                <div className="cursor-pointer w-[30px] h-[30px] bg-[#e2e2e72] rounded-full mx-1 justify-center" onClick={Slide_right}> <FaRegArrowAltCircleRight></FaRegArrowAltCircleRight> </div>
                <div className="cursor-pointer w-[30px] h-[30px] bg-[#e2e2e72] rounded-full mx-1 justify-center" onClick={Slide_left}> <FaRegArrowAltCircleLeft></FaRegArrowAltCircleLeft> </div>
 
          
        
            </div>
        </div>

        <div className="w-[1200px] mx-auto flex  overflow-hidden shadow-2xl radius- ">
            {
            cg.map((cat,ind)=>{
                return (
          
                     <div key={ind} className=" shrink-0 duration-500 w-[150px]" style={{transform:'translateX(-'+Slide+'00%)'}}>   <img src={"image/"+cat.image} alt="" />  </div>
                    
                )

            })
        }
        
        </div>

        </div>
        
       )


}

export default Category;