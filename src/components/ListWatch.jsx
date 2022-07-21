import React, {useState, useEffect} from "react";
import axios from "axios";
import ItemWatch from "./ItemWatch";

function ListWatch (){
    const [watchApi, setWatchApi] = useState([]);
    useEffect (()=>{
        axios.get("http://localhost:3000/watches")
        .then ((res)=> {
            setWatchApi(res.data)
        })

    },[watchApi])

    return(
        <section data-testid="listWatch" className="pt-20 lg:pt-[120px] pb-10 lg:pb-20 bg-[#F3F4F6]">
   <div className="">
      <div className="flex flex-wrap">
      {
                    watchApi.map((item,index)=>(
                        <ItemWatch key={index} model={item.model} brand={item.brand} price={item.price} condition={item.condition} description={item.description} image={item.image} id={item.id}/>
                    ))
                }
      
      </div>
   </div>
</section>
       
    );
}

export default ListWatch;


/*<div className="d-flex justify-content-center">
            <div>
                
                <div className="flex-wrap row row-cols-1 row-cols-md-4">
                {
                    booksApi.map((item,index)=>(
                        <BookItem key={index} titol={item.titol} autoria={item.autoria} isbn={item.isbn} id={item.id}/>
                    ))
                }
                </div>
            </div>
        </div>+
        */