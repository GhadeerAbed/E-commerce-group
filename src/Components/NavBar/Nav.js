import React from "react";
import "./Nav.css";
import { IoCart } from "react-icons/io5";
import { MdPersonAddAlt1 } from "react-icons/md";

function Nav() {
  return (
    <div className="NavBar">
      <div className="logo">
        <img
          src="https://react-course-comfy-sloth-store.netlify.app/static/media/logo.221f6b13.svg"
          alt="#"
        />
      </div>
      <div className="links">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Products</li>
        </ul>
      </div>
      <div className="cart-logIn">
        <div className="cart">
          Cart
          <IoCart />
        </div>
        <div className="login">
          Login
          <MdPersonAddAlt1 />
        </div>
      </div>
    </div>
  );
}

export default Nav;
