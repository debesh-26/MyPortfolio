import React from "react";
import "./productlist.css";
import Product from "../product/product";
import { projects } from "../../data";
const productlist = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <div className="pl-title">Create & inspire. It's my motto</div>
        <div className="pl-desc">
          I have undertaken and accomplished numerous web
          development projects, demonstrating my expertise and proficiency in
          this field.
        </div>
      </div>
      <div className="pl-list">
        {projects.map((item) => (
          <Product
            key={item.id}
            img={item.img}
            link={item.link}
            titel={item.titel}
          />
        ))}
      </div>
    </div>
  );
};

export default productlist;
