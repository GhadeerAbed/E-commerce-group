import React from "react";
// import "../../../Pages/./Products.css";
import "../../../Pages/Product/Products.css"
import {AiFillStar} from 'react-icons/ai'
import {BsCheckCircleFill} from 'react-icons/bs'
const Detail = () => {
  return (
    <div className="details">
      <div className="container1">

        <div className="left-side">

            <button> BACK TO BRODUCT </button>

            <img className='left-side-image'  src='https://dl.airtable.com/.attachments/e2eef862d9b7a2fb0aa74fa24fbf97bb/25c4bc17/0-pexels-pixabay-462235.jpg' alt='d'></img>

            <div className='gallery-contain'>
                <div className='gallery-image'><img src='https://dl.airtable.com/.attachments/f4720cc51a45ccc204f7476d51cb1b0e/eeb5fe4e/z-extra-1.jpeg' alt='d'></img></div> 
                <div className='gallery-image'><img src='https://dl.airtable.com/.attachments/f4720cc51a45ccc204f7476d51cb1b0e/eeb5fe4e/z-extra-1.jpeg'  alt='d'></img></div> 
                <div className='gallery-image'><img src='https://dl.airtable.com/.attachments/f4720cc51a45ccc204f7476d51cb1b0e/eeb5fe4e/z-extra-1.jpeg'  alt='d'></img></div> 
                <div className='gallery-image'><img src='https://dl.airtable.com/.attachments/f4720cc51a45ccc204f7476d51cb1b0e/eeb5fe4e/z-extra-1.jpeg'  alt='d'></img></div> 
                <div className='gallery-image'><img src='https://dl.airtable.com/.attachments/f4720cc51a45ccc204f7476d51cb1b0e/eeb5fe4e/z-extra-1.jpeg'  alt='d'></img></div> 
            </div>

        
            
        </div>

        <div className="right-side ">

          <h2> Modern Poster </h2>

          <div className="icon">
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar> 

            {/* {[...Array(5).map(() => {
              return  <AiFillStar/>
            })]} 
            this solution may be better
            */}

            <span> (100 customer reviews) </span>

          </div>

          

          <p className="money">$30.99</p>

          <p className="text">
          Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge
          </p>

          <div className="information">
            <span className="span1">Available :</span>
            <span>In Stock</span>
            <br></br>
            <span className="span1">SKU :</span>
            <span>RecQ0fMd8T0Vk211E</span>
            <br></br>
            <span className="span1">Brand :</span>
            <span>Liddy</span>

          </div>

          <hr></hr>

          <span className="span2">Colors :</span>
          <span className="span3"><BsCheckCircleFill></BsCheckCircleFill></span>
           
          <div className="counter">
            <button>-</button>
            <button>1</button>
            <button>+</button>
          </div>
           <button className="add-btn">ADD TO CART</button>


        
        </div>
        
      </div>
    </div>
  );
};

export default Detail;
