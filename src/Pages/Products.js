import React from "react";
import "../Pages/Products.css";
import Gallery from "../Components/Products/Gallery.js";
const Products = () => {
  return (
    
      <div className="container">
        <div className="product-content">
          <div className="slidebar">
            <div className="search">
              <input type="text" placeholder="Search"></input>
            </div>
            <div className="category">
              <h5>Category</h5>
              <ul>
                <li>
                  <a href="#/" class="active">
                    All
                  </a>
                </li>
                <li>
                  <a href="#/">Living Room</a>
                </li>
                <li>
                  <a href="#/">Kitchen</a>
                </li>
                <li>
                  <a href="#/">Bedroom</a>
                </li>
                <li>
                  <a href="#/">Dining</a>
                </li>
                <li>
                  <a href="#/">Kids</a>
                </li>
              </ul>
            </div>
            <div className="company">
              <h5>Company</h5>
              <select name="Company" className="Company-contect">
                <option value="all">all</option>
                <option value="marcos">marcos</option>
                <option value="liddy">liddy</option>
                <option value="ikea">ikea</option>
              </select>
            </div>
            <div className="color">
              <h5>Color</h5>
              <div className="all">
                <label>All</label>
                <div className="all-left-side">
                  <button className="check-button"></button>
                  <button className="check-button b1"></button>
                  <button className="check-button b2"></button>
                  <button className="check-button b3"></button>
                  <button className="check-button b4"></button>
                </div>
              </div>
            </div>
            <div className="price">
              <h5>Price</h5>
              <div className="price-flex">
                <label for="vol">$25.26</label>
                <br />
                <input
                  type="range"
                  id="vol"
                  name="vol"
                  min="1"
                  max="9.000.000"
                ></input>
              </div>
            </div>
            <div className="free">
              <label>Free Shipping</label>
              <input type="checkbox" className="free-check"></input>
            </div>
            <button className="clear">clear filters</button>
          </div>
          <div className="gallery">
          <Gallery></Gallery>
        </div>
        </div>
      </div>
    
  );
};

export default Products;
