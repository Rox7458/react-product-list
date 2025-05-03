import React from "react";
import CardStyle from "../../scss/productCard.module.scss";

const ProductCard = ({ data }) => {
  return (
    <>
      {data.map(({ image, price, title }) => (
        <div className={CardStyle.container}>
          <div className={CardStyle.price}>
            <h3>$ {price}</h3>
          </div>
          <img src={image} alt="" />
          <h2>{title}</h2>
        </div>
      ))}
    </>
  );
};

export default ProductCard;
