import React from 'react'
import im from "../../image/img1.jpeg";
import { FaTrash } from "react-icons/fa";
import './Test1.css'
import Footer from '../Footer/Footer.js';
import Nav from '../HeaderNav/HeaderNav.js';
const Test1 = () => {
    return (
        <>
        <Nav name='Cart'/>
          <div className="container">
            <h5>item</h5>
            <h5>price</h5>
            <h5>quantity</h5>
            <h5>subtotal</h5>
          </div>
          <hr className="line" />
          <div className="detailShop">
            <img src={im} alt="" className="picture" /> 
    
            <h5 className="Modern">
              modern poster <br />
           <p className="col">color :  <button className="color"></button></p>  
             
            </h5>
            <h5 className="pric1">$30.99</h5>
        <span className='count'> - 1 +</span>
  
            
            <h5 className="pric2">$30.99</h5>
            <button className="trash">
              <FaTrash />
            </button>
          </div>
          <hr className="line1" />
          <div className="btn1">
            <button className="btn2">Continue Shopping</button>
            <button className="btn3">Clear Shopping Cart</button>
          </div>
          <div className="section">
            <h5 className="sect">
              subtotal :<span>$30.99</span>
            </h5>
            <p >
              shipping fee :<span>$5.34</span>
            </p>
            <hr />
            <h4>
              order total :<span>$36.33</span>
            </h4>
          </div>
          <button className='check'>proceed to checkout</button>
          <Footer />
        </>
      );
}

export default Test1
