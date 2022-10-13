import React from "react";
import { BsFillGridFill } from "react-icons/bs";
import { MdTableRows } from "react-icons/md";
import Image from "../Products/Image.js";
import "../../Pages/Products.css";

const Gallery = () => {
  return (
    <>
      <div className='first-line'>

        <div className="row-column">

          <a href="#1"><BsFillGridFill></BsFillGridFill></a>
          <a href="#1" className="grid-icon"><MdTableRows></MdTableRows></a>
          <p>23 product found</p>

        </div>

        <div className="line"></div>

      
        <div className='sort'>

          <label>Sort By</label>
          <select>
            <option>Price(Lowast)</option>
            <option>Price(Highest)</option>
            <option>name(A-Z)</option>
            <option>name(Z-A)</option>
          </select>

        </div>

      </div>  

      <div className="images">
        <Image></Image>
        <Image></Image>
        <Image></Image>
        <Image></Image>
        <Image></Image>
        <Image></Image>
        <Image></Image>
        <Image></Image>
        <Image></Image>
        <Image></Image>
        <Image></Image>
        <Image></Image>
        <Image></Image>
        <Image></Image>
        <Image></Image>
        <Image></Image>
        <Image></Image>
        <Image></Image>

      </div>
    </>
  );
};

export default Gallery;
