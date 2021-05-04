import React from "react";

export const Product = (props) => {
  const { product } = props;
  return (
    <>
      <div className="product">
        <h2 className="product__name">{product.name}</h2>
        <p className="product__branch">Brand: {product.brand}</p>
        <img src={`${product.imageUrl}`} />
      </div>
    </>
  );
};
