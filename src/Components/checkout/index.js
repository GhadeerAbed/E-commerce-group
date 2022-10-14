import React from "react";
import "./style.css";

function Checkout() {

    return(
        <div className="checkout">
       <h1>Hello, NAME</h1>
       <div className="total"><p>Your total is</p> <p className="p1"> $799.98</p></div>
       <div className="testcard"><p>Test Card Number:</p><p className="p1">4242 4242 4242 4242</p></div>
    
       <div className="card">
        <input className="input" name="credit-number" pattern="[0-9]" maxlength="19" type="tel" placeholder="Card number MM / YY CVC" />
        <button className="btn" >Pay</button>

       </div>
       </div>
    )
}
export default Checkout;