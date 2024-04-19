import React from "react";


function Category(){

    const datas= [
        {
          id: 1,
          name: 'Fast Food',
          image:
            'https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/FastFood_BrowseHome@3x.png',
        },
        {
          id: 2,
          name: 'Pizza',
          image:
            'https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Pizza_BrowseHome@3x.png',
        },
        {
          id: 3,
          name: 'Wings',
          image:
            'https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Wings_BrowseHome@3x.png',
        },
        {
          id: 4,
          name: 'Indian',
          image:
            'https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Indian_BrowseHome@3x.png',
        },
        {
          id: 5,
          name: 'Latest Deals',
          image:
            'https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Deals_BrowseHome@3x.png',
        },
        {
          id: 6,
          name: 'Restaurant Rewards',
          image:
            'https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/RestoRewards_BrowseHome@3x.png',
        },
        {
          id: 7,
          name: 'Best Overall',
          image:
            'https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/TopEats_Browse%20Home@3x.png',
        },
        {
          id: 8,
          name: 'Shipped Free',
          image:
            'https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Placeholder_Plates@3x.png',
        },
      ];
      
  return (
    <div className="mt-[10vh] max-w-[1200px] mx-auto">
        <h1 className="text-5xl text-[#ce4f00] font-bold ">Top Rated Menu Items</h1>
        <div className="grid sm:grid-cols-4 md:grid-cols-8 gap-3 shadow-3xl p-4">
                {
                    datas.map((val,key)=>{
                       return (                                    
                        
                         <div className="shadow-6xl  flex flex-col gap-1  overflow-hidden">
                            <img src={val.image} alt={val.name} className=" bg-slate-50 h-[200px] w-full   duration-200 rounded-t-[20px] hover:scale-105 " />
                            <div className=" text-[20px] items-center  font-bold" >
                                {val.name}
                               
                               
                            </div>
                         </div>

                         
                        )
                    })
                }
            </div>



    </div>

            )

}

export default Category;