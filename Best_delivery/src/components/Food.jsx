import React,{useState} from "react";




function Food(){
    const data = [
        {
          id: 1,
          name: 'Double Cheeseburger',
          category: 'burger',
          image:
            'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60',
          price: '$$$$',
        },
        {
          id: 2,
          name: 'Bacon Cheeseburger',
          category: 'burger',
          image:
            'https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJ1cmdlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60',
          price: '$',
        },
        {
          id: 3,
          name: 'Mushroom Burger',
          category: 'burger',
          image:
            'https://images.unsplash.com/photo-1608767221051-2b9d18f35a2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJ1cmdlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60',
          price: '$$',
        },
        {
          id: 4,
          name: 'Loaded Burger',
          category: 'burger',
          image:
            'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YnVyZ2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60',
          price: '$$$',
        },
        {
          id: 5,
          name: 'Feta & Spinnach',
          category: 'pizza',
          image:
            'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
          price: '$$',
        },
        {
          id: 6,
          name: 'Supreme Pizza',
          category: 'pizza',
          image:
            'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
          price: '$$$',
        },
        {
          id: 7,
          name: 'Meat Lovers',
          category: 'pizza',
          image:
            'https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHBpenphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
          price: '$$$$',
        },
        {
          id: 8,
          name: 'Cheese Pizza',
          category: 'pizza',
          image:
            'https://images.unsplash.com/photo-1548369937-47519962c11a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2hlZXNlJTIwcGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
          price: '$',
        },
        {
          id: 9,
          name: 'Kale Salad',
          category: 'salad',
          image:
            'https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2FsYWQlMjBjZWFzYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
          price: '$$',
        },
        {
          id: 10,
          name: 'Ceasar Salad',
          category: 'salad',
          image:
            'https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2FsYWQlMjBjZWFzYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
          price: '$$$',
        },
        {
          id: 11,
          name: 'Loaded Salad',
          category: 'salad',
          image:
            'https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2FsYWR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
          price: '$$$$',
        },
        {
          id: 12,
          name: 'Fruit Salad',
          category: 'salad',
          image:
            'https://images.unsplash.com/photo-1564093497595-593b96d80180?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZnJ1aXQlMjBzYWxhZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
          price: '$',
        },
        {
          id: 13,
          name: 'Wings',
          category: 'chicken',
          image:
            'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2tlbiUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
          price: '$$',
        },
        {
          id: 14,
          name: 'Baked Chicken',
          category: 'chicken',
          image:
            'https://images.unsplash.com/photo-1594221708779-94832f4320d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hpY2tlbiUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
          price: '$$$$',
        },
        {
          id: 15,
          name: 'Chicken Tenders',
          category: 'chicken',
          image:
            'https://images.unsplash.com/photo-1562967914-608f82629710?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNoaWNrZW4lMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
          price: '$',
        },
        {
          id: 16,
          name: 'Chicken Kabob',
          category: 'chicken',
          image:
            'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNoaWNrZW4lMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
          price: '$$$',
        },
      ];
   
     
     console.log(data.filter((item)=>{

        return item.category==="pizza";
     
   
     }))
  
    
    // const [datas,setData]=useState(data.filter((item)=>{

    //     return item.category==="pizza";
     
   
    //  }));

     const [datas,setData]=useState(data)

    function FilterType(type){
        
        if(type==='All'||datas.length===0) {
            setData(data)
        }
        else if(type==="Burger"){
            if(datas.length===0) {
                setData(data)
            }
            else{

                setData(datas.filter((item)=>{

                    return item.category==="burger";
                 
               
                 }))

            }
            
            

        }
        else if(type==="Pizza"){
            if(datas.length===0) {
                setData(data)
            }
            else{

                setData(datas.filter((item)=>{

                    return item.category==="pizza";
                 
               
                 }))

            }
            
        }
        
        else if(type==="Chicken"){
            if(datas.length===0) {
                setData(data)
            }
            else{

                setData(datas.filter((item)=>{

                    return item.category==='chicken';
                 
               
                 }))

            }
       }
      
       else if(type==="Salad"){
        if(datas.length===0) {
            setData(data)
        }
        else{

            setData(datas.filter((item)=>{

                return item.category==='salad';
             
           
             }))

        }
   }
        
        
    }
    function FilterPrice(type){
       
        if(type==='All'||datas.length===0) {
            setData(data)
        }
        else{
            setData(datas.filter((item)=>{
                return (
                    item.price===type
                )
            }))
        }
    }


    const type=["All","Burger","Pizza","Salad","Chicken"]
    const price=["$","$$","$$$","$$$$","$$$$"]
   
    return (
        <div className="mt-[10vh] max-w-[1200px] mx-auto">
            <h1 className="text-5xl  text-[#ce4f00] font-bold ">Top Rated Menu Items</h1>

            <div className="grid justify-between md:grid-rows-2 sm:grid-cols-2">
                <div className="flex  md:text-left flex-col text-3xl font-bold gap-3 sm:text-center ">
                    Filter Type
                    <div className="flex text-xl text-[#ce4f00] gap-2">
                        {
                            type.map((val)=>{
                                return (
                                 <button className="border hover:bg-[#ce4f00] hover:text-white active:bg-[#ce4f00] active:text-white border-[#ce4f00] px-3 py-1 bg-white rounded-xl"onClick={()=>FilterType(val)} >{val}</button>

                                )
                            })
                        }
                         

                    </div>
                </div>

                <div className="flex  md:text-right sm:text-center mr-0  flex-col text-3xl font-bold gap-3">
                    Filter Price
                    <div className=" text-xl  text-[#ce4f00] gap-2">
                        {
                            price.map((val)=>{
                                return (
                                 <button className="border ml-2 border-[#ce4f00] px-3 py-1 bg-white rounded-xl" onClick={()=>FilterPrice(val)} >{val}</button>

                                )
                            })
                        }
                         
             
                    </div>
                </div>

            </div>

            <div className="grid mt-4 sm:grid-cols-2 md:grid-cols-4 gap-3 shadow-3xl">
                {
                    datas.map((val,key)=>{
                       return (                                    
                        
                         <div className="shadow-6xl  flex flex-col gap-1  overflow-hidden">
                            <img src={val.image} alt={val.name} className="w-full h-[200px] object-cover duration-200 rounded-t-[20px] hover:scale-105 " />
                            <div className="justify-between text-[15px] items-center flex font-bold" >
                                {val.name}
                               
                               <span className="rounded-xl p-1 text-white bg-[#ce4f00]">{val.price}</span> 
                            </div>
                         </div>

                         
                        )
                    })
                }
            </div>


            


        </div>
    )
}


export default Food;