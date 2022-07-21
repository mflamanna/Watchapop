import React, { useState, useEffect }from "react";
import axios from "axios";
import ItemWatch from "./ItemWatch";

function SearchBarData(data) {
    const [DataApi, setDataApi] = useState([]);
    useEffect (()=>{
        axios.get("http://localhost:3000/watches")
        .then ((res)=> {
            setDataApi(res.data)
        })
        
    },[DataApi])

    return (
        <>
            <form methode="get" action="#" className="relative z-50">
              <button type="submit" id="searchsubmit" className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
                </svg>
              </button>
              <input type="text" name="s" id="s" className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-white-200 text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-white focus:text-gray-900 sm:text-sm transition duration-150 ease-in-out" placeholder="Search your watch" onChange={event => {DataApi(event.target.value)}}/>
            </form>
            <section className="pt-20 lg:pt-[120px] pb-10 lg:pb-20 bg-[#F3F4F6]">
   <div className="">
      <div className="flex flex-wrap justify-center">
                {DataApi.map((item, index)=>{
                    return (
                        <ItemWatch key={index} model={item.model} brand={item.brand} price={item.price} condition={item.condition} description={item.description} image={item.image} id={item.id}/>
                    )
                })}
        
      </div>
   </div>
</section>

        </>

    )
}

export default SearchBarData;

/*.filter((item=>{
                    if (DataApi == ""){
                        return item;
                    } else if (item.brand.toLowerCase().includes(DataApi.toLowerCase())){
                        return item
                    }
                }))
                */