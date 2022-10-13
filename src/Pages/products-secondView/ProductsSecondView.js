import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillGridFill } from "react-icons/bs";
import "./Product.css";
import ProductItem from "./ProductItem";
function ProductsSecondView() {
  return (
    <div className="Products">
      <section className="filter-sidebar">
        <div>
          <div>
            {" "}
            <input className="search" type="text" placeholder="Search" />
          </div>

          <div className="category">
            <p className="filter-by">Category</p>
            <ul>
              <li>All</li>
              <li>men's clothing</li>
              <li>women's clothing</li>
              <li>jewelery</li>
              <li>electronics</li>
            </ul>
          </div>
          <div className="company">
            <p className="filter-by">Company </p>
            <select name="company-filter" id="company-filter">
              <option value="all">all</option>
              <option value="marcos">marcos</option>
              <option value="liddy">liddy</option>
              <option value="ikea">ikea</option>
              <option value="caressa">caressa</option>
            </select>
          </div>
          <div className="colors">
            <p className="filter-by">Colors</p>
            <div className="selectByColor">
              <p style={{ display: "inline" }} className="color-selector">
                All
              </p>
              {["red", "green", "blue", "black", "yellow"].map((item) => {
                return (
                  <span
                    className="color"
                    style={{ backgroundColor: `${item}` }}
                  >
                    sS
                  </span>
                );
              })}
            </div>
          </div>

          <div className="price">
            <p className="filter-by">Price</p>
            <p className="price-value">$3,099.99</p>
            <input type="range" id="price" name="price" min="0" max="3100" />
          </div>
          <div className="freeShipping">
            <label for="freeShipng">Free Shipping</label>
            <input type="checkbox" />
          </div>
          <div className="clearFilter">
            <button className="filter-by">Clear filter </button>
          </div>
        </div>
      </section>
      <section className="products-list">
        <div className="productListHeader">
          <div className="viewSelector">
            <div className="view">
              <BsFillGridFill />
              <GiHamburgerMenu />
            </div>
            <div className="foundedAmount"> 20 Product Found</div>
          </div>
          <div className="hr-responsive">
            <hr></hr>
          </div>

          <div className="sortSelector">
            <p className="sort-by">Sort By </p>
            <select name="sort-filter" id="sort-filter">
              <option value="lowest">Price (Lowest)</option>
              <option value="Highst">Price (Highst)</option>
              <option value="A-Z">Name (A-Z)</option>
              <option value="Z-A">Name (Z-A)</option>
            </select>
          </div>
        </div>
        {[...Array(20)].map(() => {
          return <ProductItem />;
        })}
      </section>
    </div>
  );
}

export default ProductsSecondView;
