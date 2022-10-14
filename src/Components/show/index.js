import React from "react";
import "../show/style.css";
import img1 from "../../image/img1.jpeg";
import img2 from "../../image/img2.jpeg";
import img3 from "../../image/img3.jpeg";

function Show(){
return(
    
<div className="hero1">

<div className="showdescrip">

   <h1 className="heah1">Design Your <br></br>Comfort Zone</h1> 
   <p class="pargrph">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
    Iusto, at sed omnis corporis doloremque possimus velit! Repudiandae nisi odit,
     aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis alias?</p>
   <button className="btn1">SHOP NOW</button>
</div>

<div className="showimg">
    <img className="img1" src={img1} alt="..."/>
    <img className="img2" src={img2} alt="..."/>
    <img className="img3" src={img3} alt="..."/>
</div>

</div>

)}
export default Show;