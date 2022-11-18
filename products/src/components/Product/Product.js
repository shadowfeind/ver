import React from "react";
import "./Product.css";

const Product = ({ name, price, imageUrl, domain }) => {
  return (
    <>
      <div className="col-md-3 text-center">
        <div className="product-container">
          <img
            src={`https:${domain}/${imageUrl}`}
            className="mx-auto d-block img-fluid"
          />
          <h4 className="mt-3 mb-2 produ{ct-heading">{name}</h4>
          <p className="product-price">${price}</p>
        </div>
      </div>
    </>
  );
};

export default Product;
