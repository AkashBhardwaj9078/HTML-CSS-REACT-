import React, { createContext, useState } from 'react'
import all_product from '../Components/Assets/all_product';



// const ShopContextProvider=(props)=>{
//    const contextValue={all_product};
//    return (
//     <ShopContext.Provider value={contextValue}>
//         {props.children}
//     </ShopContext.Provider>
//    )

// }

// export default ShopContextProvider;

export const ShopContext=createContext(null);
const cart={}
const getdefaultcart=()=>{
 for(let i=0;i<all_product.length+1;i++){
   cart[i]=0;
 }
 return cart;
}



const ShopContextProvider=(props)=>{

   const [cart,setCart]=useState(getdefaultcart());


    // console.log(cart);

    const Addtocart=(itemid)=>{
        setCart((prev)=>({...prev,[itemid]:prev[itemid]+1}));
        console.log(cart)
    }
    const Removefromcart=(itemid)=>{
        setCart((prev)=>({...prev,[itemid]:prev[itemid]-1}));
        console.log(cart)
    }
    const gettotalcost=()=>{
        let cost=0;
        for(const c in cart){
            if(cart[c]>0){
        
             const product=all_product.find((e)=>e.id===Number(c))
             cost+=product.new_price*cart[c];

        
            }


        }

        // return cost
        return cost
    }
    
    const cost=gettotalcost();
        
    const contextValue={all_product,gettotalcost,cart,Addtocart,Removefromcart};
    
    return(
         <ShopContext.Provider value={contextValue}>
            {props.children}
         </ShopContext.Provider>
    )
}

export default ShopContextProvider;

