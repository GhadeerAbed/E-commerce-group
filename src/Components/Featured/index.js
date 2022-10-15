//import React,{useState} from "react";
//import data from "../../data/data.json";
import "././style.css";
//import {AiOutlineSearch } from "react-icons/ai";
function Featured(){
//const [datas,setDatas]=useState(data);

// useEffect(()=>{
//    const response= fetch('https://fakestoreapi.com/products?limit=3')
//             .then(response=>response.json());
//             setData(response);
          
// });


return( 
    
<div className="hero">
<h2 className="addres">Featured Products</h2>
<div className="line"></div>

{/* { data.map((item)=>{
    return(
        <div className="per">
        <div className="container" key={item.id}>
        <div className="con">
        <img src={item.img} alt={item.title} className="img"/>
        <div className="overly">
        <a href="#" className="icon" ><AiOutlineSearch className="Ai"/></a>
        </div> </div>
        <div className="pt">
        <div className="title">{item.title}</div>
        <div className="price">${item.price}</div> 
        </div>
        </div>
        </div>
    )})
} */}

<button className="btn2">ALL PRODUCTS</button>
</div>


)
}
export default Featured;