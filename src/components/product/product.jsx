import React from "react";
import "./product.css";
const product = ({img, link,titel}) => {
  return (
    <div className="p">
      <div className="p-name">{titel}</div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img}alt="" className="p-image" />
      </a>
    </div>
  );
};

export default product;
