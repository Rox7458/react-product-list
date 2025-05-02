import React from "react";

const ProductCard = ({ data }) => {
  return (
    <>
      {data.map(({ image, price, title }) => (
        <div>
          <img src={image} alt="" />
          <p>${price}</p>
          <span>${title}</span>
        </div>
      ))}
    </>
  );
};

export default ProductCard;
