import React from "react";
import "./ProductItem.css";
function ProductItem() {
  return (
    <div className="ProductItem">
      <div className="productImg">
        <img
          src="https://dl.airtable.com/.attachmentThumbnails/1cf03bfcee117bd92273d996a82a1534/47ef57c7"
          alt="#"
        />
      </div>
      <div className="productDetail">
        <p className="productName"> Product Name </p>
        <p className="productPrice"> $ 159.99 </p>
        <p className="productDiscreption">
          {" "}
          Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore
          etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat,
          authentic ..{" "}
        </p>
        <button className="details">Details</button>
      </div>
    </div>
  );
}

export default ProductItem;
