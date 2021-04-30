import React from "react";

export const Product = (props) => {
  const { product } = props;
  return (
    <>
      <li className="product">
        <h2>{product.name}</h2>
        <p>Brand: {product.brand}</p>
        <img src="${product.imageUrl}" />
      </li>
    </>
  );
};
